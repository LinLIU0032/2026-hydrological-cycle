from pathlib import Path
from pypdf import PdfReader


PDF = Path(__file__).resolve().parents[1] / "地球系统与演变第三第四章.pdf"
PAGES = [8, 9, 21, 25, 27, 59, 68, 80, 81]

reader = PdfReader(PDF)
for page_number in PAGES:
    page = reader.pages[page_number - 1]
    details = []
    for item in page.images:
        details.append(
            {
                "name": item.name,
                "bytes": len(item.data),
                "size": item.image.size,
                "mode": item.image.mode,
                "format": item.image.format,
            }
        )
    print(page_number, details)
