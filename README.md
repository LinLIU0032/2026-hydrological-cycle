# Lecture 16 — Hydrological and Carbon Cycles

这是 Lecture 16 项目的完整接续仓库。当前状态已停在 **GATE 9 PASS / CLOSED**；**GATE 10 尚未开始**，**GATE 11 等待 GATE 10**。新电脑应从 GATE 10 接续，不要重做或改写已经通过的 GATE 9。

## 新电脑接手

需要 Git、Git LFS、PowerShell 7、Microsoft PowerPoint，以及可处理 DOCX/PDF/PPTX 的 Codex 工作区运行时。

```powershell
git lfs install
git clone https://github.com/LinLIU0032/2026-hydrological-cycle.git
Set-Location '2026-hydrological-cycle'
git lfs pull
git lfs fsck
```

如果 `git lfs pull` 没有完成，不要开始工作；教材、参考课件、正式 PPT/PDF 和大量 QA 图片均由 Git LFS 管理。

## 必读顺序

1. `AGENTS.md` — 本项目约束。
2. `LECTURE16_MASTER_PROMPT.md.txt` — 权威工作流；严格遵循 Gate 顺序。
3. `PROJECT_STATUS.md` — 当前 Gate 和正式成果。
4. `task_plan.md`、`findings.md`、`progress.md` — 决策、证据和执行历史。
5. `qa/checkpoints/2026-09-15_github-handoff.md` — 新电脑接续检查点。
6. `qa/GATE9_ACCEPTANCE_20260915.md` — GATE 9 验收证据。
7. `planning/GATE9_INTEGRATION_PLAN.md` — 44 页正式稿的锁定来源清单。

## 当前唯一正式成果

- PPTX：`final/L16_Hydrological_Carbon_Cycles_v02.pptx`
- PDF：`final/L16_Hydrological_Carbon_Cycles_v02.pdf`
- 44 页预览：`final/previews_v02/`
- GATE 9 QA：`qa/GATE9_QA_20260915/`

`final/L16_Hydrological_Carbon_Cycles_v01.pptx` 是已否决版本，仅为保留审计历史而存在。它发生了跨稿主题颜色重映射，不能用于授课、教案或继续制作。

## 下一步边界

只有在用户明确要求继续 GATE 10 后，才可使用稳定的 v02 PPT、锁定的 Learning Objectives、Homework 和 2 × 50 分钟教学时间合同制作正式教案。教案必须使用 `EOE111 Lecture 课程教案表格.docx` 的结构，并参考 `EOE111 - Lecture 09 Earthquakes and Volcanos - 教案v2zw.docx` 的填写风格。GATE 10 完成并验收前，不得开始 GATE 11。

## 文件完整性与本机依赖

教材、Lecture 09 参考文件、会议纪要、课程安排、正式教案模板、规划文件、来源矩阵、所有生产稿、正式输出和 QA 证据均纳入仓库。只排除以下可重建或机器专属内容：

- `planning/tooling/ppt-master-py312-v6.3.1/`：本机 Python 虚拟环境；源码和 `requirements.txt` 已保留在 `planning/tooling/ppt-master-v6.3.1/`。
- `planning/tooling/artifact-build-l16/node_modules/`：指向本机 Codex 缓存的目录联接；构建脚本 `build_planning_workbooks.mjs` 已保留。
- `.codex_pdf_preview/`、`tmp/`、`__pycache__/`：可重建缓存或临时预览。

如需重建项目本地 ppt-master Python 环境：

```powershell
py -3.12 -m venv planning/tooling/ppt-master-py312-v6.3.1
planning/tooling/ppt-master-py312-v6.3.1/Scripts/python.exe -m pip install -r planning/tooling/ppt-master-v6.3.1/ppt-master/skills/ppt-master/requirements.txt
planning/tooling/ppt-master-py312-v6.3.1/Scripts/python.exe -m pip check
```

Node 脚本依赖由 Codex 桌面工作区的 bundled dependency runtime 提供；新电脑中先加载 workspace dependencies，再运行相关脚本，不要提交机器本地的 `node_modules`。

## 公开仓库说明

仓库包含课程开发所需的第三方教材与参考资料。公开可见性不代表这些材料被重新许可；使用者仍须遵守原始版权和机构规定。本仓库未附加开源许可证。
