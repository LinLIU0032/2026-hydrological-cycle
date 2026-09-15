<!-- ppt-master-schema: spec-lock/v1 -->
# Execution Lock

## canvas
- viewBox: 0 0 1280 720
- format: PPT 16:9

## communication
- primary_language: zh-CN
- audience: EOE111 课堂学生
- objective: 让学生把快速碳循环读成大气—植被—土壤之间的过程环，并看懂海气 CO₂ 通量图上"源与汇并存"的正负约定。
- core_message: 碳在陆地生命之间快速往返，而海洋既吸收也释放 CO₂，所以"海洋是碳汇"必须限定区域与时段。
- consumption_mode: balanced

## mode
- mode: custom
- mode_references: instructional, briefing
- mode_behavior: Decompose each page into ordered teaching units and give sibling concepts parallel treatment. The two-page spine moves from a fully native three-process terrestrial loop with soils drawn as a real reservoir, to one approved air–sea flux map read through an adjacent native key that carries the sign convention.

## visual_style
- visual_style: custom
- visual_style_references: swiss-minimal, soft-rounded
- visual_style_behavior: Use a rigorous white 16:9 grid, one dark-blue course header, one approved source figure or one dominant native diagram per page, and a small number of flat rounded teaching cards with exact alignment and generous whitespace; no default shadow, gradient, or decorative texture.

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
- annotation_family: Microsoft YaHei, Arial
- footnote_family: Microsoft YaHei, Arial
- body: 15
- title: 21
- subtitle: 19
- annotation: 13
- header: 18
- card_heading: 16
- footnote: 12
- page_number: 12

## icons
- library: none
- inventory: none

## images
- carbon-airsea: images/C-03_Fig4-8_PDF68_print153_raw.png | source=user | crop=no-crop

## page_rhythm
- P25: dense
- P26: dense

## pptx_structure
- mode: flat

## forbidden
- `mask`, `<style>`, `class`, external CSS, `<foreignObject>`, `textPath`, `@font-face`, `<animate*>`, `<set>`, `<script>` / event attributes, `<iframe>`
- HTML named entities in text; write typography as raw Unicode and escape XML reserved characters
- Do not create any slide except 25 and 26. (user)
- Do not mix EP, UE, and CN quantitative carbon datasets. On Slide 26 do not combine the UE ~80 Gt C/yr gross-exchange number with the C-03 −108…+108 g/(m²·a) dataset. (user)
- Do not crop the C-03 legend, sign convention, units, or map context; do not misread the sign convention. (user)
- Do not flatten the Slide 25 native loop into a screenshot. Do not add audio or object animation. (user)
- Do not search the web, add external figures, use AI-generated imagery, or invent values. (user)
- Do not create a unified numerical timescale table not present in the approved sources. (user)
