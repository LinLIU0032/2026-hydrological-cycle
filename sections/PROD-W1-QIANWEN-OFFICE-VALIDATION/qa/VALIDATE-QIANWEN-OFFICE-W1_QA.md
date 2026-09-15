# QA — VALIDATE-QIANWEN-OFFICE-W1

Producer: 千问办公 (QwenWork) — Candidate PowerPoint Producer
Deck: `L16_W1_QianwenOffice_Validation_v01.pptx` (9 slides: 04, 05, 06, 10, 11, 12, 21, 22, 24)
Canvas: 1280 × 720 px; 13.3333 × 7.5000 in; 16:9
Toolchain: project-local `ppt-master` v6.3.1 (attribution guard exit 0), Python `planning/tooling/ppt-master-py312-v6.3.1/Scripts/python.exe`

## 1. Gate results

| Gate | Command | Result |
|---|---|---|
| Attribution guard | `attribution_guard.py` | exit 0 (clean, no output) |
| SVG quality (lockless, final) | `svg_quality_checker.py svg_output --quick-generate --format ppt169 --stage final` | 9/9 OK, 0 WARN, 0 ERROR, exit 0 |
| SVG quality (canonical, final, json) | `svg_quality_checker.py . --quick-generate --canonical-authoring --stage final --json` | 9/9 OK, 0 WARN, 0 ERROR, exit 0 |
| SVG→PPTX postflight | `svg_to_pptx.py . --quick-generate --with-notes -f ppt169` | status=passed, quality_gate=passed, slides=9, warning_categories=0 |
| PPTX delivery check | `pptx_delivery_check.py <pptx>` | errors=[], advisories=[] |

First-pass findings and fixes (all resolved before final export):
- ERROR (blocking) Slide 24: clock-panel English line `One substance, reservoir-dependent clocks` overflowed panel horizontally 6.0% → shortened to `One substance, many clocks` and restructured the carbon-clock block.
- WARN Slide 10: units line overflowed `budget-field` vertically 2.3% → moved baseline y=600 → y=584.
- WARN Slide 22: geological-group title overflowed horizontally 0.5% → shortened English tail to `(qualitative)`.
- WARN Slide 24: second English line overflowed 4.2% → shortened to `Fast bio vs slow geo`, repositioned.
- WARN Slide 04: bottom-row descriptor text overflowed `reservoir-ring` vertically 1.4% → expanded container bounds/rect height 440 → 458 (cards end y=608; reading-cue starts y=612, no overlap).
- Visual defect Slide 22: ocean-bar white value label `38,000` extended ~10 px past the dark bar onto the light panel (last glyph unreadable) → moved end-anchor x=1186 → x=1166.
- canonical-authoring advisory Slide 04: redundant `font-size` on `reading-cue` texts → normalized via `compact_svg_styles.py svg_output --inplace`.

## 2. Acceptance-criteria check (contract §ACCEPTANCE CRITERIA)

1. Exactly nine slides in order 04,05,06,10,11,12,21,22,24 — PASS (python-pptx `len(slides)==9`, order verified).
2. Titles / teaching messages / page numbers / sources / figures / terminology / values match locked planning artifacts — PASS (see per-slide table below).
3. Slide 06 uses only UE Fig. 17.1 dataset — PASS (six reservoirs, single dataset; W-01 cited as backup-only in source line, not placed).
4. Slide 10 correct directions, units, closed 36/36 budget — PASS (E434↑, P398↓, transport 36 →, P107↓, E71↑, runoff 36 ←; 434−398=36 and 107−71=36 shown; units ×10³ km³/yr).
5. Slide 11 preserves W-05 values and arrow directions — PASS (raster embedded intact; ±80 / ±100 / ±540 Cal and 1 Cal = 4.184 J retained on-slide).
6. Slide 12 native/editable process diagram — PASS (pure vector; 0 pictures).
7. Slide 22 correct 500 < 830 < 1500 < 38,000 Gt C; geological reservoirs qualitative — PASS (ascending chart + inequality strip states 生物圈最小/海洋最大; Sediment & Lithosphere in a separate qualitative group, explicitly "C-01 未印出…总量", not numbered in the sequence, no second dataset).
8. Slide 24 qualitative clock comparison, no unified numerical timescale table — PASS (3×2 qualitative grid + clock panel; explicit "不合并成统一数值时间表").
9. Nine of nine speaker-note pages embedded and consistent — PASS (9/9 notes, prose grounded in visible content).
10. No overflow / overlap / clipping / distortion / placeholder / tiny text / missing attribution / external relationship / audio / object animation — PASS (final gate 0 warn/0 err; delivery check 0 errors/0 advisories; object_animation_slide_count=0; audio_timing_slide_count=0; external relationships = NONE).
11. Native/editable visuals except the two approved rasters — PASS (pictures only on Slide 11 = W-05 and Slide 22 = C-01; all other pages vector).
12. Final SVG/PPTX checks pass; PPTX opens; PDF and 9 previews visually inspected — PASS (opened via PowerPoint COM to export PDF + previews; PDF = 9 pages; all 9 previews visually inspected).

## 3. Per-slide content / carrier table

| Deck pos | Slide | Header no. | Title | Native shapes (auto/line/other) | Text boxes | Raster pictures | Source line present |
|---:|---:|---|---|---:|---:|---:|---|
| 1 | 04 | 1.1 | 什么在循环？ \| What Is Actually Cycling? | 9 / 5 lines+10 poly | 24 | 0 | yes |
| 2 | 05 | 1.2 | 读懂全球循环的四个词 \| Four Ideas for Reading Global Cycles | 11 / 0 | 26 | 0 | yes |
| 3 | 06 | 1.3 | 地球的水在哪里？ \| Where Is Earth's Water? | 12 / 1 line | 26 | 0 | yes |
| 4 | 10 | 1.7 | 海洋与陆地的水量收支 \| Ocean–Land Water Budget | 14 / 6 lines+6 poly | 22 | 0 | yes |
| 5 | 11 | 1.8 | 水的三相转换 \| Phase Changes of Water | 8 / 0 | 18 | 1 (W-05) | yes |
| 6 | 12 | 1.9 | 蒸发与蒸散 \| Evaporation & Evapotranspiration | 15 / 6 lines+6 poly+2 path | 18 | 0 | yes |
| 7 | 21 | 2.1 | 为什么接下来讲碳？ \| Why Carbon? | 13 / 4 lines+8 poly | 25 | 0 | yes |
| 8 | 22 | 2.2 | 碳储存在哪里？ \| Carbon Reservoirs | 13 / 0 | 24 | 1 (C-01) | yes |
| 9 | 24 | 2.4 | 同样的语言，不同的时间尺度 \| Same Framework, Different Timescales | 15 / 10 lines+3 circle | 41 | 0 | yes |

(Counts are recursive over groups; "other" = lines / connectors / freeform / ellipse primitives.)

## 4. Image dimensions, crop policy, quality

| Figure | Source file | Native px | Placement | Crop | Distortion |
|---|---|---|---|---|---|
| W-05 | `W-05_Fig3-17_PDF27_print112_raw.png` | 855 × 480 | Slide 11, frame 740 × 416, `preserveAspectRatio="xMidYMid meet"` | none (intact) | none |
| C-01 | `C-01_UE_Fig12-19_PDF1209_raw.png` | 1725 × 1435 | Slide 22, frame 460 × 382, `preserveAspectRatio="xMidYMid meet"` | none (intact) | none |

Both embedded as internal media parts (no external links). Max image-frame share: 33.4% (Slide 11), 19.1% (Slide 22). Image optimization preserved original bytes (no re-encode needed).

## 5. Speaker notes

9/9 pages embedded (`--with-notes`), split from `notes/total.md` into per-page `notes/<slide>_<title>.md`. Prose only, single language (zh), grounded in the visible slide and approved source rows; no external facts; no duplicated full bilingual text.

## 6. Motion / audio

- Object animations: 0 slides.
- Narration audio: 0 slides.
- Slide transitions: exporter default `fade` on all 9 (slide-level transition, not an object animation; contract prohibits audio and object animation, not slide transitions).

## 7. Visual inspection

All nine `previews/*.png` (1280 × 720) inspected by eye: header band, bilingual title, teaching-message marker, cards, arrows, source line, and page number all render; no overlap, clipping, distortion, or unreadable text; W-05 and C-01 legible and undistorted; Slide 22 inequality chain and qualitative geological group read correctly.
