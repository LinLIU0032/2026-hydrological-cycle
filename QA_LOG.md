# Lecture 16 QA Log

## 2026-09-09 — Setup QA

| Check | Result | Evidence / Note |
|---|---|---|
| Master Prompt fully read | PASS | 3,585 lines read in four contiguous ranges |
| Critical files present | PASS | See `planning/FILE_INVENTORY.md` |
| Bulk PPT production avoided | PASS | No PPTX created or modified |
| Gate order preserved | PASS | Work remains within GATE 0 |
| `ppt-master` integrity gate | PASS | All target installations pass with the validated managed runtime |
| Required Step 2 directories/files | PASS | All required paths verified on disk |
| Agent Capability Table fields | PASS | Required columns populated with evidence and uncertainty labels |
| Target-agent `ppt-master` presence | PASS | Official v6.3.1 installed for Qoder, DoubaoWork, and WorkBuddy |
| Official archive hash | PASS | Matches GitHub Release SHA-256 |
| Isolated dependency environment | PASS | Core imports and `pip check` pass |
| PPT generated during Gate 0 | PASS | No PPTX created or modified |

## 2026-09-10 — Interruption Recovery

| Check | Result | Evidence / Note |
|---|---|---|
| SOURCE-CN work preserved | PASS | `planning/CN_SOURCE_MAP.md` and ten seed crops exist |
| SOURCE-CN standard report | FAIL | Missing after agent usage-limit interruption |
| STYLE-AUDIT output | FAIL | No audit/report produced before interruption |
| Gate discipline | PASS | Step 7 and Sample Deck remain blocked |

## 2026-09-10 — Step 7–8 Integration QA

| Check | Result | Evidence / Note |
|---|---|---|
| Cross-review: UE and EP/HB Source Maps | PASS | `qa/REVIEW_SOURCE_UE_EPHB.md`; required Completion Report headings and sampled source evidence passed |
| Cross-review: CN Source Map and ten crops | PASS AFTER REVISION | `qa/REVIEW_SOURCE_CN_FIGURES.md`; scientific evidence, pages, captions, and crops passed; status vocabulary corrected to `VERIFIED` |
| Cross-review: Lecture 09 Style Audit | PASS | `qa/REVIEW_STYLE_AUDIT.md`; no blocking omissions |
| C-01 source asset | PASS | UE Fig.12.19 extracted from PDF p.1209 at 300 dpi; caption retained; visual inspection passed |
| Source Matrix | PASS | 89 MUST/SHOULD evidence rows; required fields present; 8 conflicts have explicit dispositions; saved workbook re-imported successfully |
| Source Matrix formula scan | PASS | No `#REF!`, `#DIV/0!`, `#VALUE!`, `#NAME?`, `#N/A`, `#NUM!`, `#NULL!`, `#SPILL!`, or `#CALC!` matches |
| Figure Index schema | PASS | All §19 fields present, including Source Book, Original Language, Attribution Text, Asset Path, and Notes |
| Approved Figure Library | PASS | 13 approved assets: W-01–W-06, C-01–C-06, F-01; no duplicate Figure IDs |
| Native/redraw briefs | PASS | F-02, I-01, and I-02 remain CANDIDATE assets with approved production briefs; no external source authorized |
| Workbook visual QA | PASS | All three rendered sheet previews inspected; headers, wrapping, status cues, and populated ranges are legible without visible clipping |
| Blueprint count/order | PASS | Exactly 44 slide rows; break remains after Slide 20; Sample roster remains 01, 02, 03, 09, 23, 27, 35, 38, 44 |
| Learning Objectives | PASS | Five locked objectives retained verbatim |
| Style Spec | PASS | Exact 16:9 canvas, 0.750 in `#0E3F8C` header, role-based typography, bilingual rules, caption/source, and page-number rules recorded |
| SOURCE_CONFLICT | PASS | All eight conflicts resolved; none requires a user decision |
| FIGURE_GAP | PASS | Slides 18 and 34 resolved by approved textbook-only redraw briefs I-01 and I-02 |
| BLUEPRINT_ISSUE | PASS | None |
| TOOL ISSUE | RESOLVED FOR SAMPLE ROUTE | System `ppt-master` v6.2.0 guard failed under default Python; project-local v6.3.1 and its isolated runtime remain the required Sample route |
| Gate status | PASS | GATES 1, 2, 3, and 4 closed; Step 9 is now eligible |

## 2026-09-11 — SAMPLE-01 / GATE 5 QA

| Check | Result | Evidence / Note |
|---|---|---|
| Sample roster and count | PASS | Exactly nine slides: 01, 02, 03, 09, 23, 27, 35, 38, and 44 |
| Bulk-production boundary | PASS | No other Lecture 16 slides produced; remaining 35 remain blocked |
| Final SVG quality gate | PASS | Nine SVGs; zero blocking findings; five non-blocking style/source-size advisories |
| Carrier receipt | PASS | 202 text objects, two approved embedded textbook images, 165 native SVG geometry elements; no external media |
| PPTX package integrity | PASS | Nine slides, nine notes pages, one master, one layout, two embedded media files; no broken relationships or external media |
| Speaker notes | PASS | Nine notes sections split one-to-one and embedded in the PPTX |
| PowerPoint render | PASS | All nine slides opened and rendered through Microsoft PowerPoint at 1280 by 720 |
| PPTX visual QA | PASS | Every rendered slide inspected individually; no overflow, overlap, distortion, clipping, broken connector, or placeholder |
| PDF export and page count | PASS | Microsoft PowerPoint PDF export; nine pages at 16:9, confirmed with pypdf |
| PDF visual QA | PASS | All nine PDF pages rendered with Poppler and inspected individually; no visual defects |
| Lecture 09 continuity | PASS | White field, dark-blue header, Microsoft YaHei, course footer and page-number system retained; water-blue/carbon-orange accents consistent |
| Source and figure use | PASS | W-02 and C-01 embedded; C-04, F-02, and F-01 used only as approved native-redraw bases |
| Locked content | PASS | Five learning objectives and six Key Takeaways retained; Slide 38 includes silicate-weathering qualification, Ca²⁺, and greater-than ten-to-the-five through ten-to-the-seven years |
| Final delivery check | PASS | `pptx_delivery_check.py` status `passed`; no errors or advisories |
| Gate status | PASS | GATE 5 complete; STOP for user review before any production wave |

## 2026-09-11 — Production Wave 1 / GATE 6 QA

| Check | Result | Evidence / Note |
|---|---|---|
| Assigned roster and count | PASS | Three decks; exactly Slides 04–06, 10–12, and 21/22/24 |
| Independent PowerPoint render | PASS | Nine slides exported at 1920 × 1080 under `qa/GATE6_W1_QA_20260911_122338/` |
| PPTX structure | PASS | 13.3333 × 7.5 in; three slides per deck; nine of nine speaker notes; no overflow or out-of-bounds objects |
| Media authorization | PASS | Embedded W-05 and C-01 hashes match approved assets exactly; no other media or external relationships |
| Audio and object animation | PASS | Zero audio/video package entries and zero object animations |
| Qoder CN Slides 04–06 | PASS | Content, data, native editability, notes, source lines, and visuals approved |
| 豆包工作 Slides 10–12 | PASS | Budget directions/data, W-05 fidelity, Slide 12 source traceability, notes, and visuals approved |
| WorkBuddy Slides 21 and 24 | PASS | Transition/framework content, notes, and visuals approved |
| WorkBuddy Slide 22 | FAIL | `自小而大排序` places Atmosphere 830 before Biosphere 500 and speaker notes repeat the error |
| Cross-agent style consistency | PASS | Header, bilingual hierarchy, palette, flat geometry, footer, and page numbering remain within the approved course family |
| Gate status | REVISION REQUIRED | GATE 6 remains open; later production remains blocked pending focused Slide 22 re-review |

## 2026-09-11 — WorkBuddy r1 focused re-review / GATE 6 closure

| Check | Result | Evidence / Note |
|---|---|---|
| Independent PowerPoint render | PASS | Current r1 PPTX opened read-only in Microsoft PowerPoint; three 1920 x 1080 PNGs and a three-page PDF exported under `qa/GATE6_W1_WORKBUDDY_R1_QA_20260911/` |
| Slide 22 numerical hierarchy | PASS | Biosphere 500, Atmosphere 830, Soils 1500, Ocean 38,000 Gt C; strict ascending order |
| Geological-reservoir grouping | PASS | Sediment and Lithosphere are separate, qualitative, unnumbered, and marked `图中未给出总量` |
| Speaker notes | PASS | Corrected spoken order; explicitly states Atmosphere is not the smallest numbered reservoir |
| Rejected text removal | PASS | Old wording/order absent from slide XML, notes XML, and PDF text layer |
| Visual/layout QA | PASS | No overlap, clipping, distortion, tiny-text failure, misalignment, or style drift in PNG or PDF renders |
| Slides 21 and 24 regression | PASS | New PowerPoint PNG SHA-256 values match the prior accepted Gate 6 renders exactly; slide and notes text also unchanged |
| PPTX package | PASS | Three slides, three notes pages, 13.3333 x 7.5 in, no broken internal or external relationships, no out-of-bounds shapes |
| Media authorization | PASS | Sole embedded media hash matches approved C-01 exactly |
| Animation/audio/video | PASS | No object timing trees and no audio/video package entries |
| PDF delivery | PASS | Three 960 x 540 pt pages; native selectable Chinese text; submitted PDF and independent PowerPoint PDF are pixel-identical after rendering |
| Gate status | PASS | All nine Wave 1 slides approved; GATE 6 closed; GATE 7 planning is eligible but not started |

## 2026-09-11 — 千问办公 Wave 1 candidate validation

| Check | Result | Evidence / Note |
|---|---|---|
| Independent PowerPoint render | PASS | Nine 1920 × 1080 PNGs and a nine-page PDF exported under `qa/QIANWEN_OFFICE_W1_ACCEPTANCE_20260911/` |
| Roster, package, and notes | PASS | Slides 04, 05, 06, 10, 11, 12, 21, 22, 24 in order; 13.3333 × 7.5 in; 9/9 Notes |
| Visual/layout QA | PASS | No visible overflow, overlap, clipping, distortion, placeholder, or unreadable substantive text |
| Media authorization | PASS | Only W-05 and C-01; both SHA-256 values match approved assets |
| External relationships / motion | PASS | No external relationships, object animations, audio, or timed advance |
| Quantitative contracts | PASS | Slides 06, 10, 11, and 22 preserve the required datasets, units, directions, values, and Slide 22 order |
| Slide 04 Notes | FAIL | `大气圈` is mistyped as `大圈` in the per-page note, total note, and embedded Notes page |
| Slide 12 terminology | FAIL | Formula includes ocean evaporation inside Evapotranspiration, conflicting with the deck's land-side ET usage on Slide 10 |
| Source-line completeness | FAIL | Slide 05 and Slide 24 use CN Table 3-1 without complete footer attribution; Slide 05 feedback examples are also not covered by its source line |
| Independence evidence | PASS WITH LIMITATION | No exact render hashes match prior Agent previews and the visual/object structures differ; no direct copying evidence found, but process history cannot be proven from deliverables alone |
| Candidate decision | REVISION REQUIRED | 千问办公 is not yet approved for later-stage membership; focused revision and re-review required |

## 2026-09-11 — 千问办公 user acceptance and GATE 7 entry

| Check | Result | Evidence / Note |
|---|---|---|
| User disposition | ACCEPTED BY USER | User accepted the candidate capability test despite the recorded QA findings |
| Membership | APPROVED | 千问办公 added as the fourth producer for Production Wave 2 |
| Validation-deck integration | NOT AUTHORIZED | The nine-page candidate test remains a test artifact and will not enter the final deck |
| Gate boundary | PASS | Wave 2 contains nine slides, moving accepted bulk production from 9/35 to 18/35 (51.4%) before GATE 7 QA |
| Next-stage production | READY FOR USER DISPATCH | Four non-overlapping task packets prepared; no GATE 8 slide assigned |

## 2026-09-12 — Production Wave 2 / GATE 7 unified QA

| Check | Result | Evidence / Note |
|---|---|---|
| Independent PowerPoint render | PASS | Four PDFs and nine 1920 × 1080 PNGs exported under `qa/GATE7_WAVE2_QA_20260912/` |
| Package and delivery checks | PASS | Four of four PPTX files pass `pptx_delivery_check.py`; nine slides and 9/9 Notes; no broken/external relationships |
| Visual/layout QA | PASS | All nine renders inspected; no overflow, overlap, clipping, distortion, placeholder, or unreadable substantive native text |
| Approved media | PASS | W-06 and C-03 embedded bytes match the approved assets exactly by SHA-256 |
| Audio/object animation | PASS | None; slide-level fades are not object animation |
| 豆包工作 Slides 13–15 | PASS | Data, pathway directions, native construction, Notes, and attribution accepted |
| 千问办公 Slides 16–17 | PASS | Cryosphere distinctions and W-06 deep-cycle direction accepted |
| Qoder CN Slide 08 | PASS | CN Table 3-1 storage/turnover comparison accepted |
| Qoder CN Slide 07 | FAIL | Notes sentence incorrectly groups atmosphere and biosphere under accessible surface freshwater |
| WorkBuddy Slide 26 | PASS | C-03 sign, unit, scale, completeness, hash, and native reading key accepted |
| WorkBuddy Slide 25 | FAIL | Quantitative years–decades versus million-years wording is not fully locked in the page source line; Notes contradict their own no-number statement |
| Scope compliance | PROCESS INCIDENT | WorkBuddy edited Wave 1 `design_spec.md` outside Wave 2 authorization; no PPT content regression and no rollback performed |
| Gate status | REVISION REQUIRED | 16/35 bulk slides accepted; GATE 7 remains open pending focused revisions to Slides 07 and 25 |

## 2026-09-14 — GATE 7 focused revision closure

| Check | Result | Evidence / Note |
|---|---|---|
| Qoder CN Slide 07 Notes | PASS | Embedded Notes now limit accessible surface freshwater to lakes/rivers and separately exclude atmosphere/biosphere from that row |
| Qoder visible regression | PASS | Slides 07 and 08 PowerPoint render hashes unchanged |
| WorkBuddy Slide 25 wording | PASS | Quantitative year-range comparison removed from visible content and embedded Notes; qualitative comparison retained |
| WorkBuddy Slide 26 regression | PASS | PowerPoint render hash unchanged; C-03 remains the only embedded image |
| Revised package checks | PASS | Both PPTX files pass delivery check; 2/2 Notes each; no external relationships, audio, timed advance, or object animation |
| Independent PowerPoint render | PASS | Two revised decks exported to two PDFs and four 1920 × 1080 PNGs under `qa/GATE7_R1_QA_20260914/` |
| Focused visual QA | PASS | Revised Slide 25 and unchanged Slide 07 inspected; no overflow, overlap, clipping, or unreadable substantive text |
| Gate status | PASS | GATE 7 closed at 18/35 accepted bulk slides; GATE 8 is eligible but not started |

## 2026-09-14 — GATE 8 allocation and packet QA

| Check | Result | Evidence / Note |
|---|---|---|
| Gate eligibility | PASS | GATE 7 acceptance confirms GATE 8 may begin; GATE 9 remains blocked |
| Remaining roster | PASS | Exactly 17 slides: 18–20, 28–34, 36–37, 39–43 |
| Non-overlapping allocation | PASS | Qoder CN 18–20/34; WorkBuddy 28–33; 千问办公 36–37/39; 豆包工作 40–43 |
| Coverage | PASS | 17 unique task headings; no duplicate, missing, Sample, Wave 1, or Wave 2 slide |
| Source and figure locks | PASS | Packets use only approved Source Matrix rows, approved assets, F-02, I-01, and I-02 briefs; no external source authorized |
| Output isolation | PASS | Four distinct `sections/PROD-W3-*` directories; shared and prior files are read-only |
| Completion contract | PASS | Every packet includes startup confirmation, exact outputs, §34 report fields, Notes, PowerPoint/PDF/render checks, and stop condition |
| Integration boundary | PASS | Every packet prohibits main-deck merge, figure USED promotion, and GATE 9 work |
| Production state | NOT STARTED | Packets are ready for the user to forward manually; no GATE 8 slide or output directory was created by Codex |

## 2026-09-15 — Production Wave 3 / GATE 8 unified QA

| Check | Result | Evidence / Note |
|---|---|---|
| Assigned roster and count | PASS | Four decks contain exactly the 17 remaining slides in the required producer order |
| Delivery checks | PASS | Four of four PPTX files pass; 17/17 Notes; 13.3333 × 7.5 in; no external relationship |
| Independent PowerPoint render | PASS | Four PDFs and 17 1920 × 1080 PNGs exported under `qa/GATE8_QA_20260914/` |
| PDF page count/render | PASS | 4 / 6 / 3 / 4 pages; all 17 Poppler renders inspected |
| Visual/layout QA | PASS | No overflow, overlap, clipping, distortion, missing font, placeholder, or broken rendering |
| Approved media | PASS | Slide 32 C-01 byte-identical; Slide 19 W-02 downsample RMS 0 at matched size; no crop |
| Qoder CN Slides 18–20/34 | PASS | Coupling topologies, concept check, summary, Notes, source boundary, and editability accepted |
| WorkBuddy Slides 28–33 | PASS | Carbonate/weathering distinction, slow-cycle direction, clocks, concept check, and summary accepted |
| 千问办公 Slides 36/37/39 | FAIL | Prohibited values reproduced; visible production meta-commentary; incomplete Chinese step phrase |
| 豆包工作 Slides 41–42 | PASS | Worksheet/answer key and four homework candidates accepted |
| 豆包工作 Slides 40/43 | FAIL | Unsupported plant-growth time range; Weathering Notes over-narrow the generic term |
| Gate status | REVISION REQUIRED | 12/17 Wave 3 pages accepted; cumulative 30/35; GATE 8 open and GATE 9 blocked |

## 2026-09-15 — GATE 8 focused revision closure

| Check | Result | Evidence / Note |
|---|---|---|
| Slide 36 prohibited values | PASS | Removed from visible source line and embedded Notes |
| Slide 37 production meta-commentary | PASS | Removed from student-visible page; albedo definition retained |
| Slide 39 wording | PASS | `植物生长可能增加` and matching conditional Notes |
| Slide 40 biosphere clock | PASS | No plant-growth interval; explicitly unquantified response clock |
| Slide 43 Weathering Notes | PASS | Generic weathering, silicate net removal, and carbonate recycling correctly distinguished |
| Revised package checks | PASS | Two PPTX files, 7/7 Notes, no external relationships, audio, timed advance, or object animation |
| PowerPoint/PDF visual QA | PASS | Seven 1920 × 1080 PowerPoint renders and seven Poppler PDF renders inspected without defects |
| Submitted PDF parity | PASS | 3-page and 4-page producer PDFs are pixel-identical to independent PowerPoint PDFs; RMS 0 on all pages |
| Slides 41–42 regression | PASS | Visible text, Notes, and PowerPoint PNG SHA-256 values unchanged |
| Gate status | PASS | GATE 8 closed at 35/35 accepted bulk slides; GATE 9 eligible but not started |

## 2026-09-15 — GATE 9 full-deck integration and QA

| Check | Result | Evidence / Note |
|---|---|---|
| Source roster | PASS | 12 accepted source decks; exact 44-page mapping; candidate-validation deck excluded |
| v01 theme regression | FAIL / RESOLVED | 29/44 pages changed because PowerPoint consolidated source themes; v01 rejected and retained as evidence |
| v02 native integration | PASS | 12 source Designs/Masters cloned and preserved; 44 pages in locked order |
| Package and delivery check | PASS | 44 slides, 44 Notes, 12 masters/layouts, zero broken/external relationships, zero advisories |
| Visible text and Notes | PASS | 44/44 visible-text hashes and 44/44 Notes hashes match accepted sources |
| Transitions and motion | PASS | Source fade/400 ms transitions preserved; no timed advance, object animation, narration, audio, or video |
| Media authorization | PASS | Five media parts; every hash occurs in an accepted source; no new media |
| PowerPoint regression | PASS | 44/44 1920 × 1080 v02 renders are exact pixel matches to accepted-source PowerPoint renders |
| PDF structure | PASS | 44 pages at 960 × 540 pt; extractable text and folios; no encryption, JavaScript, or suspect structure |
| PPTX/PDF visual QA | PASS | All 88 final PowerPoint/Poppler page renders reviewed; no clipping, overlap, missing font, broken connector, placeholder, or material divergence |
| Teaching contract | PASS | Five LOs, TOC, Slide 20 Break, Concept Checks 1/2, integrated challenge, four Homework candidates, 20 Key Terms, six final Key Takeaways |
| Gate status | PASS | GATE 9 closed; GATE 10 lesson-plan production eligible but not started |
