# PROD-W1-WORKBUDDY

TASK ID:
PROD-W1-WORKBUDDY

ROLE:
PowerPoint Producer — WorkBuddy

MODEL / CONTEXT:
Deepseek-V4.1-Flash; context length 1M.

PROJECT ROOT:
`E:\PG\2026 Hydrological cycle`

OBJECTIVE:
Produce exactly three native/editable Lecture 16 slides: 21, 22, and 24. Work inside this project only. Match the approved Sample Deck and do not edit shared project artifacts.

ASSIGNED SLIDES:
- Slide 21 — 为什么接下来讲碳？ | Why Carbon? Bridge from water to carbon: carbon connects climate, life, ocean, and rocks through the same reservoir/flux framework. Sources: UE pp.1204–1205; CN Ch.4 §4.1. Use an active Part II cue plus system bridge.
- Slide 22 — 碳储存在哪里？ | Carbon Reservoirs. Show atmosphere, biosphere, soils, ocean, sediments, and rocks as a reservoir hierarchy. Sources: UE pp.1209–1210; CN PDF pp.58–64. C-01 is primary evidence and C-02 is approved backup; do not mix incompatible values.
- Slide 24 — 同样的语言，不同的时间尺度 | Same Framework, Different Timescales. Align water and carbon using Reservoir, Flux, and Residence Time while making clear that the clocks differ. Sources: UE pp.1205–1206 and 1209–1213; CN Figures 4-15 and 4-16. Use an aligned native comparison, not a new quantitative timescale table.

INPUT FILES — READ ONLY:
- `AGENTS.md`
- `planning/L16_BLUEPRINT_v1.md`
- `planning/L16_STYLE_SPEC_v1.md`
- `planning/L16_SOURCE_MATRIX.xlsx`
- `planning/L16_FIGURE_INDEX.xlsx`
- `review/L16_STYLE_SAMPLE_v01.pptx`
- `review/L16_STYLE_SAMPLE_v01_previews/`
- `review/L16_STYLE_SAMPLE_v01_previews/L16_STYLE_SAMPLE_v01_ppt169_20260910/design_spec.md`
- `review/L16_STYLE_SAMPLE_v01_previews/L16_STYLE_SAMPLE_v01_ppt169_20260910/spec_lock.md`
- `assets/figures/approved/C-01_UE_Fig12-19_PDF1209_raw.png`
- `assets/figures/approved/C-02_Fig4-2_PDF59_print144_raw.png`
- `assets/figures/approved/C-05_Fig4-16_PDF80_print165_raw.png`

PPT-MASTER:
- Skill: `planning/tooling/ppt-master-v6.3.1/ppt-master/skills/ppt-master`
- Python: `planning/tooling/ppt-master-py312-v6.3.1/Scripts/python.exe`
- Run the mandatory attribution guard. Stop and report `TOOL_ISSUE` on non-zero; never inspect, repair, or bypass the guard.

BILINGUAL TERMS:
Carbon Cycle 碳循环; Carbon Reservoir 碳储库; Atmosphere 大气; Biosphere 生物圈; Soil 土壤; Ocean 海洋; Sediment 沉积物; Lithosphere 岩石圈; Reservoir 储库; Flux 通量; Residence Time 停留时间; Timescale 时间尺度.

STYLE / CONTENT LOCK:
1280 by 720, 16:9; Microsoft YaHei; body anchor 15 px; white background; 72 px `#0E3F8C` header; carbon accents `#EA580C` and `#C2410C`, with water blue only for cross-cycle comparison; flat geometry; no default shadows. Preserve original slide numbers 21, 22, and 24. Each page requires one teaching message, bilingual title, source line, and speaker notes. Use the Sample Deck as the visual authority.

OUTPUT DIRECTORY:
Create and use only `sections/PROD-W1-WORKBUDDY/`.

OUTPUT FILES:
- `sections/PROD-W1-WORKBUDDY/L16_W1_WorkBuddy_Slides21-22-24_v01.pptx`
- `sections/PROD-W1-WORKBUDDY/L16_W1_WorkBuddy_Slides21-22-24_v01.pdf`
- `sections/PROD-W1-WORKBUDDY/previews/`
- `sections/PROD-W1-WORKBUDDY/PROD-W1-WORKBUDDY_COMPLETION.md`

DO NOT:
- Do not create any slide except 21, 22, and 24.
- Do not edit the Sample Deck, planning files, source files, approved assets, status files, or another agent directory.
- Do not search the web, add external teaching content, use AI-generated figures, reopen textbooks to hunt for figures, invent values, or create a unified numerical timescale table not present in the approved sources.
- Do not mix C-01 and C-02 numerical datasets in one visual.
- Do not flatten native comparisons into screenshots. Do not add audio or object animation.
- If required evidence is unavailable, stop with `FIGURE_GAP`; do not improvise.

ACCEPTANCE CRITERIA:
Exactly three slides in original-number order; coherent Part II transition; Slide 22 reservoir hierarchy traceable to one selected dataset; Slide 24 makes framework equivalence and clock difference clear without unsupported numbers; native/editable objects; no overflow, overlap, distortion, tiny text, placeholder, missing source, or unapproved figure; three speaker-note pages; final SVG/PPTX checks pass; PDF and previews visually inspected.

REPORT FORMAT:
Use the exact Master Prompt §34 fields and the PPT-agent QA additions: slides completed, overflow, image quality, missing attribution, unclear figures, placeholders, and Style Spec deviations.

STOP CONDITION:
After producing and validating only Slides 21, 22, and 24, write the Completion Report and stop. Do not start another slide or update shared project status.
