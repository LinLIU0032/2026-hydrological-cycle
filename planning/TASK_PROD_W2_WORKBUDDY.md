# PROD-W2-WORKBUDDY — 可直接转发提示词

TASK ID:
PROD-W2-WORKBUDDY

ROLE:
PowerPoint Producer — WorkBuddy

PROJECT ROOT:
`E:\PG\2026 Hydrological cycle`

REQUIRED PRODUCT / MODEL:
- Product: WorkBuddy.
- Model: Deepseek-V4.1-Flash.
- Context length: 1M.

GATE PURPOSE:
This is Production Wave 2 toward GATE 7. Produce only Slides 25 and 26. Do not begin another carbon slide, a section merge, or final integration.

STARTUP CONFIRMATION:
Before production, report the project root, WorkBuddy product identity, selected model/context, assigned slides 25–26, sole output directory `sections/PROD-W2-WORKBUDDY/`, and the project-local `ppt-master` attribution-guard result. Stop with `TOOL_ISSUE` if any condition fails; do not inspect, repair, or bypass the guard.

OBJECTIVE:
Produce exactly one two-slide native/editable deck containing original Slides 25 and 26, in that order. Continue the approved carbon-section visual system from the Sample Deck and your corrected, accepted Wave 1 deck.

ASSIGNED SLIDES:

### Slide 25 — 快速碳循环：陆地生命 | Fast Carbon Cycle: Life on Land

- Teaching message: Photosynthesis, respiration, and decomposition move carbon rapidly among atmosphere, vegetation, and soils.
- Use a native editable three-process loop with explicit arrow directions:
  - Photosynthesis: atmospheric CO₂ → plant organic matter.
  - Plant/animal respiration: organic carbon → atmospheric CO₂.
  - Microbial decomposition: dead organic matter / soil carbon → atmospheric CO₂.
- Show soils as a real carbon reservoir, not merely a label between arrows.
- Connect to water only briefly through plant processes; do not turn this into the later coupling slide.
- No number is required. If any number is used, choose one internally coherent approved dataset and cite it exactly. Do not mix the dated EP 63-billion-ton value with UE/CN values.
- Sources: UE pp.1211–1212; 地球系统与演变, Ch.4, PDF pp.61–62 and 71–74.

### Slide 26 — 海气之间的碳交换 | Air–Sea Carbon Exchange

- Teaching message: The ocean can absorb and release CO₂; it is not everywhere or always a one-way sink.
- Primary approved figure option: C-03, the CN Figure 4-8 global air–sea CO₂ flux map.
- If C-03 is placed:
  - Preserve the complete color scale and sign convention.
  - Positive means seawater releases CO₂; negative means seawater absorbs CO₂.
  - Keep the displayed unit `g/(m²·a)` and the approximate scale −108 to +108 readable.
  - Do not crop away legend, signs, units, or map context.
  - Add concise adjacent bilingual explanation rather than rewriting the figure.
  - Do not add the UE 80 Gt C/yr gross-exchange number to the same quantitative visual.
- Alternative: a fully native bidirectional exchange diagram from UE may use the ~80 Gt C/yr gross exchange, clearly labelled gross exchange and not anthropogenic ocean sink. If this alternative is chosen, do not place or numerically combine C-03.
- Sources: UE pp.1210–1211; 地球系统与演变, Figure 4-8, p.153 (PDF p.68).

READ COMPLETELY — READ ONLY:
- `AGENTS.md`
- `LECTURE16_MASTER_PROMPT.md.txt`
- `planning/PRODUCTION_WAVE2_GATE7_ALLOCATION.md`
- `planning/TASK_PROD_W2_WORKBUDDY.md`
- `planning/L16_BLUEPRINT_v1.md`
- `planning/L16_STYLE_SPEC_v1.md`
- `planning/L16_SOURCE_MATRIX.xlsx`
- `planning/L16_FIGURE_INDEX.xlsx`
- `review/L16_STYLE_SAMPLE_v01.pptx`
- `review/L16_STYLE_SAMPLE_v01.pdf`
- `review/L16_STYLE_SAMPLE_v01_previews/` and its approved `design_spec.md` / `spec_lock.md`.
- Your accepted continuity reference only: current `sections/PROD-W1-WORKBUDDY/L16_W1_WorkBuddy_Slides21-22-24_v01.pptx` and `previews/`. Do not use the `backup/` pre-revision deck.
- Approved image for this task: `assets/figures/approved/C-03_Fig4-8_PDF68_print153_raw.png`.

DO NOT READ AS AUTHORING INPUT:
Any other producer's Wave 1/Wave 2 directory, Qianwen validation files, WorkBuddy's own rejected backup deck, or Gate QA renders.

PPT-MASTER:
- Skill: `planning/tooling/ppt-master-v6.3.1/ppt-master/skills/ppt-master`
- Python: `planning/tooling/ppt-master-py312-v6.3.1/Scripts/python.exe`
- Run the attribution guard first and follow the selected route and every blocking gate.

BILINGUAL TERMS:
Fast Carbon Cycle 快速碳循环; Photosynthesis 光合作用; Respiration 呼吸; Decomposition 分解; Atmosphere 大气; Terrestrial Biosphere 陆地生物圈; Soil Carbon 土壤碳; Air–Sea Carbon Exchange 海气碳交换; Absorption 吸收; Release 释放; Gross Exchange 总交换.

STYLE / CONTENT LOCK:
- 1280 × 720; 13.3333 × 7.5 in; Microsoft YaHei with Arial fallback.
- White background and 72 px `#0E3F8C` header.
- Carbon accents `#EA580C` and `#C2410C`; retain water blue only where it carries ocean meaning.
- Flat native geometry, restrained rounded cards, no default shadows or gradients.
- Header numbering: Slide 25 = 2.5; Slide 26 = 2.6. Preserve page numbers 25 and 26.
- Each page requires one teaching message, bilingual title, complete source line, and embedded Notes.
- No narration audio or object animation.

OUTPUT DIRECTORY:
Use only `sections/PROD-W2-WORKBUDDY/`.

OUTPUT FILES:
- `sections/PROD-W2-WORKBUDDY/L16_W2_WorkBuddy_Slides25-26_v01.pptx`
- `sections/PROD-W2-WORKBUDDY/L16_W2_WorkBuddy_Slides25-26_v01.pdf`
- `sections/PROD-W2-WORKBUDDY/previews/` with two readable renders
- `sections/PROD-W2-WORKBUDDY/PROD-W2-WORKBUDDY_COMPLETION.md`
- All working files inside the same sole directory.

DO NOT:
- Do not create slides outside 25–26.
- Do not edit shared files, prior decks, or another producer's output.
- Do not search the web, add external figures, use AI-generated imagery, or invent values.
- Do not mix EP, UE, and CN quantitative carbon datasets.
- Do not misread the C-03 sign convention.
- Do not crop the C-03 legend or flatten the Slide 25 native loop.
- Do not add audio or object animation.

ACCEPTANCE CRITERIA:
1. Exactly Slides 25 and 26 in order.
2. Slide 25 accurately connects atmosphere, vegetation, and soils through photosynthesis, respiration, and decomposition.
3. Slide 26 clearly shows bidirectional ocean behavior with the correct sign convention and one coherent numerical representation.
4. Slide 25 remains fully native/editable. Slide 26 may contain only approved C-03 as raster evidence; adjacent explanation remains native/editable.
5. Complete source lines and consistent Notes; no unsupported sink claim or mixed dataset.
6. No overflow, overlap, clipping, distortion, placeholder, tiny substantive text, external relationship, audio, or object animation.
7. PPTX opens in PowerPoint; PDF and both previews are visually inspected.

REPORT FORMAT:
Use the exact Master Prompt §34 Completion Report fields and report actual model/context, slide order, Notes count, native/raster counts, C-03 crop/sign/unit verification, overflow/overlap, attribution, PowerPoint/PDF/render results, and deviations.

STOP CONDITION:
After completing and validating only Slides 25 and 26 and writing the Completion Report, stop. Do not start Slide 27/28, merge a section deck, or update shared project status.

