# Agent Capability Table

Assessment date: 2026-09-09

Legend: `YES` = filesystem evidence available; `PARTIAL` = some supporting capability exists but end-to-end test is pending; `UNVERIFIED` = installed/present but not tested in this project; `NO` = required component not found.

| Agent | Project Access | PDF Read | PPTX Read | PPTX Write | Script | Visual | ppt-master | Notes |
|---|---|---|---|---|---|---|---|---|
| Qoder CN | YES | YES | YES | YES | YES | YES | YES — v6.3.1 | Wave 1 Slides 04–06 passed independent PowerPoint, structure, content, and visual QA. Required production model: Qwen3.8max / 1M. |
| 豆包工作 / DoubaoWork | YES | YES | YES | YES | PARTIAL | YES | YES — v6.3.1 | Wave 1 Slides 10–12 passed independent PowerPoint, structure, content, and visual QA. Required production model: 豆包2.1pro. |
| WorkBuddy | YES | YES | YES | YES | YES | YES | YES — v6.3.1 | Wave 1 Slides 21/22/24 passed after a focused Slide 22 revision. Required production model: Deepseek-V4.1-Flash / 1M. |
| 千问办公 / QwenWork | YES | YES | YES | YES | YES | YES | YES — project-local v6.3.1 | Nine-slide capability deck opened and rendered in PowerPoint; structure, editability, media, and visual QA passed. User accepted the producer despite recorded Notes/terminology/source-line findings. Underlying model/context not disclosed. |
| Codex primary | YES | YES | YES | YES | YES | YES | TOOL ISSUE — v6.2.0 default invocation | Prior managed-runtime validation passed, but the 2026-09-10 default `python` attribution-guard invocation returned non-zero. Do not bypass it; use the verified project-local v6.3.1 route for Sample production. |
| Codex sub-agents | YES | YES | YES | YES | YES | YES | YES — inherited | Up to three concurrent sub-agents are available alongside the primary agent and share the workspace and validated tooling. |

## Evidence

- Installed applications: Qoder CN 0.1.3, Qoder CN IDE 1.106.3, 豆包工作 2.28.10, WorkBuddy 5.5.3.
- Qoder skill roots include `pdf` and `pptx`.
- DoubaoWork skill roots include `doubao-pdf`, `ppt`, `artifact-preview`, and `verifier-hub`.
- WorkBuddy contains `markitdown-skill`, PDF tooling, and a bundled Tencent PPTX plugin.
- Before Step 4, no `ppt-master` path existed under the Qoder, DoubaoWork, or WorkBuddy user skill roots.
- Official v6.3.1 installations now exist for all three target agents and pass the mandatory attribution guard.
- Codex v6.2.0 previously passed with the configured managed Python runtime, but a later default-interpreter invocation failed and must not be bypassed.
- Computer-use inventory exposed no controllable native-app surfaces, so GUI-level project-open testing was not possible in this environment.
- Subsequent delivered-project evidence supersedes the initial external-agent `UNVERIFIED` project-access and visual-capability labels for Qoder CN, 豆包工作, and WorkBuddy.
- 千问办公 demonstrated project-local PPTX/PDF production with nine embedded Notes pages and approved media; the user authorized it for Wave 2.

## Assignment Implications

- Qoder CN, 豆包工作, WorkBuddy, and 千问办公 may receive bounded, non-overlapping production packets after the preceding project Gate closes.
- Every producer remains subject to independent Codex acceptance; a producer's self-QA does not close a Gate.
