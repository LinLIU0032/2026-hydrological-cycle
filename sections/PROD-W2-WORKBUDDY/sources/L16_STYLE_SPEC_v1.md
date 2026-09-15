# Lecture 16 Style Specification — Verified V1

Status: VERIFIED for GATE 4  
Authority: `LECTURE16_MASTER_PROMPT.md.txt` §§28–29, 43, 45–47  
Visual evidence: `planning/L09_STYLE_AUDIT.md` and 18 representative Lecture 09 renders  
Scope: planning specification only; no Lecture 16 slide has been produced.

## 1. Design intent

Lecture 16 must read as part of the same course series as Lecture 09: a white teaching canvas, dark-blue course header, bilingual titles, one explicit teaching message per page, restrained rounded cards, textbook figures with traceable sources, and substantial whitespace.

Use the polished custom page family in Lecture 09 as the precedent. Do not copy its legacy screenshot-heavy, image-only, black-outline question, or crowded bottom-edge pages.

## 2. Canvas and coordinate system

| Property | Locked value |
|---|---|
| Slide size | 13.3333 × 7.5000 in |
| Aspect ratio | 16:9 |
| Canvas | `#FFFFFF` |
| Standard outer margin | 0.417 in |
| Main text start after message marker | approximately 0.583 in |
| Header band | x 0, y 0, w 13.3333, h 0.750 in |
| Header fill | `#0E3F8C`, no stroke |
| First body/message row | y 1.000–1.035 in |
| Standard footer-safe zone | y 7.15–7.38 in; keep core content above it |

The Lecture 09 master is effectively empty. Producers must draw the recurring geometry explicitly; they must not assume a native layout supplies it.

## 3. Typography

Use Microsoft YaHei for Chinese and English on all internal slides. Cover exceptions are allowed only where specified below.

| Role | Size | Weight / color | Notes |
|---|---:|---|---|
| Cover main title | 42–46.4 pt | bold, `#0E3F8C` or `#1A2230` | bilingual title; fit on at most two lines |
| Cover course line | 20–22.5 pt | bold | Microsoft YaHei preferred; Times New Roman is optional only if matching Lecture 09 exactly |
| TOC title in blue band | 28 pt | bold, `#FFFFFF` | Slides 03 and section-transition use |
| Standard left header title | 13.5 pt | bold, `#FFFFFF` | `section.number 中文 | English` |
| Standard right header label | 12 pt | regular, 75% white | short topic tag, not a source line |
| Teaching-message heading | 15.75 pt | bold, `#0E3F8C` | one clear message per page |
| Summary/card subheading | 14.25 pt | bold | use selectively |
| Card/step heading | 11.25–12.75 pt | usually bold | bilingual term may share one line |
| Normal body | 10.5–12 pt | `#1A2230` | default 11.25 pt |
| Secondary text | 9.75–10.5 pt | `#4A5568` | 9.75 pt only for compact secondary text |
| Source/caption line | 8.5–9 pt | `#4A5568` | one line where possible; never smaller than 8.5 pt |
| Page number | 9 pt | `#4A5568` | bottom-right, restrained |

Do not shrink normal explanatory paragraphs to 9.75 pt. If content does not fit, shorten text or change composition while preserving meaning.

## 4. Palette

| Role | Color | Use |
|---|---|---|
| Course header / darkest blue | `#0E3F8C` | header band, major headings |
| Primary water/general accent | `#1E4FA8` | message markers, water badges, key lines |
| Secondary water/general accent | `#3D7BD9` | English keywords and secondary emphasis |
| Main body | `#1A2230` | primary text |
| Secondary body | `#4A5568` | notes, captions, supporting labels |
| Neutral card fill | `#F7F9FC` | default cards |
| Neutral card border | `#D6DCE5` | 1 pt stroke |
| Secondary cool fills | `#F0F5FC`, `#E8EFF8` | panels and badge backgrounds |
| Primary carbon accent | `#EA580C` | carbon markers and badges |
| Dark carbon heading | `#C2410C` | carbon headings / numbering |
| Carbon secondary text | `#7A4A33` | restrained support text |
| Warm card fill | `#FDF4EF` | carbon cards |
| Warm border | `#F0CFC2` | 1 pt stroke |
| Warm highlight | `#FDECDD` | short emphasis strips |

Green may be used sparingly for biosphere elements, but it must not become a fourth page architecture. Red is reserved for a deliberate question/error focus, not routine decoration.

## 5. Header, message marker, and footer

### Standard content page

- Header band: exact geometry in §2.
- Left header title: x about 0.417 in, y about 0.260 in, 13.5 pt bold.
- Right topic tag: right edge about 12.917 in, y about 0.271 in, 12 pt, 75% white.
- Message marker: x 0.417 in, y about 1.021 in, w 0.062 in, h 0.271 in, borderless `roundRect`.
- Message title: x about 0.583 in, y about 1.021 in, 15.75 pt bold.
- Use blue marker for opening/water/general system pages and orange marker for carbon pages. Feedback pages use blue unless the causal chain is specifically carbon-weathering, where orange may be used.

### Source/caption component

Lecture 09 has no consistent source footer, while the Lecture 16 baseline requires traceability. Use a new minimal component:

- Bottom-left, aligned to x 0.417 in; no fill and no enclosing box.
- Format: `Source: UE 8e, Fig. 12.19, PDF p. 1209` or the equivalent approved textbook citation.
- If the original caption is retained inside the image, the footer still identifies the source book and Figure ID; do not repeat the full caption.
- For custom redraws: `Redrawn from approved sources: W-02, W-06`.
- No informal labels such as `(from wiki)`.

### Page numbering

- Bottom-right, aligned to x 12.917 in.
- Format: two-digit page number only, e.g. `09`; do not show `09 / 44` unless later required.
- Cover Slide 01 may omit the number. Slides 02–44 show it consistently.

## 6. Cards, badges, and geometry

- Default card: PowerPoint `roundRect`, approximately 0.10–0.15 in corner radius.
- Neutral cards: `#F7F9FC` fill, `#D6DCE5` 1 pt stroke.
- Carbon cards: `#FDF4EF` fill, `#F0CFC2` 1 pt stroke.
- Standard badges: filled rounded rectangles, no stroke; common size about 0.458 × 0.333–0.458 in.
- Normal cards are flat and shadowless. Do not add drop shadows by default.
- Use connectors and arrows only when they encode process, flow, or feedback direction.

## 7. Grid and density

- Two-column pages: divide near the 6.67 in midpoint; each module about 6.1–6.4 in wide; gutter 0.2–0.4 in.
- Three-card pages: modules about 4.05 in wide; gutters about 0.15 in.
- Four-card pages: modules about 3.0 in wide; gutters about 0.14–0.18 in.
- Stacked cards: 0.50–0.65 in height with 0.09–0.13 in gaps.
- Left-align ordinary text. Center only badges, short labels, and selected figure/caption groupings.
- One slide carries one teaching message. Avoid more than six short bullets or more than four simultaneous cards unless the locked page role requires it.

## 8. Figure rules

- Use only Figure IDs marked `APPROVED` in `planning/L16_FIGURE_INDEX.xlsx`, or a custom redraw task explicitly approved there.
- Preserve aspect ratio. Never stretch textbook figures.
- Crop only to improve legibility; retain enough context and the approved attribution line.
- Textbook figures may retain English labels if an adjacent Chinese explanation identifies the key processes.
- If labels are too small, redraw or re-label bilingually from the approved source. Do not change data, directions, variables, or causal relationships.
- W-02 must be cropped or faithfully redrawn; do not place the full two-page spread at unreadable scale.
- F-01 is an evidence/redraw source, not a projector-ready final illustration.
- C-01 and C-04 may be simplified for teaching, but numerical labels must remain source-consistent.

## 9. Bilingual strategy — locked

- Slide Title: bilingual.
- Section Title: bilingual.
- Learning Objectives: bilingual.
- Core terms and formal definitions: standard English term plus Chinese explanation.
- Main body: Chinese explanation with English keywords; do not duplicate every sentence.
- Figure key labels: bilingual where feasible; otherwise provide a nearby bilingual legend.
- English terminology follows UE; Chinese terminology follows the Chinese textbook.
- Use `中文 | English` for titles and `中文 · English` or `中文 (English)` for compact terms.

## 10. Page families

| Page role | Required pattern | Lecture 09 precedent |
|---|---|---|
| Cover | White canvas, course identity, bilingual title, restrained dual-theme visual | Slide 01, adjusted for bilingual title |
| Learning Objectives | Standard header; five balanced cards; Chinese objective + concise English line/keywords | Slide 02 |
| TOC / transition | Full-width top band, navigation cards, active section highlighted | Slides 03 and 35 |
| Definition / framework | Definition band plus 2–4 concept cards and one key-message strip | Slides 08, 09, 12 |
| Figure / process | Short numbered sequence beside/above one dominant approved figure | Slides 17 and 30 |
| Question / concept check | One short prompt in a pale rounded band or side card; large readable evidence figure | polished parts of Slides 10 and 13 |
| Comparison / clocks | Equal cards or a single aligned scale; no decorative chart junk | Slides 46 and 51 |
| Summary / takeaways | Five or six concise numbered statements; optional compact Key Terms block | Slide 65 |

## 11. Section treatment

Lecture 16 has three parts but no extra section-divider slides. Slides 03, 21, and 34 may use a compact repeated-TOC cue or active-section label within their locked page roles. Do not add pages or invent full-bleed dividers.

## 12. Prohibited patterns

- Full-text bilingual duplication.
- Text walls, ten-plus bullets, or unreadably small labels.
- Decorative stock imagery or unapproved external icons/figures.
- Legacy black-outline question boxes.
- Informal or incomplete source labels.
- Default drop shadows, gradients, or a new fourth accent system.
- Cropped-away legends, units, positive/negative signs, or figure context.
- Image distortion, unexplained screenshots, and content touching the bottom edge.

## 13. Production QA checklist

Each slide must pass all items before approval:

1. Page number and locked slide title match `L16_BLUEPRINT_v1.md`.
2. One clear teaching message is visible.
3. Scientific content maps to an approved Source Matrix row.
4. Every visual uses an approved Figure ID or approved custom-redraw brief.
5. Bilingual strategy follows §9 without doubling the text.
6. Header geometry, typography, palette, and cards follow this specification.
7. No overflow, overlap, distortion, tiny text, misalignment, or crop error.
8. Figure source/caption line is readable and complete.
9. The page still resembles the Lecture 09 polished course family at normal projection scale.

## 14. Gate 4 verification

- Lecture 09 source deck audit: PASS.
- Exact canvas, header, palette, and type hierarchy transferred: PASS.
- Lecture 09 source/footer/page-number gap resolved explicitly: PASS.
- Bilingual strategy and prohibited legacy patterns recorded: PASS.
- No PPT/PDF generated by this specification step: PASS.

GATE 4 status: PASS once this file is logged in project tracking.
