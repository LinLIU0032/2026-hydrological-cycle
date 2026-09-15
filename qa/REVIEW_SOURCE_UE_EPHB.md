# REVIEW-SOURCE-UE-EPHB

## Overall verdict

**PASS.** Both source maps and both Completion Reports are suitable for GATE 1 reliance. No source-map revision is required by this review. This review does not promote any figure to `VERIFIED` or `APPROVED` and does not authorize STEP 7 or PPT production by itself.

## Artifacts reviewed

- `planning/UE_SOURCE_MAP.md`
- `planning/EP_HB_SOURCE_MAP.md`
- `planning/reports/SOURCE-UE_COMPLETION.md`
- `planning/reports/SOURCE-EP-HB_COMPLETION.md`
- W-02 raw spread and full-page evidence images under `assets/figures/extracted_raw/`
- F-01 raw crop and full-page evidence image under `assets/figures/extracted_raw/`

## Completion Report contract

Both reports contain each of the 13 required headings exactly once:

1. `TASK ID:`
2. `STATUS:`
3. `OUTPUT FILES:`
4. `WHAT WAS DONE:`
5. `SOURCES USED:`
6. `FIGURES USED:`
7. `DECISIONS MADE:`
8. `DEVIATIONS FROM PLAN:`
9. `PROBLEMS FOUND:`
10. `UNFINISHED ITEMS:`
11. `PLACEHOLDERS:`
12. `SELF-QA:`
13. `QUESTIONS:`

## UE_SOURCE_MAP.md review

**Verdict: PASS — GATE 1 may rely on this artifact.**

### Structural and scope checks

- Covers every specifically assigned UE topic: reservoir, flux, residence time, hydrologic cycle, groundwater, carbon reservoirs, carbon fluxes, feedback definitions, water-vapor feedback, ice/albedo feedback, and biosphere/plant-growth feedback.
- Maps evidence to the locked slide numbers without changing the 44-slide Blueprint, Learning Objectives, Homework, Key Takeaways, or sequence.
- Separates `MUST TEACH`, `SHOULD TEACH`, `OPTIONAL`, and `OUT OF SCOPE` with substantive entries rather than placeholders.
- Distinguishes `SOURCE-DERIVED` from `SYNTHESIS`, and independently marks evidence `FOUND`, `PARTIAL`, or `NOT FOUND`.
- Defines PDF pages as 1-based physical PDF indices. `Printed page = NOT VISIBLE` is explicit and was spot-checked: no printed folio text was present at the bottom of sampled PDF pages 1177 and 1647, so pages were not guessed.
- The three `SOURCE_CONFLICT` records contain all required fields: Topic, Source A, Source B, Difference, Possible reason, Impact on teaching, Recommended option, and Need user decision.
- The seven UE-only evidence gaps are clearly bounded and do not masquerade as `FIGURE_GAP` requests or authorize external sourcing.

### UE PDF spot checks

| Map claim / entry | Local PDF evidence checked | Result |
|---|---|---|
| Positive/negative feedback definitions; water-vapor and albedo chains | UE PDF p. 1177 | PASS — wording and feedback directions match the map. |
| Plant-growth negative feedback | UE PDF p. 1178 | PASS — higher CO₂ stimulates plant growth; organic-matter uptake reduces the greenhouse effect. |
| Geochemical reservoir, flux, and residence-time framework | UE PDF p. 1205 | PASS — definitions and the sodium/iron residence-time context match. |
| Four main carbon reservoirs and Figure 12.19 storage/flux units | UE PDF p. 1209 | PASS — atmosphere, oceans, land surface, deeper lithosphere; Gt versus Gt/yr distinction confirmed. |
| Carbonate weathering, river transport, shell formation, sediment burial, and 0.2 Gt C/yr terms | UE PDF p. 1212 | PASS — map preserves the source's distinction and does not overstate net removal. |
| Slow silicate weathering, `<0.1 Gt/yr`, volcanism comparison, and million-year cooling role | UE PDF p. 1213 | PASS — quantitative and timescale claims match. |
| Water reservoir and groundwater definitions | UE PDF p. 1647 | PASS — groundwater and reservoir wording match. |
| Hydrologic-cycle definition and global budget | UE PDF pp. 1651–1652 | PASS — total water ~1.4 billion km³ and flows 434, 398, 107, 71, and 36 ×10³ km³/yr match. |
| Groundwater as about 29% of freshwater in prose | UE PDF p. 1675 | PASS — the map correctly preserves this value and flags its inconsistency with Figure 17.1. |

### Defects requiring revision

None.

## EP_HB_SOURCE_MAP.md review

**Verdict: PASS — GATE 1 may rely on this artifact.**

### Structural and scope checks

- Covers the assigned EP Interlude F, EP Chapters 20 and 23, and HB Chapters 9 and 18, while preserving their supporting-source role.
- Maps water-cycle overview, residence time, Earth-system coupling, feedback definitions, water-vapor feedback, volatile cycling, weathering thermostat, ice-albedo feedback, and feedback timescales to the locked Blueprint.
- Separates `MUST TEACH`, `SHOULD TEACH`, `OPTIONAL`, and `OUT OF SCOPE` with substantive entries.
- Uses `SOURCE-DERIVED` and bounded `SYNTHESIS` labels consistently.
- Separates EP physical PDF pages from printed pages. For the reflowed HB PDF, `Printed page` is explicitly `Not shown in supplied PDF` rather than inferred.
- All three `SOURCE_CONFLICT` records contain the required decision fields and bounded recommendations.
- Both `FIGURE_GAP` records contain Slide, Teaching message, Needed visual, Current approved figures checked, Why insufficient, and a selected suggested solution. Each resolves to a textbook-grounded redraw path; neither requests external content.

### W-02 source and image check

- EP PDF pp. 615–616 / printed pp. 580–581 contain the unnumbered spread titled `GEOLOGY AT A GLANCE — The Hydrologic Cycle`.
- Text and visual labels confirm the mapped atmospheric, ocean, organic, land, snow/ice, and subsurface reservoirs and the named surface/subsurface fluxes.
- The 5900 × 3513 stitched raw spread preserves both pages, the center gutter, title, labels, arrows, and explanatory text. The map appropriately recommends later crop/redraw work rather than direct projector use.
- Status remains `CANDIDATE`; no approval was implied.

### F-01 source and image check

- HB PDF p. 249 contains Fig. 9-11 with the exact caption recorded in the map.
- The figure shows both warming/increased-weathering and cooling/decreased-weathering branches, including atmospheric CO₂, H₂O, rainwater acidity, Ca²⁺ flux, and CaCO₃ precipitation.
- Adjacent PDF text confirms the `tectonic thermostat` wording and the slow `>10^5–10^7 years` timescale.
- The 2280 × 1300 raw crop preserves the complete diagram and caption at readable resolution. The map correctly identifies outdated `Ca++` notation and recommends a faithful bilingual redraw only after approval.
- Status remains `CANDIDATE`; no approval was implied.

### Defects requiring revision

None.

## Review execution notes

- No web or external teaching source was used.
- No PPT/PPTX file was created, edited, or visually reviewed.
- The default Python environment did not expose `pypdf`, and the project-local environment also lacked it. The review used the already installed `pymupdf` package for read-only page-text spot checks; no dependency was installed and no source file was modified.

## GATE 1 recommendation

- `UE_SOURCE_MAP.md`: **RELIABLE FOR GATE 1**.
- `EP_HB_SOURCE_MAP.md`: **RELIABLE FOR GATE 1**.
- Remaining GATE 1 dependency: acceptance of `SOURCE-CN` and `STYLE-AUDIT` is outside this review's scope.
