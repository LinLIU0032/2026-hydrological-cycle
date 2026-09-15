<!-- ppt-master-schema: design-spec/v1 -->
# PROD-W1-WORKBUDDY - Design Spec

## I. Project Information

| Item | Value |
| --- | --- |
| Project Name | PROD-W1-WORKBUDDY |
| Canvas Format | PPT 16:9, 1280 × 720 |
| Page Count | 3 |
| Primary Language | zh-CN |
| Target Audience | EOE111 课堂学生 |
| Communication Intent | 课堂教学：在 Lecture 16 第二部分开头建立水到碳的过渡、碳储库层级，并把两个循环放回同一套框架下比较。 |
| Desired Audience Outcome | 能说出碳的主要储库层级与量级差异，并解释储库、通量与停留时间可以同时读水和碳，但两者的时钟不同。 |
| Core Message / Ask / Action | 碳用与水循环同一套储库—通量—停留时间语言阅读，但碳的储库量级与时间尺度并不相同。 |
| Delivery Context | 16:9 课堂投影；教师现场讲授。 |
| Artifact Afterlife | 三页按原始页码 21、22、24 并入 Lecture 16 的 44 页完整 deck；本任务不产出其他页面。 |
| Reading Mode | balanced |
| Content Strategy | 严格限定在已批准的 Blueprint、Style Spec 与 Source Matrix 行内；只使用已批准图件，不扩写外部教学内容。 |
| Design Style | 课程系列延续：instructional + briefing 的教学秩序，结合克制的 Swiss 网格与圆角课程卡片。 |
| AI Image Acquisition Path | not applicable |
| Generation Mode | continuous |
| Spec Refinement | disabled |
| Speaker Notes | enabled — 任务合同要求每页中文讲者备注 |
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
- **Mode Behavior**: Decompose each page into ordered teaching units, give sibling concepts parallel treatment, and keep source figures neutral and scannable. The three-page spine moves from a Part II transition and system bridge, to a four-value ascending carbon-reservoir hierarchy plus a separate qualitative geological group, backed by one approved figure, to an aligned water-versus-carbon framework comparison whose difference is the clock rather than the vocabulary.
- **Visual style**: custom
- **Visual Style References**: swiss-minimal, soft-rounded
- **Visual Style Behavior**: Use a rigorous white 16:9 grid, one dark-blue course header, a small number of flat rounded teaching cards with exact alignment, and generous whitespace. Carbon pages lead with the restrained orange accent while the water side of any comparison keeps the course blue; borders and whitespace create separation, with no default shadow, gradient, or decorative texture.
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

- **Hierarchy direction**: Course header → one teaching message → dominant evidence or parallel concept group → source line and page number.
- **Composition tendency**: Give one dominant native construction or one dominant approved figure per page; use balanced repeated units only where the learning task is comparison or hierarchy.
- **Cross-page continuity**: Recur the 72 px dark-blue header, bilingual titles, left teaching-message marker, restrained source line, two-digit original slide number, and the water-blue/carbon-orange semantic split.
- **Spacing posture**: Open on the transition page, denser but still projection-safe on the hierarchy and comparison pages.
- **Spacing anchors**: page margin 40 px; block gap 12 px; column gutter 28 px; corner radius 12 px; body leading 21 px.

## VI. Icon Usage Specification

- **Primary bundled library**: none

| Icon Path | Suitable Scenarios |
| --- | --- |

## VIII. Image Resource List

| Filename | Dimensions | Ratio | Purpose | Type | Image pattern | Crop Policy | Acquire Via | Status | Reference | text_policy | page_role |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| C-01_UE_Fig12-19_PDF1209_raw.png | 1725 × 1435 | 1.20 | Slide 22 carbon-reservoir evidence, one dataset | Textbook figure | Large evidence figure beside a native four-value ascending reservoir hierarchy plus a separate unnumbered qualitative geological group, whose values quote this figure; one focal-safe top-anchored crop removes only the unreadable English FIGURE 12.19 caption block below the artwork and changes no amount, unit, or arrow | adaptive | user | Existing | Source: UE 8e, Fig. 12.19, PDF p.1209. | embedded | local |

## IX. Content Outline

### Part 1: Carbon Cycle Opening

#### Slide 21 - 为什么接下来讲碳？ | Why Carbon?

- **Audience move**: 刚结束水循环 → 知道第二部分用同一套框架读碳，并能说出碳连接的四个领域。
- **Relationships**: Part I Water Cycle precedes Part II Carbon Cycle, and both feed Part III Coupling & Climate Feedbacks; the carbon cycle links climate, life, ocean, and rocks inside one shared reservoir–flux–residence-time framework.
- **Composition**: A compact three-step course map with Part II shown as active on the left, and a native system-bridge panel on the right carrying the three framework words above the four connected domains.
- **Title**: 为什么接下来讲碳？ | Why Carbon?
- **Core message**: 碳循环把气候、生命、海洋与岩石，接进与水循环同一套储库—通量框架。
- **Content**: 课程位置 — 01 水循环 Water Cycle 已完成 · 02 碳循环 Carbon Cycle 当前 · 03 耦合与气候反馈 Coupling & Climate Feedbacks 接下来 · 沿用同一套语言 — 储库 Reservoir · 通量 Flux · 停留时间 Residence Time · 碳连接四个领域 — 气候 Climate · 生命 Life · 海洋 Ocean · 岩石 Rocks · 教材依据：碳循环是碳在地球系统各组成部分之间持续迁移的过程，储库数量与储库间通量共同给出系统的定量描述（UE Ch.12 pp.1204–1205）；水分子与碳原子是地球表层系统最重要的两种物质，碳是生命圈的主干元素，碳循环是氧化—还原过程（CN Ch.4 §4.1 pp.57–58）。
- **Fact IDs**: M-09; UE Ch.12 carbon-cycle definition row.

#### Slide 22 - 碳储存在哪里？ | Carbon Reservoirs

- **Audience move**: 把碳循环等同于大气 CO₂ → 能按量级排出四个数值储库的升序层级，并把地质储库单列，说出最大储库不等于最快响应。
- **Relationships**: The four reservoirs whose totals C-01 prints form one ascending numerical series (Biosphere 500 → Atmosphere 830 → Soils 1500 → Ocean 38,000 Gt C); sediment and lithosphere are the largest reservoirs but carry no printed total, so they are carried as a separate qualitative geological group rather than as the tail of that numerical rank.
- **Composition**: Keep approved figure C-01 at maximum legible scale as the left evidence field, and rank the four printed reservoirs as a numbered ascending hierarchy on the right, below which the two geological reservoirs sit as an unnumbered qualitative group under an explicit divider; the ascending rule is named as the page's reading.
- **Title**: 碳储存在哪里？ | Carbon Reservoirs
- **Core message**: 碳主要储存在海洋、沉积物与岩石里；大气只是一个很小的储库。
- **Content**: 四个数值储库自小而大 — 01 生物圈 Biosphere 500 Gt C（陆地植物与海洋生物）· 02 大气 Atmosphere 830 Gt C · 03 土壤 Soils 1500 Gt C · 04 海洋 Ocean 38,000 Gt C（含海洋生物）· 地质储库，独立定性组、不参与上面的数值排序，教材图未给出总量 — 沉积物 Sediment · 岩石圈 Lithosphere（化石有机碳与碳酸盐岩）· 边界说明 — 数值全部取自同一张图 UE Figure 12.19，不与其他数据集混用；教材另指出地质储库远大于表层储库，但该图不印总量，因此本页只作定性。
- **Images**: C-01_UE_Fig12-19_PDF1209_raw.png.
- **Fact IDs**: UE Fig. 12.19 four-principal-reservoirs row; CN Ch.4 §4.5.1 geological-reservoir-magnitude row.

#### Slide 24 - 同样的语言，不同的时间尺度 | Same Framework, Different Timescales

- **Audience move**: 分别读过水和碳 → 能用同一组词对齐两个循环，并指出快慢档位并不相同。
- **Relationships**: Reservoir, flux, and residence time transfer unchanged from the hydrologic cycle to the carbon cycle, so the framework is equivalent; the residence-time row is where the two cycles contrast, because the fastest and slowest reservoirs differ between them.
- **Composition**: One aligned native matrix: a shared left rail carrying the three framework words, a water column, and a carbon column, with a bottom strip stating the equivalent framework and the different clocks.
- **Title**: 同样的语言，不同的时间尺度 | Same Framework, Different Timescales
- **Core message**: 储库、通量与停留时间可以同时读水和碳，但两个循环的时钟并不相同。
- **Content**: 三行对齐 — 储库 Reservoir：水分布在大气、海洋、冰雪、地下水与生命体中；碳分布在大气、生物圈、土壤、海洋、沉积物与岩石中 · 通量 Flux：水靠蒸发、输送、降水、径流与下渗迁移；碳靠光合、呼吸、海气交换、风化与埋藏迁移 · 停留时间 Residence Time：两侧都要问“这个储库多久更新一次”，但答案的档位不同 — 水的往返最快出现在大气、最慢出现在冰盖与深层地下水；碳的往返最快出现在表层库、最慢出现在沉积物与岩石 · 说明：具体数值与单位分别见第 08 页表 3-1 与教材图 4-15、4-16，本页不新建数值表。
- **Fact IDs**: M-07; M-09; CN Ch.4 §4.4.3 multiple-carbon-timescales row.

## X. Speaker Notes Requirements

- **Generation**: enabled
- **Filename**: match each SVG filename under `notes/`
- **Content**: Ground each note in the final visible slide and the approved Source Matrix rows; explain how to read the hierarchy and how the clocks differ, without adding external facts or duplicating all bilingual text.
- **Total duration**: approximately 4 minutes for the three-page segment
- **Notes style**: patient, explanatory, signposted, and concise
- **Presentation purpose**: 在 Lecture 16 第二部分开头建立水到碳的过渡、碳储库层级与时间尺度对齐。
