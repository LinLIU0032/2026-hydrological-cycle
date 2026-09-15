# VALIDATE-QIANWEN-OFFICE-W1

TASK ID:
VALIDATE-QIANWEN-OFFICE-W1

ROLE:
Candidate PowerPoint Producer — 千问办公

PROJECT ROOT:
`E:\PG\2026 Hydrological cycle`

PURPOSE:
Independently reproduce the nine Production Wave 1 slides previously assigned across Qoder CN, 豆包工作, and WorkBuddy. This is a capability-validation task only. It does not close GATE 6 and does not authorize later production.

OBJECTIVE:
Produce exactly one nine-slide native/editable validation deck containing original Slides 04, 05, 06, 10, 11, 12, 21, 22, and 24, in that order. Work only inside this project. Match the approved Sample Deck and all locked planning artifacts. Do not copy, import, or adapt any existing Agent-produced PPTX, PDF, SVG, preview, notes, report, or working project under `sections/PROD-W1-QODER-CN/`, `sections/PROD-W1-DOUBAO/`, or `sections/PROD-W1-WORKBUDDY/`.

STARTUP CONFIRMATION:
Before doing any production work, report:
1. Current project root.
2. Product/agent name: 千问办公.
3. Actual selected model and available context length.
4. Assigned slide roster: 04, 05, 06, 10, 11, 12, 21, 22, 24.
5. Sole output directory: `sections/PROD-W1-QIANWEN-OFFICE-VALIDATION/`.
6. Result of the mandatory project-local `ppt-master` attribution guard.

If the project root is wrong, the output directory cannot be restricted, or the attribution guard returns non-zero, stop and report `TOOL_ISSUE`. Never inspect, repair, or bypass the guard.

READ COMPLETELY — READ ONLY:
- `AGENTS.md`
- `LECTURE16_MASTER_PROMPT.md.txt`
- `planning/TASK_PROD_W1_QODER_CN.md`
- `planning/TASK_PROD_W1_DOUBAO.md`
- `planning/TASK_PROD_W1_WORKBUDDY.md`
- `planning/L16_BLUEPRINT_v1.md`
- `planning/L16_STYLE_SPEC_v1.md`
- `planning/L16_SOURCE_MATRIX.xlsx`
- `planning/L16_FIGURE_INDEX.xlsx`
- `review/L16_STYLE_SAMPLE_v01.pptx`
- `review/L16_STYLE_SAMPLE_v01_previews/`
- `review/L16_STYLE_SAMPLE_v01_previews/L16_STYLE_SAMPLE_v01_ppt169_20260910/design_spec.md`
- `review/L16_STYLE_SAMPLE_v01_previews/L16_STYLE_SAMPLE_v01_ppt169_20260910/spec_lock.md`
- Approved assets under `assets/figures/approved/`, limited to the Figure IDs authorized by the three original task packets.

DO NOT READ OR COPY AS AUTHORING INPUT:
- `sections/PROD-W1-QODER-CN/`
- `sections/PROD-W1-DOUBAO/`
- `sections/PROD-W1-WORKBUDDY/`
- `qa/GATE6_W1_QA_20260911_122338/`

The known Slide 22 correction stated below is part of this validation contract and is not permission to inspect the existing WorkBuddy deliverable.

PPT-MASTER:
- Skill: `planning/tooling/ppt-master-v6.3.1/ppt-master/skills/ppt-master`
- Python: `planning/tooling/ppt-master-py312-v6.3.1/Scripts/python.exe`
- Run the mandatory attribution guard first.
- Follow the selected route and every blocking gate. Do not bypass any gate.

ASSIGNED SLIDES:

### Slides 04–06

- Slide 04 — 什么在循环？ | What Is Actually Cycling? Matter moves continuously among Earth-system reservoirs. Use a native reservoir-transfer schematic. Sources: UE Ch.12 PDF pp.1146–1147; CN Chapters 3–4.
- Slide 05 — 读懂全球循环的四个词 | Four Ideas for Reading Global Cycles. Teach Reservoir, Flux, Residence Time, and Feedback as the shared framework. Sources: UE pp.1205 and 1647–1650; EP p.881.
- Slide 06 — 地球的水在哪里？ | Where Is Earth's Water? Use one internally coherent native chart/redraw based only on UE Figure 17.1 values. W-01 is backup only; do not mix datasets.

### Slides 10–12

- Slide 10 — 海洋与陆地的水量收支 | Ocean–Land Water Budget. Use the UE Figure 17.2 global budget: ocean evaporation 434, ocean precipitation 398, land precipitation 107, land evapotranspiration 71, atmospheric transport 36, and runoff 36, all ×10³ km³/yr. Preserve directions and close the budget. W-03 is backup only; never mix its panel units.
- Slide 11 — 水的三相转换 | Phase Changes of Water. Use approved W-05 intact or faithfully re-labelled. Preserve arrow directions and all displayed values: ±80 Cal, ±100 Cal, ±540 Cal, and 1 Cal = 4.184 J.
- Slide 12 — 蒸发与蒸散 | Evaporation & Evapotranspiration. Use a native process diagram showing ocean evaporation, land-surface evaporation, and plant transpiration returning water to the atmosphere. Sources: CN Ch.4 §4.3.5, PDF pp.73–74; UE pp.1653–1654 and 1168.

### Slides 21, 22, and 24

- Slide 21 — 为什么接下来讲碳？ | Why Carbon? Bridge from water to carbon with an active Part II cue and the same Reservoir/Flux/Residence Time framework. Sources: UE pp.1204–1205; CN Ch.4 §4.1.
- Slide 22 — 碳储存在哪里？ | Carbon Reservoirs. Use C-01 as the sole numerical dataset. The numerical ascending order must be Biosphere 500 < Atmosphere 830 < Soils 1500 < Ocean 38,000 Gt C. Do not call Atmosphere the smallest of these reservoirs. Keep Sediment and Lithosphere as a separate qualitative geological-reservoir group and state that C-01 does not print their totals. Do not number them as part of the C-01 numerical ascending sequence. Do not add or mix a second numerical dataset.
- Slide 24 — 同样的语言，不同的时间尺度 | Same Framework, Different Timescales. Align water and carbon using Reservoir, Flux, and Residence Time. Make the clock difference clear without inventing a unified numerical timescale table. Sources: UE pp.1205–1206 and 1209–1213; CN Figures 4-15 and 4-16.

BILINGUAL TERMS:
Use the exact terminology in the three original task packets. English follows UE; Chinese follows the Chinese textbook. Titles use `中文 | English`. Main body uses Chinese explanation with English keywords; do not duplicate every sentence bilingually.

STYLE / CONTENT LOCK:
- 1280 × 720, 16:9; 13.3333 × 7.5 in.
- Microsoft YaHei for Chinese and English, with Arial only as fallback.
- White background; 72 px `#0E3F8C` header.
- Water/general accents: `#1E4FA8`, `#3D7BD9`.
- Carbon accents: `#EA580C`, `#C2410C`.
- Flat native geometry; restrained rounded cards; no default shadows or gradients.
- Preserve original header numbering and original page numbers.
- Each slide must have one visible teaching message, one bilingual title, one readable source line, and one embedded speaker-note page.
- Speaker Notes enabled. Narration audio and object animation disabled.
- Use the approved Sample Deck as visual authority.

OUTPUT DIRECTORY:
Create and use only:
`sections/PROD-W1-QIANWEN-OFFICE-VALIDATION/`

OUTPUT FILES:
- `sections/PROD-W1-QIANWEN-OFFICE-VALIDATION/L16_W1_QianwenOffice_Validation_v01.pptx`
- `sections/PROD-W1-QIANWEN-OFFICE-VALIDATION/L16_W1_QianwenOffice_Validation_v01.pdf`
- `sections/PROD-W1-QIANWEN-OFFICE-VALIDATION/previews/` with nine independently readable page renders
- `sections/PROD-W1-QIANWEN-OFFICE-VALIDATION/VALIDATE-QIANWEN-OFFICE-W1_COMPLETION.md`
- Any working files must remain inside the same sole output directory.

DO NOT:
- Do not create any slide except 04, 05, 06, 10, 11, 12, 21, 22, and 24.
- Do not edit the Sample Deck, `planning/`, `assets/`, source textbooks, status files, QA files, or any other Agent directory.
- Do not inspect or copy the three existing Agent outputs.
- Do not search the web, use external teaching content, use external figures/icons, or use AI-generated imagery.
- Do not invent values, mix datasets, alter source directions, or change Blueprint titles and teaching messages.
- Do not flatten native diagrams, comparisons, or charts into screenshots. Only approved textbook figures W-05 and C-01 may remain raster evidence.
- Do not add audio or object animation.
- If required evidence is unavailable, stop with `FIGURE_GAP`; do not improvise.

ACCEPTANCE CRITERIA:
1. Exactly nine slides in this order: 04, 05, 06, 10, 11, 12, 21, 22, 24.
2. All titles, teaching messages, page numbers, sources, figures, terminology, and quantitative values match the locked planning artifacts.
3. Slide 06 uses only the UE Figure 17.1 dataset.
4. Slide 10 has correct directions, units, and a closed 36/36 global budget.
5. Slide 11 preserves W-05 values and arrow directions without distortion.
6. Slide 12 remains a native/editable process diagram.
7. Slide 22 uses the correct 500 < 830 < 1500 < 38,000 Gt C numerical order and keeps geological reservoirs qualitative.
8. Slide 24 compares clocks qualitatively without an unsupported combined numerical table.
9. Nine of nine speaker-note pages are embedded and consistent with visible content.
10. No overflow, overlap, clipping, distortion, placeholder, tiny substantive text, missing attribution, external relationship, audio, or object animation.
11. Native/editable visuals except the two explicitly approved raster evidence figures.
12. Final SVG/PPTX checks pass; PPTX opens in PowerPoint; PDF and all nine previews are visually inspected.

COMPLETION REPORT:
Use the exact Master Prompt §34 fields:
TASK ID, STATUS, OUTPUT FILES, WHAT WAS DONE, SOURCES USED, FIGURES USED, DECISIONS MADE, DEVIATIONS FROM PLAN, PROBLEMS FOUND, UNFINISHED ITEMS, PLACEHOLDERS, SELF-QA, QUESTIONS.

Also report:
- Actual model and context length.
- Slides completed and their order.
- Overflow and overlap results.
- Image dimensions, crop policy, and quality.
- Missing attribution, unclear figures, placeholders, and Style Spec deviations.
- Speaker-note count.
- Native object and raster picture counts by slide.
- PowerPoint/PDF/render verification results.

STOP CONDITION:
After producing and validating exactly the nine assigned slides and writing the Completion Report, stop. Do not begin any later-stage slide, merge into the final deck, or update shared project status.
