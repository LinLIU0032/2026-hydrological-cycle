# PROD-W1-DOUBAO

TASK ID:
PROD-W1-DOUBAO

ROLE:
PowerPoint Producer — 豆包工作

MODEL:
豆包2.1pro.

PROJECT ROOT:
`E:\PG\2026 Hydrological cycle`

OBJECTIVE:
Produce exactly three native/editable Lecture 16 slides: 10, 11, and 12. Work inside this project only. Match the approved Sample Deck and do not edit shared project artifacts.

ASSIGNED SLIDES:
- Slide 10 — 海洋与陆地的水量收支 | Ocean–Land Water Budget. Show that net atmospheric transport to land is balanced by runoff to the ocean in the approved textbook global budget. Sources: UE Figure 17.2, pp.1652 and 1655. W-03 may be used only as approved backup and its panel units must not be mixed.
- Slide 11 — 水的三相转换 | Phase Changes of Water. Explain that phase changes transfer water and energy. Use W-05 with concise bilingual labels; preserve arrow directions and all displayed source values.
- Slide 12 — 蒸发与蒸散 | Evaporation & Evapotranspiration. Show how ocean, land, and vegetation return water to the atmosphere through a native process diagram. Sources: CN Ch.4 §4.3.5, PDF pp.73–74; UE pp.1653–1654 and 1168.

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
- `assets/figures/approved/W-03_Fig3-15_PDF25_print110_raw.png`
- `assets/figures/approved/W-05_Fig3-17_PDF27_print112_raw.png`

PPT-MASTER:
- Skill: `planning/tooling/ppt-master-v6.3.1/ppt-master/skills/ppt-master`
- Python: `planning/tooling/ppt-master-py312-v6.3.1/Scripts/python.exe`
- Run the mandatory attribution guard. Stop and report `TOOL_ISSUE` on non-zero; never inspect, repair, or bypass the guard.

BILINGUAL TERMS:
Ocean–Land Water Budget 海洋与陆地水量收支; Atmospheric Transport 大气输送; Runoff 径流; Phase Change 相变; Evaporation 蒸发; Evapotranspiration 蒸散; Transpiration 蒸腾; Latent Heat 潜热.

STYLE / CONTENT LOCK:
1280 by 720, 16:9; Microsoft YaHei; body anchor 15 px; white background; 72 px `#0E3F8C` header; water accents `#1E4FA8` and `#3D7BD9`; flat geometry; no default shadows. Preserve original slide numbers 10–12. Each page requires one teaching message, bilingual title, source line, and speaker notes. Use the Sample Deck as the visual authority.

OUTPUT DIRECTORY:
Create and use only `sections/PROD-W1-DOUBAO/`.

OUTPUT FILES:
- `sections/PROD-W1-DOUBAO/L16_W1_Doubao_Slides10-12_v01.pptx`
- `sections/PROD-W1-DOUBAO/L16_W1_Doubao_Slides10-12_v01.pdf`
- `sections/PROD-W1-DOUBAO/previews/`
- `sections/PROD-W1-DOUBAO/PROD-W1-DOUBAO_COMPLETION.md`

DO NOT:
- Do not create any slide except 10–12.
- Do not edit the Sample Deck, planning files, source files, approved assets, status files, or another agent directory.
- Do not search the web, add external teaching content, use AI-generated figures, reopen textbooks to hunt for figures, or invent values.
- Do not mix W-03 panel units or alter W-05 arrow directions/values.
- Do not flatten native diagrams into screenshots. Do not add audio or object animation.
- If required evidence is unavailable, stop with `FIGURE_GAP`; do not improvise.

ACCEPTANCE CRITERIA:
Exactly three slides in original-number order; quantitative statements traceable; correct water-budget directions; W-05 readable and undistorted; native/editable Slide 12 process; no overflow, overlap, tiny text, placeholder, missing source, or unapproved figure; three speaker-note pages; final SVG/PPTX checks pass; PDF and previews visually inspected.

REPORT FORMAT:
Use the exact Master Prompt §34 fields and the PPT-agent QA additions: slides completed, overflow, image quality, missing attribution, unclear figures, placeholders, and Style Spec deviations.

STOP CONDITION:
After producing and validating only Slides 10–12, write the Completion Report and stop. Do not start another slide or update shared project status.
