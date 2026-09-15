from __future__ import annotations

import json
import math
from pathlib import Path

import numpy as np
from PIL import Image, ImageChops, ImageStat
from pypdf import PdfReader


ROOT = Path(r"E:\PG\2026 Hydrological cycle")
QA_DIR = ROOT / "qa" / "GATE9_QA_20260915"
SOURCE_DIR = QA_DIR / "source-renders"
PPT_DIR = ROOT / "final" / "previews_v02"
PDF_PATH = ROOT / "final" / "L16_Hydrological_Carbon_Cycles_v02.pdf"
PDF_DIR = QA_DIR / "pdf-renders-v02"
CONTACT_DIR = QA_DIR / "contact-sheets"
OUT = QA_DIR / "render_comparison_v02.json"


def compare_images(left_path: Path, right_path: Path) -> dict:
    with Image.open(left_path).convert("RGB") as left, Image.open(right_path).convert("RGB") as right:
        left_size = list(left.size)
        right_size = list(right.size)
        if right.size != left.size:
            right = right.resize(left.size, Image.Resampling.LANCZOS)
        difference = ImageChops.difference(left, right)
        stat = ImageStat.Stat(difference)
        rms = math.sqrt(sum(value * value for value in stat.rms) / 3)
        array = np.asarray(difference, dtype=np.uint8)
        per_pixel_max = array.max(axis=2)
        return {
            "left": str(left_path),
            "right": str(right_path),
            "left_size": left_size,
            "right_size": right_size,
            "exact_match": difference.getbbox() is None,
            "rms_0_255": round(rms, 4),
            "mean_abs_0_255": round(float(array.mean()), 4),
            "pixels_over_8_fraction": round(float(np.mean(per_pixel_max > 8)), 8),
            "pixels_over_24_fraction": round(float(np.mean(per_pixel_max > 24)), 8),
            "max_channel_difference": int(array.max()),
        }


def make_contact_sheets(paths: list[Path], prefix: str) -> list[str]:
    CONTACT_DIR.mkdir(parents=True, exist_ok=True)
    outputs = []
    for start in range(0, len(paths), 4):
        batch = paths[start : start + 4]
        sheet = Image.new("RGB", (3840, 2160), "white")
        for offset, path in enumerate(batch):
            with Image.open(path).convert("RGB") as image:
                if image.size != (1920, 1080):
                    image = image.resize((1920, 1080), Image.Resampling.LANCZOS)
                sheet.paste(image, ((offset % 2) * 1920, (offset // 2) * 1080))
        first = start + 1
        last = start + len(batch)
        output = CONTACT_DIR / f"{prefix}-{first:02d}-{last:02d}.jpg"
        sheet.save(output, "JPEG", quality=92, optimize=True)
        outputs.append(str(output))
    return outputs


source_paths = [SOURCE_DIR / f"source-{page:02d}.png" for page in range(1, 45)]
ppt_paths = [PPT_DIR / f"slide-{page:02d}.png" for page in range(1, 45)]
pdf_paths = sorted(PDF_DIR.glob("page-*.png"))

errors = []
for group, paths in (("source", source_paths), ("PowerPoint", ppt_paths)):
    missing = [str(path) for path in paths if not path.exists()]
    if missing:
        errors.append(f"missing {group} renders: {missing}")
if len(pdf_paths) != 44:
    errors.append(f"expected 44 PDF renders, found {len(pdf_paths)}")

ppt_vs_source = []
pdf_vs_ppt = []
if not errors:
    for page, (source_path, ppt_path, pdf_path) in enumerate(zip(source_paths, ppt_paths, pdf_paths), start=1):
        source_comparison = compare_images(source_path, ppt_path)
        source_comparison["page"] = page
        ppt_vs_source.append(source_comparison)
        if not source_comparison["exact_match"]:
            errors.append(f"page {page}: final PowerPoint render differs from accepted source render")
        pdf_comparison = compare_images(ppt_path, pdf_path)
        pdf_comparison["page"] = page
        pdf_vs_ppt.append(pdf_comparison)

reader = PdfReader(PDF_PATH)
if len(reader.pages) != 44:
    errors.append(f"expected 44 PDF pages, found {len(reader.pages)}")
pdf_pages = []
for page_number, page in enumerate(reader.pages, start=1):
    width = float(page.mediabox.width)
    height = float(page.mediabox.height)
    text = page.extract_text() or ""
    if abs(width - 960) > 0.01 or abs(height - 540) > 0.01:
        errors.append(f"PDF page {page_number}: unexpected size {width}x{height} pt")
    if not text.strip():
        errors.append(f"PDF page {page_number}: no extractable text")
    if page_number != 1 and f"{page_number:02d}" not in text:
        errors.append(f"PDF page {page_number}: folio {page_number:02d} not extractable")
    pdf_pages.append(
        {
            "page": page_number,
            "size_points": [width, height],
            "extractable_characters": len(text.strip()),
        }
    )

result = {
    "status": "passed" if not errors else "failed",
    "ppt_vs_accepted_source": ppt_vs_source,
    "pdf_vs_ppt": pdf_vs_ppt,
    "pdf_pages": pdf_pages,
    "summary": {
        "ppt_exact_matches": sum(row["exact_match"] for row in ppt_vs_source),
        "pdf_rms_max": max((row["rms_0_255"] for row in pdf_vs_ppt), default=None),
        "pdf_rms_mean": round(
            sum(row["rms_0_255"] for row in pdf_vs_ppt) / len(pdf_vs_ppt), 4
        )
        if pdf_vs_ppt
        else None,
        "pdf_pixels_over_24_fraction_max": max(
            (row["pixels_over_24_fraction"] for row in pdf_vs_ppt), default=None
        ),
        "ppt_contact_sheets": make_contact_sheets(ppt_paths, "ppt-v02"),
        "pdf_contact_sheets": make_contact_sheets(pdf_paths, "pdf-v02"),
    },
    "errors": errors,
}
OUT.write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding="utf-8")
print(OUT)
if errors:
    raise SystemExit("\n".join(errors))
