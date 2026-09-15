<!-- ppt-master-schema: spec-lock/v1 -->
# Execution Lock

## canvas
- viewBox: 0 0 1280 720
- format: PPT 16:9

## communication
- primary_language: zh-CN
- audience: EOE111 课堂学生
- objective: 让学生把碳从海洋、生命、碳酸盐一直读到岩石，分清风化中的净汇与循环，排出慢碳循环的方向序列，比较四类时钟，并用同一套框架给任意一条碳通路分类。
- core_message: 碳循环从快速的生物与海气交换，一路延伸到缓慢的岩石圈交换；不同时钟决定储库多快响应。
- consumption_mode: balanced

## mode
- mode: custom
- mode_references: instructional, briefing
- mode_behavior: Decompose each page into ordered teaching units and give sibling concepts parallel treatment. The six-page spine closes the carbon part: an ocean–life–rock carbonate path, a weathering causal chain with its net-sink distinction, the four-stage slow geological pathway, an aligned multi-clock comparison, a concept check on the approved global figure, and a four-unit synthesis.

## visual_style
- visual_style: custom
- visual_style_references: swiss-minimal, soft-rounded
- visual_style_behavior: Use a rigorous white 16:9 grid, one dark-blue course header, one dominant native path or one approved figure persisting per page, and a small number of flat rounded teaching cards with exact alignment and generous whitespace; no default shadow, gradient, or decorative texture.

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
- carbon-global-check: images/C-01_UE_Fig12-19_PDF1209_raw.png | source=user | crop=no-crop

## page_rhythm
- P28: dense
- P29: dense
- P30: dense
- P31: dense
- P32: dense
- P33: breathing

## pptx_structure
- mode: flat

## forbidden
- `mask`, `<style>`, `class`, external CSS, `<foreignObject>`, `textPath`, `@font-face`, `<animate*>`, `<set>`, `<script>` / event attributes, `<iframe>`
- HTML named entities in text; write typography as raw Unicode and escape XML reserved characters
- Do not create any slide except 28, 29, 30, 31, 32 and 33. (user)
- Do not use any image other than the four approved assets; C-01 may be placed on Slide 32, and C-04/C-05/C-06 stay redraw or evidence inputs. (user)
- Do not present carbonate formation as a one-way CO₂ sink, and do not present all weathering as the same net atmospheric CO₂ sink. (user)
- Do not combine C-05 and C-06 numerical fluxes into a new budget, and never merge the two CN timescale figures into false precision. (user)
- Do not reuse unsupported Slide 25 year-range wording. (user)
- Do not crop away units or arrow meanings; do not flatten native paths, scales, question overlays or summary cards into screenshots. (user)
- Do not add audio, timed advance, or object animation; do not search the web, add external content, use AI-generated imagery, or invent values. (user)
