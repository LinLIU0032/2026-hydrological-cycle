from pathlib import Path
from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parent / "source_cn_pages"
OUT = ROOT / "contacts"
OUT.mkdir(parents=True, exist_ok=True)


def page_path(page: int) -> Path:
    scan = ROOT / f"scan-{page}.png"
    if scan.exists():
        return scan
    verified = ROOT / f"verified_pdf_{page:02d}.png"
    if verified.exists():
        return verified
    matches = sorted(ROOT.glob(f"pdf_{page:02d}_print_*.png"))
    if matches:
        return matches[0]
    raise FileNotFoundError(page)


for start in range(1, 95, 4):
    pages = list(range(start, min(start + 4, 95)))
    thumbs = []
    for page in pages:
        image = Image.open(page_path(page)).convert("RGB")
        image.thumbnail((850, 1170), Image.Resampling.LANCZOS)
        panel = Image.new("RGB", (900, 1240), "white")
        panel.paste(image, ((900 - image.width) // 2, 50))
        draw = ImageDraw.Draw(panel)
        draw.text((20, 14), f"PDF {page} | PRINT {page + 85}", fill="black")
        thumbs.append(panel)
    sheet = Image.new("RGB", (1800, 2480), "white")
    for idx, panel in enumerate(thumbs):
        sheet.paste(panel, ((idx % 2) * 900, (idx // 2) * 1240))
    sheet.save(OUT / f"contact_{start:02d}_{pages[-1]:02d}.jpg", quality=88)
