# Lecture 16 项目长期约定（MEMORY）

## 权威文档
- `LECTURE16_MASTER_PROMPT.md.txt` 是本项目唯一权威工作流。
- `AGENTS.md`：生成物只能写入 `planning/`、`assets/`、`review/`、`sections/`、`final/`、`qa/`。
- 分工合同在 `planning/TASK_PROD_W*_<PRODUCER>.md`；每个 Agent 只写自己的 `sections/<TASK-ID>/` 目录，不改 Sample Deck、planning、assets、项目状态文件或其他 Agent 目录。
- Wave 分配与门位见 `planning/PRODUCTION_WAVE*_GATE*_ALLOCATION.md`：W1 已验收 04–06、10–12、21–22、24；W2（GATE 7，目标 18/35）为 Qoder 07–08、豆包 13–15、千问 16–17、WorkBuddy 25–26。
- 续作任务的连续性参考只能是**本 Agent 自己**已验收的上一波 deck；不得读另一 Producer 的 W1/W2 目录、Qianwen 验证文件或自己被否的 `backup/` deck 作为编写输入。

## PPT-MASTER 工具链（v6.3.1，本机固定路径）
- Skill：`planning/tooling/ppt-master-v6.3.1/ppt-master/skills/ppt-master`
- Python：`planning/tooling/ppt-master-py312-v6.3.1/Scripts/python.exe`
- 每次开工先跑 `scripts/attribution_guard.py`，非 0 直接报 `TOOL_ISSUE`，不得检查/修复/绕过。
- 项目初始化：`project_manager.py init <NAME> --format ppt169 --dir <父目录>`；init 会追加 `_ppt169_<YYYYMMDD>`，需要固定目录名时初始化后重命名，并在 `validation/workflow.log` 追加手工恢复说明。
- 质量门：`svg_quality_checker.py <PROJ> --canonical-authoring --stage final --json`；导出：`finalize_svg.py` → `svg_to_pptx.py`。
- 图件需要裁剪时，`image_treat.py` 无裁剪能力，只能在 SVG 侧用 `preserveAspectRatio="xMidYMid..." slice` 实现，并在 `design_spec.md §VIII` 与 `spec_lock.md images` 声明 `crop=adaptive`；不需要裁剪则声明 `crop=no-crop`，finalize 会原字节嵌入。
- 排版硬规则（质量门会报 advisory）：多行**同一段落**的正文必须写成一个 `<text>` + 直接 `<tspan>` 子元素（首行 `dy="0"`，后续行正 `dy`），写成兄弟 `<text>` 会被 `paragraph-like line run` 警告。语义独立的文本帧（如标题/英文/方向说明三行不同字号）保持分开即可。
- 中文文案用全角引号 `“ ”`（U+201C/U+201D）：既符合中文排版，也避免导出时被转义成 `&quot;`。
- **质量门查不出"绘制顺序遮挡"**：先画的文本会被后画的矩形盖掉，检查器因对象存在且未越界而放行——**必须靠 1920×1080 渲染目视发现**（W3 Slide 30 面板标题被大气条带遮没即此例）。渲染目视是承重环节，不是走过场。
- `svg_to_pptx.py` 有**瞬态**失败：工具自带 safe-delete 包装器在系统 temp 写 `state.json` 报 `EPERM`，运行会以 exit 1 中止且不出 PPTX。判据应写 `grep "\[POSTFLIGHT\] status=passed"`（我漏了方括号导致重试空转 5 次）。重试即可通过，属环境锁而非工具缺陷。

## 本机环境要点
- PowerPoint COM：`New-Object -ComObject PowerPoint.Application` 会因 `TYPE_E_CANTLOADLIBRARY` 失败；必须用 `[Type]::GetTypeFromProgID("PowerPoint.Application")` + `[Activator]::CreateInstance()` 晚绑定，之后 `SaveAs($pdf, 32)` 导出 PDF、`Slides.Item(i).Export($png, "PNG", w, h)` 导出逐页 PNG。
- PowerShell 工具吞掉子进程 stdout：结果写 `Out-File` 到临时文件再用 Read 读回。Bash 工具禁止调用 PowerShell（含 pwsh）。
- 本会话 Bash 工具 PATH 为空（`ls`/`dirname: command not found`）：命令前加 `export PATH="/usr/bin:/bin:/usr/local/bin:$PATH"` 即恢复。
- 导出后可用 `pymupdf` 抽取 PDF 文字，作为"原生文本而非轮廓"的验收证据。
- 复核 PPTX 内容不必开 PowerPoint：用 `zipfile` 读 `ppt/slides/slideN.xml` 的 `<a:t>` 序列即可核对逐行文案与排序；`ppt/notesSlides/notesSlideN.xml` 同理核备注。

## 交付与验收纪律
- 合同把输出文件名写死（如 `..._v01.pptx`）时，覆盖前先把旧版整份拷进 `backup/<日期>_pre_revision/`，再覆盖——修订不能以丢失 r0 为代价。
- 预览图统一按 1920×1080 渲染，与评审方 QA harness（`qa/GATE6_W1_QA_*/`）同规格，避免分辨率口径不一致。
- `exports/.pptx-build-<hash>/` 是工具暂存，历次构建都会留存，其中旧的 `slideN.xml` 含被否决文案；它**不是交付物**，全仓 grep 旧串出现该路径命中属假阳性。
- 数值纪律（r1 教训）：页面上任何"排序/量级"标签都必须与所列数值真正一致；源图未给出总量的储库（C-01 的沉积物、岩石圈）**不得**编入数值升序序列，应独立成组并注明"图中未给出总量"。
- "未裁切 + 无变形"的机器证据（三件套）：① `ppt/media/*` 的 md5/尺寸与 `assets/figures/approved/` 原资产**逐字节一致**；② `<p:pic>` 内是 `<a:stretch><a:fillRect/></a:stretch>`（无 `srcRect` 裁切）；③ 画面框宽高比与源图比一致（EMU/914400 换算）。注意解析 `<p:pic>` 时 `<a:off>` 与 `<a:ext>` 之间**有换行**，正则必须允许，否则会误抓到分组 `grpSp` 的变换。
- 字节数相同 ≠ 内容相同：同一任务的多次 pipeline 产物字节数可能完全一致但 md5 两两不同（postflight 前后各一次）。引用交付物时以 md5 为准，不要写"字节相同"。
- "原生 vs 栅格"证据：`zipfile` 数 `ppt/slides/slideN.xml` 里 `<p:pic>` 与 `<p:sp>` 数量即可（W2 的 25 页 = 0 图 / 62 原生形状，26 页 = 1 图 / 26 原生形状）。

## 范围纪律（血泪教训）
- **修订/返工请求里写明的"不得改动 X"是硬边界。** 即使发现 X 目录内有与交付物矛盾的内容（如 W1 `design_spec.md` 仍写旧版层级），也只能**上报**，不能"顺手修好"——GATE 7 已把此记为 Scope Compliance Incident 并要求不得再犯。
- 修订时若发现**同一缺陷的第二个实例**（评审只点名了其一），应修并**在报告里显式说明判断理由**；这与"越界改别的目录"不同，后者是纪律问题。
- 交付物文件名被合同写死时：先把 r0 整份拷进 `backup/<日期>_pre_r1/`，再覆盖同名文件。

## 视觉基准
- 视觉权威是 `review/L16_STYLE_SAMPLE_v01.pptx` 及其 `*_previews/L16_STYLE_SAMPLE_v01_ppt169_20260910/`（`design_spec.md`、`spec_lock.md`、`svg_output/`）。
- 锁定值：1280×720、Microsoft YaHei、body 15 px、白底、72 px `#0E3F8C` header、碳色 `#EA580C`/`#C2410C`、水蓝仅用于跨循环对比、扁平无阴影。
- 数值纪律：同一视觉内只用单一数据集（如 Slide 22 只用 UE Fig.12.19 / C-01），不混用 C-01 与 C-02；不新建源中不存在的统一数值时间尺度表。
