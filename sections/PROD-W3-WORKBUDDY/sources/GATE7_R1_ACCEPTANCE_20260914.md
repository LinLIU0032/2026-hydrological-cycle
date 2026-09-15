# GATE 7 Focused Revision Acceptance

Date: 2026-09-14

## Decision

- `PROD-W2-QODER-CN-R1`: **PASS**.
- `PROD-W2-WORKBUDDY-R1`: **PASS**.
- GATE 7: **PASS / CLOSED**.
- Accepted bulk production: **18/35 slides (51.4%)**.
- GATE 8 is eligible to start. No GATE 8 production was started during this review.

## Focused Checks

| Check | Result | Evidence |
|---|---|---|
| Slide 07 embedded Notes | PASS | PPTX Notes state that accessible surface freshwater refers only to lakes/rivers; atmosphere and biosphere are separately identified as tiny reservoirs excluded from that row. |
| Slide 07 visible regression | PASS | Independent PowerPoint render SHA-256 is unchanged from the original GATE 7 render. |
| Slide 08 regression | PASS | Independent PowerPoint render SHA-256 is unchanged. |
| Slide 25 visible wording | PASS | Quantitative `年—十年` / `百万年` comparison removed; visible wording now makes only a qualitative surface-biological-versus-geological turnover comparison. |
| Slide 25 embedded Notes | PASS | Quantitative year-range wording removed; Notes explicitly state that the page makes no specific-year claim. |
| Slide 25 visual QA | PASS | Revised PowerPoint render inspected at 1920×1080; no overflow, overlap, clipping, or unreadable substantive text. |
| Slide 26 regression | PASS | Independent PowerPoint render SHA-256 is unchanged; approved C-03 remains the sole embedded image. |
| Package integrity | PASS | Both revised PPTX files pass the project-local `pptx_delivery_check.py`; 2/2 Notes in each, no external relationship, audio, timed advance, or object animation. |
| PowerPoint/PDF | PASS | Both revised PPTX files opened in Microsoft PowerPoint and independently exported to two-page PDFs and 1920×1080 PNGs under `qa/GATE7_R1_QA_20260914/`. |
| Revision boundary | PASS | WorkBuddy reports no Wave 1 or shared-file write during r1; no additional scope incident detected in the focused deliverables. |

## Render Regression Hashes

| Page | Result | SHA-256 |
|---:|---|---|
| 07 | unchanged as required | `72606FE3FF92BBEC9245D76322605556F17B9C6D4BD9127E87FAE88365F3176E` |
| 08 | unchanged as required | `E22E2C0897969C6748125579AE9B3064DEDBF491E626AC7C4B0DB5A78BC4A1EC` |
| 25 | changed as required | new `B6DFF9F8644DEDECFD49DDFA004E5031CFC05CEF602C7C1409506DBB34125870` |
| 26 | unchanged as required | `D768F968DDCC87E500D2FADC9FB9A4CC7C41EBF31DBD94B5C061B34A396E275A` |

## Next Gate

GATE 8 may now begin with the remaining 17 bulk slides: 18–20, 28–34, 36–37, and 39–43. GATE 9 remains blocked until all initial slide drafts have passed GATE 8.
