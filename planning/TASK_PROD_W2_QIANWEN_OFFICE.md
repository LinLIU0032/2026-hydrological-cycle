# PROD-W2-QIANWEN-OFFICE — 可直接转发提示词

TASK ID:
PROD-W2-QIANWEN-OFFICE

ROLE:
PowerPoint Producer — 千问办公

PROJECT ROOT:
`E:\PG\2026 Hydrological cycle`

PRODUCT / MODEL REPORTING:
- Product must be 千问办公 / QwenWork.
- Use the current production-capable model selected in 千问办公.
- Report the underlying model and context length if the product exposes them. If not exposed, state `not disclosed`; do not guess.

USER ACCEPTANCE:
The user has accepted your Wave 1 capability validation and authorized you to join Production Wave 2. The validation deck is not part of the final Lecture 16 deck and is only a secondary visual-continuity reference.

GATE PURPOSE:
This is Production Wave 2 toward GATE 7. Produce only Slides 16 and 17. Do not start any other slide or final integration.

STARTUP CONFIRMATION:
Before production, report the project root, product/model/context disclosure status, assigned slides 16–17, sole output directory `sections/PROD-W2-QIANWEN-OFFICE/`, and the project-local `ppt-master` attribution-guard result. Stop with `TOOL_ISSUE` if the project root, output restriction, or guard fails; do not inspect, repair, or bypass a failed guard.

OBJECTIVE:
Produce exactly one two-slide native/editable deck containing original Slides 16 and 17 in that order. Follow the approved Sample Deck as the primary style authority.

ASSIGNED SLIDES:

### Slide 16 — 冰冻圈：会移动的水库 | Cryosphere as a Water Reservoir

- Teaching message: Cryosphere exchange affects water storage, sea level, and climate.
- Use a native editable reservoir/exchange diagram that distinguishes:
  - Land ice / ice sheets / glaciers.
  - Ice shelves where relevant.
  - Sea ice.
  - Exchange with ocean and atmosphere through accumulation, melting, and seasonal change.
- Make the sea-level distinction explicit: transfer into continental ice lowers sea level; melting continental ice raises it. Do not imply that melting floating sea ice has the same direct sea-level effect.
- Use a qualitative or source-consistent comparison. Do not place conflicting absolute cryosphere-volume datasets together.
- Do not reuse the UE Figure 17.1 volume after switching to a different CN absolute-volume convention.
- Sources: UE pp.1159–1162; 地球系统与演变, Ch.3, PDF pp.15–19; EP p.881 for ocean–continental-ice redistribution.

### Slide 17 — 水也进入岩石和地球内部 | Deep Water Cycle

- Teaching message: Subduction carries water inward; mantle and volcanic processes return water outward.
- Primary approved figure: W-06 / CN Figure 3-13.
- Use W-06 intact at legible size or make a faithful bilingual native simplification.
- Preserve the directional topology: surface/ocean water → hydrated oceanic crust and sediment → subduction → mantle/deep storage → melting/volcanism → surface/atmosphere.
- Preserve any retained depth boundaries and arrow meanings. Do not reverse subduction or volcanic-return arrows.
- The slide's job is to correct the impression that the water cycle occurs only at the surface. Keep hydrothermal wells, groundwater-resource management, and speculative mantle totals out of scope.
- Deep-cycle numbers are optional and not memorization targets. If used, copy one approved CN dataset exactly and label its units; do not combine it with HB's separate supporting estimates.
- Sources: 地球系统与演变, Figure 3-13, p.106 (PDF p.21); HB Ch.9 approved volatile-cycling text as supporting context only.

READ COMPLETELY — READ ONLY:
- `AGENTS.md`
- `LECTURE16_MASTER_PROMPT.md.txt`
- `planning/PRODUCTION_WAVE2_GATE7_ALLOCATION.md`
- `planning/TASK_PROD_W2_QIANWEN_OFFICE.md`
- `planning/L16_BLUEPRINT_v1.md`
- `planning/L16_STYLE_SPEC_v1.md`
- `planning/L16_SOURCE_MATRIX.xlsx`
- `planning/L16_FIGURE_INDEX.xlsx`
- `review/L16_STYLE_SAMPLE_v01.pptx`
- `review/L16_STYLE_SAMPLE_v01.pdf`
- `review/L16_STYLE_SAMPLE_v01_previews/` and its approved `design_spec.md` / `spec_lock.md`.
- Secondary visual reference only: `sections/PROD-W1-QIANWEN-OFFICE-VALIDATION/L16_W1_QianwenOffice_Validation_v01.pptx` and its `previews/`.
- Approved image for this task: `assets/figures/approved/W-06_Fig3-13_PDF21_print106_raw.png`.

KNOWN QUALITY LOCKS:
- Use the exact term `大气圈`, never `大圈`, in visible text and Notes.
- Every fact or number added beyond the locked teaching message needs a complete readable source line.
- Do not copy the Slide 12 ET wording from the validation deck; it is outside this task and is not a terminology precedent.

DO NOT READ AS AUTHORING INPUT:
Any other producer's Wave 1/Wave 2 output or Gate QA renders.

PPT-MASTER:
- Skill: `planning/tooling/ppt-master-v6.3.1/ppt-master/skills/ppt-master`
- Python: `planning/tooling/ppt-master-py312-v6.3.1/Scripts/python.exe`
- Run the mandatory attribution guard first and follow the selected route and every blocking gate.

BILINGUAL TERMS:
Cryosphere 冰冻圈; Ice Sheet 冰盖; Glacier 冰川; Ice Shelf 冰架; Sea Ice 海冰; Accumulation 积累; Melting 消融 / 融化; Sea Level 海平面; Deep Water Cycle 深部水循环; Hydrated Oceanic Crust 含水洋壳; Sediment 沉积物; Subduction 俯冲; Mantle 地幔; Volcanism 火山作用; Degassing 脱气.

STYLE / CONTENT LOCK:
- 1280 × 720; 13.3333 × 7.5 in; Microsoft YaHei with Arial fallback.
- White background, 72 px `#0E3F8C` header, water accents `#1E4FA8` and `#3D7BD9`.
- Flat native geometry, restrained rounded cards, no default shadows or gradients.
- Header numbering: Slide 16 = 1.13; Slide 17 = 1.14. Preserve page numbers 16 and 17.
- Each page requires one teaching message, bilingual title, complete source line, and embedded Notes.
- No narration audio or object animation.

OUTPUT DIRECTORY:
Use only `sections/PROD-W2-QIANWEN-OFFICE/`.

OUTPUT FILES:
- `sections/PROD-W2-QIANWEN-OFFICE/L16_W2_QianwenOffice_Slides16-17_v01.pptx`
- `sections/PROD-W2-QIANWEN-OFFICE/L16_W2_QianwenOffice_Slides16-17_v01.pdf`
- `sections/PROD-W2-QIANWEN-OFFICE/previews/` with two readable renders
- `sections/PROD-W2-QIANWEN-OFFICE/PROD-W2-QIANWEN-OFFICE_COMPLETION.md`
- All working files inside the same directory.

DO NOT:
- Do not create slides outside 16–17.
- Do not edit shared planning/assets/review/QA/status files or another producer's output.
- Do not search the web, add external figures, use AI-generated imagery, or invent values.
- Do not combine conflicting cryosphere volumes or speculative mantle-water totals.
- Do not reverse W-06 pathways, crop away required labels, or flatten a native redraw into a screenshot.
- Do not add audio or object animation.

ACCEPTANCE CRITERIA:
1. Exactly Slides 16 and 17 in order.
2. Slide 16 distinguishes continental ice, sea ice, storage, sea-level effect, and climate exchange without conflicting absolute datasets.
3. Slide 17 preserves the subduction–mantle–volcanism topology and uses only approved W-06/source statements.
4. Slide 16 is fully native/editable; Slide 17 is native/editable except approved W-06 if kept as raster evidence.
5. Correct terminology, complete source lines, and Notes consistent with the visible slides.
6. No overflow, overlap, clipping, distortion, placeholder, tiny substantive text, external relationship, audio, or object animation.
7. PPTX opens in PowerPoint; PDF and both previews are visually inspected.

REPORT FORMAT:
Use the exact Master Prompt §34 fields. Also report model/context disclosure, slide order, Notes count, native/raster counts, W-06 crop/aspect/direction checks, overflow/overlap, attribution, PowerPoint/PDF/render verification, and deviations.

STOP CONDITION:
After completing and validating only Slides 16 and 17 and writing the Completion Report, stop. Do not start Slide 18, merge a main deck, or update shared project status.

