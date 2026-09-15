# REVIEW-SOURCE-CN-FIGURES

## Verdict

**REVISION REQUIRED** - the scientific/source/crop evidence passes, but the figure-state and Figure Index metadata contract does not yet pass.

This is a narrow metadata/workflow revision, not a request to redo the textbook analysis or recrop the figures.

## Scope and method

Read-only review covered:

- `planning/CN_SOURCE_MAP.md`
- `planning/reports/SOURCE-CN_COMPLETION.md`
- Ten seed crops under `assets/figures/extracted_raw`: W-01, W-03, W-04, W-05, W-06, C-02, C-03, C-04, C-05, C-06
- Source PDF `地球系统与演变第三第四章.pdf`

Checks performed:

- Parsed the Seed Figure table: 10 rows, 10 unique IDs, no duplicate seed row.
- Confirmed exactly one matching raw asset for each required ID.
- Decoded all ten PNGs with Pillow and visually inspected each at original detail.
- Compared every crop against the source PDF, covering nine distinct PDF pages: 8, 9, 21, 25, 27, 59, 68, 80, and 81. This verifies all ten entries and exceeds the required five-entry spot check; C-03 and C-04 share PDF page 68.
- Verified the printed folios visible on those pages: 93, 94, 106, 110, 112, 144, 153, 165, and 166. Every checked entry satisfies `Printed Page = PDF Page + 85`.
- Checked captions, figure/table numbers, scientific purpose, clarity, crop boundaries, slide mapping, source conflicts, figure-gap statement, and workflow status.
- No web, PPT work, source-output rewrite, or status promotion was performed.

## Exact defects requiring revision

### D1 - Non-canonical figure status on all ten seed rows

`CN_SOURCE_MAP.md` assigns every seed figure the status `VERIFIED-CANDIDATE`; `SOURCE-CN_COMPLETION.md` repeats that state.

The authoritative workflow in `LECTURE16_MASTER_PROMPT.md.txt` §18 defines only:

`CANDIDATE -> VERIFIED -> APPROVED -> USED`, with `REJECTED` as the rejection state.

`VERIFIED-CANDIDATE` is not a defined state. The ten figures were not silently promoted to `APPROVED`, which is good, but the hybrid label still breaks the state contract.

Required owner correction: after this independent source verification is accepted, normalize the ten rows to `VERIFIED`, not `APPROVED`. Approval remains a later Codex/user decision.

Affected IDs: W-01, W-03, W-04, W-05, W-06, C-02, C-03, C-04, C-05, C-06.

### D2 - Seed table is not yet a complete §19 Figure Index record

The Seed Figure table contains ID, status, PDF/printed pages, chapter/section, figure number, caption, scientific content, clarity, processing recommendation, planned slide, and asset path. It does not contain explicit fields for:

- `Source Book`
- `Original Language`
- `Attribution Text`
- `Notes`

The unique source book and Chinese language can be inferred from the document-level preamble, and attribution is often visible inside the cropped caption, so traceability is not lost. However, §19 requires these as Figure Index fields. Gate 2 cannot treat this table alone as the completed central Figure Library record until those fields are present in the owning index.

Required owner correction: add the missing explicit fields either to this table or, preferably, to the central Figure Index during consolidation. Do not alter the raw images.

## Non-blocking cautions

- `FIGURE_GAP: 无` is valid only for the assigned ten Seed Figure IDs. It should not be interpreted as proof that the complete Lecture 16 Figure Library has no slide-level gaps.
- `SOURCE-CN_COMPLETION.md` is explicitly a recovery report and says it did not repeat textbook analysis. This independent review supplies the missing direct source-PDF cross-check; the recovery wording itself does not invalidate the artifacts.
- W-01 preserves the textbook caption's printed URL `http://water.vsgs.gov`. It should remain verbatim for source fidelity; no web validation or silent correction is authorized.
- C-04 is scientifically complete but only 625 × 515 px with small internal labels. The map already recommends a bilingual redraw; calling its clarity `中等偏高` is optimistic for direct projector use but not a traceability defect.

## Per-figure QA summary

| ID | Source trace | Crop / decode | Scientific and caption check | Readability / use recommendation | QA result |
|---|---|---|---|---|---|
| W-01 | Fig. 3-3; PDF 8; printed 93 | 970 × 840 RGB; decodes; complete figure and caption | Caption and water percentages match source; reservoir-distribution purpose is accurate | Review-readable; black-panel minor labels will be small on a projector. Keep as evidence; simplify/redraw for Slides 06-07 | PASS with readability caution |
| W-03 | Fig. 3-15; PDF 25; printed 110 | 1040 × 570 RGB; decodes; A+B panels, both unit lines, and caption retained | A/B values and caption match source; mapping to Slides 09-10 and 19 is appropriate | High-quality evidence; enlarge or redraw panels separately and never mix A/B units | PASS |
| W-04 | Table 3-1; PDF 9; printed 94 | 1025 × 525 RGB; decodes; all rows, headers, title retained | Storage and residence-time entries match source | Clear review crop; later classroom use should be a faithful simplified table, as already recorded | PASS |
| W-05 | Fig. 3-17; PDF 27; printed 112 | 855 × 480 RGB; decodes; arrows, signed values, and `1 Cal=4.184 J` retained | Caption, phase-change directions, 80/100/540 Cal values match source | Clear; keep arrow direction and signs unchanged in any redraw | PASS |
| W-06 | Fig. 3-13; PDF 21; printed 106 | 940 × 645 RGB; decodes; full diagram, depth/pressure labels, legend sentence, caption retained | Deep-water-cycle interpretation and source attribution match | Clear evidence; direct slide use may need simplified depth/pressure labels | PASS |
| C-02 | Fig. 4-2; PDF 59; printed 144 | 875 × 655 RGB; decodes; units, black/red encoding note, caption retained | Reservoir/flux purpose and 1990s/IPCC 2007 context match source | Dense for projection; use as verification source or simplified redraw for Slides 22-23 | PASS with readability caution |
| C-03 | Fig. 4-8; PDF 68; printed 153 | 865 × 750 RGB; decodes; full map, colorbar, units, sign explanation, caption retained | Positive-source / negative-sink interpretation matches source | Suitable if displayed large; colorbar and sign sentence are mandatory | PASS |
| C-04 | Fig. 4-9; PDF 68; printed 153 | 625 × 515 RGB; decodes; full diagram and caption retained | Biological, carbonate, and physical pump pathways match source and Slide 27-28 use | Internal labels are too small for dependable direct projection; bilingual faithful redraw recommended | PASS with strong redraw caution |
| C-05 | Fig. 4-16; PDF 80; printed 165 | 785 × 730 RGB; decodes; axes, timescales, flux values, explanatory caption retained | Surface/geological reservoirs, processes, fluxes, and clocks match source | Dense but traceable; simplify paths/timescales for teaching without changing values | PASS with readability caution |
| C-06 | Fig. 4-17; PDF 81; printed 166 | 975 × 760 RGB; decodes; complete left/right comparison and caption retained | Hadean-versus-Phanerozoic deep-carbon interpretation matches source | Clear and coherent; appropriate as backup for Slides 30-31, not as a new early-Earth topic | PASS |

## Source Map and completion-report QA

### Passed

- All ten assigned seed IDs are present exactly once in the Seed Figure table.
- All ten raw assets exist exactly once, are non-empty, and decode successfully.
- Figure/table numbers, PDF pages, printed pages, and captions are traceable to the source PDF.
- The `+85` printed-page offset is correct for all nine source pages visually checked.
- Scientific purposes and locked slide mappings are reasonable and do not alter the 44-slide Blueprint.
- MUST TEACH, SHOULD TEACH, OPTIONAL, and OUT OF SCOPE classifications are present.
- `SOURCE-DERIVED` and `SYNTHESIS` are distinguished.
- The two disclosed source conflicts are accurately stated:
  - rounded `about 97%` versus Fig. 3-3 `96.5%` ocean-water share;
  - 12,900 km³ atmospheric water in Table 3-1 versus 16,000 km³ in Fig. 3-15A.
- No raw crop is labeled `APPROVED` or `USED`.
- Crop recommendations correctly preserve essential legends, colorbars, signs, units, and captions.

### Failed

- Figure-state vocabulary does not comply with §18 because all ten rows use `VERIFIED-CANDIDATE`.
- The Seed table is not, by itself, a complete §19 Figure Index because four required explicit fields are absent.

## Gate reliance decision

### GATE 1 - textbook analysis

**Can rely on these artifacts: YES.**

The source map's Chinese-textbook evidence, page mapping, classifications, conflicts, and slide associations are sufficiently accurate for Gate 1. The required revisions are metadata/state-governance issues and do not require re-reading or recropping the assigned chapters.

### GATE 2 - Source Matrix + Figure Library

**Can rely on the scientific evidence and raw crops: YES. Can declare Gate 2 complete from these artifacts as written: NO.**

Before Gate 2 completion, the owning agent must:

1. normalize all ten figure states to the canonical `VERIFIED` state, without promoting any to `APPROVED`; and
2. carry `Source Book`, `Original Language`, `Attribution Text`, and `Notes` into the central Figure Index.

After those narrow corrections, no additional Chinese-source figure extraction is required for these ten Seed IDs.

## Final reviewer statement

The images and source evidence are trustworthy. Revision is required only because the metadata currently oversteps the defined state vocabulary and is incomplete for a final Figure Index. No figure requires rejection, replacement, or re-extraction at this stage.
