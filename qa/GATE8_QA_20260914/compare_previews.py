from __future__ import annotations

import json
import math
from pathlib import Path

from PIL import Image, ImageChops, ImageStat
from pypdf import PdfReader


ROOT = Path(r"E:\PG\2026 Hydrological cycle")
QA = ROOT / "qa" / "GATE8_QA_20260914"

PREVIEWS = {
    "QODER-CN": {
        18: ROOT / "sections/PROD-W3-QODER-CN/previews/page-1.png",
        19: ROOT / "sections/PROD-W3-QODER-CN/previews/page-2.png",
        20: ROOT / "sections/PROD-W3-QODER-CN/previews/page-3.png",
        34: ROOT / "sections/PROD-W3-QODER-CN/previews/page-4.png",
    },
    "WORKBUDDY": {
        28: ROOT / "sections/PROD-W3-WORKBUDDY/previews/28_carbonates_ocean_life_rock.png",
        29: ROOT / "sections/PROD-W3-WORKBUDDY/previews/29_weathering_water_meets_carbon.png",
        30: ROOT / "sections/PROD-W3-WORKBUDDY/previews/30_slow_geological_carbon_cycle.png",
        31: ROOT / "sections/PROD-W3-WORKBUDDY/previews/31_multiple_carbon_timescales.png",
        32: ROOT / "sections/PROD-W3-WORKBUDDY/previews/32_concept_check_2.png",
        33: ROOT / "sections/PROD-W3-WORKBUDDY/previews/33_part2_summary.png",
    },
    "QIANWEN-OFFICE": {
        36: ROOT / "sections/PROD-W3-QIANWEN-OFFICE/previews/36_water_vapor_feedback.png",
        37: ROOT / "sections/PROD-W3-QIANWEN-OFFICE/previews/37_ice_albedo_feedback.png",
        39: ROOT / "sections/PROD-W3-QIANWEN-OFFICE/previews/39_biosphere_feedback.png",
    },
    "DOUBAO": {
        40: ROOT / "sections/PROD-W3-DOUBAO/previews/slide-40.png",
        41: ROOT / "sections/PROD-W3-DOUBAO/previews/slide-41.png",
        42: ROOT / "sections/PROD-W3-DOUBAO/previews/slide-42.png",
        43: ROOT / "sections/PROD-W3-DOUBAO/previews/slide-43.png",
    },
}

PDFS = {
    "QODER-CN": ROOT / "sections/PROD-W3-QODER-CN/L16_W3_QoderCN_Slides18-20_34_v01.pdf",
    "WORKBUDDY": ROOT / "sections/PROD-W3-WORKBUDDY/L16_W3_WorkBuddy_Slides28-33_v01.pdf",
    "QIANWEN-OFFICE": ROOT / "sections/PROD-W3-QIANWEN-OFFICE/L16_W3_QianwenOffice_Slides36-37_39_v01.pdf",
    "DOUBAO": ROOT / "sections/PROD-W3-DOUBAO/L16_W3_Doubao_Slides40-43_v01.pdf",
}


def compare_images(submitted: Path, independent: Path) -> dict:
    with Image.open(submitted).convert("RGB") as left, Image.open(independent).convert("RGB") as right:
        submitted_size = list(left.size)
        independent_size = list(right.size)
        if right.size != left.size:
            right = right.resize(left.size, Image.Resampling.LANCZOS)
        diff = ImageChops.difference(left, right)
        stat = ImageStat.Stat(diff)
        rms = math.sqrt(sum(v * v for v in stat.rms) / 3)
        extrema = diff.getextrema()
        return {
            "submitted": str(submitted),
            "independent": str(independent),
            "submitted_size": submitted_size,
            "independent_size": independent_size,
            "rms_0_255": round(rms, 4),
            "max_channel_difference": max(x[1] for x in extrema),
        }


result = {"previews": {}, "pdfs": {}, "independent_pdf_renders": {}}
for producer, pages in PREVIEWS.items():
    result["previews"][producer] = {
        str(page): compare_images(path, QA / producer / f"slide-{page}.png")
        for page, path in pages.items()
    }
for producer, submitted in PDFS.items():
    independent = QA / producer / f"{producer}_POWERPOINT.pdf"
    result["pdfs"][producer] = {
        "submitted": str(submitted),
        "submitted_pages": len(PdfReader(submitted).pages),
        "independent": str(independent),
        "independent_pages": len(PdfReader(independent).pages),
    }
    result["independent_pdf_renders"][producer] = {}
    for local_index, page in enumerate(PREVIEWS[producer], start=1):
        rendered = QA / producer / "pdf-renders" / f"page-{local_index}.png"
        if rendered.exists():
            result["independent_pdf_renders"][producer][str(page)] = compare_images(
                rendered, QA / producer / f"slide-{page}.png"
            )

out = QA / "preview_pdf_comparison.json"
out.write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding="utf-8")
print(out)
