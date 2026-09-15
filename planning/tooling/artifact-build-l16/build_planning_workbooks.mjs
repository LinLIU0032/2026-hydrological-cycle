import fs from "node:fs/promises";
import path from "node:path";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const projectRoot = path.resolve(import.meta.dirname, "..", "..", "..");
const planningDir = path.join(projectRoot, "planning");
const qaDir = path.join(projectRoot, "qa", "L16_planning_workbooks");

function clean(value) {
  return String(value ?? "")
    .replace(/`/g, "")
    .replace(/\*\*/g, "")
    .replace(/<br\s*\/?>/gi, " ")
    .trim();
}

function splitRow(line) {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map(clean);
}

function parseSectionTable(markdown, sectionName) {
  const sectionStart = markdown.indexOf(`## ${sectionName}`);
  if (sectionStart < 0) throw new Error(`Missing section: ${sectionName}`);
  const tail = markdown.slice(sectionStart + sectionName.length + 3);
  const nextSection = tail.search(/\n## /);
  const section = nextSection >= 0 ? tail.slice(0, nextSection) : tail;
  const lines = section.split(/\r?\n/);
  const headerIndex = lines.findIndex((line, index) =>
    line.trim().startsWith("|") && /^\s*\|?\s*:?-{3,}/.test(lines[index + 1] ?? ""),
  );
  if (headerIndex < 0) throw new Error(`Missing table in section: ${sectionName}`);
  const headers = splitRow(lines[headerIndex]);
  const rows = [];
  for (let i = headerIndex + 2; i < lines.length; i += 1) {
    if (!lines[i].trim().startsWith("|")) break;
    const values = splitRow(lines[i]);
    const row = {};
    headers.forEach((header, index) => {
      row[header] = values[index] ?? "";
    });
    rows.push(row);
  }
  return rows;
}

function extractFigure(text) {
  const matches = clean(text).match(/(?:Figure|Fig\.?|Table|图|表)\s*[A-Z]?\d+(?:[.\-]\d+)?/gi);
  return matches ? [...new Set(matches)].join("; ") : "";
}

function sourceStatus(evidenceStatus) {
  const value = clean(evidenceStatus).toUpperCase();
  if (value.includes("NOT FOUND")) return "REJECTED FOR THIS CLAIM";
  if (value.includes("PARTIAL")) return "VERIFIED — PARTIAL; COMPANION SOURCE REQUIRED";
  return "APPROVED";
}

function normalizeUE(row, level) {
  const evidence = row["Evidence status"];
  const allText = [row["Section heading"], row["Definition / core concept"], row["Quantitative information"], row.Notes].join(" ");
  return [
    level,
    row.Topic,
    row.Subtopic,
    row["Planned Slide(s)"],
    "Understanding Earth, 8e (UE)",
    `Ch. ${row.Chapter}`,
    row["Section heading"],
    row["PDF page"],
    row["Printed page"],
    extractFigure(allText),
    row["Definition / core concept"],
    row["Quantitative information"],
    row.Notes,
    row["Evidence class"],
    sourceStatus(evidence),
  ].map(clean);
}

function normalizeCN(row, level) {
  return [
    level,
    row.Topic,
    row.Subtopic,
    row["Planned Slide(s)"],
    "地球系统与演变（第3–4章）",
    row.Chapter,
    row["Section heading"],
    row["PDF page"],
    row["Printed page"],
    row["Figure / Table"],
    row["Teaching use"],
    row["Quantitative information"],
    row["Exact / close-caption wording"],
    row.Status,
    "APPROVED",
  ].map(clean);
}

function normalizeEPHB(row, level) {
  return [
    level,
    row.Topic,
    row.Subtopic,
    row["Planned Slide(s)"],
    row["Source Book"],
    row.Chapter,
    row["Section heading"],
    row["PDF page"],
    row["Printed page"],
    row["Figure number / caption"],
    row["Teaching purpose"],
    row["Quantitative information"],
    row.ID ? `Source-map ID: ${row.ID}` : "",
    row.Status,
    "APPROVED",
  ].map(clean);
}

function firstSlide(value) {
  const match = clean(value).match(/\d+/);
  return match ? Number(match[0]) : 999;
}

function styleDataSheet(sheet, headers, rowCount, widths, title, subtitle, tabColor) {
  const lastColumn = String.fromCharCode(64 + headers.length);
  sheet.showGridLines = false;
  sheet.tabColor = tabColor;
  sheet.getRange("A1").values = [[title]];
  sheet.getRange("A2").values = [[subtitle]];
  sheet.getRange(`A1:${lastColumn}1`).format.font = { name: "Arial", size: 15, bold: true, color: "#0E3F8C" };
  sheet.getRange(`A2:${lastColumn}2`).format.font = { name: "Arial", size: 10, italic: true, color: "#4A5568" };
  sheet.getRange(`A4:${lastColumn}4`).values = [headers];
  sheet.getRange(`A4:${lastColumn}4`).format = {
    fill: "#0E3F8C",
    font: { name: "Arial", size: 10, bold: true, color: "#FFFFFF" },
    horizontalAlignment: "center",
    verticalAlignment: "center",
    wrapText: true,
    borders: { preset: "all", style: "thin", color: "#FFFFFF" },
  };
  if (rowCount > 0) {
    const body = sheet.getRange(`A5:${lastColumn}${rowCount + 4}`);
    body.format.font = { name: "Arial", size: 9, color: "#1A2230" };
    body.format.verticalAlignment = "top";
    body.format.wrapText = true;
    body.format.borders = {
      insideHorizontal: { style: "thin", color: "#E5E7EB" },
      bottom: { style: "thin", color: "#D6DCE5" },
    };
    body.format.rowHeight = 44;
  }
  headers.forEach((_, index) => {
    sheet.getRangeByIndexes(0, index, rowCount + 4, 1).format.columnWidth = widths[index];
  });
  sheet.getRange("1:1").format.rowHeight = 24;
  sheet.getRange("2:2").format.rowHeight = 18;
  sheet.getRange("4:4").format.rowHeight = 32;
  sheet.freezePanes.freezeRows(4);
}

const [ueText, cnText, epHbText] = await Promise.all([
  fs.readFile(path.join(planningDir, "UE_SOURCE_MAP.md"), "utf8"),
  fs.readFile(path.join(planningDir, "CN_SOURCE_MAP.md"), "utf8"),
  fs.readFile(path.join(planningDir, "EP_HB_SOURCE_MAP.md"), "utf8"),
]);

const sourceRows = [
  ...parseSectionTable(ueText, "MUST TEACH").map((row) => normalizeUE(row, "MUST TEACH")),
  ...parseSectionTable(ueText, "SHOULD TEACH").map((row) => normalizeUE(row, "SHOULD TEACH")),
  ...parseSectionTable(cnText, "MUST TEACH").map((row) => normalizeCN(row, "MUST TEACH")),
  ...parseSectionTable(cnText, "SHOULD TEACH").map((row) => normalizeCN(row, "SHOULD TEACH")),
  ...parseSectionTable(epHbText, "MUST TEACH").map((row) => normalizeEPHB(row, "MUST TEACH")),
  ...parseSectionTable(epHbText, "SHOULD TEACH").map((row) => normalizeEPHB(row, "SHOULD TEACH")),
].sort((a, b) => firstSlide(a[3]) - firstSlide(b[3]) || a[4].localeCompare(b[4]));

const sourceHeaders = [
  "Content Level",
  "Topic",
  "Subtopic",
  "Slide",
  "Source Book",
  "Chapter",
  "Section",
  "PDF Page",
  "Printed Page",
  "Figure Number",
  "Definition / Core Concept",
  "Quantitative Information",
  "Notes",
  "Evidence Class",
  "Status",
];

const conflictHeaders = [
  "Topic",
  "Source A",
  "Source B",
  "Difference",
  "Possible Reason",
  "Teaching Impact",
  "Canonical Resolution",
  "Slides",
  "User Decision",
  "Status",
  "Source Map",
  "Notes",
];

const conflictRows = [
  ["Cryosphere water volume", "UE Ch.12: 33 million km³", "UE Fig.17.1: 43.4 million km³", "10.4 million km³", "Dataset/category boundary differences", "Mixing values would undermine storage comparison", "Slides 06–07 use UE Fig.17.1 only; Slide 16 omits absolute volume", "06–07, 16", "NO", "RESOLVED", "UE", "Use one internally coherent distribution dataset"],
  ["Groundwater share of fresh water", "UE Fig.17.1 implies about 26%", "UE Ch.17 prose states about 29%", "Approximately 3 percentage points", "Rounding or denominator wording", "Unnecessary arithmetic discrepancy", "Use Fig.17.1 all-water percentages on Slides 06–07; omit 29% on Slide 15", "06–07, 15", "NO", "RESOLVED", "UE", "Describe groundwater qualitatively as a major freshwater reservoir"],
  ["Mean incoming solar energy", "UE prose/Fig.12.10: 340 W/m²", "UE Fig.12.9 description: 342 W/m²", "2 W/m²", "Rounding or legacy description", "Negligible for this lecture", "Omit from Lecture 16; if required later, use 340 W/m²", "36–37 context", "NO", "RESOLVED", "UE", "Not a memorization target"],
  ["Ocean-water percentage", "CN prose: about 97%", "CN Fig.3-3: 96.5%", "Approximation versus one decimal", "Different precision", "Low", "Slides 06–07 use UE Fig.17.1; if CN figure is shown as backup, retain 96.5% and describe it as about 97%", "06–07", "NO", "RESOLVED", "CN", "Do not place competing datasets side by side"],
  ["Atmospheric water storage", "CN Table 3-1: 12,900 km³", "CN Fig.3-15A: 16,000 km³", "About 24%", "Different source conventions", "Cross-figure calculations would be inconsistent", "Slide 08 uses Table 3-1; Slides 09–10 read Fig.3-15 only internally if used", "08–10, 13", "NO", "RESOLVED", "CN", "No cross-figure budget calculation"],
  ["EP residence-time values", "EP Table F.3", "EP narrative pp.617", "Several reservoir ranges differ materially", "Different averaging scopes/sources", "Could confuse Slide 08", "Slide 08 uses CN Table 3-1; EP values are supporting only and not combined", "08", "NO", "RESOLVED", "EP/HB", "Primary classroom table is W-04"],
  ["Solar brightening over Earth history", "HB: 35% / 39%", "EP: about 30%", "30–39% range", "Reference age/model/rounding", "No impact if qualitative", "Use only the qualitative trend; display no percentage", "38 context", "NO", "RESOLVED", "EP/HB", "No quantitative slide label"],
  ["Oxygen-isotope sign", "HB Ch.9 says continental rain is isotopically heavy", "HB Ch.18 says polar ice is 35‰ lower than seawater", "Opposite fractionation sign", "Likely wording/sign error or unstated distinction", "Could directly misteach fractionation", "Detailed isotope treatment is OUT OF SCOPE and excluded", "None", "NO", "RESOLVED", "EP/HB", "Do not use the Ch.9 sign statement"],
];

const sourceWorkbook = Workbook.create();
const sourceSheet = sourceWorkbook.worksheets.add("Source Matrix");
const conflictSheet = sourceWorkbook.worksheets.add("Source Conflicts");

styleDataSheet(
  sourceSheet,
  sourceHeaders,
  sourceRows.length,
  [14, 22, 30, 13, 28, 14, 34, 13, 15, 25, 56, 50, 46, 20, 30],
  "Lecture 16 Source Matrix",
  "Approved and bounded MUST/SHOULD evidence from UE, Chinese Chs.3–4, EP, and HB. No external source is included.",
  "#0E3F8C",
);
sourceSheet.getRange(`A5:O${sourceRows.length + 4}`).values = sourceRows;
sourceSheet.freezePanes.freezeColumns(4);
sourceSheet.getRange(`O5:O${sourceRows.length + 4}`).conditionalFormats.add("containsText", {
  text: "REJECTED",
  format: { fill: "#FEE2E2", font: { color: "#B91C1C", bold: true } },
});
sourceSheet.getRange(`O5:O${sourceRows.length + 4}`).conditionalFormats.add("containsText", {
  text: "PARTIAL",
  format: { fill: "#FEF3C7", font: { color: "#92400E", bold: true } },
});

styleDataSheet(
  conflictSheet,
  conflictHeaders,
  conflictRows.length,
  [28, 40, 40, 30, 34, 34, 52, 14, 15, 15, 14, 36],
  "Source Conflict Register",
  "All identified conflicts have an explicit classroom disposition. None requires a user decision at this stage.",
  "#C2410C",
);
conflictSheet.getRange(`A5:L${conflictRows.length + 4}`).values = conflictRows;
conflictSheet.freezePanes.freezeColumns(1);

sourceWorkbook.recalculate();
const sourceCheck = await sourceWorkbook.inspect({
  kind: "table",
  sheetId: sourceSheet.name,
  range: "A1:O12",
  include: "values,formulas",
  tableMaxRows: 12,
  tableMaxCols: 15,
  maxChars: 12000,
});
const sourceErrors = await sourceWorkbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A|#NUM!|#NULL!|#SPILL!|#CALC!",
  options: { useRegex: true, maxResults: 300 },
  summary: "Source Matrix final formula error scan",
});

const figureHeaders = [
  "Figure ID",
  "Status",
  "Source Book",
  "Chapter",
  "Section",
  "PDF Page",
  "Printed Page",
  "Figure Number",
  "Original Caption",
  "Original Language",
  "Teaching Purpose",
  "Planned Slide",
  "Crop / Redraw / Re-label",
  "Attribution Text",
  "Asset Path",
  "Notes",
  "Production Authorization",
];

const figureRows = [
  ["W-01", "APPROVED", "地球系统与演变", "Ch.3", "3.2.1 地球表层水的分布与变化", "8", "93", "图 3-3", "地球表层水的分布（图片来自 http://water.vsgs.gov，经修改）", "Chinese", "Water-reservoir distribution backup", "06–07", "Simplify/redraw labels; preserve source values", "Source: 地球系统与演变, Fig. 3-3, p.93 (PDF p.8).", "assets/figures/approved/W-01_Fig3-3_PDF08_print093_raw.png", "Approved backup; canonical Slides 06–07 numbers come from UE Fig.17.1", "APPROVED FIGURE"],
  ["W-02", "APPROVED", "Earth: Portrait of a Planet, 5e (EP)", "Interlude F", "F.4 The Hydrologic Cycle", "615–616", "580–581", "Unnumbered two-page spread", "GEOLOGY AT A GLANCE — The Hydrologic Cycle", "English", "Global hydrologic-cycle overview and concept check", "09, 19", "Crop outer bars/text or faithfully redraw bilingually; never stretch", "Source: EP 5e, Interlude F, The Hydrologic Cycle, pp.580–581 (PDF pp.615–616).", "assets/figures/approved/W-02_EP_InterludeF_HydrologicCycle_pdf615-616_print580-581_spread_raw.png", "Wide spread; direct full-slide placement would make labels small", "APPROVED FIGURE"],
  ["W-03", "APPROVED", "地球系统与演变", "Ch.3", "3.3.1 水循环的全球视野", "25", "110", "图 3-15", "地球表层的水循环。A. 每秒通量和水储库；B. 每年通量", "Chinese", "Global water budget and backup cycle overview", "09–10, 19", "Split/redraw panels if used; never mix A/B units", "Source: 地球系统与演变, Fig. 3-15, p.110 (PDF p.25).", "assets/figures/approved/W-03_Fig3-15_PDF25_print110_raw.png", "High clarity; A and B need separate enlargement", "APPROVED FIGURE"],
  ["W-04", "APPROVED", "地球系统与演变", "Ch.3", "3.2.1 地球表层水的分布与变化", "9", "94", "表 3-1", "不同水储库的滞留时间（据 USGS Water Science School 等）", "Chinese", "Canonical classroom residence-time values", "08, 13, 15–16", "Redraw as a short classroom table", "Source: 地球系统与演变, Table 3-1, p.94 (PDF p.9).", "assets/figures/approved/W-04_Table3-1_PDF09_print094_raw.png", "Use as data-verification base; do not paste the full table at small size", "APPROVED FIGURE"],
  ["W-05", "APPROVED", "地球系统与演变", "Ch.3", "3.3.2 水的三相转换与气候", "27", "112", "图 3-17", "水在三相转换中的热能传输。1 Cal=4.184 J", "Chinese", "Phase changes and latent-heat transfer", "11, 20", "Keep arrow directions and values; bilingual re-label allowed", "Source: 地球系统与演变, Fig. 3-17, p.112 (PDF p.27).", "assets/figures/approved/W-05_Fig3-17_PDF27_print112_raw.png", "Clear source figure", "APPROVED FIGURE"],
  ["W-06", "APPROVED", "地球系统与演变", "Ch.3", "3.2.2.2 地球表层与内部的水交换", "21", "106", "图 3-13", "地球内部的水循环（修改自 Ohtani，2005）", "Chinese", "Deep-water cycle: subduction, mantle, volcanism", "17, 18", "Simplify depth/pressure labels; preserve pathways and arrow directions", "Source: 地球系统与演变, Fig. 3-13, p.106 (PDF p.21).", "assets/figures/approved/W-06_Fig3-13_PDF21_print106_raw.png", "Primary evidence for the mantle-scale pathway", "APPROVED FIGURE"],
  ["C-01", "APPROVED", "Understanding Earth, 8e (UE)", "Ch.12", "The Cycling of Carbon", "1209", "Not visible", "Figure 12.19", "The carbon cycle describes the fluxes of carbon between the atmosphere and its other principal reservoirs. Amounts are in gigatons; fluxes are in gigatons per year.", "English", "Primary global carbon reservoirs and fluxes", "22–23, 32", "Use intact or simplify without changing amounts, units, or arrow meaning", "Source: UE 8e, Fig. 12.19, PDF p.1209.", "assets/figures/approved/C-01_UE_Fig12-19_PDF1209_raw.png", "Newly extracted at 300 dpi and visually verified; caption retained", "APPROVED FIGURE"],
  ["C-02", "APPROVED", "地球系统与演变", "Ch.4", "4.2 地球系统各圈层中碳的赋存", "59", "144", "图 4-2", "全球碳储库和年通量（20 世纪 90 年代数据；据 IPCC，2007 改）", "Chinese", "Carbon-reservoir/flux backup and comparison", "22–23", "Simplify; retain red/black meaning if shown", "Source: 地球系统与演变, Fig. 4-2, p.144 (PDF p.59).", "assets/figures/approved/C-02_Fig4-2_PDF59_print144_raw.png", "Dense; C-01 remains primary for Slide 23", "APPROVED FIGURE"],
  ["C-03", "APPROVED", "地球系统与演变", "Ch.4", "4.3.2 表层海的碳汇与碳源", "68", "153", "图 4-8", "全球海-气 CO₂ 通量分布图。正值为海水放出 CO₂，负值为海水吸收 CO₂", "Chinese", "Show that the ocean can be both CO₂ source and sink", "26", "Retain full color scale and sign convention", "Source: 地球系统与演变, Fig. 4-8, p.153 (PDF p.68).", "assets/figures/approved/C-03_Fig4-8_PDF68_print153_raw.png", "Do not crop away the legend or signs", "APPROVED FIGURE"],
  ["C-04", "APPROVED", "地球系统与演变", "Ch.4", "4.3.2 表层海的碳汇与碳源", "68", "153", "图 4-9", "海洋吸收大气 CO₂ 的生物泵和物理泵", "Chinese", "Physical, biological, and carbonate pumps", "27–28", "Faithful bilingual redraw preferred; distinguish all pumps", "Source: 地球系统与演变, Fig. 4-9, p.153 (PDF p.68).", "assets/figures/approved/C-04_Fig4-9_PDF68_print153_raw.png", "Small labels are dense at projector scale", "APPROVED FIGURE"],
  ["C-05", "APPROVED", "地球系统与演变", "Ch.4", "4.5.1 地质碳储库", "80", "165", "图 4-16", "地质和表层碳储库的碳循环（据 Des Marais，2001 改）", "Chinese", "Slow carbon cycle and multiple timescales", "29–31, 38", "De-emphasize isotope axis; preserve fluxes and timescales", "Source: 地球系统与演变, Fig. 4-16, p.165 (PDF p.80).", "assets/figures/approved/C-05_Fig4-16_PDF80_print165_raw.png", "Conceptually strong but visually dense", "APPROVED FIGURE"],
  ["C-06", "APPROVED", "地球系统与演变", "Ch.4", "4.5.2 早期地球的碳储库演变", "81", "166", "图 4-17", "冥古宙和显生宙地幔碳循环的比较（据 Dasgupta，2013 改）", "Chinese", "Backup deep/slow carbon-cycle comparison", "30–31", "Keep both panels and caption; do not expand early-atmosphere topic", "Source: 地球系统与演变, Fig. 4-17, p.166 (PDF p.81).", "assets/figures/approved/C-06_Fig4-17_PDF81_print166_raw.png", "Backup only", "APPROVED FIGURE"],
  ["F-01", "APPROVED", "How to Build a Habitable Planet (HB)", "Ch.9", "Earth's Long-Term Thermostat", "249", "Not shown", "Figure 9-11", "Illustration of feedbacks that control atmospheric CO₂ and surface temperature on Earth, as described in the text.", "English", "Weathering thermostat and negative-feedback direction", "38, 40–41", "Evidence/redraw source; update Ca++ to Ca²⁺ without changing logic", "Source: HB, Ch.9, Fig. 9-11, PDF p.249.", "assets/figures/approved/F-01_HB_Ch09_Fig9-11_pdf249_rawcrop.png", "Sharp grayscale source; faithful bilingual redraw required for Slide 38", "APPROVED FIGURE"],
  ["F-02", "CANDIDATE", "Understanding Earth, 8e (UE)", "Ch.12", "Balancing the Climate System Through Feedbacks", "1177–1178", "Not visible", "CUSTOM REDRAW", "N/A — approved source text defines representative feedbacks", "English", "Positive/negative definition and representative feedback loops", "35–37, 39–41", "Create native vector loops from approved source text", "Source: UE 8e, Ch.12, PDF pp.1177–1178.", "Pending — native/vector visual not yet authored", "No external infographic; this is not a missing raster asset", "APPROVED NATIVE/VECTOR BRIEF"],
  ["I-01", "CANDIDATE", "Composite approved textbooks", "UE Chs.12/17; CN Ch.3; EP Ch.23; HB Ch.9", "Water–Earth System synthesis", "See Source Matrix", "See Source Matrix", "CUSTOM REDRAW", "Water links atmosphere, ocean, land/life, rock, and deep Earth", "Bilingual", "Integrated water–Earth-system diagram", "18", "Redraw from W-02 + W-06 and approved text only", "Redrawn from approved sources: W-02, W-06, UE/EP/HB passages in Source Matrix.", "Pending — custom redraw not yet authored", "FIGURE_GAP resolved by redraw plan; no external source needed", "APPROVED REDRAW BRIEF"],
  ["I-02", "CANDIDATE", "Composite approved textbooks", "UE Ch.12; CN Chs.3–4; EP Ch.23; HB Ch.9", "Water–Carbon–Feedback synthesis", "See Source Matrix", "See Source Matrix", "CUSTOM REDRAW", "Integrated water–carbon cycles and feedbacks across ocean, atmosphere, life, weathering, rocks, and climate", "Bilingual", "Integrated coupling diagram", "34", "Redraw from W-02 + C-01 + C-04 + C-05 + F-01", "Redrawn from approved sources: W-02, C-01, C-04, C-05, F-01.", "Pending — custom redraw not yet authored", "FIGURE_GAP resolved by redraw plan; no external source needed", "APPROVED REDRAW BRIEF"],
];

const figureWorkbook = Workbook.create();
const figureSheet = figureWorkbook.worksheets.add("Figure Index");
styleDataSheet(
  figureSheet,
  figureHeaders,
  figureRows.length,
  [12, 14, 28, 20, 34, 13, 15, 24, 58, 18, 40, 15, 42, 44, 52, 42, 30],
  "Lecture 16 Figure Index",
  "Central Figure Library. Producers may use APPROVED figures or the explicitly authorized redraw/native briefs only.",
  "#1E4FA8",
);
figureSheet.getRange(`A5:Q${figureRows.length + 4}`).values = figureRows;
figureSheet.freezePanes.freezeColumns(2);
figureSheet.getRange(`B5:B${figureRows.length + 4}`).conditionalFormats.add("containsText", {
  text: "APPROVED",
  format: { fill: "#DCFCE7", font: { color: "#166534", bold: true } },
});
figureSheet.getRange(`B5:B${figureRows.length + 4}`).conditionalFormats.add("containsText", {
  text: "CANDIDATE",
  format: { fill: "#FEF3C7", font: { color: "#92400E", bold: true } },
});

figureWorkbook.recalculate();
const figureCheck = await figureWorkbook.inspect({
  kind: "table",
  sheetId: figureSheet.name,
  range: "A1:Q20",
  include: "values,formulas",
  tableMaxRows: 20,
  tableMaxCols: 17,
  maxChars: 16000,
});
const figureErrors = await figureWorkbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A|#NUM!|#NULL!|#SPILL!|#CALC!",
  options: { useRegex: true, maxResults: 300 },
  summary: "Figure Index final formula error scan",
});

await fs.mkdir(qaDir, { recursive: true });
const sourcePreview = await sourceWorkbook.render({ sheetName: "Source Matrix", range: `A1:O${sourceRows.length + 4}`, scale: 0.8, format: "png" });
const conflictPreview = await sourceWorkbook.render({ sheetName: "Source Conflicts", range: `A1:L${conflictRows.length + 4}`, scale: 0.8, format: "png" });
const figurePreview = await figureWorkbook.render({ sheetName: "Figure Index", range: `A1:Q${figureRows.length + 4}`, scale: 0.8, format: "png" });
await Promise.all([
  fs.writeFile(path.join(qaDir, "source_matrix_preview.png"), new Uint8Array(await sourcePreview.arrayBuffer())),
  fs.writeFile(path.join(qaDir, "source_conflicts_preview.png"), new Uint8Array(await conflictPreview.arrayBuffer())),
  fs.writeFile(path.join(qaDir, "figure_index_preview.png"), new Uint8Array(await figurePreview.arrayBuffer())),
]);

const [sourceOutput, figureOutput] = await Promise.all([
  SpreadsheetFile.exportXlsx(sourceWorkbook),
  SpreadsheetFile.exportXlsx(figureWorkbook),
]);
await Promise.all([
  sourceOutput.save(path.join(planningDir, "L16_SOURCE_MATRIX.xlsx")),
  figureOutput.save(path.join(planningDir, "L16_FIGURE_INDEX.xlsx")),
]);

console.log(JSON.stringify({
  sourceRowCount: sourceRows.length,
  conflictCount: conflictRows.length,
  figureCount: figureRows.length,
  approvedFigures: figureRows.filter((row) => row[1] === "APPROVED").length,
  candidateBriefs: figureRows.filter((row) => row[1] === "CANDIDATE").length,
  sourceInspect: sourceCheck.ndjson,
  sourceErrors: sourceErrors.ndjson,
  figureInspect: figureCheck.ndjson,
  figureErrors: figureErrors.ndjson,
}, null, 2));
