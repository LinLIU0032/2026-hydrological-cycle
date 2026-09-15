from __future__ import annotations

import json
import math
from pathlib import Path

from PIL import Image, ImageChops, ImageStat


ROOT = Path(r"E:\PG\2026 Hydrological cycle\qa\GATE8_R1_QA_20260915")
SPECS = {"QIANWEN-OFFICE": 3, "DOUBAO": 4}
result = {}

for producer, count in SPECS.items():
    pages = []
    for page in range(1, count + 1):
        independent_path = ROOT / producer / "pdf-renders" / f"page-{page}.png"
        submitted_path = ROOT / producer / "submitted-pdf-renders" / f"page-{page}.png"
        with Image.open(independent_path).convert("RGB") as independent, Image.open(submitted_path).convert("RGB") as submitted:
            if independent.size != submitted.size:
                submitted = submitted.resize(independent.size, Image.Resampling.LANCZOS)
            difference = ImageChops.difference(independent, submitted)
            stat = ImageStat.Stat(difference)
            rms = math.sqrt(sum(value * value for value in stat.rms) / 3)
            extrema = difference.getextrema()
            pages.append(
                {
                    "page": page,
                    "size": list(independent.size),
                    "rms_0_255": round(rms, 4),
                    "max_channel_difference": max(high for _, high in extrema),
                }
            )
    result[producer] = pages

output = ROOT / "submitted_vs_independent_pdf.json"
output.write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding="utf-8")
print(output)
