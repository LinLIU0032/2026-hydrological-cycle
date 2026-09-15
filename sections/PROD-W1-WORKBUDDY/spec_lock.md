<!-- ppt-master-schema: spec-lock/v1 -->
# Execution Lock

## canvas
- viewBox: 0 0 1280 720
- format: PPT 16:9

## communication
- primary_language: zh-CN
- audience: EOE111 课堂学生
- objective: 让学生把水循环的框架迁移到碳循环，排出碳的储库层级，并认识到同一框架下两个循环的时钟不同。
- core_message: 碳用同一套 reservoir / flux / residence time 语言阅读，但储库量级与时间尺度并不相同。
- consumption_mode: balanced

## mode
- mode: custom
- mode_references: instructional, briefing
- mode_behavior: Decompose each page into ordered teaching units, give sibling concepts parallel treatment, and keep the approved textbook figure neutral and scannable; move from a Part II transition and system bridge, to an ordered carbon-reservoir hierarchy, then to one aligned water-versus-carbon framework comparison whose difference is the clock.

## visual_style
- visual_style: custom
- visual_style_references: swiss-minimal, soft-rounded
- visual_style_behavior: Use a rigorous white 16:9 grid, one dark-blue course header, a small number of flat rounded teaching cards with exact alignment, and generous whitespace; carbon pages lead with the restrained orange accent while the water side of any comparison keeps the course blue, with no default shadow, gradient, or decorative texture.

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
- carbon-reservoirs: images/C-01_UE_Fig12-19_PDF1209_raw.png | source=user | crop=adaptive

## page_rhythm
- P21: dense
- P22: dense
- P24: dense

## pptx_structure
- mode: flat

## forbidden
- `mask`, `<style>`, `class`, external CSS, `<foreignObject>`, `textPath`, `@font-face`, `<animate*>`, `<set>`, `<script>` / event attributes, `<iframe>`
- HTML named entities in text; write typography as raw Unicode and escape XML reserved characters
- Do not create any slide except 21, 22, and 24. (user)
- Do not search the web, add external teaching content, use AI-generated figures, reopen textbooks to hunt for figures, invent values, or create a unified numerical timescale table not present in the approved sources. (user)
- Do not mix C-01 and C-02 numerical datasets in one visual. (user)
- Do not flatten native comparisons into screenshots. Do not add audio or object animation. (user)
