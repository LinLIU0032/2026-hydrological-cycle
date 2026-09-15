<!-- ppt-master-schema: design-spec/v1 -->
# PROD-W2-WORKBUDDY - Design Spec

## I. Project Information

| Item | Value |
| --- | --- |
| Project Name | PROD-W2-WORKBUDDY |
| Canvas Format | PPT 16:9, 1280 × 720 |
| Page Count | 2 |
| Primary Language | zh-CN |
| Target Audience | EOE111 课堂学生 |
| Communication Intent | 课堂教学：把快速碳循环读成大气—植被—土壤之间的过程环，并用法定的海气 CO₂ 通量图说明海洋既吸收也释放。 |
| Desired Audience Outcome | 能画出并读懂光合、呼吸、分解三条通路及其方向，并把土壤当作真实碳储库；能看懂海气通量图的正负约定，说出海洋不是处处时时的单向碳汇。 |
| Core Message / Ask / Action | 陆地生命让碳在大气、植被与土壤之间快速往返；海洋既能吸收也能释放 CO₂，因此"海洋是碳汇"必须限定区域与时段。 |
| Delivery Context | 16:9 课堂投影；教师现场讲授。 |
| Artifact Afterlife | 两页按原始页码 25、26 并入 Lecture 16 的 44 页完整 deck；本任务不产出其他页面。 |
| Reading Mode | balanced |
| Content Strategy | 严格限定在已批准的 Blueprint、Style Spec 与 Source Matrix 行内；Slide 25 使用全原生过程图且不使用任何数值；Slide 26 只使用已批准图件 C-03 及其自身色标。 |
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
- **Mode Behavior**: Decompose each page into ordered teaching units and give sibling concepts parallel treatment. The two-page spine moves from a fully native three-process terrestrial loop whose reservoirs are drawn as reservoirs, to one approved air–sea flux map read through an adjacent native key that carries the sign convention and unit.
- **Visual style**: custom
- **Visual Style References**: swiss-minimal, soft-rounded
- **Visual Style Behavior**: Use a rigorous white 16:9 grid, one dark-blue course header, one dominant construction per page, a small number of flat rounded teaching cards with exact alignment, and generous whitespace; borders and whitespace create separation, with no default shadow, gradient, or decorative texture.
- **Theme**: Lecture 09 course-series continuity with water-blue and carbon-orange semantic accents
- **Tone**: clear, scientific, calm, projection-safe, traceable

### Color Scheme

| Role | HEX | Purpose |
| --- | --- | --- |
| Background | `#FFFFFF` | Main teaching canvas |
| Secondary background | `#F7F9FC` | Neutral cards and the diagram field |
| Primary | `#0E3F8C` | Course header and major headings |
| Accent | `#1E4FA8` | Markers and key paths where water meaning is carried |
| Secondary accent | `#EA580C` | Carbon markers, process arrows, source-side emphasis |
| Body text | `#1A2230` | Primary text |
| Secondary text | `#4A5568` | Captions, annotations, footers |
| Divider | `#D6DCE5` | Rules and neutral card borders |
| Water secondary | `#3D7BD9` | Secondary water emphasis, used only where ocean or water meaning is carried |
| Cool surface | `#F0F5FC` | Neutral secondary panels |
| Carbon heading | `#C2410C` | Carbon headings, return-side arrows, numbering |
| Carbon secondary | `#7A4A33` | Carbon supporting text and the subordinate litter transfer |
| Carbon surface | `#FDF4EF` | Carbon cards and the atmosphere band |
| Carbon divider | `#F0CFC2` | Carbon card borders |
| Warm highlight | `#FDECDD` | Short carbon emphasis strips and the soil reservoir body |

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

- **Hierarchy direction**: Course header → one teaching message → dominant construction or approved figure with its adjacent reading key → source line and page number.
- **Composition tendency**: Slide 25 is one dominant native process field with a narrow right column of interpretation cards; Slide 26 pairs one approved portrait-format figure with a wider right column that carries the reading key so the sign convention and unit stay readable at projection scale.
- **Cross-page continuity**: Recur the 72 px dark-blue header, bilingual titles, left teaching-message marker, restrained source line, two-digit original slide number, and the water-blue/carbon-orange semantic split.
- **Spacing posture**: Dense but projection-safe on both pages; the diagram and the figure are each allowed one large uninterrupted field.
- **Spacing anchors**: page margin 40 px; block gap 12 px; column gutter 28 px; corner radius 12 px; body leading 21 px.

## VI. Icon Usage Specification

- **Primary bundled library**: none

| Icon Path | Suitable Scenarios |
| --- | --- |

## VIII. Image Resource List

| Filename | Dimensions | Ratio | Purpose | Type | Image pattern | Crop Policy | Acquire Via | Status | Reference | text_policy | page_role |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| C-03_Fig4-8_PDF68_print153_raw.png | 865 × 750 | 1.153 | Slide 26 air–sea CO₂ flux evidence, the page's only quantitative representation | Textbook figure | Portrait-format world map placed complete inside a rounded evidence panel, beside a wider native reading key; no crop is applied so the colour scale, the −108 … +108 labels, the unit `g/(m²·a)`, the caption block and the printed sign-convention sentence all remain visible and unmodified | no-crop | user | Existing | Source: 地球系统与演变, Fig. 4-8, p.153 (PDF p.68). | embedded | local |

## IX. Content Outline

### Part 2: Carbon Cycle — Fast Processes

#### Slide 25 - 快速碳循环：陆地生命 | Fast Carbon Cycle: Life on Land

- **Audience move**: 把碳循环看成只有大气 CO₂ 的变化 → 能说出光合、呼吸、分解三条通路的方向，并把土壤认作一个真实的碳储库。
- **Relationships**: One closed biological loop: photosynthesis moves atmospheric CO₂ into plant organic matter; plant and animal respiration returns organic carbon to the atmosphere; litter and dead organic matter carry carbon from vegetation into the soil reservoir; microbial decomposition returns soil carbon to the atmosphere. The atmosphere is the hub; vegetation and soils are the two reservoirs on the land side.
- **Composition**: A single wide native process field. An atmosphere band spans the top; three vertically separated process channels carry explicit arrow directions; a vegetation reservoir card and a larger-extent soil reservoir card sit along the bottom, joined by one subordinate litter transfer so the loop closes. A narrow right column carries three short interpretation cards.
- **Title**: 快速碳循环：陆地生命 | Fast Carbon Cycle: Life on Land
- **Core message**: 光合作用、呼吸与分解，把碳在大气、植被与土壤之间快速搬运。
- **Content**: 三条通路 — 光合作用 Photosynthesis：大气 CO₂ → 植物有机碳（向下）· 呼吸作用 Respiration：植物与动物把有机碳氧化后归还大气（向上）· 微生物分解 Decomposition：枯落物与土壤碳 → 大气 CO₂（向上）· 环的连接 — 枯落物与死亡有机质把碳从植被带入土壤储库，这一条画得更细、用次级色，表示它是上述三条通路的物理衔接而非第四种通路 · 土壤是储库 — 土壤不只是箭头之间的空隙，枯落物与死亡有机质在其中积累，构成一个真实的碳储库 · 为什么叫"快速" — 植被与土壤的碳以年—十年尺度周转，与后面地质储库的百万年尺度形成对照 · 与水循环的短暂交会 — 同一片叶子上光合固碳与蒸腾失水同时发生，这是两个循环在植物上的接触点，本页不展开耦合。
- **Images**: none — this page is fully native and carries no raster and no numerical value.
- **Fact IDs**: UE Ch.12 Atmosphere–Biosphere Gas Exchange row; CN Ch.4 §4.2.2 / §4.3.4 / §4.3.5 row; EP Ch.23 §23.3 row used only as process support, with its dated 63-billion-ton value excluded.

#### Slide 26 - 海气之间的碳交换 | Air–Sea Carbon Exchange

- **Audience move**: 把海洋当作固定的碳汇 → 能看懂通量图上的正负约定，并说出同一片海洋在不同区域分别表现为源或汇。
- **Relationships**: The air–sea CO₂ flux is bidirectional and spatially patterned; the sign convention of the map is the page's central reading rule, and it is the reason the ocean cannot be described as a uniform one-way sink.
- **Composition**: Approved figure C-03 placed complete at the left with no crop so its own colour scale, unit and printed sign sentence survive, and a wider right column of three native cards that restate the reading key, the controls on the exchange, and the takeaway.
- **Title**: 海气之间的碳交换 | Air–Sea Carbon Exchange
- **Core message**: 海洋既能吸收、也能释放 CO₂；它不是处处时时单向吸碳的汇。
- **Content**: 读数规则 — 正值 = 海水放出 CO₂（源）· 负值 = 海水吸收 CO₂（汇）· 单位 净通量 g/(m²·a)，色标约 −108 … +108 · 什么在控制 — 温度、海水组成，尤其风混合与浪花飞溅决定溶解与释放的快慢；高纬冷海更易吸收，上升流与暖水区更易放出 · 一句话结论 — 同一片海洋在不同区域分别表现为源或汇，所以"海洋是碳汇"必须限定区域与时段 · 边界说明：本页只用图 4-8 这一套通量数据，不叠加其他总交换数值。
- **Images**: C-03_Fig4-8_PDF68_print153_raw.png.
- **Fact IDs**: CN Ch.4 §4.3.2 surface-ocean source/sink row; UE Ch.12 Atmosphere–Ocean Gas Exchange row used only for the qualitative controls, with its ~80 Gt C/yr gross-exchange value excluded from this page.

## X. Speaker Notes Requirements

- **Generation**: enabled
- **Filename**: match each SVG filename under `notes/`
- **Content**: Ground each note in the final visible slide and the approved Source Matrix rows; read the three pathways and their directions, explain why soils count as a reservoir, and walk through the map's sign convention without adding external facts or duplicating all bilingual text.
- **Total duration**: approximately 4 minutes for the two-page segment
- **Notes style**: patient, explanatory, signposted, and concise
- **Presentation purpose**: 在碳循环的快过程段落里，先讲陆地生命的快速往返，再讲海气交换的双向性。
