<!-- ppt-master-schema: spec-lock/v1 -->
# Execution Lock

## canvas
- viewBox: 0 0 1280 720
- format: PPT 16:9

## communication
- primary_language: zh-CN
- audience: EOE111 课堂学生
- objective: 通过九页课堂样稿使学生能识别主要储库、通量与泵，区分反馈符号，并用时间尺度判断系统响应。
- core_message: 用 reservoir、flux、residence time、coupling、feedback 与 timescale 阅读水—碳循环。
- consumption_mode: balanced

## mode
- mode: custom
- mode_references: instructional, briefing
- mode_behavior: Decompose the nine-page sample into ordered teaching units, give sibling concepts parallel treatment, and keep source figures neutral and scannable; move from course orientation to water and carbon system reading, mechanism, feedback sign, a slow negative-feedback example, and synthesis.

## visual_style
- visual_style: custom
- visual_style_references: swiss-minimal, soft-rounded
- visual_style_behavior: Use a rigorous white 16:9 grid, one dark-blue course header, dominant textbook figures or native scientific diagrams, and a small number of flat rounded teaching cards with exact alignment, restrained borders, generous whitespace, one subtle radius family, and no default shadow or decorative texture.

## colors
- background: #FFFFFF
- secondary_bg: #F7F9FC
- primary: #0E3F8C
- accent: #1E4FA8
- secondary_accent: #EA580C
- body_text: #1A2230
- secondary_text: #4A5568
- divider: #D6DCE5
- water_secondary: #3D7BD9
- cool_surface: #F0F5FC
- carbon_heading: #C2410C
- carbon_secondary: #7A4A33
- carbon_surface: #FDF4EF
- carbon_divider: #F0CFC2
- warm_highlight: #FDECDD

## typography
- font_family: Microsoft YaHei, Arial
- title_family: Microsoft YaHei, Arial
- body_family: Microsoft YaHei, Arial
- display_family: Microsoft YaHei, Arial
- annotation_family: Microsoft YaHei, Arial
- footnote_family: Microsoft YaHei, Arial
- body: 15
- title: 21
- subtitle: 19
- annotation: 13
- display: 60
- anchor_title: 34
- header: 18
- card_heading: 16
- toc_section_title: 26
- toc_number: 28
- footnote: 12
- page_number: 12

## icons
- library: none
- inventory: none

## images
- water-global: images/W-02_EP_InterludeF_HydrologicCycle_pdf615-616_print580-581_spread_raw.png | source=user | crop=adaptive
- carbon-global: images/C-01_UE_Fig12-19_PDF1209_raw.png | source=user | crop=no-crop

## page_rhythm
- P01: anchor
- P02: dense
- P03: anchor
- P09: dense
- P23: dense
- P27: dense
- P35: breathing
- P38: dense
- P44: anchor

## pptx_structure
- mode: flat

## forbidden
- `mask`, `<style>`, `class`, external CSS, `<foreignObject>`, `textPath`, `@font-face`, `<animate*>`, `<set>`, `<script>` / event attributes, `<iframe>`
- HTML named entities in text; write typography as raw Unicode and escape XML reserved characters
- 不要跳过阶段 Gate，不要提前批量制作 PPT。 (user)
- Do not use external teaching content or figures without an approved `EXTERNAL_SOURCE_REQUEST`. (user)
