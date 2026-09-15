# PROD-W1-QODER-CN

TASK ID:
PROD-W1-QODER-CN

ROLE:
PowerPoint Producer — Qoder CN

MODEL / CONTEXT:
Qwen3.8max; context length 1M.

PROJECT ROOT:
`E:\PG\2026 Hydrological cycle`

OBJECTIVE:
Produce exactly three native/editable Lecture 16 slides: 04, 05, and 06. Work inside this project only. Match the approved Sample Deck and do not edit any shared planning, source, asset, Sample, status, or other agent file.

ASSIGNED SLIDES:
- Slide 04 — 什么在循环？ | What Is Actually Cycling? Matter moves continuously among Earth-system reservoirs. Use a native reservoir-transfer schematic. Sources: UE Ch.12 PDF pp.1146–1147; CN Chapters 3–4.
- Slide 05 — 读懂全球循环的四个词 | Four Ideas for Reading Global Cycles. Teach Reservoir, Flux, Residence Time, and Feedback as the common reading framework. Sources: UE pp.1205 and 1647–1650; EP p.881.
- Slide 06 — 地球的水在哪里？ | Where Is Earth's Water? Show the uneven distribution of Earth's water with one internally coherent native chart/redraw based on UE Figure 17.1 values. W-01 is backup only; do not mix datasets.

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
- Approved assets under `assets/figures/approved/`; use only the asset IDs listed above.

PPT-MASTER:
- Skill: `planning/tooling/ppt-master-v6.3.1/ppt-master/skills/ppt-master`
- Python: `planning/tooling/ppt-master-py312-v6.3.1/Scripts/python.exe`
- Run the mandatory attribution guard. Stop and report `TOOL_ISSUE` on non-zero; never inspect, repair, or bypass the guard.

BILINGUAL TERMS:
Reservoir 储库; Flux 通量; Residence Time 停留时间; Feedback 反馈; Hydrosphere 水圈; Atmosphere 大气圈; Cryosphere 冰冻圈; Groundwater 地下水.

STYLE / CONTENT LOCK:
1280 by 720, 16:9; Microsoft YaHei; body anchor 15 px; white background; 72 px `#0E3F8C` header; water accents `#1E4FA8` and `#3D7BD9`; flat geometry; no default shadows. Preserve original slide numbers 04–06. Each page must have one teaching message, bilingual title, source line, and speaker notes. Use the Sample Deck as the visual authority.

OUTPUT DIRECTORY:
Create and use only `sections/PROD-W1-QODER-CN/`.

OUTPUT FILES:
- `sections/PROD-W1-QODER-CN/L16_W1_QoderCN_Slides04-06_v01.pptx`
- `sections/PROD-W1-QODER-CN/L16_W1_QoderCN_Slides04-06_v01.pdf`
- `sections/PROD-W1-QODER-CN/previews/`
- `sections/PROD-W1-QODER-CN/PROD-W1-QODER-CN_COMPLETION.md`

DO NOT:
- Do not create any slide except 04–06.
- Do not edit the Sample Deck, planning files, source files, approved assets, project status files, or another agent directory.
- Do not search the web, add external teaching content, use AI-generated figures, reopen textbooks to hunt for figures, or invent values.
- Do not change the five Learning Objectives, the Blueprint, terminology, palette, canvas, or established source decisions.
- Do not flatten native charts/diagrams into screenshots. Do not add audio or object animation.
- If required evidence is unavailable, stop with `FIGURE_GAP`; do not improvise.

ACCEPTANCE CRITERIA:
Exactly three slides in original-number order; all content traceable to approved inputs; Slide 06 uses one coherent UE Figure 17.1 dataset; native/editable visual objects; no overflow, overlap, distorted image, tiny text, placeholder, missing source, or unapproved figure; three speaker-note pages; final SVG/PPTX checks pass; PDF and previews visually inspected.

REPORT FORMAT:
Use the exact Master Prompt §34 fields: TASK ID, STATUS, OUTPUT FILES, WHAT WAS DONE, SOURCES USED, FIGURES USED, DECISIONS MADE, DEVIATIONS FROM PLAN, PROBLEMS FOUND, UNFINISHED ITEMS, PLACEHOLDERS, SELF-QA, QUESTIONS. Also report slides completed, overflow, image quality, missing attribution, unclear figures, placeholders, and Style Spec deviations.

STOP CONDITION:
After producing and validating only Slides 04–06, write the Completion Report and stop. Do not start another slide or update shared project status.
