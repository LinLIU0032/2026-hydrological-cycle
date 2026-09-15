# PROD-W1-WORKBUDDY — Completion Report

TASK ID:
PROD-W1-WORKBUDDY

STATUS:
COMPLETE (revised) — Slides 21, 22, 24 produced, revised under the GATE 6 revision request, and revalidated. The contract filenames are unchanged; the delivered content is revision **r1**. Stopped at the STOP CONDITION; no other slide was started and no shared project status file was touched.

REVISION HISTORY:

- **r0** — 2026-09-11 first issue. GATE 6 unified acceptance returned **REVISION REQUIRED on Slide 22 only**; Slides 21 and 24 passed.
- **r1** — 2026-09-11 revision issued in the same output directory. Slides 21 and 24 are **byte-identical** to r0 (`svg_output` SHA-256 unchanged). See *REVISION — GATE 6 (Slide 22)* below.

OUTPUT FILES (r1):

| File | Bytes | Note |
|---|---:|---|
| `sections/PROD-W1-WORKBUDDY/L16_W1_WorkBuddy_Slides21-22-24_v01.pptx` | 1,870,282 | 3 native/editable slides, 13.3333 × 7.5 in, 3 speaker-note pages |
| `sections/PROD-W1-WORKBUDDY/L16_W1_WorkBuddy_Slides21-22-24_v01.pdf` | 527,204 | 3 pages, 960 × 540 pt, text selectable (native text proven) |
| `sections/PROD-W1-WORKBUDDY/previews/21_why_carbon.png` | 110,327 | 1920 × 1080, rendered from the delivered PPTX |
| `sections/PROD-W1-WORKBUDDY/previews/22_carbon_reservoirs.png` | 969,111 | 1920 × 1080 |
| `sections/PROD-W1-WORKBUDDY/previews/24_same_framework_different_timescales.png` | 115,424 | 1920 × 1080 |
| `sections/PROD-W1-WORKBUDDY/PROD-W1-WORKBUDDY_COMPLETION.md` | this file | |

Supporting project artifacts inside the same output directory (ppt-master working tree, no external writes):
`design_spec.md`, `spec_lock.md`, `svg_output/` (3 pages), `svg_final/` (3 self-contained previews), `notes/` (total.md + 3 per-page notes), `validation/` (quality report, postflight report, calibration, workflow log, **`revision22_check.txt`** — the r1 acceptance evidence, **`cleanup_20260911.txt`** — the post-issue housekeeping log), `exports/` (single postflight-validated pipeline PPTX), `images/` (C-01), `sources/` (read-only copies of the contract, Blueprint and Style Spec), `backup/` (r0 snapshots).

---

## REVISION — GATE 6 (Slide 22)

Reviewer: Codex · Reference: `qa/GATE6_WAVE1_ACCEPTANCE_20260911.md`

### Blocking finding and fix

| Item | r0 (rejected) | r1 (delivered) |
|---|---|---|
| Hierarchy rule printed on the page | `自小而大排序（本页整理）` — but the rows were **not** in ascending order | unchanged rule text, and the rows now satisfy it |
| Numbered C-01 reservoirs | 1 Atmosphere 830 → 2 Biosphere 500 → 3 Soils 1500 → 4 Ocean 38,000 | **1 Biosphere 500 → 2 Atmosphere 830 → 3 Soils 1500 → 4 Ocean 38,000** |
| Atmosphere caption | `量级最小的储库` ("the smallest reservoir") | **removed**; replaced by `大气中 CO₂ 所含的碳` (a description, not a rank claim) |
| Sediment / Lithosphere | numbered 5 and 6, i.e. presented as the tail of one ascending numerical sequence | **separated** into their own qualitative group under a divider labelled `地质储库 | Geological reservoirs · 定性描述，不参与上方数值排序`; badges 5/6 removed and replaced by hollow circles; each row reads `图中未给出总量` |
| Speaker notes | repeated the wrong order (`依次是大气、生物圈、土壤、海洋…大气八百三十吉吨碳，生物圈五百`) | rewritten in the corrected order `一、生物圈五百 → 二、大气八百三十 → 三、土壤一千五百 → 四、海洋三万八千`, and now states explicitly that **大气并不是最小的那一个** and that the geological reservoirs do not take part in the numerical rank |

> Note on `grep`: the rejected r0 wording appears **in this report only**, as a quoted "before" value inside the table above. It is absent from every rendered artifact — `svg_output/22_carbon_reservoirs.svg`, the PPTX, the PDF text layer, and the speaker notes. A repo-wide search for it will match this report and nothing else.

Rationale for the split: UE Figure 12.19 (C-01) prints totals for exactly four reservoirs, and prints **none** for the sediment and lithosphere boxes. Numbering six rows as one ascending series therefore asserted an order the source does not state. The four printed values now form the ascending series, and the two geological reservoirs are carried as a separate qualitative group labelled as such — which is also what the figure itself shows (`GEOLOGIC RESERVOIRS` sits in its own lower band).

### Not changed (per the revision request)

Slides 21 and 24 (`svg_output` SHA-256 identical to r0); Slide 22 title `2.2 碳储存在哪里？ | Carbon Reservoirs`; teaching message `碳主要储存在海洋、沉积物与岩石里；大气只是一个很小的储库`; the approved C-01 image and its placement/crop; the `Source: UE 8e, Fig. 12.19 …` footer; page number `22`; canvas 1280 × 720; palette; typography system; and the three-slide scope. No second numerical dataset was added — every printed value is still read from C-01 only.

### Acceptance evidence (r1)

Full machine-generated log: `validation/revision22_check.txt`.

| Acceptance criterion (verbatim from the request) | Result | Evidence |
|---|---|---|
| Numerical hierarchy unambiguously 500 < 830 < 1500 < 38,000 Gt C | **PASS** | ordered run sequence in `ppt/slides/slide2.xml` = `1 → 生物圈 Biosphere → 500 Gt C → 2 → 大气 Atmosphere → 830 Gt C → 3 → 土壤 Soils → 1500 Gt C → 4 → 海洋 Ocean → 38,000 Gt C`; values `[500, 830, 1500, 38000]` strictly ascending |
| Statement that Atmosphere is the smallest reservoir removed | **PASS** | legacy wording absent from `slide2.xml`, from the rendered PDF page 2 text layer, and from the notes |
| Notes match the corrected slide | **PASS** | notes cite the four reservoirs in the corrected order and state that Atmosphere is *not* the smallest |
| Geological reservoirs remain qualitative, not part of the numerical rank | **PASS** | separate group marker present; rows carry `图中未给出总量`; badges `5`/`6` no longer exist anywhere on the page |
| Deck remains exactly Slides 21, 22, 24 with all prior QA checks passing | **PASS** | 3 slides, 3 notes pages, 13.3333 × 7.5 in; `svg_quality_checker.py --canonical-authoring --stage final --json` → 3/3 passed, 0 warnings, 0 errors, 0 blocking; `svg_to_pptx.py` → `[POSTFLIGHT] status=passed quality_gate=passed slides=3 warning_categories=0`; 0 animations, 0 external relationships |

Declared change outside the request, for transparency: preview renders were raised from 1600 × 900 to **1920 × 1080** so they match the resolution the independent QA harness uses (`qa/GATE6_W1_QA_20260911_122338/`). The contract does not pin a preview pixel size.

Pre-revision r0 snapshots are kept for comparison at `backup/20260911_pre_revision/` (pptx, pdf, Slide 22 preview, Slide 22 notes) and `backup/20260911_112844/svg_output/`.

---

## HOUSEKEEPING — done 2026-09-11 15:07

Authorised by the user after the r1 issue. Log: `validation/cleanup_20260911.txt`.

**Preview server stopped.** The ppt-master live preview (`http://127.0.0.1:6060`, pid 33716) had already self-terminated via its idle timeout — the process no longer existed and nothing was listening on the port. The stale `live_preview/lock.json` was cleared through the tool's own entry point, `scripts/svg_editor/server.py <PROJ> --shutdown` → `live preview already stopped; cleared stale lock`. `live_preview/server.log` is retained as the record.

**`exports/` residue removed.** Deleted file-by-file (no recursive delete used anywhere):

| Removed | Class |
|---|---|
| `exports/.pptx-build-38676-…/` (18 files, 19 dirs) | r1 build staging; its `pptx_content/ppt/slides/slide2.xml` held r1 content |
| `exports/PROD-W1-WORKBUDDY_20260911_112828.pptx` | r0 pipeline output |
| `exports/PROD-W1-WORKBUDDY_20260911_112844.pptx` | r0 pipeline output |
| `exports/PROD-W1-WORKBUDDY_20260911_145920.pptx` | r1 pre-postflight pipeline output (not referenced) |

`exports/.pptx-build-11468-…/` — the **stale r0 staging** that this report's earlier open question 1 called out — was already absent by the time cleanup ran; the toolchain's own safe-delete had removed it, which is why the `grep` hit on the rejected wording no longer appears anywhere in the tree.

`exports/` now contains exactly one file, `PROD-W1-WORKBUDDY_20260911_145937.pptx`, the postflight-validated r1 pipeline output and a byte-identical copy of the contract deliverable (both md5 `8a5487b512dfaa06795f171949bf890e`).

Correction to an earlier claim: the r0 report described `_112828` and `_112844` as byte-identical. They are not (md5 `0b5b1cb9…` vs `8eefac80…`); only their byte counts match. No byte-identity claim is made anywhere in this r1 report.

WHAT WAS DONE:

1. Read `AGENTS.md` and `planning/TASK_PROD_W1_WORKBUDDY.md` in full and executed the contract.
2. Loaded the ppt-master v6.3.1 skill and ran the mandatory attribution guard — `scripts/attribution_guard.py` exited 0. The guard was not inspected, repaired, or bypassed.
3. Initialised a ppt-master project (`pptx_structure.mode: flat`, canvas `ppt169`) directly at the contract output directory, imported the read-only contract/Blueprint/Style Spec and the approved asset C-01, and ran the mandatory attribution guard in the same toolchain.
4. Authored `design_spec.md` (I–X, 3-page roster) and `spec_lock.md` from the approved Sample Deck spec pair plus `L16_STYLE_SPEC_v1.md`; `project_manager.py validate` passes.
5. Calibrated typography with `text_measure.py calibrate --outline`; authoring used the calibration rates in closed form (no per-page measurement).
6. Hand-authored the three page SVGs natively in `svg_output/`, evaluated both per-page SVGs 21 and 22 against the Sample Deck's visual grammar (72 px header, teaching-message marker, rounded cards, source line, two-digit original page number).
7. Ran the Final Quality Check gate: `svg_quality_checker.py --canonical-authoring --stage final --json` → 3/3 fully passed, 0 warnings, 0 errors, 0 blocking findings.
8. Post-processing and export: `total_md_split.py` → 3/3 notes mapped; `finalize_svg.py` → 3 self-contained previews, 1 image aligned/embedded; `svg_to_pptx.py` → `[POSTFLIGHT] status=passed quality_gate=passed slides=3 warning_categories=0`.
9. Exported the delivered PDF and the three PNG previews from the delivered PPTX itself (PowerPoint), then visually inspected all three rendered pages plus the PDF text layer.
10. Started the ppt-master live preview: `http://127.0.0.1:6060` (pid 33716; `live_preview/lock.json`). **Stopped afterwards** — it self-terminated on idle timeout and the stale lock was cleared via `server.py --shutdown`; see *HOUSEKEEPING*.
11. **Revision r1 (GATE 6).** Read the returned review, re-authored `svg_output/22_carbon_reservoirs.svg` only (ascending four-value series; legacy "smallest reservoir" caption removed; sediment/lithosphere split into a separate unnumbered qualitative group), rewrote `notes/22_carbon_reservoirs.md` and the Slide 22 section of `notes/total.md`, then re-ran the full chain — `attribution_guard.py` (exit 0) → `svg_quality_checker.py --canonical-authoring --stage final --json` (3/3 passed) → `total_md_split.py` → `finalize_svg.py` → `svg_to_pptx.py` (postflight passed) — re-exported the PDF and all three previews from the delivered PPTX, and generated `validation/revision22_check.txt` as the revision acceptance evidence. Verified `svg_output` SHA-256 for Slides 21 and 24 is unchanged from r0.

SOURCES USED (all from the approved Source Matrix; nothing else):

| Slide | Approved source rows used |
|---|---|
| 21 | UE 8e Ch.12 `The Carbon Cycle; Geochemical Cycles and How They Work`, PDF pp.1204–1205 (carbon cycle = continual carbon movement among Earth-system components; reservoir amounts + inter-reservoir fluxes give the quantitative description); CN `地球系统与演变` Ch.4 §4.1, PDF pp.57–58 (water and carbon as the two most important surface materials; carbon is the backbone element of the biosphere; the carbon cycle is a redox process; photosynthesis converts inorganic to organic carbon); EP Ch.20 §20.2 and CN Ch.4 §4.1 rows listed for Slide 21 (atmosphere–ocean–rock–life bridge); Part I/II/III order from Master Prompt §25 via `L16_BLUEPRINT_v1.md`. |
| 22 | UE 8e Ch.12 `The Cycling of Carbon / Figure 12.19`, PDF pp.1209–1210 (four principal reservoirs, listed here in the ascending order the page uses: plants/biosphere 500 Gt C, atmosphere 830 Gt C, soil 1500 Gt C, ocean 38,000 Gt C; the figure prints no total for the geologic reservoirs); CN Ch.4 §4.2 PDF pp.58–64 (reservoir hierarchy biosphere / atmosphere / soils / ocean, plus sediment and lithosphere); CN Ch.4 §4.5.1 PDF pp.79–80, used qualitatively only (geological reservoirs far exceed surface reservoirs). |
| 24 | UE 8e Ch.12 `Geochemical Cycles and How They Work; Residence Time; The Cycling of Carbon`, PDF pp.1205–1206 and 1209–1213 (reservoir size and flux rate are distinct; residence time; high-flux biological/ocean exchange versus slow geological transfer); CN Ch.4 §4.4.3 `碳循环的时间尺度` PDF pp.78–80, Figures 4-15/4-16, used qualitatively only. |

FIGURES USED:

| ID | Status | Where | Handling |
|---|---|---|---|
| C-01 | APPROVED | Slide 22, sole figure | Referenced from `images/`, `crop=adaptive`, placed 6.604 × 3.688 in, one top-anchored `slice` crop. No amount, unit, or arrow altered. |
| C-02 | APPROVED (backup) | not placed | Inspected as the approved alternative. Its dataset (CN Fig. 4-2) differs from C-01, so per the contract it was not mixed into Slide 22. No C-02 value appears anywhere in the three pages. |
| C-05 | APPROVED | not placed | Inspected to verify the CN Figure 4-16 clock ladder (surface 0–10³, sediment 10³–10⁸, metamorphic 10⁶–10⁹, mantle 10⁷–10⁹ yr). Slide 24's blueprint figure plan is "aligned native comparison", so the raster was not placed; C-05 is planned for Slides 29–31/38. |

No external, web, or AI-generated figure or teaching content was used.

DECISIONS MADE:

1. **Slide 22 uses exactly one dataset.** Every printed number (500 / 830 / 1500 / 38,000 Gt C) is read from UE Figure 12.19 = C-01. Sediment and lithosphere rows carry "图中未给出总量" instead of invented or cross-dataset values, and are visibly marked with the warm fill so the difference is not hidden.
2. **The page states two things, not one.** The printed rule "自小而大排序（本页整理）" governs only the four reservoirs whose totals C-01 prints, and those four are listed in strict ascending order. Sediment and lithosphere are **not** part of that series: they sit under a separate `地质储库 | Geological reservoirs · 定性描述，不参与上方数值排序` divider, carry no rank badge, and are marked `图中未给出总量`, because C-01 prints no total for either. (This split was sharpened in revision r1 — see *REVISION — GATE 6*.)
3. **Slide 22's figure crop.** `crop=adaptive` with one top-anchored `slice`: it removes only the unreadable English FIGURE 12.19 caption paragraph below the artwork and changes no amount, unit, or arrow. Result: the diagram is placed 634 px wide, **larger than the approved Sample Deck's own placement of the same figure on Slide 23 (602 px)**, and the two in-image credit lines (© W. H. Freeman; IPCC data note) remain visible.
4. **Slide 24 is a native aligned matrix, not a numbers table.** Rows = Reservoir / Flux / Residence Time; columns = water and carbon; the left rail is shared so the alignment is explicit. Residence time is expressed as named fastest/slowest reservoirs, with **no numeric timescale values on the page** — the strip explicitly points to Slide 08's Table 3-1 and CN Figures 4-15/4-16 instead of creating a unified numerical timescale table.
5. **Slide 21 carries the required active Part II cue** as a compact three-step course map (Water done / Carbon current with an "当前" chip / Coupling next), reusing the Sample Deck's own Slide 03 section colour coding (Part I blue, Part II orange).
6. **Marker colours.** Orange teaching-message marker on all three pages: 21 and 22 are carbon pages and 24's contrast is carbon-specific, per `L16_STYLE_SPEC_v1.md` §5.
7. **Output directory naming.** ppt-master `init` appends `_ppt169_<date>`; the contract requires exactly `sections/PROD-W1-WORKBUDDY`, so the freshly created directory was renamed (no content changed) and the rename is recorded in `validation/workflow.log`.

DEVIATIONS FROM PLAN:

1. Output directory name — see Decision 7. `project_manager.py validate` reports one accepted warning for this (`Directory name missing date suffix`); it is required by the task contract.
2. Sample Deck lock projected `crop=no-crop` for C-01; this project uses `crop=adaptive` for Slide 22 (Decision 3). This is the only visual-handling deviation and is permitted by `L16_STYLE_SPEC_v1.md` §8 ("Crop only to improve legibility") and by the Figure Index handling note for C-01 ("Use intact or simplify without changing amounts, units, or arrow meaning"). It is declared in `design_spec.md §VIII` and in `spec_lock.md images`.
3. No other deviation. Slide count, page numbers, locked titles, teaching messages, bilingual handling, canvas, palette and type ramp follow the Blueprint and Style Spec.

PROBLEMS FOUND:

1. PowerPoint COM via `New-Object -ComObject` fails on this machine (`TYPE_E_CANTLOADLIBRARY` — the Office Interop assembly for PowerPoint cannot be loaded). Worked around by late-bound `[Type]::GetTypeFromProgID` + `[Activator]::CreateInstance`, which succeeds. Affects nothing in the deliverable; recorded so the next producer does not lose time on it.
2. `svg_to_pptx.py` emits a non-fatal `UnicodeDecodeError` in an internal stdout-reader thread (a helper writes GBK-encoded bytes). Exit code was 0 and the postflight report is `passed` with 0 warnings; the resulting PPTX and PDF both verify correct.
3. `exports/` accumulates pipeline PPTX files and hidden `.pptx-build-*` staging directories on every run; the staging dirs embed a full copy of the slide XML that was current at build time. The r0 staging dir therefore held the rejected ordering and matched a repo-wide `grep` for it even though no deliverable contained it — a false positive that could mislead a reviewer. **Resolved**: see *HOUSEKEEPING* above; `exports/` now holds only the postflight-validated r1 file.

UNFINISHED ITEMS:

None within scope. Explicitly out of scope and not started: all Slides other than 21, 22, 24; merging the three pages into the 44-page deck; project status files, `TASK_BOARD.md`, `PROJECT_STATUS.md`, `QA_LOG.md`, and any other agent's directory.

PLACEHOLDERS:

None. No dashed placeholder rectangle, no `[fill…]` token, no `scaffold-*` value, and no unresolved asset exists in the delivered files.

SELF-QA:

**PPT-agent required additions**

- **Slides completed**: exactly 3 — 21 `2.1 为什么接下来讲碳？ | Why Carbon?`, 22 `2.2 碳储存在哪里？ | Carbon Reservoirs`, 24 `2.4 同样的语言，不同的时间尺度 | Same Framework, Different Timescales`, in original-number order with original page numbers preserved (21 / 22 / 24).
- **Overflow issues**: none. `svg_quality_checker.py --stage final` reported 0 warnings and 0 errors across all three pages; module text stayed inside its root-group bounds and inside the canvas. Verified again on the rendered previews.
- **Image quality**: C-01 placed from its 1725 × 1435 source at a 0.368 downscale — no upscaling, no distortion (frame ratio 1.791 vs cropped source ratio 1.791, cropped bottom 32.88%), `preserveAspectRatio` honoured, crop applied as a real PowerPoint picture crop. Effective on-slide resolution 261 px/in of the placed frame.
- **Missing attribution**: none. Every page carries a readable bottom-left source line naming book, figure/table and PDF page; Slide 22 additionally retains the approved figure's own in-image credit lines.
- **Unclear figures**: none at teaching size. One honest note: the retained in-image credit lines on Slide 22 are below reading size at on-slide scale; attributions are therefore carried by the readable source footer, which names UE 8e Fig. 12.19 PDF p.1209 exactly.
- **Any placeholder**: none.
- **Any deviation from Style Spec**: only the C-01 crop policy (Deviation 2). Full Style / Content Lock compliance check:

| Lock item | Required | Delivered |
|---|---|---|
| Canvas | 1280 × 720, 16:9 | `viewBox="0 0 1280 720"`, PPTX 13.3333 × 7.5 in |
| Font | Microsoft YaHei | `font-family="Microsoft YaHei, Arial"` on every root SVG |
| Body anchor | 15 px | 15 px for body (11.25 pt ✓) |
| Background | white | `#FFFFFF` full-canvas background on all three pages |
| Header | 72 px `#0E3F8C` | 72 px band, `#0E3F8C`, no stroke, on all three pages |
| Carbon accents | `#EA580C`, `#C2410C` | teaching-message markers, hierarchy badges and headings |
| Water blue | cross-cycle comparison only | blue only in the water column of Slide 24 and the Sample Deck's Slide-03 section coding on Slide 21 |
| Flat geometry, no default shadows | required | no `filter`, no shadow, no gradient anywhere (`[CARRIERS] filters 0, gradients 0`) |
| Original slide numbers | 21 / 22 / 24 preserved | bottom-right 21 / 22 / 24 |
| One teaching message per page | required | one 21 px bold message with an orange marker bar on each page; echoed in the rendered previews |
| Bilingual title | required | `中文 | English` in every header and on every column/step heading |
| Source line | required | present, ≥ 12 px (9 pt), one line each |
| Speaker notes | one page each | 3 notes pages embedded (213 / 272 / 218 chars) |
| Type ramp | Style Spec §3 | header 18 px (13.5 pt) ✓, message 21 px (15.75 pt) ✓, right tag 16 px (12 pt) ✓, column heading 19 px (14.25 pt) ✓, card heading 16 px ✓, body 15 px ✓, annotation 13 px ✓, source/page number 12 px (9 pt) ✓ — no value below the 8.5 pt floor |
| Prohibited patterns | none | no full-text bilingual duplication, no text wall, no stock imagery, no black-outline question box, no informal source label, no gradient/shadow, no cropped-away legend/unit/sign, no content touching the bottom edge |

**Verification commands and results**

| Command | Result |
|---|---|
| `attribution_guard.py` | exit 0 |
| `project_manager.py validate` | `[OK] Project structure is valid, with warnings` — 1 accepted naming warning |
| `svg_quality_checker.py --canonical-authoring --stage final --json` | 3/3 passed, 0 warnings, 0 errors, blocking 0; report at `validation/svg_quality_report.json` |
| `total_md_split.py` | `[OK] SVG files and notes have one-to-one correspondence`, 3/3 generated |
| `finalize_svg.py` | `[OK] Done!` — 3 self-contained previews, 1 image embedded |
| `svg_to_pptx.py` | `[POSTFLIGHT] status=passed quality_gate=passed slides=3 warning_categories=0` |
| PPTX inspection | 3 slides; 62 / 57 / 53 nested shapes; 1 `PICTURE` with crop-bottom 0.3288 and zero distortion; notes on all 3 slides |
| PDF inspection | 3 pages at 960 × 540 pt with selectable text — proves the visible content is native text, not outlines |
| Visual inspection | all three previews inspected page by page; no overflow, overlap, distortion, tiny text, or misalignment |
| **r1 revision check** (`validation/revision22_check.txt`) | 8/8 PASS — hierarchy order, ascending values, legacy wording removed, geological group separated and unnumbered, notes match, unchanged elements preserved, previews 1920 × 1080, PDF page-2 native text |
| **r1 Slide 21 / 24 immutability** | `svg_output` SHA-256 identical to r0 for `21_why_carbon.svg` and `24_same_framework_different_timescales.svg`; only `22_carbon_reservoirs.svg` changed |

**Carrier-receipt review** (`[CARRIERS]` line, informational, not a quota). Two receipt facts need their written reason, as required:

- `Presets: (none)`. *Direction and sequence*: no page's `Relationships` line names a flow, branch, or step sequence that a directional shape must carry — Slide 21's order is carried by numbered badges and card stacking, Slide 22's by rank badges, Slide 24's by a shared row rail. *Carrier and field*: the locked soft-rounded course family needs only rounded rectangles and circles, which is exactly what the approved Sample Deck uses across all nine of its pages. *Emphasis and annotation*: emphasis is carried by the 6 × 28 px marker bar and the warm `#FDECDD` strips. *Grouping and ownership*: grouping is carried by the card containers themselves.
- `inline emphasis 0`. The per-page emphasis carrier in this course family is the single 21 px teaching-message line plus the page-level accent colour, not inline runs inside body copy; the body copy is deliberately flat so the one message stays dominant.

**ACCEPTANCE CRITERIA — item by item**

| Criterion | Status | Evidence |
|---|---|---|
| Exactly three slides in original-number order | PASS | 21, 22, 24; filenames and page numbers preserved |
| Coherent Part II transition | PASS | Slide 21 states the Part I → Part II position, the "当前" active state, the reused framework, and the four connected domains |
| Slide 22 reservoir hierarchy traceable to one selected dataset | PASS | the four C-01 values are listed in strict ascending order 500 < 830 < 1500 < 38,000 Gt C; sediment and lithosphere sit outside that series as a qualitative group marked "图中未给出总量"; no second dataset |
| Slide 24 framework equivalence and clock difference without unsupported numbers | PASS | three shared rows, one shared rail, named fastest/slowest reservoirs, zero numeric timescale values, explicit pointer to Slide 08 Table 3-1 and CN Fig. 4-15/4-16 |
| Native/editable objects | PASS | PPTX export mode "Native DrawingML shapes (directly editable)"; 171 nested native shapes; PDF text selectable |
| No overflow, overlap, distortion, tiny text, placeholder, missing source, unapproved figure | PASS | final checker 0/0; previews inspected; single picture undistorted; C-01 is APPROVED |
| Three speaker-note pages | PASS | 3 notes pages embedded and also present as `notes/*.md` |
| Final SVG/PPTX checks pass | PASS | quality report 3/3 passed; postflight `passed` |
| PDF and previews visually inspected | PASS | 3 preview PNGs rendered from the delivered PPTX and inspected; PDF page count, size and text verified |
| Stop condition respected | PASS | nothing beyond Slides 21/22/24 produced; no shared project status file edited |

QUESTIONS:

1. ~~Non-contract artifacts in `exports/`.~~ **Resolved** — user authorised removal; all tool scratch deleted, one referenced pipeline file kept. Detail in *HOUSEKEEPING*.
2. ~~Live preview server.~~ **Resolved** — already self-terminated; stale lock cleared via the tool's `--shutdown` entry point. Nothing is listening on `http://127.0.0.1:6060`.
3. **Open.** Slide 22's `crop=adaptive` on C-01 is the one deliberate deviation from the Sample Deck's `no-crop` lock; if you prefer strict lock parity, say so and the page can be re-issued with `meet` and the full figure (accepting that the in-image English caption paragraph then renders below reading size).
