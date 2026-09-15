from pathlib import Path
from pypdf import PdfReader


ROOT = Path(__file__).resolve().parents[1]
PDF = ROOT / "地球系统与演变第三第四章.pdf"
OUT = ROOT / "assets" / "figures" / "extracted_raw"
OUT.mkdir(parents=True, exist_ok=True)

# Boxes are source-pixel coordinates on the embedded page scans. Crops retain the
# printed caption and any source note needed for traceability.
FIGURES = {
    "W-01_Fig3-3_PDF08_print093_raw.png": (8, (150, 610, 1120, 1450)),
    "W-04_Table3-1_PDF09_print094_raw.png": (9, (95, 140, 1120, 665)),
    "W-06_Fig3-13_PDF21_print106_raw.png": (21, (145, 1000, 1085, 1645)),
    "W-03_Fig3-15_PDF25_print110_raw.png": (25, (95, 1115, 1135, 1685)),
    "W-05_Fig3-17_PDF27_print112_raw.png": (27, (175, 420, 1030, 900)),
    "C-02_Fig4-2_PDF59_print144_raw.png": (59, (175, 150, 1050, 805)),
    "C-03_Fig4-8_PDF68_print153_raw.png": (68, (205, 150, 1070, 900)),
    "C-04_Fig4-9_PDF68_print153_raw.png": (68, (335, 1135, 960, 1650)),
    "C-05_Fig4-16_PDF80_print165_raw.png": (80, (230, 965, 1015, 1695)),
    "C-06_Fig4-17_PDF81_print166_raw.png": (81, (135, 900, 1110, 1660)),
}

reader = PdfReader(PDF)
for filename, (page_number, box) in FIGURES.items():
    images = list(reader.pages[page_number - 1].images)
    if len(images) != 1:
        raise RuntimeError(f"PDF page {page_number} has {len(images)} images")
    page_image = images[0].image.convert("RGB")
    crop = page_image.crop(box)
    crop.save(OUT / filename, format="PNG", optimize=True)
    print(filename, page_image.size, box, crop.size)
