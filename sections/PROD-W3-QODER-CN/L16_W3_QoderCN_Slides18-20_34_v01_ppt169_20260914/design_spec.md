<!-- ppt-master-schema: design-spec/v1 -->
# L16_W3_QoderCN_Slides18-20_34_v01 - Design Spec

## I. Project Information

| Item | Value |
| --- | --- |
| Project Name | L16_W3_QoderCN_Slides18-20_34_v01 |
| Canvas Format | PPT 16:9, 1280 × 720 |
| Page Count | 4 |
| Primary Language | zh-CN |
| Target Audience | EOE111 课堂学生 |
| Communication Intent | 课堂教学：Production Wave 3（GATE 8），制作第 18–20 与 34 页四张初稿，含两张批准的综合重绘 I-01 与 I-02。 |
| Desired Audience Outcome | 能说出水如何连接四大圈层与深部地球；能在 W-02 上识别储库/通量/快慢路径/能量入口；能复述第一部分五条综合结论；能在一张图上区分水通量与碳通量并看到水–碳耦合路径。 |
| Core Message / Ask / Action | 水连接大气、海洋、生命、岩石与深部地球并搬运质量与能量；水也是碳循环耦合的介质。 |
| Delivery Context | 16:9 课堂投影；教师现场讲授；Slide 20 后接 10 分钟休息（页内提示，不另设休息页）。 |
| Artifact Afterlife | 四页成品并入 Lecture 16 完整 deck 的 Wave 3 生产段（PROD-W3-QODER-CN），统一 GATE 8 QA 后由 Codex 整合。 |
| Reading Mode | balanced |
| Content Strategy | 仅使用合同锁定的 Source Matrix 行与批准重绘简报 I-01/I-02；不新增数值预算、不混合不同图件的定量数据集、不把 I-01/I-02 压成整页图片。 |
| Design Style | 课程系列延续：instructional + briefing 的教学秩序，结合克制的 Swiss 网格与圆角课程卡片；水蓝/碳橙语义线色。 |
| AI Image Acquisition Path | not applicable |
| Generation Mode | continuous |
| Spec Refinement | disabled |
| Speaker Notes | enabled — 合同要求每页一条内嵌 Notes 且与可见内容一致、引用全部事实与数值来源；Slide 19 Notes 含简洁答案键 |
| Custom Animations | disabled — 合同禁止对象动画与 timed advance |
| Narration Audio | disabled — 合同禁止音频 |
| Created Date | 2026-09-14 |

## II. Canvas Specification

| Property | Value |
| --- | --- |
| Format | PPT 16:9 |
| Dimensions | 1280 × 720 px; 13.3333 × 7.5000 in |
| viewBox | `0 0 1280 720` |
| Margins | 40 px standard outer margin; 72 px header band; keep core content above y=686 px |
| Content Area | x=40–1240 px; standard body y=96–686 px; source and page-number zone y=686–708 px |

## III. Visual Theme

### Theme Style

- **Mode**: custom
- **Mode References**: instructional, briefing
- **Mode Behavior**: Four ordered teaching units: an integrated Earth-system coupling diagram (I-01), a read-the-figure concept check on W-02, a five-unit part summary with a restrained break cue, and the water–carbon coupling bridge (I-02); sibling processes get parallel treatment and every arrow encodes a named transfer.
- **Visual style**: custom
- **Visual Style References**: swiss-minimal, soft-rounded
- **Visual Style Behavior**: Rigorous white 16:9 grid, one dark-blue course header, flat rounded cards and native line/arrow geometry with one subtle radius family; water fluxes in water blue, carbon fluxes in carbon orange with a compact bilingual legend on Slide 34; no default shadow, gradient, or decorative texture.
- **Theme**: Lecture 09 course-series continuity with water-blue and carbon-orange semantic accents
- **Tone**: clear, scientific, calm, projection-safe, traceable

### Color Scheme

| Role | HEX | Purpose |
| --- | --- | --- |
| Background | `#FFFFFF` | Main teaching canvas |
| Secondary background | `#F7F9FC` | Neutral cards |
| Primary | `#0E3F8C` | Course header and major headings |
| Accent | `#1E4FA8` | Water markers, water flux lines |
| Secondary accent | `#EA580C` | Carbon markers, carbon flux lines |
| Body text | `#1A2230` | Primary text |
| Secondary text | `#4A5568` | Captions, annotations, footers |
| Divider | `#D6DCE5` | Rules and neutral card borders |
| Water secondary | `#3D7BD9` | Secondary water emphasis and English keywords |
| Cool surface | `#F0F5FC` | Water/general secondary panels |
| Carbon heading | `#C2410C` | Carbon headings |
| Carbon secondary | `#7A4A33` | Carbon supporting text |
| Carbon surface | `#FDF4EF` | Carbon cards |
| Carbon divider | `#F0CFC2` | Carbon card borders |
| Warm highlight | `#FDECDD` | Short carbon emphasis strips |

## IV. Typography System

### Font Plan

| Role | Character (Reference) | Primary | English if non-English | Fallback tail |
| --- | --- | --- | --- | --- |
| Title | neutral humanist sans, bold | Microsoft YaHei | Microsoft YaHei | Arial |
| Body | neutral humanist sans, regular | Microsoft YaHei | Microsoft YaHei | Arial |
| Display | course-cover sans, bold | Microsoft YaHei | Microsoft YaHei | Arial |
| Annotation | compact neutral sans | Microsoft YaHei | Microsoft YaHei | Arial |
| Footnote | compact neutral sans | Microsoft YaHei | Microsoft YaHei | Arial |

- **Title stack**: Microsoft YaHei, Arial
- **Body stack**: Microsoft YaHei, Arial
- **Display stack**: Microsoft YaHei, Arial
- **Annotation stack**: Microsoft YaHei, Arial
- **Footnote stack**: Microsoft YaHei, Arial
- **Role rationale**: Display preserves the recurring cover/hero scale; Annotation and Footnote protect projector-readable labels, diagram annotations, and traceable source lines.

### Font Size Hierarchy

| Purpose | Anchor Size (px) |
| --- | ---: |
| Body | 15 |
| Title | 21 |
| Subtitle | 19 |
| Annotation | 13 |
| Display | 60 |
| Anchor title | 34 |
| Header | 18 |
| Card heading | 16 |
| TOC section title | 26 |
| TOC number | 28 |
| Footnote | 12 |
| Page number | 12 |

## V. Layout Principles

### Deck-wide Direction

- **Hierarchy direction**: Course header → one teaching message → dominant native diagram or evidence figure with outside prompts → source line and page number.
- **Composition tendency**: One dominant diagram/evidence field per page with a parallel reading or prompt column; summary page uses balanced repeated cards plus one restrained break cell.
- **Cross-page continuity**: Recur the 72 px dark-blue header, bilingual titles, left teaching-message marker, restrained source line, two-digit original page numbers (18/19/20/34), water-blue/carbon-orange semantics; header numbering 18 = 1.15, 19 = 1.16, 20 = 1.17, and Slide 34 unnumbered as the active Part III coupling bridge preserving Sample Slide 35 = 3.1.
- **Spacing posture**: Dense but projection-safe on diagram pages; balanced cards on the summary page.
- **Spacing anchors**: page margin 40 px; block gap 12 px; column gutter 28 px; corner radius 12 px; body leading 21 px.

## VI. Icon Usage Specification

- **Primary bundled library**: none

| Icon Path | Suitable Scenarios |
| --- | --- |

## VIII. Image Resource List

| Filename | Dimensions | Ratio | Purpose | Type | Image pattern | Crop Policy | Acquire Via | Status | Reference | text_policy | page_role |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| W-02_EP_InterludeF_HydrologicCycle_pdf615-616_print580-581_spread_raw.png | 5900 × 3513 | 1.68 | Slide 19 dominant readable hydrologic-cycle evidence for the concept check | Textbook figure | Dominant evidence field on the left with the four task prompts kept outside the figure in a right column; crop only nonessential outer matter, never labels needed to answer | adaptive | user | Existing | Source: EP 5e, Interlude F, The Hydrologic Cycle, pp.580–581 (PDF pp.615–616). | embedded | local |

## IX. Content Outline

### Part 1: Water–Earth-System Coupling, Concept Check, and Part I Close

#### Slide 18 - 水循环连接四大圈层 | Water Connects the Earth System

- **Audience move**: 把水循环看作表层现象 → 看到水连接大气、海洋、生命、岩石与深部地球并搬运质量与能量。
- **Relationships**: link — atmosphere, ocean, land & life, and rock & deep Earth are four coupled nodes; evaporation/precipitation link atmosphere with ocean and land; transpiration/biological transfer links land & life with atmosphere; runoff links land to ocean; infiltration and subduction carry water inward/downward while volcanic return carries it outward/upward (W-06 directions preserved); weathering releases solutes transported to the ocean.
- **Composition**: One native bilingual I-01 redraw: top atmosphere band, middle ocean and land-&-life cards, bottom rock-&-deep-Earth band; named transfer arrows in the gaps between nodes; a bottom strip states water carries mass and energy and acts as solvent/transport agent. No new numerical budget; not a second global-cycle page and not a plate-tectonics page.
- **Title**: 水循环连接四大圈层 | Water Connects the Earth System
- **Core message**: 水把大气、海洋、生命、岩石与深部地球连接起来，并搬运质量与能量。
- **Content**: 四节点：大气圈 Atmosphere · 海洋 Ocean · 陆地与生命 Land & life · 岩石与深部 Rock & deep Earth · 转移：蒸发 Evaporation、降水 Precipitation、径流 Runoff、入渗 Infiltration、蒸腾与生物转移 Transpiration & biological transfer、风化与溶质输送 Weathering & solute transport、俯冲（向内）Subduction inward、火山回返（向外）Volcanic return outward · 底条：水搬运质量与能量，是溶剂与搬运介质，相变输送潜热。
- **Visualization**: Native I-01 integrated redraw; labels and main paths native/editable; custom fallback, no chart object.
- **Fact IDs**: UE Ch.12 pp.1146, 1164, 1168; UE Ch.17 pp.1645–1654; CN Ch.3 PDF pp.22–27; EP Ch.23 pp.874–881; HB Ch.9 pp.224–230; redraw brief I-01 (W-02 + W-06 topology, W-06 directions preserved).

#### Slide 19 - 课堂读图 | Concept Check 1

- **Audience move**: 被动看循环图 → 主动在 W-02 上识别储库、通量、快慢路径与太阳能入口。
- **Relationships**: none between page units beyond task order 1→4; the figure itself carries reservoir–flux relationships which students must read.
- **Composition**: W-02 as the dominant readable evidence field on the left (aspect preserved, slice fit into the panel, no opaque overlay on scientific content); four numbered prompt cards in a right column outside the figure; page stays a question, answer key lives only in Notes.
- **Title**: 课堂读图 | Concept Check 1
- **Core message**: 先读图再回答：储库、通量、快慢路径与能量入口。
- **Content**: 任务 1 找储库：至少指出四个储库 · 任务 2 读通量：至少指出四个通量（箭头） · 任务 3 比速度：指出一条较快与一条较慢的路径 · 任务 4 找能量：太阳能从哪里进入循环 · 不混 W-02 与 W-03 数值，不做数值计算。
- **Images**: W-02_EP_InterludeF_HydrologicCycle_pdf615-616_print580-581_spread_raw.png.
- **Fact IDs**: EP Interlude F pp.580–581 (PDF 615–616); UE Ch.17 pp.1651–1654; Notes answer key grounded in the same rows.

#### Slide 20 - 第一部分总结 | Water Moves Matter and Energy

- **Audience move**: 分散记住若干过程 → 用五条结论收束第一部分并进入休息。
- **Relationships**: five parallel synthesis units ordered matter → energy → solutes/sediment → surface shaping → sphere connection; the break cue closes the first session.
- **Composition**: Five balanced numbered synthesis cards in a 2×3 grid whose sixth cell is a restrained Break · 10 min cue card; native text and geometry only, no new figure or numerical claim.
- **Title**: 第一部分总结 | Water Moves Matter and Energy
- **Core message**: 水循环搬运物质与能量、塑造地表、连接圈层。
- **Content**: 1 水在储库间迁移 Water moves among reservoirs · 2 相变输送能量 Phase changes transport energy · 3 径流与地下水搬运溶质与沉积物 Runoff & groundwater move solutes and sediment · 4 水塑造地表 Water shapes the surface · 5 表层与深部路径连接圈层 Surface & deep pathways connect geospheres · Break 提示：Break · 10 min，第一部分结束、下一部分碳循环。
- **Fact IDs**: UE Chs.12 & 17; CN Ch.3; EP Interlude F & Ch.23 (approved Slide 20 Source Matrix rows only).

### Part 3: Coupling Bridge

#### Slide 34 - 把两个循环放到同一张图上 | Coupling the Water and Carbon Cycles

- **Audience move**: 分别理解水与碳 → 在一张图上看到水如何介导碳的风化、生物交换、海洋转移与岩石储存。
- **Relationships**: link — atmosphere exchanges CO₂ with ocean (air–sea) and with life (photosynthesis/respiration); water plus CO₂ drives weathering; weathering transfers dissolved/carbonate carbon to ocean, then burial/subduction to sediment and rock; volcanic degassing returns carbon outward; water fluxes (evaporation/precipitation/transpiration/water into weathering) run alongside as the coupling medium; the silicate-weathering pathway carries a restrained slow-negative-climate-tendency label, distinct from carbonate-rock recycling.
- **Composition**: One native bilingual I-02 redraw: atmosphere band on top, ocean card left, life card right, weathering process chip center, rock-&-sediment band bottom; carbon fluxes as solid carbon-orange arrows, water fluxes as dashed water-blue arrows, compact bilingual legend inside the atmosphere band; qualification note as a bottom strip. Qualitative only — no combined numerical budgets.
- **Title**: 把两个循环放到同一张图上 | Coupling the Water and Carbon Cycles
- **Core message**: 水是耦合两个循环的介质：风化、生物交换、海洋转移与岩石储存。
- **Content**: 碳路径：海气 CO₂ 交换 Air–sea CO₂ exchange · 光合/呼吸 Photosynthesis / Respiration · 水+CO₂ 驱动风化 Water + CO₂ drive weathering · 溶解/碳酸盐输送 Dissolved & carbonate transfer · 埋藏/俯冲 Burial / Subduction · 火山脱气 Volcanic degassing · 水路径：海气水交换、蒸腾、水参与风化 · 限定注记：硅酸盐风化贡献缓慢的负气候倾向；碳酸盐岩回收不是同等净大气 CO₂ 汇 · 图例：碳通量 Carbon flux（实线橙）/ 水通量 Water flux（虚线蓝）。
- **Visualization**: Native I-02 integrated redraw; labels and main paths native/editable; custom fallback, no chart object.
- **Fact IDs**: UE Ch.12 pp.1146–1168 & 1204–1213; CN Chs.3–4 PDF pp.68–80; EP Chs.20 & 23; HB Ch.9; redraw brief I-02 (W-02, C-01, C-04, C-05, F-01 as redraw/evidence inputs only).

## X. Speaker Notes Requirements

- **Generation**: enabled
- **Filename**: match each SVG filename under `notes/`
- **Content**: Ground each note in the final visible slide; cite every factual or numerical claim; Slide 19 carries a concise source-grounded answer key (reservoirs, fluxes, one faster/slower pathway pair, solar entry) while the visible page stays a question.
- **Total duration**: approximately 6 minutes for the four-page sequence
- **Notes style**: patient, explanatory, signposted, and concise
- **Presentation purpose**: 课堂教学：Production Wave 3，制作 Lecture 16 第 18–20 与 34 页。
