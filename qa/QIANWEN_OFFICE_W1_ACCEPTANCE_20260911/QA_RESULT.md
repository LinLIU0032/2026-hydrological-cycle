# 千问办公 Wave 1 九页能力测试验收

Date: 2026-09-11  
Reviewer: Codex  
Task: `VALIDATE-QIANWEN-OFFICE-W1`  
Deck: `sections/PROD-W1-QIANWEN-OFFICE-VALIDATION/L16_W1_QianwenOffice_Validation_v01.pptx`

## Decision

**REVISION REQUIRED — 暂不批准加入下一阶段。**

九页 PPT 的制作与交付能力已经得到验证：PowerPoint 可正常打开，页面完整、视觉质量稳定、数据页主体正确、两张批准图件匹配、九页 Notes 均已嵌入，且未发现外链、对象动画、音频、越界或未批准媒体。

当前版本仍有三类内容合同问题。修正后只需做一次聚焦复验；无需重做九页设计。

## Independent verification

- Microsoft PowerPoint 16.0 只读打开原始 PPTX，成功独立导出九页 PDF 和九张 1920 × 1080 PNG。
- 画布为 13.3333 × 7.5 in；页面顺序为 04、05、06、10、11、12、21、22、24。
- PPTX 包含 9 张幻灯片、9 个 Notes 页面、1 个母版、1 个版式和 2 个内部媒体文件。
- W-05 SHA-256：`78CB7032A342CE135CF725B1AE52FEE3095D9433995FC76C76749235816AA93B`，与批准资产完全一致。
- C-01 SHA-256：`1E66E7026DF0AA33CBE118443DAF6C927D1FA47EF329FD14E03B7DC4767EFF05`，与批准资产完全一致。
- `pptx_delivery_check.py`：`status=passed`，`errors=[]`，`advisories=[]`。
- 无外部关系；无对象动画；无音频计时；仅有九页默认淡入页面切换。
- 独立 PDF 与提交 PDF 均为 9 页，逐页文本层字符数一致。
- 九张独立 PowerPoint 渲染均已目检：无可见溢出、重叠、裁切、变形、占位符或不可读正文。
- 候选九张独立渲染与前三位 Agent 的九张预览不存在任何 SHA-256 完全相同项；结合明显不同的构图与对象结构，未发现直接复制的证据。此项只能证明“未见复制迹象”，不能证明生产过程中的读取历史。

## Passed content checks

| Slide | Result | Evidence |
|---|---|---|
| 04 | PASS WITH NOTE REVISION | 可编辑储库—迁移图和教学信息正确；Notes 有一处术语笔误，见下方返工项。 |
| 05 | PASS WITH SOURCE REVISION | 四词框架完整、可读；新增事实的来源行不完整。 |
| 06 | PASS | 只使用 UE Fig. 17.1 数据；数值、百分比和单位内部一致。 |
| 10 | PASS | 434−398=36；107−71=36；输送从海到陆，径流从陆到海；单位正确。 |
| 11 | PASS | W-05 原始字节完整；±80、±100、±540 Cal 和 `1 Cal = 4.184 J` 均保留。 |
| 12 | REVISION REQUIRED | 三条返还路径和原生可编辑性通过；底部公式把海洋蒸发并入 Evapotranspiration，和 Slide 10 的陆地 ET 口径冲突。 |
| 21 | PASS | Part II 启动提示及 Reservoir / Flux / Residence Time 框架正确。 |
| 22 | PASS | `500 < 830 < 1500 < 38,000 Gt C` 正确；地质储库单独定性呈现；Notes 同步。 |
| 24 | PASS WITH SOURCE REVISION | 定性比较时钟且没有统一数值表；可见引用的 CN Table 3-1 未进入页脚来源行。 |

## Required revisions

### 1. Slide 04 Speaker Notes

Problem: Notes 将五个储库写成“`大圈、水圈、生物圈、冰冻圈和岩石圈`”。可见页面的正确术语是“`大气圈`”。该错误同时存在于：

- `notes/04_what_is_cycling.md`
- `notes/total.md`
- PPTX 内嵌 Slide 04 Notes

Required correction: 把“`大圈`”改为“`大气圈`”，重新嵌入 Notes。

### 2. Slide 12 Evapotranspiration 口径

Problem: 页面底部写作：

`Evapotranspiration 蒸散 = Evaporation 蒸发（海洋 + 陆地表面） + Transpiration 蒸腾（植被）`

这把海洋蒸发纳入了本讲的蒸散定义，而 Slide 10 已把 Evapotranspiration 71 明确作为陆地一侧通量。两页口径因此不一致，Speaker Notes 也重复了该合并关系。

Required correction:

1. 保留海洋蒸发、陆地表面蒸发、植被蒸腾三条返回大气路径。
2. 把公式明确改为：`陆地蒸散 Evapotranspiration = 陆地表面蒸发 Land evaporation + 植被蒸腾 Transpiration`。
3. 海洋蒸发作为另一条独立的全球回大气路径，不并入该陆地 ET 公式。
4. 同步修改 Slide 12 Speaker Notes。

### 3. Slides 05 and 24 source-line completeness

Problem:

- Slide 05 正文使用“大气水约 9 日、海洋水约 3,200 年（CN 表 3-1）”，并列出水汽反馈和岩石风化恒温器示例，但页脚只列 UE pp.1205/1647–1650 和 EP p.881。
- Slide 24 正文明确写有 `CN 表 3-1（定性引用，不合并数值）`，页脚却只列 CN Figs. 4-15/4-16。

Style Spec 禁止不完整来源标签；新增事实必须能从页面来源行或相邻明确出处追溯。

Required correction:

- Slide 05：补充 `地球系统与演变, Table 3-1, p.94 (PDF p.9)`；对水汽反馈和岩石风化恒温器，补充其批准来源，或删除这两个非必要示例。
- Slide 24：补充 `地球系统与演变, Table 3-1, p.94 (PDF p.9)`。
- 来源行必须保持投影可读，不得通过缩到微小字号解决。

## Resubmission scope

千问办公只需修改 Slides 04 Notes、05、12、24 及其关联 Notes/来源行。不得改动 Slides 06、10、11、21、22 的内容和版式。

重新提交：

- 同名九页 PPTX
- 同名九页 PDF
- 九张 previews
- 更新后的 Notes、QA、validation 与 Completion Report

复验将执行：四页聚焦内容检查 + 九页 PPTX/PDF/PowerPoint 回归检查。通过后，千问办公才加入下一 Production Wave；本次结果不回退已关闭的 GATE 6，也不会启动 GATE 7 制作。

## User disposition — 2026-09-11

The user explicitly accepted the 千问办公 capability test despite the recorded QA findings and authorized 千问办公 to join the next production stage. The candidate-validation deck remains a test artifact and will not be merged into the final Lecture 16 deck. The three recorded findings remain useful quality locks for later work but no longer block producer membership.
