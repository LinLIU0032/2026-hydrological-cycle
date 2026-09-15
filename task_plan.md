# Lecture 16 Execution Plan

## Goal

Execute the authoritative `LECTURE16_MASTER_PROMPT.md.txt` workflow in order, preserve every Gate boundary, integrate only accepted slide sources, and complete full-deck, lesson-plan, and final-delivery QA without skipping required user stops.

## Current Position

- Current step: GATE 9 closed; stopped before lesson-plan production
- Current gate: GATE 9 — PASS / CLOSED; GATE 10 eligible but not started
- Bulk production: all 35/35 slides accepted (100%); exact 44-page accepted-source roster locked in `planning/GATE9_INTEGRATION_PLAN.md`
- Handoff: GitHub transfer prepared for `LinLIU0032/2026-hydrological-cycle`; GATE 10 and GATE 11 remain untouched

## Phases

| Phase | Section 60 scope | Gate | Status |
|---|---|---|---|
| Setup | Steps 1–4 | GATE 0 | complete |
| Source analysis | Steps 5–6 | GATE 1 | complete |
| Integration | Steps 7–8 | GATES 2–4 | complete |
| Sample Deck | Steps 9–10 | GATE 5 | complete |
| User review stop | Step 11 | STOP GATE | complete — user approved 2026-09-11 |
| Production Wave 1 | Nine assigned slides | GATE 6 | complete — 9/9 pages accepted |
| Production Wave 2 | Slides 07–08, 13–17, 25–26 | GATE 7 | complete — all nine pages accepted after focused revisions |
| Production Wave 3 | Remaining 17 slides: 18–20, 28–34, 36–37, 39–43 | GATE 8 | complete — all 17 pages accepted after focused revisions to Slides 36, 37, 39, 40, and 43 |
| Full-deck integration and QA | Assemble accepted pages and validate the 44-page master | GATE 9 | complete — v02 accepted after full structure, PowerPoint, PDF, and visual QA |

## Locked Decisions

- The 44-slide Blueprint is the planning baseline and may not be changed without a `BLUEPRINT_ISSUE` decision.
- No producer may search independently for figures.
- No external teaching content or figures may be used without user approval.
- Sample Deck must contain Slides 01, 02, 03, 09, 23, 27, 35, 38, and 44 only.
- Remaining 35 slides must not start before user approval after Step 11.
- User approved the Sample Deck on 2026-09-11.
- Wave 1 is limited to Slides 04–06, 10–12, 21–22, and 24.
- Qoder CN, 豆包工作, and WorkBuddy must work from `E:\PG\2026 Hydrological cycle` and write only to their assigned `sections/PROD-W1-*` directories.
- The user accepted 千问办公 as the fourth producer despite the recorded candidate-QA findings; its validation deck will not be integrated into the final deck.
- Wave 2 is limited to nine slides: Qoder CN 07–08, 豆包工作 13–15, 千问办公 16–17, and WorkBuddy 25–26.
- No Slide 18–20, 28–34, 36–37, or 39–43 work may start before the GATE 7 unified review passes.
- GATE 7 passed on 2026-09-14. GATE 8 allocation is Qoder CN 18–20 and 34; WorkBuddy 28–33; 千问办公 36–37 and 39; 豆包工作 40–43.
- The user manually forwards all four GATE 8 packets. Packet creation is not production start.
- GATE 9 remains blocked until all 17 GATE 8 drafts pass unified Codex QA.
- GATE 8 unified QA on 2026-09-15 accepted Slides 18–20, 28–34, 41, and 42. Only Slides 36, 37, 39, 40, and 43 may be revised before focused re-review.
- GATE 8 focused re-review passed on 2026-09-15. All 35 bulk slides are accepted; GATE 9 is eligible but has not started.
- The user authorized GATE 9 on 2026-09-15. The final deck must use the exact roster in `planning/GATE9_INTEGRATION_PLAN.md` and preserve accepted pages without redesign.
- Native cross-deck insertion through Microsoft PowerPoint is the integration method because ppt-master's Edit Native route cannot merge multiple source decks and its Generate route would rebuild accepted pages.

## Errors Encountered

| Error | Attempt | Resolution |
|---|---:|---|
| `LECTURE16_MASTER_PROMPT.md` not found | 1 | Located the actual file as `LECTURE16_MASTER_PROMPT.md.txt`; read all 3,585 lines. |
| `ppt-master` attribution guard exited 1 with no output | 1 | Stopped using the skill as required; record as a tool issue for Step 3/4. No bypass attempted. |
| PowerShell parser error while aggregating skill-search results | 1 | Rewrote the command to collect `foreach` output before piping; search completed. |
| Official PyPI index failed with SSL EOF during isolated dependency install | 1 | Retried using the official Windows guide's Tsinghua mirror fallback; installation and `pip check` passed. |
| SOURCE-CN agent hit usage limit after source map and crops were saved | 1 | Preserve existing outputs; resume only completion report and self-QA per §58. |
| STYLE-AUDIT agent hit usage limit before producing output | 1 | Reassign the whole task to another available agent per §58. |
| SOURCE-CN report-resume turn produced no report or progress response | 2 | Interrupted that turn and reassigned only the narrow report/self-QA task to `/root/source_ue`; source analysis remains preserved. |
| PowerShell parser error while piping a `foreach` statement used for output-presence checks | 1 | Collect the loop output in a variable before piping; no project files were affected. |
| Native PowerPoint app surface was not exposed by the available computer-use runtime | 1 | Used the installed Microsoft PowerPoint COM API to open the deck read-only and perform independent native rendering without modifying the source PPTX. |
| PowerPoint `ExportAsFixedFormat` overload binding failed in PowerShell 7 | 1 | Exported the QA PDF through PowerPoint `SaveAs` with PDF format after exporting the PNGs; output was then reopened and rendered with Poppler. |
| Project-local PPT Python lacked `pypdf`, then the bundled Python console used GBK for Unicode output | 2 | Switched to the bundled workspace Python and set `PYTHONIOENCODING=utf-8`; structural and PDF text checks completed. |
| Combined skill-read separator was misquoted in nested PowerShell | 1 | Removed the separator expression and read the required skill files in bounded direct PowerShell 7 calls; no project file changed. |
| Nested PowerShell expanded `$p` before the inner command parsed | 1 | Used the PowerShell 7 executable directly as the command shell; the complete skill file was then read in bounded ranges. |
| Read-only XLSX row print failed under GBK Unicode encoding | 1 | Set `PYTHONIOENCODING=utf-8` for the bundled Python read-only inspection and reran successfully. |
| `rg` rejected a Windows wildcard path for task-packet verification | 1 | Replaced the wildcard path with `rg -g 'TASK_PROD_W3_*.md'`; verification completed. |
| ppt-master route cannot perform cross-deck native merge without regeneration | 1 | Kept its attribution/delivery checks, documented the route boundary, and selected PowerPoint native `InsertFromFile` to preserve accepted pages. |
| GATE 9 source audit treated every folio as a non-zero-padded native integer and failed on pages 01, 03, 06, and 09 | 1 | Corrected the QA rule to require zero-padded folios 02–44 and allow Slide 01 to omit its folio exactly as required by the locked Style Spec; no source deck was changed. |
| GATE 9 delivery-check help command referenced the no-longer-present `.venv-ppt` interpreter | 1 | Switched to the loaded bundled Python runtime; the checker script and deck were not changed. |
| Initial master audit treated `passed-with-advisories` as failure and compared transition XML too literally, flagging all 44 pages after PowerPoint normalization | 1 | Inspect the advisories and compare transition effect/timing semantics rather than namespace/default-attribute serialization before deciding whether the deck changed materially. |
| Final PowerPoint render was pixel-identical on only 15/44 pages; 29 pages from Sample, Qoder, and WorkBuddy changed after cross-deck insertion | 1 | Confirmed theme/master remapping, rejected v01, and created non-overwriting v02 with 12 cloned source Designs; v02 matches all 44 accepted renders exactly. |

## Next Actions

1. Stop at the closed GATE 9 boundary.
2. Await explicit continuation into GATE 10.
3. If authorized, create the formal lesson plan from the stable v02 PPT, locked Learning Objectives, Homework, and teaching-time contract.
