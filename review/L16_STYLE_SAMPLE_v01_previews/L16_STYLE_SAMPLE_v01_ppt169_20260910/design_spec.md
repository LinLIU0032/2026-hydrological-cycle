<!-- ppt-master-schema: design-spec/v1 -->
# L16_STYLE_SAMPLE_v01 - Design Spec

## I. Project Information

| Item | Value |
| --- | --- |
| Project Name | L16_STYLE_SAMPLE_v01 |
| Canvas Format | PPT 16:9, 1280 × 720 |
| Page Count | 9 |
| Primary Language | zh-CN |
| Target Audience | EOE111 课堂学生 |
| Communication Intent | 课堂教学：用九页代表性样稿建立 Lecture 16 的视觉与讲授基准。 |
| Desired Audience Outcome | 能识别主要储库、通量与泵，区分反馈符号，并保留六条核心结论。 |
| Core Message / Ask / Action | 用 reservoir、flux、residence time、coupling、feedback 与 timescale 阅读水—碳循环。 |
| Delivery Context | 16:9 课堂投影；教师现场讲授。 |
| Artifact Afterlife | 九页样稿作为完整 44 页批量制作的审批门。 |
| Reading Mode | balanced |
| Content Strategy | 严格适配已批准的 Blueprint 与 Style Spec，不扩写外部教学内容。 |
| Design Style | 课程系列延续：instructional + briefing 的教学秩序，结合克制的 Swiss 网格与圆角课程卡片。 |
| AI Image Acquisition Path | not applicable |
| Generation Mode | continuous |
| Spec Refinement | disabled |
| Speaker Notes | enabled — final Stage-2 proactive policy |
| Custom Animations | disabled — final Stage-2 proactive policy |
| Narration Audio | disabled — final Stage-2 proactive policy |
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
- **Mode Behavior**: Decompose the sample into ordered teaching units, give sibling concepts parallel treatment, and keep factual figures neutral and scannable. The nine-page spine moves from course orientation to water and carbon system reading, then mechanism, feedback sign, a slow negative-feedback example, and synthesis; page titles remain the locked bilingual titles while one teaching message states the learning point.
- **Visual style**: custom
- **Visual Style References**: swiss-minimal, soft-rounded
- **Visual Style Behavior**: Use a rigorous 16:9 grid, large white fields, one dark-blue course header, and a small number of flat rounded teaching cards with exact alignment. Geometry is restrained and purposeful: dominant textbook figures or native scientific diagrams lead the evidence pages, while cards organize objectives, navigation, definitions, and takeaways. Corners share one subtle radius family; borders and whitespace create separation, with no default shadow or decorative texture.
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

- **Hierarchy direction**: Course header or cover identity → one teaching message → dominant evidence or parallel concept group → source line and page number.
- **Composition tendency**: Use one dominant figure or native process map on evidence pages; use balanced repeated units only where the learning task is comparison, navigation, objectives, or synthesis.
- **Cross-page continuity**: Recur the 72 px dark-blue header, bilingual titles, left teaching-message marker, restrained source line, two-digit original slide number, and the water-blue/carbon-orange semantic split.
- **Spacing posture**: Open on cover, navigation, feedback definition, and closing; denser but still projection-safe on textbook-figure and mechanism pages.
- **Spacing anchors**: page margin 40 px; block gap 12 px; column gutter 28 px; corner radius 12 px; body leading 21 px.

## VI. Icon Usage Specification

- **Primary bundled library**: none

| Icon Path | Suitable Scenarios |
| --- | --- |

## VIII. Image Resource List

| Filename | Dimensions | Ratio | Purpose | Type | Image pattern | Crop Policy | Acquire Via | Status | Reference | text_policy | page_role |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| W-02_EP_InterludeF_HydrologicCycle_pdf615-616_print580-581_spread_raw.png | 5900 × 3513 | 1.68 | Slide 09 global hydrologic-cycle evidence | Textbook figure | Dominant evidence field with an adjacent numbered reading guide; crop only nonessential outer matter | adaptive | user | Existing | Source: EP 5e, Interlude F, The Hydrologic Cycle, pp.580–581 (PDF pp.615–616). | embedded | local |
| C-01_UE_Fig12-19_PDF1209_raw.png | 1725 × 1435 | 1.20 | Slide 23 global carbon reservoirs and fluxes | Textbook figure | Large intact evidence figure with a compact reading key for reservoirs, fluxes, and units | no-crop | user | Existing | Source: UE 8e, Fig. 12.19, PDF p.1209. | embedded | local |

## IX. Content Outline

### Part 1: Opening

#### Slide 01 - Lecture 16: Hydrological Cycles / 第16讲：水文循环

- **Audience move**: 未进入课程主题 → 知道本讲研究水、碳及其气候反馈，并识别课程系列身份。
- **Relationships**: Lecture 16 属于 EOE111 课程；水循环与碳循环共同连接储库、通量、耦合、反馈和时间尺度。
- **Composition**: Open white course cover with a strong bilingual title, compact course identity, and a restrained native water–carbon dual-theme cue.
- **Title**: Lecture 16: Hydrological Cycles / 第16讲：水文循环
- **Core message**: 水与碳的循环揭示地球系统如何连接物质、能量与气候。
- **Content**: EOE111 course identity · Lecture 16 · primary reference: Understanding Earth, Chapters 12 and 17 · water cycle / carbon cycle / climate feedbacks.
- **Cover impact (binding)**: The bilingual lecture title is the dominant searchable native text; no unapproved decorative image appears.

#### Slide 02 - 学习目标 | Learning Objectives

- **Audience move**: 只知道主题 → 能用五个可检查的目标组织本讲学习。
- **Relationships**: 五个目标依次覆盖水循环、碳循环、水—碳耦合、反馈符号和时间尺度；共同支撑系统响应判断。
- **Composition**: Five balanced objective units under the standard course header, with Chinese wording leading and the locked English sentence retained compactly.
- **Title**: 学习目标 | Learning Objectives
- **Core message**: 本讲从“储库与通量”推进到“耦合、反馈与时间尺度”。
- **Content**:
  1. 识别地球水循环的主要储库与通量，并区分储量、通量和停留时间。 Identify the major reservoirs and fluxes of the hydrologic cycle and distinguish storage, flux, and residence time.
  2. 描述全球碳循环的主要储库，以及快速和缓慢碳循环路径。 Describe the major carbon reservoirs and the fast and slow pathways of the global carbon cycle.
  3. 解释水和碳如何连接大气、海洋、岩石与生命。 Explain how water and carbon connect the atmosphere, oceans, rocks, and life.
  4. 区分正反馈与负反馈，并解释典型气候反馈机制。 Distinguish positive from negative feedback and explain representative climate feedback mechanisms.
  5. 比较不同循环和反馈的时间尺度，并预测系统受到扰动后的响应方向。 Compare the timescales of cycles and feedbacks and predict the direction of system responses to perturbations.

#### Slide 03 - 目录 | Table of Contents

- **Audience move**: 面对多个概念 → 建立三部分课程地图并知道水、碳、反馈的先后关系。
- **Relationships**: Part I Water Cycle precedes Part II Carbon Cycle; both feed Part III Coupling & Climate Feedbacks.
- **Composition**: Three-part navigation field with the active sequence made explicit and all sections held at equal course-series weight.
- **Title**: 目录 | Table of Contents
- **Core message**: 先分别读懂水与碳，再把它们放回同一个气候系统。
- **Content**: 01 Water Cycle 水循环 · 02 Carbon Cycle 碳循环 · 03 Coupling & Climate Feedbacks 耦合与气候反馈.

### Part 2: Water and Carbon Systems

#### Slide 09 - 全球水循环 | Global Hydrologic Cycle

- **Audience move**: 看到复杂水循环图 → 能指出主要储库并沿箭头识别关键转移过程。
- **Relationships**: Ocean, atmosphere, snow/ice, land/organisms, and subsurface are reservoirs linked by evaporation, transport, precipitation, runoff, infiltration, groundwater flow, melting, sublimation, and transpiration.
- **Composition**: Make W-02 the dominant evidence field; pair it with a short numbered reading sequence that moves from reservoirs to arrows to the external energy driver.
- **Title**: 全球水循环 | Global Hydrologic Cycle
- **Core message**: 全球水循环是一组储库之间持续发生的水通量，而不是一条单向路径。
- **Content**: 先找储库 Reservoirs · 再读转移 Fluxes · 最后追踪太阳能驱动与地表—地下回路；海洋覆盖约 71% 地表，仅作图中背景事实。
- **Images**: W-02_EP_InterludeF_HydrologicCycle_pdf615-616_print580-581_spread_raw.png.
- **Fact IDs**: M-02, M-08.

#### Slide 23 - 全球碳循环 | Global Carbon Cycle

- **Audience move**: 把碳循环图当作数字集合 → 能区分储库单位与通量单位，并识别快交换和慢地质通量。
- **Relationships**: Atmosphere, land plants/soils, ocean/marine organisms, and lithosphere are reservoirs; gross biological and air–sea exchanges link fast pathways, while weathering, sedimentation, burial, and volcanism link slower geological pathways.
- **Composition**: Give C-01 maximum legible scale; use a compact three-part reading key for boxes, arrows, and timescale contrast without asking students to memorize every value.
- **Title**: 全球碳循环 | Global Carbon Cycle
- **Core message**: 读碳循环要先分清储库与通量，再比较交换速度，而不是背诵全部数字。
- **Content**: 储库单位 Gt C · 通量单位 Gt C/yr · 120 与 80 Gt C/yr 是高频总交换、不能直接标成净汇 · 硅酸盐风化与火山返回均小于 0.1 Gt C/yr，代表慢地质通量。
- **Images**: C-01_UE_Fig12-19_PDF1209_raw.png.
- **Fact IDs**: M-09; UE Figure 12.19 source rows.

#### Slide 27 - 海洋如何把碳送入深处？ | Ocean Carbon Pumps

- **Audience move**: 只知道海洋能吸收 CO₂ → 能区分物理泵、生物泵与碳酸盐路径如何把碳带离表层。
- **Relationships**: Atmospheric CO₂ enters the surface ocean; the physical pump links cooling, dissolution, circulation, and deep-water transport; the biological pump links photosynthesis, organic particles, sinking, and remineralization; carbonate formation and sedimentation connect organisms to sediment and rock.
- **Composition**: A faithful bilingual native redraw based on C-04, with two primary downward pathways compared in parallel and the carbonate pathway retained as a secondary connection.
- **Title**: 海洋如何把碳送入深处？ | Ocean Carbon Pumps
- **Core message**: 物理泵和生物泵通过不同机制把表层碳输送到深海。
- **Content**: 物理泵 Physical pump：低温溶解与环流下沉 · 生物泵 Biological pump：光合作用、颗粒下沉与深处分解 · 碳酸盐泵 Carbonate pump：成壳、沉降与沉积；深层水无机碳浓度约比表层高 15%，仅作为教材支持事实。
- **Visualization**: Native qualitative ocean cross-section redrawn from C-04; preserve all three pump meanings and arrow directions.
- **Fact IDs**: CN Ch.4 Figure 4-9 source rows.

### Part 3: Feedbacks and Synthesis

#### Slide 35 - 什么是反馈？ | What Is Feedback?

- **Audience move**: 把 positive/negative 当作好坏评价 → 能根据诱发变化与初始变化的方向判断放大或抑制。
- **Relationships**: An initial change causes an induced change; when the induced effect reinforces the initial direction the loop is positive, and when it opposes the initial direction the loop is negative and tends to stabilize.
- **Composition**: Two equal native loops share one central “initial change” concept, using direction and sign—not moral labels—as the comparison.
- **Title**: 什么是反馈？ | What Is Feedback?
- **Core message**: 正反馈放大初始变化；负反馈反向作用并趋于稳定。
- **Content**: Positive feedback = amplifies / reinforces · Negative feedback = opposes / stabilizes · 判断步骤：找初始变化 → 跟踪诱发变化 → 比较最终作用方向。
- **Visualization**: Native two-loop comparison from the approved F-02 brief; no external infographic.
- **Fact IDs**: M-11; UE Ch.12 feedback definition row.

#### Slide 38 - 岩石风化恒温器 | The Weathering Thermostat

- **Audience move**: 只知道风化消耗 CO₂ → 能沿完整因果链判断其负反馈方向并认识其地质时间尺度。
- **Relationships**: Higher temperature and/or atmospheric CO₂ promote warmer, wetter, more acidic weathering conditions; faster silicate weathering transfers atmospheric carbon toward dissolved products and carbonate burial; lower atmospheric CO₂ tends to cool climate and oppose the initial warming. Cooling slows removal while volcanic CO₂ input can rebuild the reservoir.
- **Composition**: A faithful bilingual native redraw grounded in F-01 and HB Chapter 9, organized as one closed causal loop with the slow-timescale label kept visually distinct.
- **Title**: 岩石风化恒温器 | The Weathering Thermostat
- **Core message**: 更暖、更湿和更酸性的条件会加速硅酸盐风化与 CO₂ 去除，形成缓慢的负反馈。
- **Content**: Warming / higher CO₂ → warmer, wetter, more acidic conditions → faster silicate weathering → CO₂ removal and carbonate burial → cooling tendency · response time >10^5–10^7 years · carbonate-rock weathering must not be presented as the same net atmospheric sink as silicate weathering.
- **Visualization**: Native bilingual causal loop faithfully redrawn from F-01; update Ca++ to Ca²⁺ without changing the logic.
- **Fact IDs**: M-14, M-15; UE silicate-weathering companion row.

#### Slide 44 - 核心知识点 | Key Takeaways

- **Audience move**: 分散记住若干过程 → 用六条结论整合储库、通量、停留时间、耦合、反馈与时间尺度。
- **Relationships**: Takeaways 1–2 establish the common reading framework; 3–5 apply it to water, carbon, and coupling; 6 combines feedback sign with response timescale.
- **Composition**: Six concise numbered takeaways in a Lecture 09-style synthesis field, with English keywords acting as retrieval cues rather than duplicated translations.
- **Title**: 核心知识点 | Key Takeaways
- **Core message**: 判断地球系统响应必须同时看物质在哪里、怎样移动、作用方向和响应速度。
- **Content**:
  1. 水和碳通过通量在储库之间迁移；储量不等于通量。 `Reservoir ≠ Flux`
  2. 停留时间控制储库响应快慢；大储库不一定更新快。 `Residence Time`
  3. 水循环搬运物质和能量，并连接大气、海洋、岩石与生命。 `Water connects geospheres`
  4. 碳循环同时包含快速的生物/海洋路径和缓慢的地质路径。 `Fast & Slow Carbon Cycles`
  5. 水通过风化、海气交换和生命过程把水循环与碳循环耦合起来。 `Water–Carbon Coupling`
  6. 正反馈放大变化，负反馈抑制变化；判断系统响应必须同时看方向和时间尺度。 `Feedback sign & timescale`
- **Closing impact (binding)**: The six locked takeaways are the final content; no page follows.

## X. Speaker Notes Requirements

- **Generation**: enabled
- **Filename**: match each SVG filename under `notes/`
- **Content**: Ground each note in the final visible slide and approved source rows; explain how to read figures and causal directions without adding external facts or duplicating all bilingual text.
- **Total duration**: approximately 12 minutes for the nine-page sample sequence
- **Notes style**: patient, explanatory, signposted, and concise
- **Presentation purpose**: 课堂教学：用九页代表性样稿建立 Lecture 16 的视觉与讲授基准。
