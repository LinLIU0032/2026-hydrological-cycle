<!-- ppt-master-schema: design-spec/v1 -->
# L16_W1_QoderCN_Slides04-06_v01 - Design Spec

## I. Project Information

| Item | Value |
| --- | --- |
| Project Name | L16_W1_QoderCN_Slides04-06_v01 |
| Canvas Format | PPT 16:9, 1280 × 720 |
| Page Count | 3 |
| Primary Language | zh-CN |
| Target Audience | EOE111 课堂学生 |
| Communication Intent | 课堂教学：按已批准 Sample Deck 的视觉与讲授基准，批量制作 Lecture 16 第 04–06 页。 |
| Desired Audience Outcome | 能说出物质在地球系统储库间持续迁移，能用 Reservoir / Flux / Residence Time / Feedback 四个词阅读全球循环，并说出地球水的分布极不均匀。 |
| Core Message / Ask / Action | 用 reservoir、flux、residence time 与 feedback 阅读水—碳循环；先看物质在哪里，再看它怎样移动。 |
| Delivery Context | 16:9 课堂投影；教师现场讲授。 |
| Artifact Afterlife | 三页成品并入 Lecture 16 完整 44 页deck 的第一周批量生产段（PROD-W1-QODER-CN）。 |
| Reading Mode | balanced |
| Content Strategy | 严格适配已批准的 Blueprint、Style Spec、Source Matrix 与 Figure Index；不扩写外部教学内容，不发明数值。 |
| Design Style | 课程系列延续：instructional + briefing 的教学秩序，结合克制的 Swiss 网格与圆角课程卡片。 |
| AI Image Acquisition Path | not applicable |
| Generation Mode | continuous |
| Spec Refinement | disabled |
| Speaker Notes | enabled — 任务合同要求每页含 speaker notes |
| Custom Animations | disabled — 任务合同禁止对象动画 |
| Narration Audio | disabled — 任务合同禁止音频 |
| Created Date | 2026-09-11 |

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
- **Mode Behavior**: Decompose the three assigned pages into ordered teaching units, give sibling concepts parallel treatment, and keep factual figures neutral and scannable. The spine moves from Earth-system framing (what cycles), to the shared reading framework (four ideas), to the first water evidence page (where Earth's water is); page titles remain the locked bilingual titles while one teaching message states the learning point.
- **Visual style**: custom
- **Visual Style References**: swiss-minimal, soft-rounded
- **Visual Style Behavior**: Use a rigorous 16:9 grid, large white fields, one dark-blue course header, and a small number of flat rounded teaching cards with exact alignment. Geometry is restrained and purposeful: native scientific diagrams and native proportion charts lead the evidence pages, while cards organize framework concepts. Corners share one subtle radius family; borders and whitespace create separation, with no default shadow or decorative texture.
- **Theme**: Lecture 09 course-series continuity with water-blue and carbon-orange semantic accents
- **Tone**: clear, scientific, calm, projection-safe, traceable

### Color Scheme

| Role | HEX | Purpose |
| --- | --- | --- |
| Background | `#FFFFFF` | Main teaching canvas |
| Secondary background | `#F7F9FC` | Neutral cards |
| Primary | `#0E3F8C` | Course header and major headings |
| Accent | `#1E4FA8` | Water/general markers and key paths |
| Secondary accent | `#EA580C` | Carbon markers and highlighted paths |
| Body text | `#1A2230` | Primary text |
| Secondary text | `#4A5568` | Captions, annotations, footers |
| Divider | `#D6DCE5` | Rules and neutral card borders |
| Water secondary | `#3D7BD9` | Secondary water emphasis and English keywords |
| Cool surface | `#F0F5FC` | Water/general secondary panels |
| Carbon heading | `#C2410C` | Carbon headings and numbering |
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
- **Role rationale**: Display preserves the recurring cover/hero scale; Annotation and Footnote protect projector-readable labels and traceable source lines.

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

- **Hierarchy direction**: Course header → one teaching message → dominant evidence or parallel concept group → source line and page number.
- **Composition tendency**: Use one dominant native diagram or proportion chart on evidence pages; use balanced repeated units only where the learning task is comparison, navigation, or framework.
- **Cross-page continuity**: Recur the 72 px dark-blue header, bilingual titles, left teaching-message marker, restrained source line, two-digit original slide number, and the water-blue/carbon-orange semantic split; header numbering follows the Sample Deck (Slide 04 = 1.1, 05 = 1.2, 06 = 1.3).
- **Spacing posture**: Dense but projection-safe on all three pages; keep generous whitespace inside cards.
- **Spacing anchors**: page margin 40 px; block gap 12 px; column gutter 28 px; corner radius 12 px; body leading 21 px.

## VI. Icon Usage Specification

- **Primary bundled library**: none

| Icon Path | Suitable Scenarios |
| --- | --- |

## VIII. Image Resource List

| Filename | Dimensions | Ratio | Purpose | Type | Image pattern | Crop Policy | Acquire Via | Status | Reference | text_policy | page_role |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

## IX. Content Outline

### Part 1: Opening Framework and First Water Evidence

#### Slide 04 - 什么在循环？ | What Is Actually Cycling?

- **Audience move**: 把“循环”当成水的单一路线 → 理解物质（水与碳）在地球系统多个储库之间持续迁移。
- **Relationships**: Atmosphere 大气圈、Hydrosphere 水圈、Cryosphere 冰冻圈、Lithosphere 岩石圈、Biosphere 生物圈 are parallel climate-system components linked by continuous two-way matter transfer; water and carbon are the two most important migrating substances of the surface system; transfer stages span hours to millions of years.
- **Composition**: One dominant native reservoir-transfer schematic: five reservoir nodes arranged around a shared “持续迁移” exchange field with bidirectional arrows, a bottom strip naming 水 H₂O and 碳 C as the tracked substances, and a short timescale cue.
- **Title**: 什么在循环？ | What Is Actually Cycling?
- **Core message**: 物质在地球系统各储库之间持续迁移，循环不是一条单向路径。
- **Content**: 气候系统组分：大气圈 Atmosphere · 水圈 Hydrosphere · 冰冻圈 Cryosphere · 岩石圈 Lithosphere · 生物圈 Biosphere（UE Ch.12）· 各组分通过储存与输送质量和能量相互作用 · 水分子和碳原子是表层系统最重要的两种物质（CN Chs.3–4）· 迁移阶段可短至数小时、长至数百万年（EP p.881）· 生物地球化学循环 biogeochemical cycle 可以在持续通量中保持稳态 steady state。
- **Visualization**: Native flat reservoir-transfer schematic; five reservoir cards plus bidirectional exchange arrows; custom fallback, no chart object.
- **Fact IDs**: UE Ch.12 Components of the Climate System row (PDF 1146–1147); CN Chs.3–4 framing row (PDF 3, 57–58); M-07 (EP p.881); M-01 (EP Interlude F.4).

#### Slide 05 - 读懂全球循环的四个词 | Four Ideas for Reading Global Cycles

- **Audience move**: 面对循环图无从下手 → 掌握 Reservoir / Flux / Residence Time / Feedback 四个通用阅读词。
- **Relationships**: Reservoir, Flux, and Residence Time are ordered sibling reading tools for any cycle (where matter is → how fast it moves → how long it stays); Feedback is the fourth word that previews Part III system response; the same four words transfer from water to carbon.
- **Composition**: Four equal concept cards in one row under the teaching message, each with a numbered badge, bilingual term, one-line definition, and one reading cue; a bottom strip states that the same framework reads water and carbon cycles.
- **Title**: 读懂全球循环的四个词 | Four Ideas for Reading Global Cycles
- **Core message**: 储库、通量、停留时间与反馈是阅读一切全球循环的共同框架。
- **Content**: Reservoir 储库：储存水或化学物质的场所/组分（UE pp.1647, 1205）· Flux 通量：物质从一个储库向另一储库的流动；储量单位与通量单位必须分开（UE p.1205）· Residence Time 停留时间：一定量水或某化学物质分子在储库中停留的平均时间（UE pp.1650, 1205–1206）· Feedback 反馈：系统变化诱发的过程反过来放大（正）或抑制（负）初始变化，第三部分展开 · 同一框架从水循环迁移到碳循环；稳态可以包含持续通量（EP p.881）。不给出具体水的停留时间数值，也不把 储量/通量 公式标为 UE 出处。
- **Visualization**: Four native concept cards; no chart object.
- **Fact IDs**: Four-word framework rows — Reservoir (UE 1647; 1205), Flux (UE 1205), Residence time (UE 1650; 1205–1206, VERIFIED—PARTIAL: no numerical water table, no storage/flux formula attribution); M-07 (EP p.881).

#### Slide 06 - 地球的水在哪里？ | Where Is Earth's Water?

- **Audience move**: 以为地球水随处可见 → 认识水在储库间分布极不均匀，海洋绝对主导而 readily accessible 表层淡水极少。
- **Relationships**: Ocean/seas is the dominant reservoir; glacier/polar ice and groundwater are the next two; lakes/rivers, atmosphere, and biosphere are each far below 0.01% — a membership ranking inside one coherent UE Figure 17.1 dataset; total water is treated as constant over short geologic intervals.
- **Composition**: One dominant native horizontal proportion chart on the left listing all six Figure 17.1 reservoirs with % and volume labels (tiny shares drawn at a minimum visible width with an explicit scale note); a right reading column with the total-volume fact, the dominance ranking, and the tiny-share takeaway.
- **Title**: 地球的水在哪里？ | Where Is Earth's Water?
- **Core message**: 地球水的分布极不均匀：海洋占绝对多数，易利用的表层淡水极少。
- **Content**: 单一 UE Fig. 17.1 数据集（占总水量百分比与体积）：Ocean/seas 海洋 95.96%（1.40×10⁹ km³）· Glacier/polar ice 冰川与极地冰 2.97%（4.34×10⁷ km³）· Groundwater 地下水 1.05%（1.54×10⁷ km³）· Lakes/rivers 湖泊与河流 0.009%（1.27×10⁵ km³）· Atmosphere 大气 0.001%（1.5×10⁴ km³）· Biosphere 生物圈 0.0001%（2×10³ km³）· 总水量约 1.4×10⁹ km³，在日—百年至地质短尺度上视为恒定（UE p.1651）· W-01（CN 图 3-3）仅为 backup，不与其数值混用。
- **Visualization**: Native horizontal proportion bars redrawn from UE Figure 17.1 values; custom fallback with explicit linear % scale; minimum visible bar width annotated on-page. Native-ready: water-distribution-bars=no（带注记的最小可见条宽与“百分比+体积”双标签无法由原生 PowerPoint 图表对象表达，保持普通 SVG 几何，导出即原生可编辑形状）.
- **Fact IDs**: Water distribution — Major reservoirs row (UE Fig. 17.1, PDF 1647–1649); Total water row (UE PDF 1651); Source Conflicts rows: Slides 06–07 use UE Fig.17.1 only; do not place competing datasets side by side.

## X. Speaker Notes Requirements

- **Generation**: enabled
- **Filename**: match each SVG filename under `notes/`
- **Content**: Ground each note in the final visible slide and approved source rows; explain how to read the schematic, the four framework words, and the proportion chart without adding external facts or duplicating all bilingual text.
- **Total duration**: approximately 4 minutes for the three-page sequence
- **Notes style**: patient, explanatory, signposted, and concise
- **Presentation purpose**: 课堂教学：按已批准 Sample Deck 的视觉与讲授基准，批量制作 Lecture 16 第 04–06 页。
