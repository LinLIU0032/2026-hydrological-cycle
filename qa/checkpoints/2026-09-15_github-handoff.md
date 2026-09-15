# Checkpoint — GitHub handoff after GATE 9

- Timestamp: 2026-09-15, Asia/Shanghai
- Repository target: `https://github.com/LinLIU0032/2026-hydrological-cycle`
- Authoritative workflow: `LECTURE16_MASTER_PROMPT.md.txt`
- Active boundary: GATE 9 PASS / CLOSED; GATE 10 ELIGIBLE but not started; GATE 11 BLOCKED

## Objective

Preserve the complete Lecture 16 working state so another computer can clone the repository, read the recorded context, and continue directly from GATE 10 without asking the user to restate background or repeating GATE 9.

## Stable state

- The accepted master deck is `final/L16_Hydrological_Carbon_Cycles_v02.pptx`.
- The accepted PDF is `final/L16_Hydrological_Carbon_Cycles_v02.pdf`.
- The accepted deck has 44 pages, 44/44 embedded Notes, 12 preserved source Designs, and no external relationships, narration, video, object animation, or timed advance.
- PowerPoint renders match all 44 accepted-source renders exactly.
- GATE 9 acceptance is recorded in `qa/GATE9_ACCEPTANCE_20260915.md`.
- The exact page-to-source roster is locked in `planning/GATE9_INTEGRATION_PLAN.md`.
- `final/L16_Hydrological_Carbon_Cycles_v01.pptx` is rejected and retained only as audit history; never use it as the lesson-plan basis.

## Decisions that must remain in force

1. `LECTURE16_MASTER_PROMPT.md.txt` remains authoritative.
2. Do not revise accepted PPT pages while producing the lesson plan unless a new evidence-backed issue is reported and resolved under the Master Prompt.
3. Do not use external teaching content or figures without an approved `EXTERNAL_SOURCE_REQUEST`.
4. Preserve all textbooks, Lecture 09 references, meeting notes, schedule, source matrices, production decks, final outputs, and QA evidence.
5. Do not delete v01 or any historical QA evidence without explicit user approval.
6. GATE 10 requires explicit user continuation; GATE 11 cannot start before GATE 10 passes.

## Required reading pointers

- `PROJECT_STATUS.md:7` — current stage.
- `PROJECT_STATUS.md:25` — GATE 9 result.
- `PROJECT_STATUS.md:26` — GATE 10 eligibility.
- `PROJECT_STATUS.md:27` — GATE 11 block.
- `task_plan.md:76` — stop at GATE 9 boundary.
- `task_plan.md:78` — authorized GATE 10 action when the user continues.
- `findings.md:135` — GATE 9 closure evidence.
- `progress.md:122` — GATE 9 integration plan creation and subsequent execution history.
- `qa/GATE9_ACCEPTANCE_20260915.md:56` — formal close statement.
- `LECTURE16_MASTER_PROMPT.md.txt:3170` — lesson-plan production order.
- `LECTURE16_MASTER_PROMPT.md.txt:3210` — final QA requirements.

## GATE 10 inputs

- Stable v02 PPT/PDF and its 44-page previews.
- Locked Learning Objectives, classroom interactions, Homework candidates, Key Terms, and Key Takeaways verified during GATE 9.
- Formal template: `EOE111 Lecture 课程教案表格.docx`.
- Filling-style reference: `EOE111 - Lecture 09 Earthquakes and Volcanos - 教案v2zw.docx`.
- Course schedule: `Course Schedule 24 Lecture Sequence_updated.docx`.
- Meeting context: `会议纪要.docx`.

## Next actions after explicit user continuation

1. Read the formal lesson-plan template and Lecture 09 reference without modifying either original.
2. Map v02 content, timing, objectives, interactions, Homework, and sources into a new lesson-plan file under `final/`.
3. Validate that the lesson plan matches v02 and the 2 × 50 minute contract; close GATE 10 before beginning GATE 11.

## Repository recovery check

On the new computer, run `git lfs pull` and `git lfs fsck`. Confirm the v02 PPTX/PDF and the four top-level source textbooks open successfully. The ignored Python virtual environment, external `node_modules` junction, and temporary preview caches are reproducible and are not project evidence.

Prepared index snapshot before publication: 14,426 tracked paths, including 1,099 Git LFS paths referencing 861 unique objects. A staged secret scan found no GitHub personal access token or private-key signature outside the excluded machine-local environment.

## Publication receipt

- GitHub visibility: PUBLIC
- Default branch: `main`
- Initial published commit: `f3a4fd17dcfd5bed6aa75f33bbbb0c4dfbbb11eb`
- Initial commit identity verified equal between local `HEAD` and `origin/main`.
- GitHub recursive tree response: 14,882 entries including directory trees; `truncated: false`.
- Git LFS upload: 861 unique objects, about 1.3 GB, completed successfully.
- Local LFS pointer/object integrity: `git lfs fsck --pointers HEAD` passed.

## ZIP download compatibility correction

- Commit `5cdd98f79c7c47f273f4dd76d673608d0b132b59` narrowed PPTX LFS tracking to the single 153 MB Lecture 09 reference deck, which exceeds GitHub's 100 MB ordinary-blob limit.
- The other 43 PPTX files are ordinary Git blobs, including `final/L16_Hydrological_Carbon_Cycles_v02.pptx` at 5,657,671 bytes.
- GitHub's generated `main` ZIP was streamed and inspected after the change; its v02 PPTX entry is 5,657,671 bytes, not an LFS pointer.
- The current tree retains 1,056 LFS paths referencing 828 unique LFS objects for large source material, PDFs, images, audio, and other binary evidence.
