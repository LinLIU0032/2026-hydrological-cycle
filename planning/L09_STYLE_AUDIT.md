# Lecture 09 Presentation Style Audit

## 1. Audit scope and evidence standard

- Task: `STYLE-AUDIT`.
- Source deck: `E:\PG\2026 Hydrological cycle\09 Earthquakes and Volcanoes - v5zw.pptx`.
- Inspection was read-only. No slide, note, master, layout, theme, or package part was edited or saved.
- Initial SHA-256: `BB916212AB12CE2DF072BAE39FFEE8A0F32A2A0D3CA501F644A1B95611E95017`.
- `ppt-master` attribution guard passed with the required project-local Python runtime. The skill has no exact read-only-audit route; therefore no Generate, Create Template, or Edit Native PPTX route was entered. Compatible read-only OOXML / `python-pptx` inspection and PowerPoint COM rendering were used.
- Visual QA used 18 PowerPoint-rendered 1920 × 1080 PNGs under `qa/L09_style_audit/representative_png/`: Slides 01, 02, 03, 04, 08, 09, 10, 12, 13, 17, 21, 30, 35, 38, 46, 51, 61, and 65.
- In this audit, **Exact** means recovered from PowerPoint geometry or OOXML. **Estimated** means judged from the representative renders because the value is flattened inside an image or not encoded as an editable property.

## 2. Overall design language to inherit

The dominant, reusable Lecture 09 language is a clean white teaching canvas with a dark-blue course header, a bilingual section title on the left, a short topical label on the right, one larger teaching-message heading below, and modular rounded cards or textbook figures in a strict grid. Earthquake material uses blue accents; volcano material adds an orange/brown accent family without changing the page architecture.

Lecture 16 should inherit the **polished custom page family**, not the visibly older full-image, title-layout, or screenshot-heavy exceptions. Standard-header pages such as Slides 08, 09, 12, 17, 30, 38, 46, 51, 61, and 65 are better precedents than Slides 10, 14, 21, 28, 41, 44, or 53–57.

## 3. Slide size, master, and layout use

| Item | Audit result | Evidence class |
|---|---|---|
| Slide size | 13.3333 × 7.5000 in; 12,192,000 × 6,858,000 EMU | Exact |
| Aspect ratio | 16:9 (1.777778) | Exact |
| Slide count | 65 | Exact |
| Masters | 1 | Exact |
| Layouts | 4: `DEFAULT`, `Title Slide`, `Blank`, `1_Title and Content` | Exact |
| Layout usage | `DEFAULT` 53; `Title Slide` 9; `Blank` 2; `1_Title and Content` 1 | Exact |
| Hidden slides | 11, 24, 37 | Exact |

The master is effectively empty. The `DEFAULT` layout has zero shapes, and most recurring design elements are slide-local. The standard header is repeated as local geometry on 50 slides. This means the visual system is recoverable, but the native layouts are not a reliable reusable template by themselves. A later Lecture 16 specification should encode the recurring geometry explicitly rather than assume the source master/layout will supply it.

## 4. Typography

### 4.1 Font families

- **Microsoft YaHei** is the dominant working font: 1,591 explicitly named runs. It is used for both Chinese and English on the polished internal slides.
- The main cover title is **Arial**, 46.4 pt, bold.
- The cover course line uses **Times / Times New Roman**, 22.5 pt, bold.
- A few legacy/imported objects use Arial, Times New Roman, Calibri, Calibri Light, 黑体, or theme fonts. These are exceptions, not a coherent secondary Latin system.
- Theme fonts are Calibri Light / Calibri in one theme and 等线 Light / 等线 in a second theme, but the polished slides mostly override them with Microsoft YaHei.

Actionable inheritance: use Microsoft YaHei for Chinese and Latin text inside Lecture 16 unless the later Style Spec deliberately preserves the cover's serif course line. Do not introduce another body Latin font merely because the theme contains Calibri.

### 4.2 Size hierarchy

| Role | Lecture 09 value | Evidence class |
|---|---:|---|
| Cover main title | 46.4 pt | Exact |
| Cover course line | 22.5 pt | Exact |
| Cover topic straps | 15 pt | Exact |
| TOC title in blue band | 28 pt | Exact |
| Standard left header title | 13.5 pt, bold | Exact |
| Standard right header label | 12 pt, regular | Exact |
| Main teaching-message heading | commonly 15.75 pt, bold | Exact |
| Summary / card subheading | commonly 14.25 pt, bold | Exact |
| Card heading / step heading | commonly 11.25–12.75 pt, often bold | Exact |
| Normal body | commonly 9.75, 10.5, 11.25, or 12 pt | Exact |
| Final Key Terms blocks | 9.75 pt | Exact |
| Editable figure-adjacent explanation | commonly 10.5–11.25 pt | Exact |
| Captions flattened inside textbook images | approximately 8–11 pt on the rendered slide | Estimated |
| Recurring footer | not present | Exact |

The deck's most common explicit sizes are 11.25, 12, 9.75, 13.5, 10.5, and 15.75 pt. Lecture 09 therefore does **not** support a universal 11 pt minimum. For Lecture 16, 10.5–12 pt is the authentic compact body range, but 9.75 pt should be reserved for short secondary text or terms, not long explanatory paragraphs.

## 5. Header geometry and section labels

The standard content-page header is the strongest course-series identifier.

| Element | Geometry / style | Evidence class |
|---|---|---|
| Header band | x 0, y 0, w 13.333 in, h 0.750 in; rectangular; fill `#0E3F8C`; no stroke | Exact; found on 50 slides |
| Left section title box | usually x 0.417, y 0.260, h 0.229 in; width fits content; Microsoft YaHei 13.5 pt, bold, `#FFFFFF` | Exact |
| Right topical label box | right edge normally x 12.917 in; y 0.271, h 0.208 in; Microsoft YaHei 12 pt, regular | Exact |
| Right topical label color | `#FFFFFF` with 75% alpha | Exact |
| Main message marker | x 0.417, y about 1.021; w 0.062 in, h 0.271 in; `roundRect`; blue or orange fill | Exact common pattern |
| Main message title | x about 0.583, y about 1.021; 15.75 pt bold dark blue | Exact common pattern |

Left header syntax is normally `section.number 中文 | English`, for example `1.2 地震成因 | What Causes Earthquakes?`. The right label is shorter and functions as a local topic tag, for example `断层类型 · Fault Types`. It is not a source line or footer.

Earthquake pages normally use a blue message marker (`#1E4FA8`). Volcano pages normally use orange (`#EA580C`) while retaining the same dark-blue header and dark-blue teaching-message text.

## 6. Palette

The following values were recovered from editable slide objects, not sampled by eye.

| Role | Exact color | Use in Lecture 09 |
|---|---|---|
| Course header / darkest blue | `#0E3F8C` | Header band, major headings, some title text |
| Primary blue accent | `#1E4FA8` | Earthquake badges, message markers, strong bands |
| Secondary blue accent | `#3D7BD9` | English keyword emphasis, third-step badges |
| Main body | `#1A2230` | Primary body and card text |
| Secondary body | `#4A5568` | Supporting descriptions and English sublabels |
| Standard cool card fill | `#F7F9FC` | Most neutral cards |
| Cool border | `#D6DCE5` | Standard 1 pt card stroke |
| Secondary cool fills | `#F0F5FC`, `#E8EFF8` | Larger panels and badge backgrounds |
| Primary orange accent | `#EA580C` | Volcano message markers and badges |
| Dark orange heading | `#C2410C` | Volcano headings and summary numbering |
| Brown secondary text | `#7A4A33` | Volcano body/supporting text |
| Warm card fill | `#FDF4EF` / `#FDF3EF` | Volcano cards |
| Warm border | `#F0CFC2` | Standard 1 pt warm-card stroke |
| Warm highlight fill | `#FDECDD` | Badges and short highlight strips |
| White | `#FFFFFF` | Canvas and header text |

Other colors such as `#F97316`, `#E8590C`, `#C00000`, `#FF0000`, `#FFC107`, and textbook-image colors occur as local emphasis or legacy content. They are not needed as new deck-wide systems.

## 7. Cards, badges, strokes, and shadows

- Card silhouette: PowerPoint `roundRect` preset. The exact preset is recoverable; the apparent corner radius is approximately 0.10–0.15 in and is an estimate.
- Standard neutral cards use `#F7F9FC` fill, `#D6DCE5` 1 pt stroke.
- Standard warm cards use `#FDF4EF` or `#FDF3EF` fill, `#F0CFC2` 1 pt stroke.
- Recurrent horizontal-card sizes include 6.417 × 0.500/0.542 in, 6.125 × 0.604/0.781 in, and 5.833 × 0.521/0.542 in. These are page-specific modules rather than a single universal component.
- Number/letter badges are filled round rectangles with no stroke. Common sizes are 0.458 × 0.333/0.354 in; larger concept initials use approximately 0.458 × 0.458 in.
- The slim message marker is a 0.062 × 0.271 in round rectangle.
- 177 rounded rectangles use a 1 pt stroke; 191 rounded rectangles are borderless badges or markers.
- Only Slide 08 contains an editable OOXML shadow. The normal course card system is therefore **flat and shadowless**. Do not add drop shadows as a default Lecture 16 motif.

## 8. Grid, spacing, and alignment

- Standard outer content margin: x 0.417 in; major text begins at x 0.583 in after the message marker.
- Header-to-body transition: header ends at y 0.750 in; the first teaching-message row normally starts at y 1.000–1.035 in.
- Two-column pages commonly divide near the 6.67 in midpoint, with usable modules about 6.1–6.4 in wide and a 0.2–0.4 in central gutter.
- Three-card pages use modules about 4.05 in wide with roughly 0.15 in gutters.
- Four-card pages use modules about 3.0 in wide with roughly 0.14–0.18 in gutters.
- Repeated stacked-card vertical rhythm is about 0.50–0.65 in per item, with 0.09–0.13 in gaps.
- Alignment is predominantly left-aligned. Centering is used inside badges and for selected figure/caption groupings, not for ordinary paragraphs.
- Polished pages preserve substantial white space around a single message. Figure-heavy exceptions such as Slides 13 and 38 become crowded at the bottom and should not define the Lecture 16 density target.

## 9. Figure placement, crop, caption, and source practice

### 9.1 Placement and crop

- The deck contains 130 picture objects across 58 slides.
- Only three picture objects have nonzero PowerPoint crop values: Slides 14, 23, and 25. Most figures are placed as complete rectangular images with no native crop.
- Common compositions are: 50/50 two-column text/figure; one large figure with a narrow explanatory column; three or four equal figure cards; and a large textbook diagram under a short numbered process row.
- Aspect ratios are normally preserved. There is no recurring circular crop, shaped mask, or full-bleed photo system.
- Textbook screenshots often retain original English labels and captions. Course-authored bilingual labels are placed beside or above them rather than painted over the figure.

### 9.2 Caption format

- The most common textbook caption format is flattened into the imported figure: cyan/blue uppercase `FIGURE n.n`, followed by a dark caption sentence. Its exact editable font properties are not recoverable because it is raster content.
- Course-authored explanation bands are usually separate rounded cards in 10.5–11.25 pt, with dark body text or brown/orange emphasis.
- No consistent course-wide standalone figure-caption component was found.

### 9.3 Source format

- No recurring source footer or citation line exists on the polished pages.
- Source book/figure information is often visible only because the imported textbook caption remains inside the image.
- Slide 28 contains the informal editable label `(from wiki)`; Slide 55 contains `Fig 5.27b`. These are legacy exceptions and should not be copied as a standard.

Actionable inheritance: keep the visual treatment of an intact textbook figure and a short adjacent explanation, but the later Lecture 16 Style Spec must define a consistent source/caption line because Lecture 09 itself does not supply one.

## 10. Bilingual strategy

Lecture 09 uses the B-style strategy required by §28:

- Internal slide headers and main teaching-message headings normally pair Chinese and English on one line, separated by `|`, a space, or direct adjacency.
- Chinese carries the explanation; English is concentrated in technical terms, compact keywords, definitions, and imported figure labels.
- Learning Objectives use a Chinese objective plus a short English keyword/phrase in blue; they do not repeat every sentence in full English.
- Concept cards use a bold Chinese term followed by the English term, then Chinese explanatory text.
- Imported textbook figures frequently remain English-only; surrounding course text supplies Chinese interpretation.
- Final Key Terms use paired Chinese/English terms separated by middle dots or slashes.

Exceptions: the cover's main title is English-only, and several legacy question/image slides are English-first or English-only. For Lecture 16, §28 is locked and therefore overrides these exceptions: Slide Title and Section Title must remain bilingual without duplicating the full body.

## 11. Page-type patterns

### 11.1 Title page — Slide 01

- White canvas; no dark-blue header band.
- Logo: x 2.448, y 0.302, w 3.106, h 0.881 in.
- Course line: x 5.905, y 0.510, w 5.215, h 0.480 in; 22.5 pt bold Times/Times New Roman.
- Main title: x 0.251, y 1.492, w 12.832, h 0.977 in; 46.4 pt bold Arial.
- Two equal topic images: approximately x 0.773 / 6.784, y 2.745, w 5.78, h 3.26 in.
- Blue Chinese topic straps below each image: 15 pt Microsoft YaHei.

The visual structure is reusable, but the English-only main title conflicts with the locked Lecture 16 bilingual-title requirement.

### 11.2 Learning Objectives — Slide 02

- Standard dark-blue header plus a 15.75 pt `学习目标 Learning Objectives` teaching-message heading.
- Two balanced columns of six horizontal rounded cards.
- Earthquake column uses blue letter badges; volcano column uses pale-orange badges and dark-orange letters.
- Chinese objective text is 11.25 pt; optional English keyword is 9.75 pt in `#3D7BD9`.
- Strong example of dense but readable bilingual objectives; preserve the two-column logic only if Lecture 16 objective count supports it.

### 11.3 TOC and section transition — Slides 03 and 35

- Full-width dark-blue 0.75 in top band with `目录 Table of Contents` at 28 pt.
- Two columns for Earthquake and Volcano; each row is a pale rounded card with a colored numeric badge and bilingual label.
- Slide 03 is the initial TOC. Slide 35 repeats the TOC and highlights the entering `2 Volcano` heading in red (`#C00000`).
- There is **no dedicated full-page section-divider template**. The repeated TOC with active-section highlight functions as the section transition.

### 11.4 Concept / definition page — Slides 08, 09, and 12

- Slide 08: definition band, then a visual-versus-card comparison, with a bottom key-message strip.
- Slide 09: large textbook diagram on the left, definition cards on the right, and a bottom `关键术语` strip.
- Slide 12: three equal concept cards, each containing badge, bilingual term, short explanation, context band, and figure.
- These are the strongest reusable patterns for Lecture 16 reservoir, flux, feedback, and comparison concepts.

### 11.5 Question / discussion page — Slides 10, 13, 15, and 21

- There is no single standardized question template.
- Slide 10 uses a large English question, visual evidence, a Chinese identification prompt, and a pale-blue bottom prompt card.
- Slide 13 embeds a red Chinese question beside the mechanism figure.
- Slide 15 labels a two-question block `QA:`.
- Slide 21 uses a legacy black-outline question box under a textbook figure; this does not match the polished rounded-card system and should not be inherited.

Recommended course-series rule for later specification: place one short question in a pale rounded band or side card, retain the bilingual technical term, and use red only when the question is the deliberate focus rather than as routine decoration.

### 11.6 Figure / process page — Slides 17 and 30

- A short numbered sequence appears above or beside one dominant textbook diagram.
- Number badges create reading order; the figure retains original labels and caption.
- A compact tip or synthesis card isolates the teaching message.
- Slide 30 shows the volcano orange marker can coexist with blue hydrologic content without changing the layout system.

### 11.7 Summary, Key Terms, and Key Takeaways — Slide 65

- The final page is titled `总结 | Summary`; right header label is `核心要点 · 关键术语`.
- Two equal columns, Earthquake and Volcano, each contain six numbered takeaway cards.
- Takeaway numbering is 11.25 pt; statement text is 10.5 pt.
- Bottom half contains two large pale Key Terms cards; terms are 9.75 pt and bilingual.
- This page functionally combines Summary, Key Takeaways, and Key Terms. There is no separate slide explicitly titled `Key Takeaways`.
- The right column heading contains a source typo, `Vocano`; this is content noise, not a style rule.

For Lecture 16, inherit the numbered concise statements and paired Key Terms block, while obeying the locked Key Takeaways wording and final-slide requirement.

## 12. Footer and page numbering

- The polished content slides have no recurring visible footer, course code, source line, or page number.
- Only Slide 57 exposes a slide-number placeholder containing `57`; it is a one-off legacy page, not the standard.
- Footer/date/slide-number placeholders exist in some layouts, but they are not consistently instantiated or visible.

This differs from §29's provisional `page numbering` and `source caption` expectations. A later `L16_STYLE_SPEC_v1.md` must resolve these as explicit Lecture 16 components; they cannot be recovered as a consistent Lecture 09 pattern.

## 13. Representative visual examples

| Slide | Page role | Style evidence |
|---:|---|---|
| 01 | Cover | Course identity, logo/course line, two-image opening composition |
| 02 | Learning Objectives | Two-column bilingual objectives and badge/card system |
| 03 | Initial TOC | Full navigation grid and dual topic colors |
| 04 | Case Study | Standard header, large case card, dominant media, data statement |
| 08 | Definition / contrast | Definition band, concept cards, bottom message strip |
| 09 | Concept + figure | Figure/text split, definition cards, Key Terms strip |
| 10 | Visual question | Large prompt and evidence-first discussion page; legacy header exception |
| 12 | Three-way comparison | Equal cards with figure, term, explanation, context band |
| 13 | Mechanism + question | Numbered process and textbook mechanism figures; density caution |
| 17 | Procedure | Numbered sequence, figure pair, compact tip card |
| 21 | Discussion | Example of a legacy black-outline question treatment not to copy |
| 30 | Process figure | Three-step mechanism over one dominant scientific illustration |
| 35 | Section transition | Repeated TOC with active `Volcano` highlight |
| 38 | Three-card content | Warm volcano card family; crowded-bottom caution |
| 46 | Comparison | Two warm comparison cards and 50/50 figure split |
| 51 | Four-card framework | Four equal concept cards plus data highlight bands |
| 61 | Applied concept | Explanatory card + large map + bottom interpretation strip |
| 65 | Final summary | Numbered takeaways plus bilingual Key Terms |

## 14. Differences from §29 provisional baseline

| §29 provisional baseline | Lecture 09 audit | Required downstream interpretation |
|---|---|---|
| 16:9 | Confirmed exactly | Keep |
| White / very light gray background | Main canvas is white; light gray/blue is used inside cards | Keep white canvas |
| Microsoft YaHei preferred | Confirmed for internal slides and both Chinese/English | Keep; cover exceptions are optional |
| Header `#0E3F8C` | Confirmed exactly | Lock |
| Body `#1A2230` | Confirmed exactly | Lock |
| Secondary `#4A5568` | Confirmed exactly | Lock |
| Blue accents `#1E4FA8`, `#3D7BD9` | Confirmed exactly | Lock |
| Carbon accents `#C2410C`, `#7A4A33` | Both are present as the volcano family | Reuse carefully for carbon; do not create a new UI family |
| No primary orange specified | `#EA580C` is a major recurring accent | Add to the verified palette |
| Titles approximately 20–28 pt | Standard header title is 13.5 pt and teaching-message title is usually 15.75 pt; 28 pt is TOC-only; cover is 46.4 pt | Replace the single title range with a role-based hierarchy |
| Body preferably 12–16 pt; about 11 pt minimum | Actual body commonly includes 9.75, 10.5, and 11.25 pt | Use 10.5–12 pt for normal body; reserve 9.75 pt for compact secondary text |
| Source caption | No consistent source/caption component exists | Define one in Lecture 16 Style Spec |
| Page numbering | No consistent visible numbering exists | Define a minimal numbering rule rather than copying Slide 57 |
| Rounded cards | Confirmed; `roundRect`, usually 1 pt stroke | Lock |
| Restrained icons | Dominant devices are number/letter badges and simple markers, not an icon library | Prefer badges/markers |
| Generous whitespace | Confirmed on polished pages, but several figure-heavy legacy pages are crowded | Use polished pages as density reference |

## 15. Actionable inheritance checklist for `L16_STYLE_SPEC_v1.md`

1. Lock the exact 16:9 canvas and 0.750 in `#0E3F8C` top band.
2. Use 0.417 in outer content margins and approximately 0.583 in main text starts after the message marker.
3. Use Microsoft YaHei across Chinese and English internal-slide text.
4. Encode the role-based type hierarchy: 13.5 pt header, 12 pt right label at 75% white, 15.75 pt teaching message, 10.5–12 pt body, 9.75 pt only for compact secondary text.
5. Use white canvas, `#F7F9FC` neutral cards with `#D6DCE5` 1 pt strokes, and shadowless `roundRect` geometry.
6. Preserve the blue family for general/water structure. Reuse the verified orange/brown family for carbon emphasis without changing the overall page architecture.
7. Keep bilingual titles and core terms on one line where possible; use Chinese explanation plus English keywords rather than full duplication.
8. Prefer the Slide 09/12 concept patterns, Slide 17/30 process patterns, Slide 51 framework grid, and Slide 65 summary pattern.
9. Treat the repeated-TOC active highlight as Lecture 09's section-transition precedent; do not invent a decorative full-bleed divider without approval.
10. Preserve figure aspect ratios. Crop only for legibility and keep enough original caption/context for traceability.
11. Add an explicit, restrained figure-caption/source component because Lecture 09 is inconsistent here.
12. Add an explicit page-numbering rule because Lecture 09 has no reliable visible standard, while the project baseline requests numbering.
13. Do not copy legacy black-outline question boxes, informal `(from wiki)` labels, image-only slides, or crowded bottom-edge compositions.
14. Keep the final page as concise numbered takeaways plus bilingual Key Terms, aligned with the locked Lecture 16 content.

## 16. Audit limitations and open style issues

- Fonts and sizes inside rasterized textbook figures cannot be recovered exactly; estimates are clearly labeled above.
- Lecture 09 does not provide a consistent native citation, source, footer, or page-number component. This is a real source-deck gap, not an extraction failure.
- The course-series look is visually consistent across the polished pages but not encoded in the master. Later production must implement the audited geometry deliberately.
- No Lecture 16 Blueprint, slide order, content, or figure status was changed during this audit.
