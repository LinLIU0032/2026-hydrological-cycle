<!-- ppt-master-schema: spec-lock/v1 -->
# Execution Lock

## canvas
- viewBox: 0 0 1280 720
- format: PPT 16:9

## communication
- primary_language: zh-CN
- audience: EOE111 课堂学生
- objective: 通过第 04–06 三页课堂成品使学生理解物质在地球系统储库间持续迁移，掌握 Reservoir / Flux / Residence Time / Feedback 阅读框架，并认识地球水分布极不均匀。
- core_message: 用 reservoir、flux、residence time 与 feedback 阅读水—碳循环；先看物质在哪里，再看它怎样移动。
- consumption_mode: balanced

## mode
- mode: custom
- mode_references: instructional, briefing
- mode_behavior: Decompose the three assigned pages into ordered teaching units, give sibling concepts parallel treatment, and keep factual figures neutral and scannable; move from Earth-system framing to the shared reading framework, then to the first water evidence page.

## visual_style
- visual_style: custom
- visual_style_references: swiss-minimal, soft-rounded
- visual_style_behavior: Use a rigorous white 16:9 grid, one dark-blue course header, dominant native scientific diagrams or proportion charts, and a small number of flat rounded teaching cards with exact alignment, restrained borders, generous whitespace, one subtle radius family, and no default shadow or decorative texture.

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

## page_rhythm
- P04: dense
- P05: dense
- P06: dense

## pptx_structure
- mode: flat

## forbidden
- `mask`, `<style>`, `class`, external CSS, `<foreignObject>`, `textPath`, `@font-face`, `<animate*>`, `<set>`, `<script>` / event attributes, `<iframe>`
- HTML named entities in text; write typography as raw Unicode and escape XML reserved characters
- Do not use external teaching content or figures without an approved `EXTERNAL_SOURCE_REQUEST`. (user)
- Do not search the web, add external teaching content, use AI-generated figures, reopen textbooks to hunt for figures, or invent values. (user)
- Do not flatten native charts/diagrams into screenshots. Do not add audio or object animation. (user)
