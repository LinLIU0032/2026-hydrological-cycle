# Findings

## Master Prompt

- Authoritative project prompt exists as `LECTURE16_MASTER_PROMPT.md.txt`, not `.md`.
- Read completely: 3,585 lines, 52,302 bytes.
- Re-verification on 2026-09-10 confirmed SHA-256 `E91F37EF29A380CBD1BC12D23D97EA86A3CF93E90829525AB29E4D6A7CDB921C`; all 3,585 lines were re-read in bounded line ranges because the single-call display truncated the middle.
- Section 60 requires serial execution of Steps 1–11 and a hard stop after Sample Deck QA.
- At the initial execution stage, Steps 5–6 / GATE 1 blocked PPT work until the four source/style tasks passed; that constraint was later satisfied before Sample and Wave 1 production.

## File Inventory Summary

- 106 files totaling 816,997,140 bytes.
- Top-level critical inputs present: meeting notes, course schedule, Lecture 09 PPTX, Lecture 09 lesson plan, formal lesson-plan template, UE PDF, Chinese textbook PDFs, EP PDF, and HB PDF.
- Existing supplemental images: 94 PNG screenshots under `地球系统第三第四章` plus one PDF preview PNG.

## Tooling

- `ppt-master` is installed locally, but its mandatory attribution guard returned exit code 1 without output.
- Per the skill's integrity rule, no further `ppt-master` workflow documents were read and no repair or bypass was attempted.
- Qoder CN, 豆包工作, and WorkBuddy are installed locally.
- Qoder has local `pdf` and `pptx` skills; DoubaoWork has `doubao-pdf` and `ppt`; WorkBuddy has document/PDF tooling and a bundled Tencent PPTX plugin.
- No `ppt-master` installation was found in the detected skill roots for Qoder, DoubaoWork, or WorkBuddy.
- Computer-use exposed no controllable native-app surfaces, so GUI-level capability tests could not be performed.
- Official source confirmed as `hugohe3/ppt-master`; latest stable release v6.3.1 includes security fixes and a skill-only archive.
- Official release archive SHA-256 matched exactly and contained no path-traversal entries.
- Qoder, DoubaoWork, and WorkBuddy now have v6.3.1 installed without overwriting existing skill directories; all attribution guards pass.
- A project-local Python 3.12 virtual environment contains the official dependencies; core imports, `pip check`, and `svg_to_pptx.py --help` pass.

## SOURCE-CN Final QA

- `planning/CN_SOURCE_MAP.md` contains exactly one Seed Figure row for each required ID: W-01, W-03, W-04, W-05, W-06, C-02, C-03, C-04, C-05, and C-06.
- Each Seed ID has exactly one matching raw crop with the expected figure/table number, PDF page, printed page, and image dimensions; all files exceed 100 KB.
- All ten Seed statuses are `VERIFIED-CANDIDATE`; zero are `APPROVED` or `USED`.
- Content classification is populated: 20 MUST TEACH, 8 SHOULD TEACH, 8 OPTIONAL, and 8 OUT OF SCOPE rows.
- No EXTERNAL status rows or generated project PPT/PPTX artifacts were found; the only PPTX under allowed output trees is the dependency package's default template.

## 2026-09-11 Production Authorization

- The user approved the nine-slide Sample Deck and explicitly authorized assignments to Qoder CN, 豆包工作, and WorkBuddy.
- Required model settings: Qoder CN uses Qwen3.8max with a one-million-token context; 豆包工作 uses 豆包2.1pro; WorkBuddy uses Deepseek-V4.1-Flash with a one-million-token context.
- To preserve GATE 6, Production Wave 1 contains nine slides only: Qoder CN gets 04–06, 豆包工作 gets 10–12, and WorkBuddy gets 21, 22, and 24.
- Each agent must open `E:\PG\2026 Hydrological cycle` as its project and write only inside its assigned `sections/PROD-W1-*` directory.
- The approved Sample Deck and its project-level `design_spec.md` / `spec_lock.md` are the visual authority; all planning/source/asset files are read-only inputs.

## 2026-09-11 GATE 6 Wave 1 QA

- All three delivered PPTX files open and render correctly in Microsoft PowerPoint; each contains exactly three assigned slides and three embedded speaker-note pages.
- No overflow flags, out-of-bounds objects, object animations, audio/video files, or external relationships were found.
- Embedded media are limited to exact copies of approved W-05 and C-01 assets.
- Qoder CN Slides 04–06 and 豆包工作 Slides 10–12 pass content, source, figure, editability, and visual checks.
- WorkBuddy Slides 21 and 24 pass.
- WorkBuddy Slide 22 fails factual ordering: the panel says it is sorted from small to large, but Atmosphere 830 Gt C precedes Biosphere 500 Gt C and is described as the smallest reservoir. The approved Source Matrix gives 500 < 830 < 1500 < 38,000 Gt C.
- GATE 6 cannot close until Slide 22 and its speaker notes are corrected and revalidated.

## 2026-09-11 WorkBuddy Slide 22 r1 focused visual QA

- Microsoft PowerPoint independently rendered the current r1 deck to three 1920 x 1080 PNGs and a three-page PDF under `qa/GATE6_W1_WORKBUDDY_R1_QA_20260911/`.
- Slide 22 now shows the strictly ascending numeric sequence `500 < 830 < 1500 < 38,000 Gt C`.
- Sediment and Lithosphere are visually separated under `Geological reservoirs`, use hollow-circle markers rather than sequence numbers, and are explicitly marked `图中未给出总量`.
- Slide 22 has no visible overlap, clipping, distortion, tiny-text failure, alignment defect, or style drift at 1920 x 1080.
- Slides 21 and 24 remain visually clean; their new PowerPoint PNGs match the prior Gate 6 renders byte-for-byte by SHA-256.
- The r1 package contains exactly three slides and three notes pages on a 13.3333 x 7.5 inch canvas; no internal relationship is broken.
- Slide 22 notes say Biosphere 500, Atmosphere 830, Soils 1500, and Ocean 38,000 in the corrected order and explicitly reject the old interpretation.
- The sole embedded media object and approved C-01 file share SHA-256 `1E66E7026DF0AA33CBE118443DAF6C927D1FA47EF329FD14E03B7DC4767EFF05`.
- No external relationships, object timing trees, audio/video entries, or out-of-bounds shapes were found.
- The submitted PDF and the independently exported PowerPoint PDF render pixel-identically on all three pages; page 2 has native selectable Chinese text.
- All nine Production Wave 1 slides now pass, so GATE 6 is closed and GATE 7 planning is eligible.

## 2026-09-11 千问办公 candidate validation

- The candidate delivered exactly nine slides in the assigned order and a complete PPTX/PDF/previews/Notes/QA package.
- Microsoft PowerPoint independently opened and rendered all nine pages without visible layout defects.
- The package contains nine notes pages, no external relationships, no object animations or audio, and only W-05/C-01; both embedded-image hashes match the approved assets.
- Slides 06, 10, 11, and 22 satisfy their critical numerical and directional contracts, including `500 < 830 < 1500 < 38,000 Gt C` on Slide 22.
- Slide 04's embedded Notes use `大圈` where the visible and approved term is `大气圈`.
- Slide 12 explicitly defines ET as including ocean plus land evaporation and transpiration, which conflicts with Slide 10's land-side evapotranspiration usage; ocean evaporation must remain a separate global return path from the land ET formula.
- Slides 05 and 24 visibly use CN Table 3-1 but omit its exact citation from their source footers; Slide 05 also carries feedback examples not covered by its source line.
- Candidate status is `REVISION REQUIRED`; the deliverable shows sufficient production capability, but 千问办公 must pass a focused re-review before joining the next production wave.

## 2026-09-11 GATE 7 Production Wave 2

- The user overrode the candidate-membership block and accepted 千问办公 for the next stage; the QA findings remain recorded as quality locks, and the nine-page validation deck will not be integrated.
- GATE 7 requires an approximately-50% bulk checkpoint. Wave 1 accepted 9/35 bulk slides; assigning nine more reaches 18/35 or 51.4%.
- Assigning all remaining 26 slides now would cross the GATE 7 checkpoint and violate the locked no-Gate-skipping instruction.
- Wave 2 therefore contains only Slides 07–08, 13–17, and 25–26. The remaining 17 slides stay blocked until unified GATE 7 QA passes.
- Qoder CN owns 07–08, 豆包工作 owns 13–15, 千问办公 owns 16–17, and WorkBuddy owns 25–26, each in a separate project-local output directory.

## 2026-09-14 GATE 7 focused revision findings

- Qoder CN corrected the actual embedded Slide 07 Notes: lakes/rivers alone form the accessible-surface-freshwater level; atmosphere and biosphere are separate tiny reservoirs excluded from that row.
- Qoder Slides 07 and 08 render identically to the accepted pre-revision visual pages; the revision changed Notes only.
- WorkBuddy removed both visible instances of the years–decades versus million-years comparison and removed the same quantitative wording from embedded Notes.
- WorkBuddy Slide 25 now makes only the source-supported qualitative claim that surface biological reservoirs turn over faster than geological reservoirs.
- WorkBuddy Slide 26 is visually unchanged, and the revised deck retains the approved C-03 as its only image.
- Both revised PPTX packages pass independent structure and PowerPoint rendering checks. GATE 7 can close at 18/35 accepted bulk slides.

## 2026-09-14 GATE 8 allocation

- The 17 remaining initial drafts are allocated exactly once: Qoder CN 18–20 and 34; WorkBuddy 28–33; 千问办公 36–37 and 39; 豆包工作 40–43.
- Qoder CN owns both integrated redraw briefs: I-01 on Slide 18 and I-02 on Slide 34. Slide 19 uses W-02 as readable evidence; Slide 20 remains a native synthesis page.
- WorkBuddy continues the carbon sequence with Slides 28–33. Its packet locks the carbonate/weathering distinction, the slow-cycle topology, source-backed carbon clocks, and the Concept Check 2 answer key.
- 千问办公 receives three bounded native feedback loops. Its packet preserves the known terminology/source locks and prohibits unsupported numbers or overstatement of plant-growth compensation.
- 豆包工作 receives Slides 40–43. Its packet keeps the feedback-clock comparison mostly qualitative, requires a Notes answer key for Slide 41, locks exactly four homework questions, and preserves the grouped vocabulary roster.
- All four packets restrict writes to separate new `sections/PROD-W3-*` directories and block GATE 9 integration.
- Packet creation does not mean any producer has started; user manual dispatch is still pending.

## 2026-09-15 GATE 8 unified QA

- All four Wave 3 decks pass the project-local delivery checker: 17 assigned pages, 17 Notes pages, 16:9 canvases, no external relationships, audio, object animation, or timed advance.
- Microsoft PowerPoint independently exported four PDFs and 17 PNGs at 1920 × 1080. PowerPoint and Poppler renders show no overflow, overlap, clipping, distortion, missing font, or broken rendering.
- Qoder CN Slides 18–20 and 34 pass. Slide 19's W-02 is downsampled without crop and is pixel-equivalent to the approved asset after matching resolution.
- WorkBuddy Slides 28–33 pass. Slide 32's C-01 is byte-identical to the approved asset and uncropped.
- 千问办公 Slides 36, 37, and 39 require focused wording revisions: forbidden values are reproduced, production meta-commentary is visible, and one Chinese step label is incomplete.
- 豆包工作 Slides 41–42 pass. Slide 40 requires removal of the unsupported plant-growth time range; Slide 43 Notes must stop defining generic weathering exclusively as silicate-weathering CO₂ removal.
- GATE 8 remains open at 30/35 accepted bulk slides. GATE 9 remains blocked.

## 2026-09-15 GATE 8 focused revision closure

- 千问办公 removed the two prohibited Slide 36 values from visible text and Notes, removed the Slide 37 visible production comment, and corrected Slide 39 to `植物生长可能增加` with matching conditional Notes.
- 豆包工作 removed the Slide 40 plant-growth interval and replaced it with an explicitly unquantified response clock; Slide 43 Notes now distinguish generic chemical weathering, silicate net removal, and carbonate recycling.
- Both revised PPTX packages pass the delivery checker with 7/7 Notes, no external relationships, audio, object animation, or timed advance.
- All seven revised/current pages opened and rendered through Microsoft PowerPoint at 1920 × 1080; all seven independent PDF renders were also visually clean.
- Submitted producer PDFs are pixel-identical to the current independent PowerPoint PDFs after rendering (RMS 0 on all seven pages).
- 豆包 Slides 41–42 preserve exact visible text, Notes, and PowerPoint render hashes from the initial accepted versions.
- All 35 bulk slides are accepted. GATE 8 is closed; GATE 9 is eligible but not started.

## 2026-09-15 GATE 9 route decision

- The accepted 44-page roster spans 12 authoritative source decks: one Sample deck plus 11 Wave 1–3 production decks. The Qianwen Wave 1 candidate-validation deck is excluded.
- ppt-master's Edit Native route supports selection/reorder within one round-trip source but classifies a cross-deck merge into a new deck as Generate PPTX. Generate would rebuild pages and conflict with the project lock to integrate rather than recreate accepted work.
- GATE 9 will therefore use Microsoft PowerPoint's native `Slides.InsertFromFile` operation for cross-deck assembly and retain ppt-master's attribution guard and delivery checker for integrity validation.
- The exact page-to-source mapping, output names, risks, and acceptance criteria are recorded in `planning/GATE9_INTEGRATION_PLAN.md` before authoring begins.

## 2026-09-15 GATE 9 full-deck closure

- Native `Slides.InsertFromFile` alone preserved text, Notes, and objects but consolidated the deck into one master, causing material theme-color changes on 29/44 pages. Automated pixel regression correctly blocked v01.
- Cloning each source Design/Master before insertion and rebinding each page to its source Design preserved the accepted visual system. v02 contains 12 masters and 12 layouts.
- All 44 v02 PowerPoint renders are pixel-identical to their accepted source renders. Visible text, Notes, and transition semantics also match all 44 mapped pages.
- The v02 package passes the project-local delivery checker with zero errors/advisories, 44 Notes, zero external relationships, five approved media parts, zero audio/video, zero object animation, and zero timed advance.
- The PowerPoint-exported v02 PDF has 44 pages at 960 × 540 pt. All pages have extractable text and were independently rendered with Poppler and visually inspected without defects.
- Global teaching structure passes: five Learning Objectives, three-part TOC, ten-minute Break after Slide 20, two concept checks, one integrated challenge, four homework candidates, 20 Key Terms, and six final Key Takeaways.
- GATE 9 is closed. GATE 10 lesson-plan work remains unstarted.
