# Lecture 16 中文教材来源映射

状态：工作稿（SOURCE-CN）；未进入 Codex 的 `APPROVED` 流程。

## 范围与页码约定

- 唯一内容来源：`地球系统与演变第三第四章.pdf`，未使用网络或外部教学内容。
- PDF 为 94 页扫描版；PDF 第 1 页对应书本印刷第 86 页，因此本文件中的关系为：`Printed Page = PDF Page + 85`。
- 第 3 章《地球系统的水循环》：PDF 1-56，印刷 86-141；第 4 章《地球系统的碳循环》：PDF 57-94，印刷 142-179。
- “Planned Slide(s)”只映射到已锁定的 44 页 Blueprint，不改变页数、Learning Objectives、Homework 或 Key Takeaways。
- 分类定义：`SOURCE-DERIVED` 为教材直接支持；`SYNTHESIS` 为按教材若干页整合出的教学表达。图表状态遵循 §18 的 `CANDIDATE` → `VERIFIED` → `APPROVED` 状态链；本表中的 Seed Figure 当前为 `VERIFIED`，未升级为 `APPROVED`。

## Seed Figure 核验表

| Figure ID | 查找结果 | PDF 页 | 印刷页 | 章 / 节 | 图表号 | 原始题注（精确或近似逐字） | 科学内容 | 清晰度 | 建议裁切 / 处理 | Planned Slide(s) | 状态 | Raw asset |
|---|---|---:|---:|---|---|---|---|---|---|---|---|---|
| W-01 | FOUND | 8 | 93 | Ch.3 / 3.2.1 地球表层水的分布与变化 | 图 3-3 | “地球表层水的分布（图片来自 http://water.vsgs.gov，经修改）” | 海洋、陆地、冰、地下水、大气水、土壤水、湖泊水、河流水的相对分配；图中给出海洋 96.5%、陆地 3.5%、冰 1.8%、地下水 1.7%、大气水 0.001%、土壤水 0.001%、湖泊水 0.013%、河流 0.0002%。 | 中等偏高；黑底小标签在大教室可能偏小。 | 保留完整双联图和题注；正式使用宜简化重绘或放大标签。 | 06-07 | VERIFIED | `assets/figures/extracted_raw/W-01_Fig3-3_PDF08_print093_raw.png` |
| W-03 | FOUND | 25 | 110 | Ch.3 / 3.3.1 水循环的全球视野 | 图 3-15 | “地球表层的水循环。A. 每秒通量和水储库（据 Schmitt，1995 改）；B. 每年通量（单位为 1000 km³/a；据 Bengtsson，2010 改）” | A 比较大气、陆地、海洋储库及蒸发、降水、河流通量；B 给出海陆蒸发、降水、水汽输送、河流与地下水径流。 | 高；A、B 两栏仍需分别放大。 | 保留 A+B 和题注；上课时可拆分重绘，不能混用两栏单位。 | 09-10, 19 | VERIFIED | `assets/figures/extracted_raw/W-03_Fig3-15_PDF25_print110_raw.png` |
| W-04 | FOUND | 9 | 94 | Ch.3 / 3.2.1 地球表层水的分布与变化 | 表 3-1 | “不同水储库的滞留时间（据 USGS Water Science School 等）” | 给出南极冰盖、冰川、季节性冰雪、海洋、土壤水、浅层/深层地下水、湖泊、河流和大气水的储量与滞留时间。 | 高；原表横向适合重绘。 | 原图仅作为数据核对底稿；正式课堂优先重绘简表。 | 08, 13, 15-16 | VERIFIED | `assets/figures/extracted_raw/W-04_Table3-1_PDF09_print094_raw.png` |
| W-05 | FOUND | 27 | 112 | Ch.3 / 3.3.2 水的三相转换与气候 | 图 3-17 | “水在三相转换中的热能传输。1 Cal=4.184 J” | 熔融/冻结约 80 Cal，液态水 0-100°C 升/降温约 100 Cal，汽化/凝结约 540 Cal；正文指出气-液相变能量约为固-液相变的 7 倍。 | 高；标签清楚。 | 保留完整相变箭头和题注；若重绘应保持符号方向与数值不变。 | 11, 20 | VERIFIED | `assets/figures/extracted_raw/W-05_Fig3-17_PDF27_print112_raw.png` |
| W-06 | FOUND | 21 | 106 | Ch.3 / 3.2.2.2 地球表层与内部的水交换 | 图 3-13 | “地球内部的水循环（修改自 Ohtani，2005）。深蓝色示俯冲板片，箭头指水的输运方向，浅蓝色向地幔，黄色向表层。” | 俯冲把水带入过渡带、下地幔和核幔边界；岛弧、洋中脊等火山作用使水返回表层；标注 410、660、2900、5150 km 边界及压力。 | 高；结构完整但深部标签较密。 | 保留示意图、图例句与题注；课堂版可简化深度/压力标签。 | 17 | VERIFIED | `assets/figures/extracted_raw/W-06_Fig3-13_PDF21_print106_raw.png` |
| C-02 | FOUND | 59 | 144 | Ch.4 / 4.2 地球系统各圈层中碳的赋存 | 图 4-2 | “全球碳储库和年通量（20 世纪 90 年代数据；据 IPCC，2007 改）。黑色表示工业化前的储量与通量，红色表示人类活动引起的储量与通量变化。” | 大气、植被和土壤、化石燃料、表层海洋、中层与深层海洋、海洋生物、表层沉积之间的储量与年通量；储量单位 Gt，通量单位 Gt/a。 | 中等；数字多、红黑编码和细箭头在投影中较拥挤。 | 保留原图和题注作核对；主讲页宜简化重绘并分层强调，不要求背所有数字。 | 22-23 | VERIFIED | `assets/figures/extracted_raw/C-02_Fig4-2_PDF59_print144_raw.png` |
| C-03 | FOUND | 68 | 153 | Ch.4 / 4.3.2 表层海的碳汇与碳源 | 图 4-8 | “全球海-气 CO₂ 通量分布图。正值为海水放出 CO₂，负值为海水吸收 CO₂（据 Takahashi et al.，2009 改）” | 全球海气 CO₂ 净通量空间格局；色标约 -108 至 +108 g/(m²·a)，正负号分别代表海洋源和汇。 | 高；地图清晰，但色标与正负号必须保留。 | 完整保留地图、色标、正负号说明与题注；不得只裁地图。 | 26 | VERIFIED | `assets/figures/extracted_raw/C-03_Fig4-8_PDF68_print153_raw.png` |
| C-04 | FOUND | 68 | 153 | Ch.4 / 4.3.2 表层海的碳汇与碳源 | 图 4-9 | “海洋吸收大气 CO₂ 的生物泵和物理泵” | 生物泵/软体泵、碳酸盐泵和物理泵；颗粒碳、溶解碳、深层环流、上升流与沉积连接表层和深海。 | 中等偏高；小标签较密。 | 保留整个蓝色示意图和题注；课堂版建议双语重绘并显式区分 biological/physical/carbonate pump。 | 27-28 | VERIFIED | `assets/figures/extracted_raw/C-04_Fig4-9_PDF68_print153_raw.png` |
| C-05 | FOUND | 80 | 165 | Ch.4 / 4.5.1 地质碳储库 | 图 4-16 | “地质和表层碳储库的碳循环（据 Des Marais，2001 改）。横坐标为不同储库的碳同位素范围，纵坐标为不同循环的时间尺度，箭头示过程，数字为相应过程的碳通量。” | 新鲜/沉积有机物、海气 CO₂、海水 HCO₃⁻、碳酸盐、大理石与地幔碳之间的通量；同时展示表层、沉积物、变质和地幔循环的不同时间尺度。 | 中等；概念价值高，但小数字与 δ¹³C 横轴较密。 | 保留完整图与题注；若用于主讲，应弱化同位素轴、突出路径和时间尺度，且不得改动通量。 | 29-31, 38 | VERIFIED | `assets/figures/extracted_raw/C-05_Fig4-16_PDF80_print165_raw.png` |
| C-06 | FOUND | 81 | 166 | Ch.4 / 4.5.2 早期地球的碳储库演变 | 图 4-17 | “冥古宙和显生宙地幔碳循环的比较（据 Dasgupta，2013 改）” | 早期地球富 CO₂/CH₄ 大气、岩浆海吸碳与排碳，相对比成熟地球中俯冲、深部储碳和火山脱气受板块构造调节。 | 高；左右对比直观。 | 保留左右完整比较和题注；作为慢碳循环/深部循环备选图，不扩展早期大气专题。 | 30-31 | VERIFIED | `assets/figures/extracted_raw/C-06_Fig4-17_PDF81_print166_raw.png` |

所有 10 个 Seed ID 均在指定原 PDF 中找到；没有 `FIGURE_GAP`。状态尚未升级为 `APPROVED` 或 `USED`。

## MUST TEACH

| Topic | Subtopic | Planned Slide(s) | Chapter | Section heading | PDF page | Printed page | Figure / Table | Exact / close-caption wording | Teaching use | Quantitative information | Status |
|---|---|---|---|---|---:|---:|---|---|---|---|---|
| Earth-system framing | 水与碳是圈层间迁移的物质主线 | 04-05, 18, 21, 34 | Ch.3 + Ch.4 | 3.1 水的特性与地球表面过程；4.1 引言：温室气体与碳 | 3, 57-58 | 88, 142-143 | — | — | 用同一套 reservoir / flux / timescale 语言开场，并把水循环与碳循环连接到大气、海洋、岩石和生命。 | Ch.3 明确将水分子和碳原子称为表层系统最重要的两种物质；Ch.4 指出 C 是生命圈主干元素。 | SOURCE-DERIVED |
| Water reservoirs | 全球水的非均匀分布与可利用淡水比例 | 06-07 | Ch.3 | 3.2.1 地球表层水的分布与变化 | 8 | 93 | 图 3-3 | 地球表层水的分布 | 建立“海洋占绝对多数、淡水少、易利用淡水更少”的主信息。 | 海洋 96.5%，陆地 3.5%；冰 1.8%，地下水 1.7%，大气水和土壤水各 0.001%，湖泊水 0.013%，河流 0.0002%。正文用近似值“约 97% 在海里”。 | SOURCE-DERIVED |
| Residence time | 储量不等于更新速度 | 05, 08, 24 | Ch.3 | 3.2.1 地球表层水的分布与变化 | 8-9 | 93-94 | 表 3-1 | 不同水储库的滞留时间（据 USGS Water Science School 等） | 定义 residence time，并用同一单位比较快速与缓慢储库。 | 大气 9 日；河流、季节性冰雪 2-6 月；土壤水 1-2 月；浅层地下水 100-200 年；深层地下水 10,000 年；海洋 3,200 年；南极冰盖 20,000 年。 | SOURCE-DERIVED |
| Global hydrologic cycle | 储库、蒸发、降水、水汽输送和径流 | 09-10, 19 | Ch.3 | 3.3.1 水循环的全球视野 | 24-26 | 109-111 | 图 3-15 | 地球表层的水循环 | 作为水循环主图候选；A 训练识别储库/秒通量，B 训练读年通量与海陆收支。 | A：大气 16、陆地 59,000、海洋 1,400,000（储量单位 10³ km³）；陆地 E 2.2、P 3.5，海洋 E 13.5、P 12.2，河流 1.3（通量单位 10⁶ m³/s）。B：海洋 E 430、P 390，向陆水汽输送 38，陆地 P 109、E 71，径流约 35（单位 1000 km³/a）。 | SOURCE-DERIVED |
| Phase change and energy | 水的三相转换与潜热 | 11, 20 | Ch.3 | 3.3.2 水的三相转换与气候；3.3.2.1 气态与液态的转换 | 27 | 112 | 图 3-17 | 水在三相转换中的热能传输 | 说明水循环同时搬运能量；区分熔融潜热与汽化潜热。 | 熔融/冻结约 ±80 Cal；0-100°C 加热/降温约 ±100 Cal；汽化/凝结约 ±540 Cal；1 Cal=4.184 J；正文称气-液相变能量约为固-液相变的 7 倍。 | SOURCE-DERIVED |
| Atmospheric water | 小储库、快速交换与横向水汽输送 | 13 | Ch.3 | 3.2.1.1 气态水（1 水汽含量；2 大气河流） | 9-11 | 94-96 | 表 3-1；图 3-4；图 3-5 | 表 3-1；“大气中水汽总量分布图（1988-1992 年）”；“大气河流实例” | 解释大气为何虽储量小，却是海陆交换和快速水循环的关键通道。 | 大气水储量 12,900 km³、平均滞留 9 日；若全部降下约形成 2.5 cm 水层；约一半水汽在 1500 m 以下，5000 m 以上仅 5%-6%，10000 m 以上不足 1%。 | SOURCE-DERIVED |
| Runoff and infiltration | 降水后的地表径流、入渗、地下径流与海洋排泄 | 14-15 | Ch.3 | 3.2.1.2 液态水（2 地下水）；3.3.1 水循环的全球视野 | 13-14, 25 | 98-99, 110 | 图 3-7；图 3-15B | “海底的地下水泉”；“地球表层的水循环” | 用最少过程解释 recharge-storage-discharge，并在全球收支图中定位 runoff / infiltration。 | 教材称地下水储量约为湖水的数百倍、河水的数万倍；海底地下水排放估计 2×10¹³-4×10¹³ m³，约为河流入海水量的 80%-160%（教材援引研究值，课堂宜只作数量级提示）。 | SOURCE-DERIVED |
| Cryosphere | 冰盖、冰川、海冰作为移动和可交换的水库 | 16 | Ch.3 | 3.2.1.3 固态水（极地冰盖、冰下水系、冰架与海冰） | 15-19 | 100-104 | 图 3-9 至图 3-11；表 3-2 | “现代南北两极的冰冻圈”；“南极冰盖及其冰下河流和地质基底”；“西南极冰架示意图” | 区分陆地冰、冰架和海冰；连接水量储存、海平面和气候。 | 表 3-2 给出南极冰盖占陆地 8.3%、海平面当量 58.3 m；格陵兰冰盖 1.2%、7.36 m；冰川 0.5%、0.41 m；教材称海冰约占地球表面 7%、海洋表面 12%。 | SOURCE-DERIVED |
| Deep water cycle | 表层-地幔间的俯冲输入与火山回返 | 17 | Ch.3 | 3.2.2 地球内部的水与板块运动；3.2.2.2 地球表层与内部的水交换 | 19-22 | 104-107 | 图 3-12；图 3-13 | “地幔的含水熔融和含水量的推测”；“地球内部的水循环” | 纠正“水循环只在表层”的印象，建立 subduction-mantle-volcanism 路径。 | 图 3-13 标注 410、660、2900、5150 km 边界；正文估计表层水约 1.4×10²⁰ t，海沟俯冲水通量约 24×10¹⁶ t/Ma，进入地幔深处约 9×10¹⁶ t/Ma，最短深部循环约 1.6 Ga。 | SOURCE-DERIVED |
| Water connects geospheres | 水搬运物质、能量与溶质并连接圈层 | 18, 20 | Ch.3 | 3.2.2.3 板块运动与水；3.3 地球表层系统的水循环；3.3.2 水的三相转换与气候 | 22-27 | 107-112 | 图 3-13；图 3-15；图 3-17 | 见对应题注 | 将俯冲/火山、海陆循环、相变能量和生命过程整合成“水连接四圈层”的收束页。 | 本表达把教材分散的储库、通量、潜热与深部交换合并，不引入教材外数值。 | SYNTHESIS |
| Carbon reservoirs | 大气、陆地生物圈、土壤、海洋、沉积物和岩石圈 | 22-24 | Ch.4 | 4.2 地球系统各圈层中碳的赋存；4.2.1-4.2.4 | 58-64 | 143-149 | 图 4-2；图 4-4；表 4-2 | “全球碳储库和年通量”；“全球碳循环”；“生物圈活生物量碳储库” | 建立碳储库层级，并提醒“碳循环不等于只看大气 CO₂”。 | 图 4-2：大气 597+165 Gt，植被+土壤 2300+101-140 Gt，表层海洋 900+18 Gt，中/深层海洋 37100+100 Gt；表 4-2：陆地植物 560 Gt、海洋生物 1-2 Gt。 | SOURCE-DERIVED |
| Fast carbon cycle | 光合作用、呼吸、分解与陆地生物圈 | 25 | Ch.4 | 4.2.2 陆地生物圈；4.3.4 陆地的碳汇与碳源；4.3.5 生命过程与水、碳循环 | 61-62, 71-74 | 146-147, 156-159 | 表 4-2；图 4-11；图 4-12 | “生物圈活生物量碳储库”；“世界三大热带雨林分布图”；“自然产生的气溶胶” | 用植被-土壤-大气之间的光合、呼吸和分解通量讲快速碳循环，并接到蒸腾。 | 表 4-2：陆地植物储量约 560 Gt、年生产量约 56.4 Gt/a；海洋生物仅 1-2 Gt，但年生产量约 48.6 Gt/a。 | SOURCE-DERIVED |
| Air-sea CO₂ exchange | 海洋既可吸收也可释放 CO₂ | 26 | Ch.4 | 4.3.2 表层海的碳汇与碳源 | 67-69 | 152-154 | 图 4-8 | 全球海-气 CO₂ 通量分布图 | 用正负通量地图打破“海洋永远是碳汇”的误解，并强调温度和生物过程造成空间差异。 | 色标约 -108 至 +108 g/(m²·a)；正值为海水放出 CO₂，负值为海水吸收 CO₂。 | SOURCE-DERIVED |
| Ocean carbon pumps | 生物泵、物理泵与碳酸盐泵 | 27-28 | Ch.4 | 4.3.2 表层海的碳汇与碳源；4.3.3 深层海的碳汇与碳源 | 67-71 | 152-156 | 图 4-9 | 海洋吸收大气 CO₂ 的生物泵和物理泵 | 区分颗粒/有机碳下沉、溶解态碳随环流下沉、碳酸盐形成与沉积。 | 教材指出深层水无机碳浓度比表层水约高 15%，深海碳循环时间尺度为千年至数万年；图 4-9 为定性路径图。 | SOURCE-DERIVED |
| Carbonate connection | 溶解碳-生物成壳-碳酸盐-沉积/岩石 | 28 | Ch.4 | 4.3.2-4.3.3 表层海与深层海的碳汇与碳源 | 68-71 | 153-156 | 图 4-9；图 4-10 | “海洋吸收大气 CO₂ 的生物泵和物理泵”；“深海 CO₂ 湖的喷口” | 显示海洋、生命、沉积物与岩石圈的连续路径，避免进入高级碳酸盐平衡计算。 | 教材给出反应 `Ca²⁺ + 2HCO₃⁻ → CaCO₃ + H₂O + CO₂↑` 说明碳酸盐泵可能释放 CO₂；课堂只用于定性方向。 | SOURCE-DERIVED |
| Water-carbon coupling | 含 CO₂ 的水参与硅酸盐/碳酸盐风化并把碳送入海洋 | 29, 34, 38 | Ch.4 | 4.5.1 地质碳储库 | 79-80 | 164-165 | 图 4-16 | 地质和表层碳储库的碳循环 | 将水循环明确接入 weathering-carbon transfer，并作为长期负反馈的过程底图。 | 教材列出硅酸盐风化简式 `CaSiO₃ + CO₂ → CaCO₃ + SiO₂`；图 4-16 的风化通量为 45×10¹² mol/a（按原图单位）。 | SOURCE-DERIVED |
| Slow geological carbon cycle | 风化、沉积/埋藏、变质、俯冲和火山脱气 | 30 | Ch.4 | 4.5.1 地质碳储库；4.5.2 早期地球的碳储库演变 | 79-81 | 164-166 | 图 4-16；图 4-17 | 见 Seed Figure 核验表 | 构建慢碳循环主路径，并与快速生物循环分开。 | 图 4-16 以 10¹² mol/a 表示通量：生物合成 9000、分解 8990、风化 45、沉积有机物约 9、变质还原碳约 2、排气约 2、俯冲约 0.4；图中也标出多级时间尺度。 | SOURCE-DERIVED |
| Multiple carbon timescales | 生物、表层海、深海、沉积/变质和地幔的不同“时钟” | 24, 31, 40 | Ch.4 | 4.4.3 碳循环的时间尺度；4.5.1 地质碳储库 | 78-80 | 163-165 | 图 4-15；图 4-16 | “不同时间尺度的碳循环”；“地质和表层碳储库的碳循环” | 让学生比较系统受到扰动后的快慢响应，不把碳循环看成一条统一速度的箭头。 | 图 4-15：大气-生物圈-表层海约 10¹-10² 年，深层海约 10²-10³ 年，沉积物约 10³-10⁵ 年，地质储库 >10⁵ 年；图 4-16 进一步给出表层库 0-10³、沉积物库 10³-10⁸、变质库 10⁶-10⁹、地幔库 10⁷-10⁹ 年。 | SOURCE-DERIVED |
| Carbon integrates life and rocks | 碳把气候、生命、海洋、沉积物和岩石连接起来 | 21, 33-34 | Ch.4 | 4.1 引言；4.3.5 生命过程与水、碳循环；4.5.1 地质碳储库 | 57-58, 73-74, 79-80 | 142-143, 158-159, 164-165 | 图 4-12；图 4-16 | 见对应题注 | 作为 Carbon Part 的开场和总结，并转入两个循环的耦合图。 | 教材直接说明碳循环是氧化-还原过程，生命用光合作用把无机碳转成有机碳；地质作用把碳在岩石圈与表层间交换。 | SYNTHESIS |
| Earth-system challenge evidence base | 水-碳路径、反馈方向与时间尺度综合判断 | 41 | Ch.3 + Ch.4 | 3.3.2.3 三相转换的气候意义；4.4.3 碳循环的时间尺度；4.5.1 地质碳储库 | 39-40, 78-80 | 124-125, 163-165 | 图 3-29；图 3-30；图 4-15；图 4-16 | 见对应题注 | 供综合课堂题使用：从温度增加出发，画水汽/冰雪/海洋/风化等多条路径并比较速度；反馈定义和最终判定仍需与指定 UE/HB 来源一致。 | 只采用本教材支持的方向和时间尺度；不把本教材未明确命名的反馈机制自行升级为唯一结论。 | SYNTHESIS |

## SHOULD TEACH

| Topic | Subtopic | Planned Slide(s) | Chapter | Section heading | PDF page | Printed page | Figure / Table | Exact / close-caption wording | Teaching use | Quantitative information | Status |
|---|---|---|---|---|---:|---:|---|---|---|---|---|
| Water molecular properties | 极性、氢键、高比热、密度反常 | 11 | Ch.3 | 3.1 水的特性与地球表面过程 | 4-5 | 89-90 | 图 3-1；图 3-2 | “地球上水的三相共点”；“水分子的极性” | 用最少物性解释三相共存、强溶解能力、蒸发/凝结搬运热量和冰浮于水。 | 地球表面约 15°C 满足水三相共存条件；教材强调冰的密度小于液态水。 | SOURCE-DERIVED |
| Evapotranspiration | 植物把水返还大气并耦合碳吸收 | 12, 18, 34 | Ch.4 | 4.3.5 生命过程与水、碳循环 | 73-74 | 158-159 | 图 4-12 | 自然产生的气溶胶 | 连接 land-vegetation-atmosphere；强调蒸腾与光合作用不是两个互不相干的过程。 | 教材估计全球大陆蒸散把 80%-90% 的水返回大气；一棵大树日蒸腾约 200-1000 L，年吸水约 150 t；全球陆地吸收太阳能约一半用于蒸腾。 | SOURCE-DERIVED |
| Water vapor and climate | 温度升高、饱和水汽增多与潜热输送 | 20, 36 | Ch.3 | 3.2.1.1 气态水；3.3.2.1 气态与液态的转换 | 10, 27-28 | 95, 112-113 | 图 3-17；图 3-18 | “水在三相转换中的热能传输”；“热量的纬向输送” | 为 water-vapor feedback 提供物理基础，但“正反馈”定义和最终链条须与指定 UE 来源校准。 | 教材称在当前条件下表面温度每增加 1°C，水汽理论上可增加约 7%；并引用水汽贡献约 75% 温室效应的估计。 | SOURCE-DERIVED |
| Ice-albedo mechanism | 冰雪覆盖改变反照率和能量收支 | 16, 37 | Ch.3 | 3.3.2.3 三相转换的气候意义 | 39-40 | 124-125 | 图 3-29；图 3-30 | “不同下垫面的反照率差别”；“气候系统两大不稳定区的水循环” | 支撑冰-反照率正反馈的方向链条；用反照率差而非冰期史细节。 | 教材给出海水反照率不足 10%、森林约 10% 或更低、冰雪可达约 80%；低纬与高纬水循环分别表现为气-液和固-液转换的不稳定。 | SOURCE-DERIVED |
| Ocean pump efficiency | 温度、营养盐、环流对深海储碳的控制 | 27, 40 | Ch.4 | 4.4.1 海洋碳泵 | 75-77 | 160-162 | 图 4-14 | “不同温度在大洋生物泵中的不同作用” | 用一个快慢比较说明物理泵和生物泵对气候扰动的响应不同。 | 冰期-间冰期大气 CO₂ 变化约 90 ppm；教材称南大洋/北太平洋等高纬区是深海水形成和碳泵效率变化的关键区。 | SOURCE-DERIVED |
| Geological reservoir magnitude | 表层库与地质库的量级差异 | 22, 31 | Ch.4 | 4.5.1 地质碳储库 | 79-80 | 164-165 | 表 4-5 | 表层和地质储库中的氧化和还原碳（据 Des Marais，2001 改） | 说明最大储库不等于最快响应，并为慢循环建立数量级直觉。 | 单位 10¹⁸ mol：大气 0.06，生物圈 0.13，水圈 3.3，远洋沉积 1360，大陆边缘沉积 >1370，沉积岩 4250，地幔 27000。 | SOURCE-DERIVED |
| Volcanic degassing | 深部碳通过不同构造环境返回大气 | 30, 38 | Ch.4 | 4.5.2 早期地球的碳储库演变 | 81 | 166 | 图 4-17 | 冥古宙和显生宙地幔碳循环的比较 | 在慢碳循环中区分俯冲输入和火山输出，并提示构造环境控制强度。 | 教材列出的年排碳：大陆边缘俯冲带火山弧约 1.5 亿 t；洋中脊约 0.12-0.6 亿 t；板块内部火山约 0.01-0.3 亿 t。 | SOURCE-DERIVED |
| Teaching transfer | 用相同框架比较水与碳 | 24, 31, 34 | Ch.3 + Ch.4 | 3.2.1；3.3.1；4.2；4.4.3 | 8-9, 24-26, 58-64, 78 | 93-94, 109-111, 143-149, 163 | 表 3-1；图 3-15；图 4-2；图 4-15 | 见对应题注 | 把 reservoir-flux-residence time 从水迁移到碳，明确同一语言对应完全不同的尺度范围。 | 所有数值仍按各图原单位呈现，不跨图直接拼接为新预算。 | SYNTHESIS |

## OPTIONAL

| Topic | Subtopic | Planned Slide(s) | Chapter | Section heading | PDF page | Printed page | Figure / Table | Exact / close-caption wording | Teaching use | Quantitative information | Status |
|---|---|---|---|---|---:|---:|---|---|---|---|---|
| Atmospheric rivers | 快速水汽输送的具体例子 | 13 / notes | Ch.3 | 3.2.1.1 气态水（2 大气河流） | 10-11 | 95-96 | 图 3-5 | 大气河流实例 | 可作为水汽输送案例，不展开极端天气专题。 | 教材称单条大气河流可长数千 km、宽数百 km，水汽输运量约 1.6×10⁸ kg/s。 | SOURCE-DERIVED |
| Monsoon and warm pool | 海气耦合与区域水循环 | notes / backup | Ch.3 | 3.3.2.1 气态与液态的转换（2 季风；3 暖池） | 30-32 | 115-117 | 图 3-20 至图 3-23 | 季风降雨分布；西太平洋暖池示意图 | 只在需要区域案例时使用；不进入正式主线。 | 教材称 1979-2001 年 23 年平均降雨分布用于季风讨论；无须记忆区域数值。 | SOURCE-DERIVED |
| Deep-Earth water inventory | 地幔含水量与超长时间尺度估计 | 17 / notes | Ch.3 | 3.2.2.1-3.2.2.2 | 19-22 | 104-107 | 图 3-12；图 3-13 | 见对应题注 | 作为“深部水循环仍有大不确定性”的教师注释。 | 教材援引过渡带含水 1%-3%、下地幔可相当 2.5-3 个大洋、全地幔可能 5-6 个大洋；相应循环估计 8-10 Ga，均明确为估计。 | SOURCE-DERIVED |
| Ice ages / Snowball Earth | 固态水储库的地质历史 | 16, 37 / backup | Ch.3 | 3.3.2.2 固态与液态的转换 | 34-38 | 119-123 | 图 3-24 至图 3-28 | 地质历史上的大冰期；新元古代冰室期发育历史；雪地球假说 | 只作为冰冻圈影响的地质时间案例。 | 教材提到现代两极冰量约为末次盛冰期的 2/7；新元古代“雪地球”约 7.5-6 亿年前。 | SOURCE-DERIVED |
| Stable isotopes | 水循环与碳循环示踪 | notes / hidden | Ch.3 + Ch.4 | 3.4 追踪水循环的地质标志；4.2.5 碳储库与稳定同位素 | 40-45, 64-66 | 125-130, 149-151 | 图 3-31 至图 3-36；图 4-7 | 水/氧同位素分馏图；不同碳储库 δ¹³C 数值范围 | 可用于教师 notes 解释“如何知道”，不进行同位素推导。 | 现代海水 δ¹⁸O 约 0‰；图 4-7 给出不同碳储库 δ¹³C 的宽范围。 | SOURCE-DERIVED |
| Methane hydrates and deep CO₂ lakes | 深海特殊碳储存形态 | notes / backup | Ch.4 | 4.3.3 深层海的碳汇与碳源 | 69-71 | 154-156 | 附注 2；图 4-10 | 笼状构造水合物；深海 CO₂ 湖的喷口 | 用于说明深海存在特殊碳相态，不纳入主线。 | 教材提及水深约 1400 m 的海底 CO₂ 喷口及水深 1600 m、约 103°C 的环境；不宜作为一般海洋碳循环代表。 | SOURCE-DERIVED |
| Early-vs-modern deep carbon | 冥古宙与成熟地球深部碳循环对比 | 30-31 / backup | Ch.4 | 4.5.2 早期地球的碳储库演变 | 81 | 166 | 图 4-17 | 冥古宙和显生宙地幔碳循环的比较 | C-06 作为备选图，帮助理解板块构造出现后深部储碳路径改变。 | 定性比较；不提供新的预算总量。 | SOURCE-DERIVED |
| Anthropogenic carbon budget history | “失踪的碳”、Keeling 曲线与 200 年预算 | 21, 23 / notes | Ch.4 | 4.2.1 大气圈；4.3.1 寻找失踪的碳 | 59-60, 66-67 | 144-145, 151-152 | 图 4-3；表 4-3 | 1958 年以来 Mauna Loa 站 CO₂ 记录；200 年间（1800-1994 年）的全球碳平衡 | 可作为 why-carbon 的现实入口，但不把本讲变成人类排放政策史。 | 表 4-3：矿物燃料及石灰燃烧 244 Gt、土地利用 174 Gt、合计 418 Gt；大气增加 165 Gt、海洋吸收 118 Gt、剩余陆地吸收 135 Gt。 | SOURCE-DERIVED |

## OUT OF SCOPE

| Topic | Subtopic | Planned Slide(s) | Chapter | Section heading | PDF page | Printed page | Figure / Table | Exact / close-caption wording | Teaching use | Quantitative information | Status |
|---|---|---|---|---|---:|---:|---|---|---|---|---|
| Extraterrestrial water | 火星、木卫二、彗星水 | — | Ch.3 | 3.1 水的特性与地球表面过程；附注 1-2 | 3-7 | 88-92 | 图 3-2；附注图 | 火星表面的环形坑和河谷；木卫二的冰下海洋 | 与 Lecture 16 锁定目标无关，不进入正式课堂主体。 | 教材涉及水层厚度、彗星数量等估计；全部排除。 | SOURCE-DERIVED |
| Groundwater engineering | 含水层工程、水化学和完整 SGD 专题 | — | Ch.3 | 3.2.1.2 液态水（2 地下水） | 13-14 | 98-99 | 图 3-7 | 海底的地下水泉 | Blueprint 明确只讲 recharge-storage-discharge。 | 不使用工程或区域预算细节。 | SOURCE-DERIVED |
| Full monsoon / warm-pool course | 季风系统、Walker 环流、ENSO 与区域灾害 | — | Ch.3 | 3.3.2.1 气态与液态的转换 | 29-33 | 114-118 | 图 3-20 至图 3-23 | 见 OPTIONAL 表 | Blueprint 明确不扩展完整 ENSO；这些页只保留为备查。 | 不进入正式主讲数值。 | SOURCE-DERIVED |
| Subglacial ecosystems | 冰下湖微生物与海冰生态 | — | Ch.3 | 3.2.1.3 固态水 | 17-19, 37-38 | 102-104, 122-123 | 图 3-26；图 3-28 | 冰山支持的生物群示意图；海冰和海冰生物分布范围 | 与储库-通量-时间尺度主线不符。 | 不进入正式主讲。 | SOURCE-DERIVED |
| Graduate isotope derivations | δ¹⁸O、D/H、δ¹³C 分馏与代理指标反演 | — | Ch.3 + Ch.4 | 3.4；4.2.5；4.5.3 | 40-45, 64-66, 83-88 | 125-130, 149-151, 168-173 | 图 3-31 至图 3-36；图 4-18 至图 4-21 | 见对应题注 | Master Prompt 明确排除研究生级同位素推导。 | 不进行公式推导或代理定量反演。 | SOURCE-DERIVED |
| Advanced carbonate chemistry | 海水 pH、溶解无机碳形态、CCD 与海洋酸化计算 | — | Ch.4 | 4.4.1 海洋碳泵；4.5.3.2 海洋碳酸盐沉积 | 75-77, 86-88 | 160-162, 171-173 | 图 4-21；附注 4 | 显生宙大洋碳酸盐沉积的变化；海底雪线 | 正式课只保留 carbonates 的定性路径，不做平衡计算或完整海洋酸化专题。 | CCD 约 4 km 等细节不进入主讲。 | SOURCE-DERIVED |
| Full anthropogenic policy/history | 排放政策、全球变暖史和治理争论 | — | Ch.4 | 4.2.1；4.3.1 | 59-67 | 144-152 | 图 4-3；表 4-3 | 见 OPTIONAL 表 | Blueprint 明确避免水资源/碳排放政策扩展。 | 只可用一两个数值作系统扰动背景，不讨论政策。 | SOURCE-DERIVED |
| Full Phanerozoic reconstruction | 海洋 δ¹³C、pCO₂、CCD 与生物演化长序列 | — | Ch.4 | 4.5.3 显生宙的碳储库演变 | 83-88 | 168-173 | 图 4-18 至图 4-21 | 无机碳和有机碳储值的地质演变；显生宙海水 δ¹³C 和大气 CO₂ 的变化 | 超出 100 分钟本科框架与锁定 Blueprint。 | 不进入正式主讲。 | SOURCE-DERIVED |

## 44-slide Blueprint 覆盖核对

下表只标明中文教材能提供的证据，不改写 Blueprint。`无直接 CN 证据` 表示该页应由其他已指定教材或课程规范负责，不构成修改页面或搜索外部来源的授权。

| Slide | Locked topic | 中文教材证据 / 处理 |
|---:|---|---|
| 01 | Lecture 16 title | 无需 CN 科学证据；保留锁定的 UE primary reference。 |
| 02 | Learning Objectives | Ch.3-4 支持 LO1-LO3 和 LO5 的内容证据；不改写锁定 LO。 |
| 03 | Table of Contents | Ch.3 水、Ch.4 碳及二者耦合支持三段结构；不新增分区。 |
| 04 | What Is Actually Cycling? | Ch.3 p88（PDF 3）和 Ch.4 p142-143（PDF 57-58）。 |
| 05 | Four Ideas | reservoir/flux：图 3-15、图 4-2；residence time：表 3-1、图 4-15；feedback 定义无直接 CN 证据。 |
| 06 | Where Is Earth's Water? | 图 3-3，p93 / PDF 8。 |
| 07 | Most Water Is Not Accessible Freshwater | 图 3-3 和正文，p93 / PDF 8。 |
| 08 | Storage ≠ Turnover | 表 3-1，p94 / PDF 9。 |
| 09 | Global Hydrologic Cycle | 图 3-15，p110 / PDF 25。 |
| 10 | Ocean-Land Water Budget | 图 3-15 A-B，p110 / PDF 25。 |
| 11 | Phase Changes of Water | 图 3-17，p112 / PDF 27。 |
| 12 | Evaporation & Evapotranspiration | Ch.4 4.3.5，p158-159 / PDF 73-74；图 3-15 也给出海陆蒸发通量。 |
| 13 | Moisture Transport, Condensation & Precipitation | Ch.3 3.2.1.1，p94-96 / PDF 9-11；表 3-1、图 3-4、图 3-5。 |
| 14 | Runoff & Infiltration | 图 3-15B 与 Ch.3 地下水段，p98-99、110 / PDF 13-14、25。 |
| 15 | Groundwater | Ch.3 3.2.1.2（2 地下水），p98-99 / PDF 13-14；只取 recharge-storage-discharge。 |
| 16 | Cryosphere | Ch.3 3.2.1.3，p100-104 / PDF 15-19；图 3-9 至图 3-11、表 3-2。 |
| 17 | Deep Water Cycle | 图 3-13，p106 / PDF 21。 |
| 18 | Water Connects the Earth System | 综合图 3-13、3-15、3-17，状态 SYNTHESIS。 |
| 19 | Concept Check 1 | 图 3-15 可直接用于识别 reservoir、flux、快慢路径和能量入口。 |
| 20 | Water Moves Matter and Energy | Ch.3 3.2.2-3.3.2 综合，p104-125 / PDF 19-40，状态 SYNTHESIS。 |
| 21 | Why Carbon? | Ch.4 4.1，p142-143 / PDF 57-58。 |
| 22 | Carbon Reservoirs | 图 4-2、图 4-4、表 4-2，p144-148 / PDF 59-63。 |
| 23 | Global Carbon Cycle | 图 4-2 是 CN 候选；Blueprint 的优先主图仍由 UE C-01 决定。 |
| 24 | Same Framework, Different Timescales | 表 3-1 与图 4-15/4-16 的跨章比较，状态 SYNTHESIS。 |
| 25 | Fast Carbon Cycle: Life on Land | Ch.4 4.2.2、4.3.4、4.3.5，p146-147、156-159 / PDF 61-62、71-74。 |
| 26 | Air-Sea Carbon Exchange | 图 4-8，p153 / PDF 68。 |
| 27 | Ocean Carbon Pumps | 图 4-9 与 4.4.1，p153、160-162 / PDF 68、75-77。 |
| 28 | Carbonates | 图 4-9 及 4.3.2-4.3.3，p153-156 / PDF 68-71。 |
| 29 | Weathering: Where Water Meets Carbon | 4.5.1 与图 4-16，p164-165 / PDF 79-80。 |
| 30 | Slow Geological Carbon Cycle | 图 4-16、图 4-17，p165-166 / PDF 80-81。 |
| 31 | Multiple Carbon Timescales | 图 4-15、图 4-16，p163、165 / PDF 78、80。 |
| 32 | Concept Check 2 | 图 4-2、图 4-9 或图 4-16 可提供可判别的 carbon pathway。 |
| 33 | Carbon Links Life to Rocks | 4.3.5 + 4.5.1，p158-159、164-165 / PDF 73-74、79-80，状态 SYNTHESIS。 |
| 34 | Coupling Water and Carbon Cycles | Ch.3 深/浅水循环 + Ch.4 风化/海洋泵/生命过程，状态 SYNTHESIS；不直接拼接原图数值。 |
| 35 | What Is Feedback? | 无直接、规范化的正/负反馈定义；须使用指定 UE/HB 来源。 |
| 36 | Water-Vapor Feedback | Ch.3 p112-113 / PDF 27-28 支持 +7%/°C 与潜热物理背景；反馈定义/完整链条须与 UE 校准。 |
| 37 | Ice-Albedo Feedback | Ch.3 p124-125 / PDF 39-40 支持反照率差与冰雪变化方向。 |
| 38 | Weathering Thermostat | Ch.4 4.5.1、图 4-16 支持 weathering removes CO₂ 的路径和长时间尺度；完整 thermostat 表述应与 HB 核验。 |
| 39 | Biosphere Feedback | Ch.4 4.2.2、4.3.4-4.3.5 提供植被-碳-水过程背景；指定 UE 仍是优先反馈来源。 |
| 40 | Feedbacks Have Different Clocks | 图 4-15/4-16 和 Ch.3 p124-125 提供快慢尺度依据；反馈分类为跨教材 SYNTHESIS。 |
| 41 | Earth-System Challenge | 中文教材支持水汽、冰雪、海洋碳泵、风化等响应路径和相对时间尺度。 |
| 42 | Homework Questions | Ch.3 思考题 p139（PDF 54）与 Ch.4 思考题 p178-179（PDF 93-94）可作命题证据；不替换锁定 Homework 流程。 |
| 43 | Key Terms | 中文术语取自 Ch.3-4；英文标准术语仍按 UE 优先。 |
| 44 | Key Takeaways | 可从 MUST TEACH 条目归纳；不得加入未在正文讲授的同位素、政策或高级碳酸盐内容。 |

## SOURCE_CONFLICT

```text
SOURCE_CONFLICT

Topic: 地球表层水的总量与储库百分比
Source A: Ch.3 3.2.1 正文，PDF 8 / 印刷 93；“地球表层总共有水 13.86 亿 km³，其中大约 97% 在海里。”
Source B: Ch.3 图 3-3，PDF 8 / 印刷 93；海洋 96.5%、陆地 3.5%，并把冰 1.8% 与地下水 1.7% 细分。
Difference: 97% 与 96.5% 是同页正文和图示的精度/四舍五入差异。
Possible reason: 正文用教学近似，图 3-3 使用另一数据源并保留一位小数。
Impact on teaching: 低；若同页同时出现两个精度层级，学生可能误以为矛盾。
Recommended option: 主讲统一说“约 97%”，图中保留 96.5%；明确它们是近似表达，不要求记忆小数。
Need user decision: NO
```

```text
SOURCE_CONFLICT

Topic: 大气水储量
Source A: Ch.3 表 3-1，PDF 9 / 印刷 94；大气水 12,900 km³，滞留时间 9 日。
Source B: Ch.3 图 3-15A，PDF 25 / 印刷 110；大气圈储量 16×10³ km³。
Difference: 12,900 km³ 与 16,000 km³，相差约 24%。
Possible reason: 图表改编自不同来源、统计时期或储库边界定义不同；教材未提供统一说明。
Impact on teaching: 中；若把两图的数值直接拼接会造成预算不自洽，但不影响“大气小而快”的核心结论。
Recommended option: Slide 08 的 residence-time 表采用表 3-1；Slide 09-10 若用图 3-15，只在该图内部读数，不跨图计算。正式 PPT 不并列这两个大气储量数值。
Need user decision: NO
```

## FIGURE_GAP

无。10 个指定 Seed Figure ID 全部在原始 PDF 中核验成功；是否升级到 `APPROVED` 由 Codex / 用户后续 Gate 决定。
