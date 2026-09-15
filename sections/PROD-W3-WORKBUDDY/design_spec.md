<!-- ppt-master-schema: design-spec/v1 -->
# PROD-W3-WORKBUDDY - Design Spec

## I. Project Information

| Item | Value |
| --- | --- |
| Project Name | PROD-W3-WORKBUDDY |
| Canvas Format | PPT 16:9, 1280 × 720 |
| Page Count | 6 |
| Primary Language | zh-CN |
| Target Audience | EOE111 课堂学生 |
| Communication Intent | 课堂教学：把碳循环从海洋—生命—碳酸盐的路径读到岩石，分清风化的净汇与循环，排出慢碳循环方向序列，比较四类时钟，并用课堂读图检验分类能力。 |
| Desired Audience Outcome | 能画出碳酸盐路径并说明其并非单向碳汇；能区分硅酸盐风化与碳酸盐风化；能按顺序复述慢地质路径；能按时间尺度给通路分档；能按储库、通量、速度、领域给任意一条碳通路分类。 |
| Core Message / Ask / Action | 碳循环从快速的生物与海气交换延伸到缓慢的岩石圈交换，而不同时钟决定储库多快响应。 |
| Delivery Context | 16:9 课堂投影；教师现场讲授。 |
| Artifact Afterlife | 六页按原始页码 28–33 并入 Lecture 16 的 44 页完整 deck；本任务不产出其他页面。 |
| Reading Mode | balanced |
| Content Strategy | 严格限定在已批准的 Blueprint、Style Spec 与 Source Matrix 行内；只使用列明的四个已批准图件；不跨图拼接数值预算。 |
| Design Style | 课程系列延续：instructional + briefing 的教学秩序，结合克制的 Swiss 网格与圆角课程卡片。 |
| AI Image Acquisition Path | not applicable |
| Generation Mode | continuous |
| Spec Refinement | disabled |
| Speaker Notes | enabled — 任务合同要求每页中文讲者备注 |
| Custom Animations | disabled — 任务合同禁止对象动画 |
| Narration Audio | disabled — 任务合同禁止音频 |
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
- **Mode Behavior**: Decompose each page into ordered teaching units and give sibling concepts parallel treatment. The six-page spine moves from one continuous ocean–life–rock carbonate path, to a weathering causal chain whose two branches must not be conflated, to the four-stage slow geological pathway, to one aligned multi-clock comparison, to a concept check on the approved global figure, and finally to a four-unit synthesis.
- **Visual style**: custom
- **Visual Style References**: swiss-minimal, soft-rounded
- **Visual Style Behavior**: Use a rigorous white 16:9 grid, one dark-blue course header, one dominant native path or approved figure per page, and a small number of flat rounded teaching cards with exact alignment and generous whitespace; borders and whitespace create separation, with no default shadow, gradient, or decorative texture.
- **Theme**: Lecture 09 course-series continuity with water-blue and carbon-orange semantic accents
- **Tone**: clear, scientific, calm, projection-safe, traceable

### Color Scheme

| Role | HEX | Purpose |
| --- | --- | --- |
| Background | `#FFFFFF` | Main teaching canvas |
| Secondary background | `#F7F9FC` | Neutral cards and diagram fields |
| Primary | `#0E3F8C` | Course header and major headings |
| Accent | `#1E4FA8` | General markers and key paths |
| Secondary accent | `#EA580C` | Carbon markers, source-side and fast-path emphasis |
| Body text | `#1A2230` | Primary text |
| Secondary text | `#4A5568` | Captions, annotations, footers |
| Divider | `#D6DCE5` | Rules and neutral card borders |
| Water secondary | `#3D7BD9` | Used only where water or ocean meaning is carried |
| Cool surface | `#F0F5FC` | Ocean and water-side panels |
| Carbon heading | `#C2410C` | Carbon headings, slow-path and return-side emphasis |
| Carbon secondary | `#7A4A33` | Carbon supporting text and subordinate connectors |
| Carbon surface | `#FDF4EF` | Carbon cards |
| Carbon divider | `#F0CFC2` | Carbon card borders |
| Warm highlight | `#FDECDD` | Short emphasis strips and reservoir bodies |

## IV. Typography System

### Font Plan

| Role | Character (Reference) | Primary | English if non-English | Fallback tail |
| --- | --- | --- | --- | --- |
| Title | neutral humanist sans, bold | Microsoft YaHei | Microsoft YaHei | Arial |
| Body | neutral humanist sans, regular | Microsoft YaHei | Microsoft YaHei | Arial |
| Annotation | compact neutral sans | Microsoft YaHei | Microsoft YaHei | Arial |
| Footnote | compact neutral sans | Microsoft YaHei | Microsoft YaHei | Arial |

- **Title stack**: Microsoft YaHei, Arial
- **Body stack**: Microsoft YaHei, Arial
- **Annotation stack**: Microsoft YaHei, Arial
- **Footnote stack**: Microsoft YaHei, Arial

### Font Size Hierarchy

| Purpose | Anchor Size (px) |
| --- | ---: |
| Body | 15 |
| Title | 21 |
| Subtitle | 19 |
| Annotation | 13 |
| Header | 18 |
| Card heading | 16 |
| Footnote | 12 |
| Page number | 12 |

## V. Layout Principles

### Deck-wide Direction

- **Hierarchy direction**: Course header → one teaching message → dominant native path, figure or synthesis field → source line and page number.
- **Composition tendency**: One dominant construction per page. Slides 28–31 and 33 are fully native; Slide 32 is the only raster page and carries the approved C-01 intact, so its prompt and reading aid must sit outside the figure.
- **Cross-page continuity**: Recur the 72 px dark-blue header, bilingual titles, left teaching-message marker, restrained source line, two-digit original slide number, and the water-blue/carbon-orange semantic split. Slide 32 keeps the 课堂读图 question-family treatment used by Sample Slide 19 and accepted Wave 1 pages.
- **Spacing posture**: Dense but projection-safe on 28–32; the synthesis page 33 opens up into four generous units.
- **Spacing anchors**: page margin 40 px; block gap 12 px; column gutter 28 px; corner radius 12 px; body leading 21 px.

## VI. Icon Usage Specification

- **Primary bundled library**: none

| Icon Path | Suitable Scenarios |
| --- | --- |

## VIII. Image Resource List

| Filename | Dimensions | Ratio | Purpose | Type | Image pattern | Crop Policy | Acquire Via | Status | Reference | text_policy | page_role |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| C-01_UE_Fig12-19_PDF1209_raw.png | 1725 × 1435 | 1.2021 | Slide 32 concept-check evidence, the page's only raster | Textbook figure | The approved global carbon-cycle figure placed complete and aspect-correct beside a native prompt column; no crop is applied so the reservoir boxes, the flux labels, the units Gt and Gt/yr, the arrow directions and both in-image credit lines survive unmodified | no-crop | user | Existing | Source: UE 8e, Fig. 12.19, PDF p.1209. | embedded | local |

C-04 (625 × 515), C-05 (785 × 730) and C-06 (975 × 760) are redraw and evidence inputs only. C-04's Figure Index note records that its labels are dense at projector scale, and C-05's records that it is conceptually strong but visually dense, so both are carried as faithful bilingual native simplifications rather than as placed rasters. C-06 is backup only and is not placed.

## IX. Content Outline

### Part 2: Carbon Cycle — Slow Processes and Clocks

#### Slide 28 - 碳酸盐：海洋、生命与岩石的连接 | Carbonates: Ocean–Life–Rock Connection

- **Audience move**: 把碳酸盐当成一个孤立名词 → 能沿一条路径把海洋溶解碳一路读到碳酸盐岩，并说出碳酸盐形成并不等于单向吸碳。
- **Relationships**: Dissolved inorganic carbon in seawater is taken up by organisms that build shells, becomes carbonate particles, settles and is buried, and lithifies into carbonate rock; the whole chain is one continuous ocean–life–rock path, and the biological, physical and carbonate paths stay conceptually distinct even though this page follows only the carbonate one.
- **Composition**: One horizontal five-stage native path with explicit arrow directions across the upper field, plus a lower band carrying the optional reaction and its cautionary reading.
- **Title**: 碳酸盐：海洋、生命与岩石的连接 | Carbonates: Ocean–Life–Rock Connection
- **Core message**: 溶解碳经生物成壳、碳酸盐颗粒、沉积埋藏，一直到碳酸盐岩，这是一条连续路径，而它不是单向的吸碳过程。
- **Content**: 五段路径 — 01 海水溶解无机碳 DIC（HCO₃⁻、CO₃²⁻）· 02 生物成壳 Shell formation（钙质壳体）· 03 碳酸盐颗粒 Carbonate particles · 04 沉积与埋藏 Sedimentation and burial · 05 碳酸盐岩 Carbonate rock（回到岩石圈）· 可选反应 — Ca²⁺ + 2HCO₃⁻ → CaCO₃ + H₂O + CO₂↑（教材给出该式用于说明碳酸盐泵可能释放 CO₂，本页只作定性方向）· 边界说明 — 本页不进入碳酸盐平衡的定量计算；生物泵、物理泵与碳酸盐路径在概念上仍要分开，本页只沿碳酸盐这一条走。
- **Images**: none — fully native.
- **Fact IDs**: CN Ch.4 §4.3.2–4.3.3 carbonate-connection row; UE Ch.12 chemical-reactions and lithosphere-atmosphere rows.

#### Slide 29 - 风化：水循环开始影响碳循环 | Weathering: Where Water Meets Carbon

- **Audience move**: 把风化笼统当成"吸收 CO₂" → 能区分硅酸盐风化（长期净汇）与碳酸盐风化（随后海相成碳酸盐，属循环、无净大气碳变化）。
- **Relationships**: Atmospheric CO₂ dissolves in rainwater to form weak carbonic acid; that water attacks rock; the dissolved products are carried by rivers to the ocean and stored in sediment; whether this is a net atmospheric sink depends entirely on which rock is weathered.
- **Composition**: A left-to-right causal chain across the top, then two contrasting branch cards below — silicate on one side, carbonate on the other — so the distinction is the page's visual climax rather than a footnote.
- **Title**: 风化：水循环开始影响碳循环 | Weathering: Where Water Meets Carbon
- **Core message**: 水与 CO₂ 共同驱动风化；但只有硅酸盐风化把大气碳长期转入岩石圈，碳酸盐风化只是循环。
- **Content**: 因果链 — 大气 CO₂ + 降水 → 弱碳酸（H₂CO₃）→ 岩石化学风化 → 溶解产物 → 河流输送 → 海洋与沉积储存 · 关键区分 — 硅酸盐风化 Silicate weathering：把大气 CO₂ 转入岩石圈碳酸盐，作用在很长的时间尺度上，是净的大气碳去向，教材给出简式 CaSiO₃ + CO₂ → CaCO₃ + SiO₂ · 碳酸盐风化 Carbonate weathering：先溶解碳酸盐岩，随后在海洋重新形成碳酸盐，二者相抵，不带来净的大气碳变化 · 边界说明 — 本页不使用任何数值；两种风化在箭头颜色与卡片底色上明确分开，避免把"风化"一律当作同一个长期碳汇。
- **Images**: none — fully native. F-01 is explicitly not placed on this page.
- **Fact IDs**: UE Ch.12 lithosphere-atmosphere gas-exchange row (weathering distinction); CN Ch.4 §4.5.1 Fig.4-16 row for the silicate weathering expression; HB Ch.9 thermostat row and EP Ch.20/23 water–carbon coupling rows as supporting context.

#### Slide 30 - 慢碳循环 | Slow Geological Carbon Cycle

- **Audience move**: 只知道存在"慢循环" → 能按四个方向的顺序完整复述一条慢地质路径。
- **Relationships**: Weathering and river transport feed carbonate and organic sedimentation; burial removes carbon from the surface system; subduction and metamorphism carry it into deep storage; volcanic degassing returns it toward the atmosphere. The sequence is directional and must not be reordered.
- **Composition**: A four-stage native sequence running clockwise from the upper left, with the deep reservoirs as a distinct band beneath the surface stages, and one return arrow closing the loop toward the atmosphere.
- **Title**: 慢碳循环 | Slow Geological Carbon Cycle
- **Core message**: 风化与河流输送、沉积与埋藏、俯冲与变质深储、火山脱气，四个环节首尾相接构成慢地质路径。
- **Content**: 四段方向序列 — 01 风化与河流输送 Weathering and river transport · 02 碳酸盐与有机碳沉积、埋藏 Sedimentation and burial · 03 俯冲与变质、深部储存 Subduction and metamorphic deep storage · 04 火山脱气返回大气 Volcanic degassing · 说明 — 本页是依据教材图 4-16 的忠实双语原生简化，不放置密集栅格；不与图 4-17 的通量拼成新预算；不展开早期大气历史。
- **Images**: none — faithful bilingual native simplification of C-05. C-06 remains backup and is not placed.
- **Fact IDs**: CN Ch.4 §4.5.1–4.5.2 slow-cycle rows (Figs.4-16/4-17); UE Ch.12 weathering-burial-volcanic-return row; EP Ch.23 Fig.23.6 row; HB Ch.9 volatile-cycling row for subduction and volcanic return.

#### Slide 31 - 碳循环的多个时钟 | Multiple Carbon Timescales

- **Audience move**: 把碳循环想成一条统一速度的箭头 → 能按时间尺度把四类通路排在同一个轴上，并说出最大储库不等于最快响应。
- **Relationships**: Atmosphere–biosphere–surface ocean, deep ocean, sediment, and geological reservoirs respond on four different clocks; the same reservoir–flux–residence-time vocabulary transfers from water, but the numbers do not.
- **Composition**: One aligned horizontal logarithmic axis carrying the four CN Fig.4-15 anchors, a separate clearly-labelled source panel for the broader CN Fig.4-16 ranges, and a short rail stating the three framework words distinctly.
- **Title**: 碳循环的多个时钟 | Multiple Carbon Timescales
- **Core message**: 生物、海洋、沉积与地质四条路径以四个不同档位的时钟运行。
- **Content**: 图 4-15 锚点（主面板）— 大气—生物圈—表层海约 10¹–10² 年 · 深层海约 10²–10³ 年 · 沉积物约 10³–10⁵ 年 · 地质储库大于 10⁵ 年 · 图 4-16 区间（独立来源面板，明确标注出处，不与主面板合并）— 表层库 0–10³ 年 · 沉积物库 10³–10⁸ 年 · 变质库 10⁶–10⁹ 年 · 地幔库 10⁷–10⁹ 年 · 框架三词保持区分 — 储库 Reservoir 表示"存了多少"· 通量 Flux 表示"每年转移多少"· 停留时间 Residence Time 表示"平均停留多久" · 边界说明 — 本页是唯一允许出现数值的时钟页，因为本页来源行明确写出图 4-15 与图 4-16；两个面板各自保留原图单位与区间，不合并为更高的精度。
- **Images**: none — fully native. C-05 remains a supporting evidence input and is not placed.
- **Fact IDs**: CN Ch.4 §4.4.3 / §4.5.1 multiple-timescale row (Figs.4-15/4-16); EP Ch.23 §23.3 stage-duration row; UE Ch.12 residence-time and storage-versus-flux rows.

#### Slide 32 - 课堂读图 | Concept Check 2

- **Audience move**: 刚读完储库与通路 → 能任选图 12.19 上的一条通路，说出起点与终点储库、过程、快慢与所属领域。
- **Relationships**: The approved global figure is the evidence; the prompt asks for classification rather than recall, and several pathways are acceptable answers.
- **Composition**: Approved C-01 placed complete and aspect-correct on the left at maximum legible size, with a native right column carrying the four-part prompt and a compact reading aid; the answer key lives only in the Notes.
- **Title**: 课堂读图 | Concept Check 2
- **Core message**: 任选图 12.19 上的一条通路，按储库、通量、快慢与领域把它说清楚。
- **Content**: 任务提示（图外原生卡片）— 在图 12.19 上任选一条通路，说出：1 起点储库与终点储库 · 2 中间的过程或通量 · 3 这条通路相对是快还是慢 · 4 它属于生物、海洋还是地质路径 · 读图提示 — 先找方框（储库）再读箭头（通量）；大气、陆地、海洋与地质储库四个区域在图上有明确分区 · 边界说明 — 不要求背下图上全部数字；120 与 80 Gt C/yr 是总交换，不等于净碳汇；答案不唯一，Notes 给出多于一条可接受通路。
- **Images**: C-01_UE_Fig12-19_PDF1209_raw.png (placed complete, no crop).
- **Fact IDs**: UE Ch.12 Fig.12.19 row; CN Ch.4 C-04/C-05 companion rows.

#### Slide 33 - 第二部分总结 | Carbon Links Life to Rocks

- **Audience move**: 走完碳循环第二部分 → 能用四句话把快速生物过程到缓慢岩石圈交换串起来。
- **Relationships**: The four synthesis units restate the accepted carbon pages and introduce nothing new.
- **Composition**: Four generous native synthesis cards in a 2 × 2 arrangement, each one bilingual heading plus one explanatory line, with generous whitespace and no figure.
- **Title**: 第二部分总结 | Carbon Links Life to Rocks
- **Core message**: 碳循环从快速的生物与海气交换，延伸到缓慢的岩石圈交换。
- **Content**: 四个单元 — 01 碳存在哪里：大气、生命与土壤、海洋、沉积物与岩石 · 02 快速通路：光合作用、呼吸作用与海气交换 · 03 与岩石相连：碳酸盐形成、埋藏、俯冲与脱气 · 04 不同的时钟：决定每个储库响应多快 · 边界说明 — 本页不新增图件、不新增数值，只做已讲内容的总结。
- **Images**: none — fully native.
- **Fact IDs**: UE Ch.12; CN Ch.4; EP Ch.23 synthesis rows for the Part II close.

## X. Speaker Notes Requirements

- **Generation**: enabled
- **Filename**: match each SVG filename under `notes/`
- **Content**: Ground each note in the final visible slide and the approved Source Matrix rows; walk the carbonate path and its caution, state the weathering distinction plainly, read the four slow-cycle stages in order, explain that the two timescale panels come from two different textbook figures, and give a multi-answer key for the concept check. Add no external facts and do not duplicate all bilingual text.
- **Total duration**: approximately 9 minutes for the six-page segment
- **Notes style**: patient, explanatory, signposted, and concise
- **Presentation purpose**: 收束碳循环第二部分：从碳酸盐到风化、慢地质路径、多重时钟，并用课堂读图与总结收尾。
