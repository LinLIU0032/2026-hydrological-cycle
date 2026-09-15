# PROD-W2-DOUBAO — 可直接转发提示词

TASK ID:
PROD-W2-DOUBAO

ROLE:
PowerPoint Producer — 豆包工作

PROJECT ROOT:
`E:\PG\2026 Hydrological cycle`

REQUIRED PRODUCT / MODEL:
- Product: 豆包工作, not ordinary 豆包 chat.
- Model: 豆包2.1pro.

GATE PURPOSE:
This is Production Wave 2 toward GATE 7. Produce only Slides 13, 14, and 15. Do not start any other slide or final integration.

STARTUP CONFIRMATION:
Before production, report the project root, product/model, assigned slides 13–15, sole output directory `sections/PROD-W2-DOUBAO/`, and the project-local `ppt-master` attribution-guard result. Stop with `TOOL_ISSUE` if any required condition fails; do not inspect, repair, or bypass the guard.

OBJECTIVE:
Produce exactly one three-slide native/editable deck containing original Slides 13, 14, and 15 in order. Continue the approved water-section visual language from the Sample Deck and your accepted Slides 10–12.

ASSIGNED SLIDES:

### Slide 13 — 水汽输送、凝结与降水 | Moisture Transport, Condensation & Precipitation

- Teaching message: The atmosphere is a small reservoir with rapid exchange.
- Native pathway: evaporation / water vapor → atmospheric transport → cooling and condensation → precipitation.
- Use CN Table 3-1 / W-04 for the coherent pair `atmospheric water storage 12,900 km³` and `average residence time 9 days` if numbers are shown.
- Do not combine the CN 12,900 km³ value with the UE rounded 1.5×10⁴ km³ value on the same slide.
- UE supports the process: solar heating drives evaporation, atmospheric movement transports vapor, and cooling/condensation produces cloud droplets and precipitation.
- Keep global atmospheric circulation detail out of scope.
- Sources: UE pp.1653, 1148, 1150; 地球系统与演变, Table 3-1, p.94 (PDF p.9). W-04 is a verification base, not a full small pasted table.

### Slide 14 — 降水落地后去了哪里？ | Runoff & Infiltration

- Teaching message: Precipitation partitions among runoff, infiltration, and evapotranspiration.
- Use a native editable partition diagram with correct directions.
- Infiltration enters soil/rock through pores or cracks. Runoff includes overland flow plus near-surface infiltrated water that returns to the surface.
- Do not imply that all infiltrated water is permanently removed from runoff.
- Do not invent a global percentage split. Do not reuse the Slide 10 global 36/36 budget as a local partition.
- W-03 is not authorized for placement in this Wave 2 task because its Figure Index roster does not include Slide 14. Use the approved source statements to make a native diagram instead.
- Sources: UE pp.1654 and 1667; Source Matrix approved CN Ch.3 rows for runoff/infiltration.

### Slide 15 — 地下水：慢一些的路径 | Groundwater: A Slower Pathway

- Teaching message: Recharge, storage, and discharge define the limited groundwater scope.
- Use a native editable three-step cross-section or process field: precipitation/infiltration → recharge/storage below the water table → discharge to spring, stream, evaporation, or ocean.
- Keep the core slide at recharge–storage–discharge level. Porosity, aquifer engineering, pumping cones, contamination, and resource-management expansion are out of scope.
- Avoid the Source Matrix conflict between `1.05% of all water` and `~29% of fresh water`; no absolute groundwater-share statistic is required.
- If selected residence-time examples are shown, use only CN Table 3-1 / W-04 values and identify the source.
- Sources: UE pp.1675, 1682–1688, 1694–1695; 地球系统与演变, Ch.3, PDF pp.13–14.

READ COMPLETELY — READ ONLY:
- `AGENTS.md`
- `LECTURE16_MASTER_PROMPT.md.txt`
- `planning/PRODUCTION_WAVE2_GATE7_ALLOCATION.md`
- `planning/TASK_PROD_W2_DOUBAO.md`
- `planning/L16_BLUEPRINT_v1.md`
- `planning/L16_STYLE_SPEC_v1.md`
- `planning/L16_SOURCE_MATRIX.xlsx`
- `planning/L16_FIGURE_INDEX.xlsx`
- `review/L16_STYLE_SAMPLE_v01.pptx`
- `review/L16_STYLE_SAMPLE_v01.pdf`
- `review/L16_STYLE_SAMPLE_v01_previews/`
- Sample `design_spec.md` and `spec_lock.md` under the approved preview workspace.
- Your accepted continuity reference only: `sections/PROD-W1-DOUBAO/L16_W1_Doubao_Slides10-12_v01.pptx` and its `previews/`.
- Approved asset for this task: `assets/figures/approved/W-04_Table3-1_PDF09_print094_raw.png`.

DO NOT READ AS AUTHORING INPUT:
Any other producer's Wave 1/Wave 2 outputs, Qianwen validation outputs, or Gate QA renders.

PPT-MASTER:
- Skill: `planning/tooling/ppt-master-v6.3.1/ppt-master/skills/ppt-master`
- Python: `planning/tooling/ppt-master-py312-v6.3.1/Scripts/python.exe`
- Run the attribution guard first; follow the selected route and every blocking gate.

BILINGUAL TERMS:
Water Vapor 水汽; Moisture Transport 水汽输送; Condensation 凝结; Precipitation 降水; Runoff 径流; Infiltration 入渗; Evapotranspiration 蒸散; Groundwater 地下水; Recharge 补给; Storage 储存; Discharge 排泄; Water Table 地下水位.

STYLE / CONTENT LOCK:
- 1280 × 720; 13.3333 × 7.5 in; Microsoft YaHei with Arial fallback.
- White background, 72 px `#0E3F8C` header, water accents `#1E4FA8` and `#3D7BD9`.
- Flat native geometry, restrained rounded cards, no default shadows or gradients.
- Header numbers: 13 = 1.10; 14 = 1.11; 15 = 1.12. Preserve page numbers 13, 14, 15.
- One teaching message, bilingual title, complete readable source line, and embedded Notes on every page.
- No narration audio or object animation.

OUTPUT DIRECTORY:
Use only `sections/PROD-W2-DOUBAO/`.

OUTPUT FILES:
- `sections/PROD-W2-DOUBAO/L16_W2_Doubao_Slides13-15_v01.pptx`
- `sections/PROD-W2-DOUBAO/L16_W2_Doubao_Slides13-15_v01.pdf`
- `sections/PROD-W2-DOUBAO/previews/` with three readable renders
- `sections/PROD-W2-DOUBAO/PROD-W2-DOUBAO_COMPLETION.md`
- All working files inside the same directory.

DO NOT:
- Do not create slides outside 13–15.
- Do not edit shared files, prior decks, or another producer's directory.
- Do not place W-03, search the web, add external content, use AI-generated imagery, or invent values.
- Do not mix the 12,900 and 15,000 km³ atmospheric-water conventions.
- Do not add a global numerical runoff/infiltration split.
- Do not flatten the native process diagrams into screenshots.
- Do not add audio or object animation.

ACCEPTANCE CRITERIA:
1. Exactly Slides 13, 14, 15 in order.
2. Slide 13 shows the correct evaporation–transport–condensation–precipitation pathway and uses one coherent atmospheric-water convention.
3. Slide 14 correctly partitions precipitation without unsupported percentages or false permanent-removal logic.
4. Slide 15 is limited to recharge, storage, and discharge and avoids conflicting groundwater-share numbers.
5. All main visuals are native/editable; W-04 is verification support only.
6. Titles, numbering, terms, sources, Notes, style, and teaching pace match locked artifacts.
7. No overflow, overlap, clipping, distortion, placeholder, tiny substantive text, incomplete attribution, external relationship, audio, or object animation.
8. PPTX opens in PowerPoint; PDF and all three previews are visually inspected.

REPORT FORMAT:
Use the exact Master Prompt §34 fields and report the actual model, completed slide order, Notes count, native/raster counts, overflow/overlap results, image policy, attribution, PowerPoint/PDF/render checks, and every deviation.

STOP CONDITION:
After completing and validating only Slides 13–15 and writing the Completion Report, stop. Do not begin another slide, merge the main deck, or update shared status.

