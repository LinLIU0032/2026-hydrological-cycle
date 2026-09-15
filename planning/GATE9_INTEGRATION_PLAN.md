# GATE 9 Integration Plan

Date: 2026-09-15

## Objective

Assemble the 44 accepted Lecture 16 pages into one native PowerPoint master deck without redesigning, rewriting, flattening, or modifying any accepted source deck. Then perform whole-deck PowerPoint/PDF QA and stop at the GATE 9 decision.

## Output

- `final/L16_Hydrological_Carbon_Cycles_v02.pptx` — accepted master
- `final/L16_Hydrological_Carbon_Cycles_v02.pdf` — accepted PDF
- `final/previews_v02/` with 44 accepted PowerPoint-rendered PNGs
- `qa/GATE9_QA_20260915/` with integration manifest, structural checks, independent renders, comparison evidence, and the GATE 9 report

Revision note: v01 failed visual regression because PowerPoint consolidated source themes into one master. It is retained as rejected QA evidence; v02 preserves all 12 source Designs and is the accepted output.

## Exact Accepted-Source Roster

| Final pages | Source deck | Local source pages |
|---|---|---|
| 01–03 | `review/L16_STYLE_SAMPLE_v01.pptx` | 1–3 |
| 04–06 | `sections/PROD-W1-QODER-CN/L16_W1_QoderCN_Slides04-06_v01.pptx` | 1–3 |
| 07–08 | `sections/PROD-W2-QODER-CN/L16_W2_QoderCN_Slides07-08_v01.pptx` | 1–2 |
| 09 | `review/L16_STYLE_SAMPLE_v01.pptx` | 4 |
| 10–12 | `sections/PROD-W1-DOUBAO/L16_W1_Doubao_Slides10-12_v01.pptx` | 1–3 |
| 13–15 | `sections/PROD-W2-DOUBAO/L16_W2_Doubao_Slides13-15_v01.pptx` | 1–3 |
| 16–17 | `sections/PROD-W2-QIANWEN-OFFICE/L16_W2_QianwenOffice_Slides16-17_v01.pptx` | 1–2 |
| 18–20 | `sections/PROD-W3-QODER-CN/L16_W3_QoderCN_Slides18-20_34_v01.pptx` | 1–3 |
| 21–22 | `sections/PROD-W1-WORKBUDDY/L16_W1_WorkBuddy_Slides21-22-24_v01.pptx` | 1–2 |
| 23 | `review/L16_STYLE_SAMPLE_v01.pptx` | 5 |
| 24 | `sections/PROD-W1-WORKBUDDY/L16_W1_WorkBuddy_Slides21-22-24_v01.pptx` | 3 |
| 25–26 | `sections/PROD-W2-WORKBUDDY/L16_W2_WorkBuddy_Slides25-26_v01.pptx` | 1–2 |
| 27 | `review/L16_STYLE_SAMPLE_v01.pptx` | 6 |
| 28–33 | `sections/PROD-W3-WORKBUDDY/L16_W3_WorkBuddy_Slides28-33_v01.pptx` | 1–6 |
| 34 | `sections/PROD-W3-QODER-CN/L16_W3_QoderCN_Slides18-20_34_v01.pptx` | 4 |
| 35 | `review/L16_STYLE_SAMPLE_v01.pptx` | 7 |
| 36–37 | `sections/PROD-W3-QIANWEN-OFFICE/L16_W3_QianwenOffice_Slides36-37_39_v01.pptx` | 1–2 |
| 38 | `review/L16_STYLE_SAMPLE_v01.pptx` | 8 |
| 39 | `sections/PROD-W3-QIANWEN-OFFICE/L16_W3_QianwenOffice_Slides36-37_39_v01.pptx` | 3 |
| 40–43 | `sections/PROD-W3-DOUBAO/L16_W3_Doubao_Slides40-43_v01.pptx` | 1–4 |
| 44 | `review/L16_STYLE_SAMPLE_v01.pptx` | 9 |

The candidate-validation deck under `sections/PROD-W1-QIANWEN-OFFICE-VALIDATION/` is excluded.

## Integration Method

- Use Microsoft PowerPoint's native `Slides.InsertFromFile` operation to preserve source slide XML, Notes, images, vectors, transitions, and source formatting as closely as PowerPoint supports.
- Create a new presentation in `final/`; never overwrite or modify a source PPTX/PDF.
- Insert only the mapped local pages in final order. Do not add, drop, duplicate, rewrite, or redesign a page.
- Preserve source Notes. Do not add narration, timed advance, or object animation.
- The system `ppt-master` Edit Native route does not support cross-deck merge; its Generate route would rebuild accepted pages. Therefore the project uses native PowerPoint insertion and retains `pptx_delivery_check.py` as the package integrity gate.

## Risks and Controls

| Risk | Control |
|---|---|
| PowerPoint remaps masters/themes during cross-file insertion | Render every final page and compare it pixelwise with the accepted source PowerPoint render for that page. Any material visual change blocks GATE 9. |
| Notes or transitions are lost | Extract all final Notes and package metadata; compare every page with its source. |
| Wrong page order or duplicate/missing page | Build a machine-readable 44-row manifest and verify visible page numbers/titles against the Blueprint. |
| Media or external relationships change | Run package inspection and delivery checker; verify approved-media hashes and require zero external relationships. |
| PDF export diverges from PPTX | Export PDF through PowerPoint, render all 44 pages with Poppler, and compare against PowerPoint PNGs plus visual inspection. |

## Acceptance Criteria

1. Exactly 44 pages in Blueprint order; every page comes from the accepted roster above.
2. 44/44 embedded Notes pages present and mapped to the correct page.
3. 13.3333 × 7.5 in canvas; readable page numbers 02–44, with Slide 01 allowed to omit its folio per the locked Style Spec; correct section sequence.
4. No visible content change relative to accepted source renders except unavoidable rasterization noise; any material change is investigated.
5. No broken or external relationships, corrupt ZIP parts, duplicate canonical parts, audio, timed advance, or object animation.
6. Only approved media remain; no new external or generated asset is introduced.
7. The final PPTX opens in Microsoft PowerPoint; the 44-page PDF exports successfully.
8. All 44 PowerPoint PNGs and all 44 Poppler PDF renders receive visual QA with no overflow, overlap, clipping, missing font, broken connector, placeholder, or rendering defect.
9. GATE 9 closes only after the final deck and report pass; lesson-plan work does not begin before closure.
