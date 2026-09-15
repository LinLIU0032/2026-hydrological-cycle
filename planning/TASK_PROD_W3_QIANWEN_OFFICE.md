# PROD-W3-QIANWEN-OFFICE — 可直接转发提示词

TASK ID:
PROD-W3-QIANWEN-OFFICE

ROLE:
PowerPoint Producer — 千问办公 / QwenWork

PROJECT ROOT:
`E:\PG\2026 Hydrological cycle`

PRODUCT / MODEL REPORTING:
- Product must be 千问办公 / QwenWork.
- Use the current production-capable model selected in 千问办公.
- Report the underlying model and context length if the product exposes them. If not exposed, state `not disclosed`. Do not guess.

GATE PURPOSE:
This is Production Wave 3 toward GATE 8. Produce only original Slides 36, 37, and 39. Do not create Slide 38, Slide 40, another slide, or any integrated deck. GATE 9 remains blocked.

STARTUP CONFIRMATION:
Before production, report the project root, product/model/context disclosure status, assigned slides 36, 37, 39, sole output directory `sections/PROD-W3-QIANWEN-OFFICE/`, and the project-local `ppt-master` attribution-guard result. Stop with `TOOL_ISSUE` if the root, output restriction, or guard fails. Do not inspect, repair, or bypass a failed guard.

OBJECTIVE:
Produce exactly one three-slide native/editable deck containing original Slides 36, 37, and 39 in that order. Use one consistent feedback-loop visual family. Follow the approved Sample Slides 35 and 38 as the primary visual and conceptual continuity references.

ASSIGNED SLIDES:

### Slide 36 — 水汽反馈 | Water-Vapor Feedback

- Teaching message: Warming increases evaporation and atmospheric water vapor, strengthening greenhouse warming.
- Create one native editable positive-feedback loop with the exact direction:
  1. Initial warming.
  2. Evaporation increases.
  3. Atmospheric water vapor increases.
  4. Greenhouse effect strengthens.
  5. Further warming.
- Mark the loop clearly as `Positive Feedback 正反馈` because the induced change reinforces the initial warming.
- Treat water vapor as a feedback responding to initial warming, not as an unexplained independent forcing.
- No number is required. Do not add the CN 7% per °C or 75% greenhouse-contribution values.
- Do not re-teach the full greenhouse effect from Lecture 15.
- Sources: UE Ch.12 p.1177; EP Ch.23 pp.883–884. CN Ch.3 PDF pp.10 and 27–28 may support phase-change context only.

### Slide 37 — 冰–反照率反馈 | Ice–Albedo Feedback

- Teaching message: Warming reduces ice/snow and albedo, increasing absorbed solar energy and further warming.
- Create one native editable positive-feedback loop with the exact direction:
  1. Initial warming.
  2. Ice and snow decrease.
  3. Surface albedo decreases.
  4. Absorbed solar energy increases.
  5. Further warming.
- Mark it clearly as `Positive Feedback 正反馈`.
- Keep `albedo` defined as surface reflectivity in a short bilingual label.
- No albedo percentage, ice-volume dataset, sea-level value, or Snowball Earth history is required.
- Do not imply that melting floating sea ice directly raises sea level like melting land ice.
- Sources: UE Ch.12 p.1177; 地球系统与演变 Ch.3 PDF pp.39–40; HB Ch.9 pp.251–252 as mechanism context only.

### Slide 39 — 生命也参与反馈 | Biosphere Feedback

- Teaching message: Higher CO₂ can stimulate plant growth and carbon uptake, providing a representative negative feedback.
- Create one native editable negative-feedback loop with the approved direction:
  1. Atmospheric CO₂ increases.
  2. Plant growth can increase.
  3. Plants take up more CO₂ into organic matter.
  4. Atmospheric CO₂ and greenhouse warming are reduced relative to the initial change.
- Use conditional language: `can stimulate` / `可促进`. Do not claim unlimited growth, permanent compensation, or a measured present-day net sink.
- Mark the loop as `Negative Feedback 负反馈` because it opposes the initial CO₂ increase/warming.
- No flux or response-time number is authorized. Do not extend into nutrient limitation, ecosystem ecology, policy, or land management.
- Sources: UE Ch.12 p.1178; UE p.1168 and approved CN Ch.4 rows as process context only.

APPROVED VISUAL BRIEF:
- F-02 is an approved native/vector brief for Slides 35–37 and 39–41.
- Create the loops from approved source text. Do not use an external infographic, textbook screenshot, generated image, or decorative icon set.

READ COMPLETELY — READ ONLY:
- `AGENTS.md`
- `LECTURE16_MASTER_PROMPT.md.txt`
- `qa/checkpoints/2026-09-14_gate8-handoff.md`
- `qa/GATE7_R1_ACCEPTANCE_20260914.md`
- `planning/PRODUCTION_WAVE3_GATE8_ALLOCATION.md`
- `planning/TASK_PROD_W3_QIANWEN_OFFICE.md`
- `planning/L16_BLUEPRINT_v1.md`
- `planning/L16_STYLE_SPEC_v1.md`
- `planning/L16_SOURCE_MATRIX.xlsx`
- `planning/L16_FIGURE_INDEX.xlsx`
- `review/L16_STYLE_SAMPLE_v01.pptx`
- `review/L16_STYLE_SAMPLE_v01.pdf`
- `review/L16_STYLE_SAMPLE_v01_previews/` and its approved `design_spec.md` / `spec_lock.md`.
- Your continuity reference only: current top-level PPTX/PDF/previews under `sections/PROD-W2-QIANWEN-OFFICE/`.

KNOWN QUALITY LOCKS:
- Use the exact term `大气圈`, never `大圈`, in visible text and Notes.
- Every factual statement must have a complete readable source line. Notes must use the same sources.
- Do not reuse or copy the Wave 1 validation deck. It remains excluded from final integration.
- Do not guess the model/context if 千问办公 does not disclose them.

DO NOT READ AS AUTHORING INPUT:
- Any other producer's production directory.
- The Wave 1 Qianwen validation deck, Gate QA renders, exports, or backups.

PPT-MASTER:
- Skill: `planning/tooling/ppt-master-v6.3.1/ppt-master/skills/ppt-master`
- Python: `planning/tooling/ppt-master-py312-v6.3.1/Scripts/python.exe`
- Run the mandatory attribution guard first and follow the selected route and every blocking gate.

BILINGUAL TERMS:
Feedback 反馈; Positive Feedback 正反馈; Negative Feedback 负反馈; Initial Change 初始变化; Induced Change 诱发变化; Water Vapor 水汽; Evaporation 蒸发; Greenhouse Effect 温室效应; Ice–Albedo Feedback 冰–反照率反馈; Ice and Snow 冰雪; Albedo 反照率; Surface Reflectivity 地表反射率; Absorbed Solar Energy 吸收的太阳能; Biosphere 生物圈; Plant Growth 植物生长; Carbon Uptake 碳吸收; Organic Matter 有机质; Atmospheric CO₂ 大气 CO₂.

STYLE / CONTENT LOCK:
- 1280 × 720; 13.3333 × 7.5 in; Microsoft YaHei with Arial fallback.
- White canvas and 72 px `#0E3F8C` header.
- Feedback pages use blue as the main architecture. Carbon orange may mark CO₂ on Slide 39 only.
- Flat native loops, restrained rounded cards, no default shadows, gradients, external icons, or decorative images.
- Header numbering: Slide 36 = 3.2; Slide 37 = 3.3; Slide 39 = 3.5. Preserve page numbers 36, 37, 39 and the approved Sample Slide 38 = 3.4 sequence.
- One visible teaching message, bilingual title, complete source line, and embedded Notes on every page.
- No narration audio, timed advance, or object animation.

OUTPUT DIRECTORY:
Use only `sections/PROD-W3-QIANWEN-OFFICE/`.

OUTPUT FILES:
- `sections/PROD-W3-QIANWEN-OFFICE/L16_W3_QianwenOffice_Slides36-37_39_v01.pptx`
- `sections/PROD-W3-QIANWEN-OFFICE/L16_W3_QianwenOffice_Slides36-37_39_v01.pdf`
- `sections/PROD-W3-QIANWEN-OFFICE/previews/` with three readable renders
- `sections/PROD-W3-QIANWEN-OFFICE/PROD-W3-QIANWEN-OFFICE_COMPLETION.md`
- All working files must stay inside the same sole output directory.

DO NOT:
- Do not create Slide 38, Slide 40, or any slide outside 36, 37, 39.
- Do not edit shared planning/assets/review/QA/status files, prior decks, or another producer's output.
- Do not search the web, add external content, use AI-generated imagery, or invent facts/numbers.
- Do not reopen textbooks to hunt for figures.
- Do not flatten the native feedback loops into screenshots.
- Do not present feedback sign as good/bad, confuse water vapor with an independent initial forcing, or overstate plant-growth compensation.
- Do not begin main-deck integration.

ACCEPTANCE CRITERIA:
1. Exactly Slides 36, 37, and 39 in that order.
2. Slide 36 preserves the complete positive water-vapor loop and identifies initial versus induced change.
3. Slide 37 preserves the complete positive ice–albedo loop without unrelated cryosphere claims.
4. Slide 39 uses conditional language and presents the UE plant-growth example as a bounded representative negative feedback.
5. All three loops are native/editable and form one consistent visual family.
6. Correct terminology, complete source lines, and Notes consistent with visible content.
7. No overflow, overlap, clipping, distortion, placeholder, tiny substantive text, external relationship, audio, timed advance, or object animation.
8. PPTX opens in Microsoft PowerPoint. The three-slide PDF and all three previews are visually inspected.

REPORT FORMAT:
Use the exact Master Prompt §34 fields. Also report model/context disclosure, slide order, Notes count, native/raster counts, feedback-sign and arrow-direction checks, terminology/source-line checks, overflow/overlap results, PowerPoint/PDF/render verification, and every deviation.

STOP CONDITION:
After completing and validating exactly Slides 36, 37, and 39 and writing the Completion Report, stop. Do not create Slide 38/40, merge any deck, update shared status, or begin GATE 9.

