<!-- ppt-master-schema: spec-lock/v1 -->
# Execution Lock

## canvas
- viewBox: 0 0 1280 720
- format: PPT 16:9

## communication
- primary_language: zh-CN
- audience: EOE111 课堂学生
- objective: 通过第 18–20 与 34 页使学生看到水连接地球系统各圈层、能在 W-02 上完成读图任务、复述第一部分五条综合结论，并在一张耦合图上区分水通量与碳通量。
- core_message: 水连接大气、海洋、生命、岩石与深部地球并搬运质量与能量；水也是碳循环耦合的介质。
- consumption_mode: balanced

## mode
- mode: custom
- mode_references: instructional, briefing
- mode_behavior: Four ordered teaching units: integrated Earth-system coupling diagram, read-the-figure concept check, five-unit part summary with break cue, and the water–carbon coupling bridge; every arrow encodes a named transfer and sibling processes get parallel treatment.

## visual_style
- visual_style: custom
- visual_style_references: swiss-minimal, soft-rounded
- visual_style_behavior: Rigorous white 16:9 grid, one dark-blue course header, flat rounded cards and native line/arrow geometry with one subtle radius family; water fluxes water blue, carbon fluxes carbon orange with a compact bilingual legend; no default shadow, gradient, or decorative texture.

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
- p19: images/W-02_EP_InterludeF_HydrologicCycle_pdf615-616_print580-581_spread_raw.png | source=user | crop=adaptive

## page_rhythm
- P18: dense
- P19: dense
- P20: anchor
- P34: dense

## pptx_structure
- mode: flat

## forbidden
- `mask`, `<style>`, `class`, external CSS, `<foreignObject>`, `textPath`, `@font-face`, `<animate*>`, `<set>`, `<script>` / event attributes, `<iframe>`
- HTML named entities in text; write typography as raw Unicode and escape XML reserved characters
- Do not search the web, add external teaching content, use AI-generated imagery, or invent values. (user)
- Do not mix quantitative datasets from separate figures. (user)
- Do not flatten I-01 or I-02 into a full-slide image. Their labels and main paths must remain native/editable. (user)
- No narration audio, timed advance, or object animation. (user)
