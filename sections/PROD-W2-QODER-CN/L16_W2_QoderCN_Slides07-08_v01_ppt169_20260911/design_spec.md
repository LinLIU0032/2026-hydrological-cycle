<!-- ppt-master-schema: design-spec/v1 -->
# L16_W2_QoderCN_Slides07-08_v01 - Design Spec

## I. Project Information

| Item | Value |
| --- | --- |
| Project Name | L16_W2_QoderCN_Slides07-08_v01 |
| Canvas Format | PPT 16:9, 1280 × 720 |
| Page Count | 2 |
| Primary Language | zh-CN |
| Target Audience | EOE111 课堂学生 |
| Communication Intent | 课堂教学：Production Wave 2，按已批准 Sample Deck 与已接受 Wave 1（Slides 04–06）视觉系统制作第 07–08 页。 |
| Desired Audience Outcome | 能说出海洋占绝对多数而淡水与易利用表层淡水逐级极小；能区分储量与更新速度并用停留时间比较储库快慢。 |
| Core Message / Ask / Action | 最大的水库并不是可用淡水；储量大不等于更新快，储量与停留时间是两个独立属性。 |
| Delivery Context | 16:9 课堂投影；教师现场讲授。 |
| Artifact Afterlife | 两页成品并入 Lecture 16 完整 deck 的第二周批量生产段（PROD-W2-QODER-CN），GATE 7 后由 Codex 整合。 |
| Reading Mode | balanced |
| Content Strategy | 严格使用合同锁定数据集：Slide 07 仅 UE Fig. 17.1；Slide 08 仅 CN Table 3-1（W-04 作数据核验基）与 UE 停留时间定义；不混 W-01、不混 EP Table F.3、不发明数值。 |
| Design Style | 课程系列延续：instructional + briefing 的教学秩序，结合克制的 Swiss 网格与圆角课程卡片。 |
| AI Image Acquisition Path | not applicable |
| Generation Mode | continuous |
| Spec Refinement | disabled |
| Speaker Notes | enabled — 任务合同要求每页含 speaker notes 且与可见内容一致、引用全部数值来源 |
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
- **Mode Behavior**: Decompose the two assigned pages into ordered teaching units; Slide 07 walks one hierarchy from all water down to accessible surface fresh water, Slide 08 contrasts two independent properties; keep factual figures neutral and scannable.
- **Visual style**: custom
- **Visual Style References**: swiss-minimal, soft-rounded
- **Visual Style Behavior**: Use a rigorous 16:9 grid, large white fields, one dark-blue course header, and a small number of flat rounded teaching cards with exact alignment. Native proportion bars and a native residence-time ladder lead the evidence; corners share one subtle radius family; borders and whitespace create separation, with no default shadow or decorative texture.
- **Theme**: Lecture 09 course-series continuity with water-blue semantic accents
- **Tone**: clear, scientific, calm, projection-safe, traceable

### Color Scheme

| Role | HEX | Purpose |
| --- | --- | --- |
| Background | `#FFFFFF` | Main teaching canvas |
| Secondary background | `#F7F9FC` | Neutral cards |
| Primary | `#0E3F8C` | Course header and major headings |
| Accent | `#1E4FA8` | Water/general markers and key paths |
| Secondary accent | `#EA580C` | Carbon markers (not used on these water pages) |
| Body text | `#1A2230` | Primary text |
| Secondary text | `#4A5568` | Captions, annotations, footers |
| Divider | `#D6DCE5` | Rules and neutral card borders |
| Water secondary | `#3D7BD9` | Secondary water emphasis and English keywords |
| Cool surface | `#F0F5FC` | Water/general secondary panels |
| Carbon heading | `#C2410C` | Carbon headings (unused here) |
| Carbon secondary | `#7A4A33` | Carbon supporting text (unused here) |
| Carbon surface | `#FDF4EF` | Carbon cards (unused here) |
| Carbon divider | `#F0CFC2` | Carbon card borders (unused here) |
| Warm highlight | `#FDECDD` | Short carbon emphasis strips (unused here) |

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

- **Hierarchy direction**: Course header → one teaching message → dominant native evidence (hierarchy bars / residence ladder) with a right reading column → source line and page number.
- **Composition tendency**: One dominant native figure per evidence page with a parallel reading column, matching the accepted Wave 1 Slides 04–06 composition family.
- **Cross-page continuity**: Recur the 72 px dark-blue header, bilingual titles, left teaching-message marker, restrained source line, two-digit original slide number, and water-blue accents; header numbering Slide 07 = 1.4, Slide 08 = 1.5.
- **Spacing posture**: Dense but projection-safe; generous whitespace inside cards.
- **Spacing anchors**: page margin 40 px; block gap 12 px; column gutter 28 px; corner radius 12 px; body leading 21 px.

## VI. Icon Usage Specification

- **Primary bundled library**: none

| Icon Path | Suitable Scenarios |
| --- | --- |

## VIII. Image Resource List

| Filename | Dimensions | Ratio | Purpose | Type | Image pattern | Crop Policy | Acquire Via | Status | Reference | text_policy | page_role |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

## IX. Content Outline

### Part 1: Water — Distribution and Turnover

#### Slide 07 - 最大的水库并不是可用淡水 | Most Water Is Not Accessible Freshwater

- **Audience move**: 以为地球水大多可用 → 认识海洋占绝对多数、淡水很小、易利用的表层淡水更小三级递减。
- **Relationships**: Membership hierarchy inside one UE Figure 17.1 dataset: ocean/seas dominates all water; glacier/polar ice and groundwater are the largest freshwater stores; lakes/rivers (with atmosphere and biosphere as separate tiny reservoirs) form the readily accessible surface share — each level is a subset of the one above.
- **Composition**: One dominant native hierarchical proportion graphic on the left: three rows on one shared linear all-water scale (all water → freshwater stores → accessible surface fresh water), tiny segments at annotated minimum visible width; a right reading column with the ocean-dominance fact, the locked-away freshwater card with the groundwater caveat, and the tiny accessible-share takeaway.
- **Title**: 最大的水库并不是可用淡水 | Most Water Is Not Accessible Freshwater
- **Core message**: 海洋占绝对多数，淡水很小，易利用的表层淡水更小。
- **Content**: 单一 UE Fig. 17.1 数据集：Ocean/seas 海洋 95.96%（1.40×10^9 km³）· Glacier/polar ice 冰川/极地冰 2.97%（4.34×10^7 km³）· Groundwater 地下水 1.05%（1.54×10^7 km³）· Lakes/rivers 湖泊/河流 0.009%（1.27×10^5 km³）· Atmosphere 大气 0.001%（1.5×10^4 km³）· Biosphere 生物圈 0.0001%（2×10^3 km³）· 总水量 ≈1.4×10^9 km³ · 地下水并非全部易利用 · 不计算新的饮用水百分比 · W-01 不放置、不混用其 96.5%/3.5% 数据集。
- **Visualization**: Native three-row hierarchical proportion bars on one linear all-water scale; custom fallback. Native-ready: water-hierarchy-bars=no（三级嵌套与最小可见条宽注记无法由原生 PowerPoint 图表对象表达，保持普通 SVG 几何，导出即原生可编辑形状）.
- **Fact IDs**: Water distribution — Major reservoirs row (UE Fig. 17.1, PDF 1647–1649); Source Conflicts: Slides 06–07 use UE Fig.17.1 only; W-01 backup-only row.

#### Slide 08 - 储量 ≠ 更新速度 | Storage ≠ Turnover

- **Audience move**: 把储量大等同于更新快 → 掌握储量与停留时间是两个属性，并能用 CN Table 3-1 的停留时间比较储库快慢。
- **Relationships**: Order: seven reservoirs ranked by ascending residence time (atmosphere → soil water → rivers & seasonal snow/ice → shallow groundwater → ocean → deep groundwater → Antarctic ice sheet); contrast: storage and turnover are independent properties, illustrated by the ocean (largest storage, 3,200 yr) versus the atmosphere (tiny storage, 9 days) from the same table.
- **Composition**: One dominant native residence-time ladder on the left: seven ordinal rows on a shared spine with value chips, fast rows in light water blue and slow rows in dark blue; a right reading column with the UE residence-time definition card, a storage-versus-turnover contrast card using the Table 3-1 storage column, and a fast/slow response takeaway card.
- **Title**: 储量 ≠ 更新速度 | Storage ≠ Turnover
- **Core message**: 储库大小与停留时间是两个不同属性；大储库不一定更新快。
- **Content**: CN Table 3-1 停留时间（合同核定七值）：大气 9 日 · 土壤水 1–2 月 · 河流与季节性冰雪 2–6 月 · 浅层地下水 100–200 年 · 海洋 3,200 年 · 深层地下水 10,000 年 · 南极冰盖 20,000 年 · 同表储量列对照：海洋 1,338,000,000 km³（13.38 亿 km³）与大气水 12,900 km³ · 停留时间定义（仅定义）：一定量的水或某化学物质在储库中停留的平均时间（UE pp.1650, 1205–1206）· 不呈现 storage/flux 公式、不将数值停留时间标为 UE 出处 · 不混 EP Table F.3。
- **Visualization**: Native ordinal residence-time ladder (position carries rank, chips carry values); qualitative order, no value-driven lengths, no chart key.
- **Fact IDs**: CN Table 3-1 row (PDF 9 / print 94, W-04 verification base); Residence-time definition rows UE 1650 and 1205–1206 (VERIFIED—PARTIAL: definition only, no numerical water table, no formula attribution).

## X. Speaker Notes Requirements

- **Generation**: enabled
- **Filename**: match each SVG filename under `notes/`
- **Content**: Ground each note in the final visible slide; cite every numerical source used (UE Fig. 17.1 for Slide 07; CN Table 3-1 and the UE definition for Slide 08); explain the hierarchy and the storage/turnover contrast without adding external facts.
- **Total duration**: approximately 3 minutes for the two-page sequence
- **Notes style**: patient, explanatory, signposted, and concise
- **Presentation purpose**: 课堂教学：Production Wave 2，制作 Lecture 16 第 07–08 页。
