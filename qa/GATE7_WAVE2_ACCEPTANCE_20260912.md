# Production Wave 2 / GATE 7 Unified Acceptance

Date: 2026-09-12

## Decision

- GATE 7: **REVISION REQUIRED — remains open**.
- Accepted in this review: Slides 08, 13–17, and 26 (7 pages).
- Revision required: Slide 07 speaker Notes and Slide 25 visible/Notes time-scale wording (2 pages).
- Cumulative accepted bulk production: **16/35**. GATE 8 remains blocked until the two focused revisions pass re-review.

## Independent Verification

| Check | Result | Evidence |
|---|---|---|
| Assigned roster | PASS | Four decks contain exactly Slides 07–08, 13–15, 16–17, and 25–26 in order. |
| Project-local delivery checker | PASS | All four PPTX files returned `status=passed`; package integrity clean; 9/9 Notes parts present. |
| Independent PowerPoint render | PASS | Four PPTX files opened through Microsoft PowerPoint and exported to four PDFs plus nine 1920×1080 PNGs under `qa/GATE7_WAVE2_QA_20260912/`. |
| PDF page counts | PASS | 2 / 3 / 2 / 2 pages, matching the four deck rosters. |
| Visual/layout QA | PASS | Nine PowerPoint renders inspected; no visible overflow, overlap, clipping, distortion, placeholder, or unreadable substantive native text. |
| External relationships | PASS | None in all four decks. |
| Audio/object animation | PASS | None in all four decks; slide-level fade transitions are present but are not object animations or timed advance. |
| Approved media | PASS | Qianwen W-06 and WorkBuddy C-03 embedded bytes match the approved assets exactly by SHA-256. |
| Native editability | PASS | Slides 07–08, 13–16, and 25 are fully native; Slides 17 and 26 contain only their approved raster evidence plus native explanation. |

## Page Decisions

| Slide | Producer | Decision | Note |
|---:|---|---|---|
| 07 | Qoder CN | REVISION REQUIRED | Visual/data/source line pass. Notes incorrectly introduce atmosphere and biosphere inside the sentence defining the third level as accessible surface freshwater. |
| 08 | Qoder CN | PASS | CN Table 3-1 values are coherent; storage and turnover are distinguished; the three sibling-text checker warnings are non-blocking authoring advisories. |
| 13 | 豆包工作 | PASS | 12,900 km³, 9 days, and ≈2.5 cm are coherent. “About one hundred-thousandth of ocean storage” is a valid rounded derivation from the same Table 3-1 dataset (12,900 / 1,338,000,000 ≈ 1 / 103,720). |
| 14 | 豆包工作 | PASS | Runoff, infiltration, shallow return, and ET directions are clear; the page explicitly avoids a fabricated global percentage split. |
| 15 | 豆包工作 | PASS | Recharge–storage–discharge topology and residence-time contrast are correct and source-bounded. |
| 16 | 千问办公 | PASS | Continental ice, floating sea ice, and sea-level effects are separated; one sea-level-equivalent dataset is used. |
| 17 | 千问办公 | PASS | W-06 is complete and byte-identical; subduction carries water inward and melting/volcanism returns it outward. |
| 25 | WorkBuddy | REVISION REQUIRED | Process loop and arrows pass, but the visible “years–decades vs geological reservoirs’ million years” comparison is a quantitative time-scale claim not fully locked in this page’s source line; Notes also say the page contains no numbers while narrating those numbers. |
| 26 | WorkBuddy | PASS | C-03 sign convention, unit, and approximately −108 to +108 scale are correct. Original tick labels are small, but the adjacent native reading key makes projection reading sufficient. |

## Scope Compliance Incident

WorkBuddy reported and filesystem timestamps corroborate an edit to `sections/PROD-W1-WORKBUDDY/design_spec.md` immediately before Wave 2 export. This was outside the Wave 2 authorization. The edit does not change the accepted Wave 1 PPTX and is therefore logged as a non-blocking process incident, but it must not recur. No cleanup or rollback was performed.

## Focused Revision Requests

### PROD-W2-QODER-CN-R1 — Slide 07 Notes only

1. Keep all visible Slide 07 artwork and Slide 08 unchanged.
2. Rewrite the Slide 07 Notes so the third level is only lakes/rivers as accessible surface freshwater.
3. Mention atmosphere (0.001%) and biosphere (0.0001%) separately as other tiny reservoirs excluded from the freshwater row; do not classify them as accessible surface freshwater.
4. Re-embed the corrected Notes and regenerate the contract PPTX, PDF, previews, and Completion Report in the same output directory.

### PROD-W2-WORKBUDDY-R1 — Slide 25 wording only

1. Keep the three-process loop, all arrows, Slide 26, and C-03 unchanged.
2. Replace the visible quantitative strip `年—十年 vs 地质储库的百万年` with a qualitative statement such as `表层生物储库周转快于地质储库 | Surface biological reservoirs turn over faster than geological reservoirs`.
3. Remove the corresponding `年到十年` / `百万年` claims from Slide 25 Notes and make the Notes agree with the final visible page.
4. Do not edit any Wave 1, planning, review, QA, status, asset, or other producer file.
5. Regenerate the contract PPTX, PDF, previews, and Completion Report in the same output directory.

## Gate Boundary

Do not assign or begin Slides 18–20, 28–34, 36–37, or 39–43 until both revised deliverables pass focused re-review and GATE 7 is explicitly closed.
