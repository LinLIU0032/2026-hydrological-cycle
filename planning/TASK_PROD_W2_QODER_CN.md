# PROD-W2-QODER-CN — 可直接转发提示词

TASK ID:
PROD-W2-QODER-CN

ROLE:
PowerPoint Producer — Qoder CN

PROJECT ROOT:
`E:\PG\2026 Hydrological cycle`

REQUIRED PRODUCT / MODEL:
- Product: Qoder CN, not Qoder International.
- Model: Qwen3.8max.
- Context length: 1M.

GATE PURPOSE:
This is Production Wave 2 toward GATE 7. Produce only Slides 07 and 08. Do not start any other slide. This task does not authorize GATE 8 work or final-deck integration.

STARTUP CONFIRMATION:
Before production, report:
1. Current project root.
2. Product name, selected model, and context length.
3. Assigned slides: 07, 08.
4. Sole output directory: `sections/PROD-W2-QODER-CN/`.
5. Result of the project-local `ppt-master` attribution guard.

If the root, model, context, output restriction, or guard is wrong, stop with `TOOL_ISSUE`. Do not inspect, repair, or bypass a failed guard.

OBJECTIVE:
Produce exactly one two-slide native/editable deck containing original Slides 07 and 08, in that order. Continue the approved Sample Deck visual system and your accepted Wave 1 Slides 04–06 without copying content from another producer.

ASSIGNED SLIDES:

### Slide 07 — 最大的水库并不是可用淡水 | Most Water Is Not Accessible Freshwater

- Teaching message: Oceans dominate Earth's water; freshwater is small; readily accessible surface fresh water is smaller still.
- Use only the UE Figure 17.1 dataset already locked for Slides 06–07:
  - Ocean/seas 95.96% — 1.40×10⁹ km³.
  - Glacier/polar ice 2.97% — 4.34×10⁷ km³.
  - Groundwater 1.05% — 1.54×10⁷ km³.
  - Lakes/rivers 0.009% — 1.27×10⁵ km³.
  - Atmosphere 0.001% — 1.5×10⁴ km³.
  - Biosphere 0.0001% — 2×10³ km³.
- Build one native hierarchical proportion graphic that moves from all water to freshwater stores to readily accessible surface water.
- Do not call all groundwater readily accessible. Do not calculate a new drinking-water percentage.
- W-01 is backup only. Do not place it and do not mix its 96.5%/3.5% dataset with UE Figure 17.1.
- Sources: UE 8e, Ch.17, Figure 17.1, PDF pp.1647–1649.

### Slide 08 — 储量 ≠ 更新速度 | Storage ≠ Turnover

- Teaching message: Reservoir size and residence time are different properties; a large reservoir does not necessarily renew quickly.
- Primary classroom dataset: CN Table 3-1 / W-04 only.
- Canonical values available for a short native comparison:
  - Atmosphere 9 days.
  - Rivers and seasonal snow/ice 2–6 months.
  - Soil water 1–2 months.
  - Shallow groundwater 100–200 years.
  - Deep groundwater 10,000 years.
  - Ocean 3,200 years.
  - Antarctic ice sheet 20,000 years.
- Select a projection-readable subset or redraw a short table. Do not paste the entire W-04 raster at unreadable scale.
- Keep units explicit. Do not mix EP Table F.3 ranges with the CN Table 3-1 values.
- Do not present the formula `storage / flux` or the above numerical water residence times as UE-derived.
- Sources: 地球系统与演变, Table 3-1, p.94 (PDF p.9); UE pp.1650 and 1205–1206 for the Residence Time definition only.

READ COMPLETELY — READ ONLY:
- `AGENTS.md`
- `LECTURE16_MASTER_PROMPT.md.txt`
- `planning/PRODUCTION_WAVE2_GATE7_ALLOCATION.md`
- `planning/TASK_PROD_W2_QODER_CN.md`
- `planning/L16_BLUEPRINT_v1.md`
- `planning/L16_STYLE_SPEC_v1.md`
- `planning/L16_SOURCE_MATRIX.xlsx`
- `planning/L16_FIGURE_INDEX.xlsx`
- `review/L16_STYLE_SAMPLE_v01.pptx`
- `review/L16_STYLE_SAMPLE_v01.pdf`
- `review/L16_STYLE_SAMPLE_v01_previews/`
- `review/L16_STYLE_SAMPLE_v01_previews/L16_STYLE_SAMPLE_v01_ppt169_20260910/design_spec.md`
- `review/L16_STYLE_SAMPLE_v01_previews/L16_STYLE_SAMPLE_v01_ppt169_20260910/spec_lock.md`
- Your accepted continuity reference only: `sections/PROD-W1-QODER-CN/L16_W1_QoderCN_Slides04-06_v01.pptx` and its `previews/`.
- Approved asset for this task: `assets/figures/approved/W-04_Table3-1_PDF09_print094_raw.png`.

DO NOT READ AS AUTHORING INPUT:
- Any other producer's `sections/PROD-W1-*` or `sections/PROD-W2-*` directory.
- Qianwen validation outputs or QA renders.

PPT-MASTER:
- Skill: `planning/tooling/ppt-master-v6.3.1/ppt-master/skills/ppt-master`
- Python: `planning/tooling/ppt-master-py312-v6.3.1/Scripts/python.exe`
- Run its mandatory attribution guard first and follow the selected route and blocking gates.

BILINGUAL TERMS:
Freshwater 淡水; Accessible Surface Freshwater 易利用的表层淡水; Reservoir 储库; Storage 储量; Turnover 更新速度; Residence Time 停留时间; Atmosphere 大气; Groundwater 地下水; Glacier / Polar Ice 冰川 / 极地冰; Lakes / Rivers 湖泊 / 河流.

STYLE / CONTENT LOCK:
- 1280 × 720, 16:9; 13.3333 × 7.5 in.
- Microsoft YaHei for Chinese and English, Arial fallback.
- White canvas; 72 px `#0E3F8C` header; water accents `#1E4FA8` and `#3D7BD9`.
- Flat native geometry, restrained rounded cards, no default shadows or gradients.
- Header numbering: Slide 07 = 1.4; Slide 08 = 1.5. Preserve page numbers 07 and 08.
- Each slide: one visible teaching message, bilingual title, complete readable source line, and one embedded speaker-note page.
- Notes must agree with visible content and cite every numerical source used.
- No narration audio or object animation.

OUTPUT DIRECTORY:
Use only `sections/PROD-W2-QODER-CN/`.

OUTPUT FILES:
- `sections/PROD-W2-QODER-CN/L16_W2_QoderCN_Slides07-08_v01.pptx`
- `sections/PROD-W2-QODER-CN/L16_W2_QoderCN_Slides07-08_v01.pdf`
- `sections/PROD-W2-QODER-CN/previews/` with two readable renders
- `sections/PROD-W2-QODER-CN/PROD-W2-QODER-CN_COMPLETION.md`
- All working files must stay under the same sole output directory.

DO NOT:
- Do not create any slide except 07 and 08.
- Do not edit planning, assets, review, QA, status files, prior decks, or another producer's directory.
- Do not search the web, add external content, use AI-generated imagery, or invent values.
- Do not place W-01 or mix its data with UE Figure 17.1.
- Do not mix CN Table 3-1 with EP Table F.3.
- Do not flatten native charts or comparisons into screenshots.
- Do not add audio or object animation.

ACCEPTANCE CRITERIA:
1. Exactly Slides 07 and 08 in order.
2. Slide 07 uses only the UE Figure 17.1 numerical dataset and clearly separates total-water dominance from readily accessible surface fresh water.
3. Slide 08 uses CN Table 3-1 values consistently and distinguishes storage from renewal speed.
4. Both visuals are native/editable; W-04 may only serve as a data-verification base.
5. Titles, numbering, source lines, terminology, teaching messages, and Notes match the locked artifacts.
6. No overflow, overlap, clipping, distortion, placeholder, unreadable substantive text, incomplete attribution, external relationship, audio, or object animation.
7. PPTX opens in Microsoft PowerPoint; two-slide PDF and both previews are visually inspected.

REPORT FORMAT:
Use the exact Master Prompt §34 fields: TASK ID, STATUS, OUTPUT FILES, WHAT WAS DONE, SOURCES USED, FIGURES USED, DECISIONS MADE, DEVIATIONS FROM PLAN, PROBLEMS FOUND, UNFINISHED ITEMS, PLACEHOLDERS, SELF-QA, QUESTIONS.

Also report selected model/context, slide order, Notes count, native/raster counts by slide, overflow/overlap results, image policy, attribution status, PowerPoint/PDF/render verification, and any Style Spec deviation.

STOP CONDITION:
After completing and validating exactly Slides 07 and 08 and writing the Completion Report, stop. Do not start another slide, merge a main deck, or update shared project status.

