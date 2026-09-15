$ErrorActionPreference = 'Stop'

$root = 'E:\PG\2026 Hydrological cycle'
$pptxPath = Join-Path $root 'final\L16_Hydrological_Carbon_Cycles_v02.pptx'
$pdfPath = Join-Path $root 'final\L16_Hydrological_Carbon_Cycles_v02.pdf'
$previewDir = Join-Path $root 'final\previews_v02'
$receiptPath = Join-Path $root 'qa\GATE9_QA_20260915\powerpoint_export_receipt_v02.json'

if (-not (Test-Path -LiteralPath $pptxPath)) {
    throw "Missing master PPTX: $pptxPath"
}
if (Test-Path -LiteralPath $pdfPath) {
    throw "Refusing to overwrite existing PDF: $pdfPath"
}
if (Test-Path -LiteralPath $previewDir) {
    $existing = @(Get-ChildItem -LiteralPath $previewDir -Filter 'slide-*.png')
    if ($existing.Count -gt 0) {
        throw "Refusing to overwrite $($existing.Count) existing preview files in $previewDir"
    }
}
New-Item -ItemType Directory -Force -Path $previewDir | Out-Null

$ppt = $null
$presentation = $null
try {
    $ppt = New-Object -ComObject PowerPoint.Application
    $presentation = $ppt.Presentations.Open($pptxPath, -1, 0, 0)
    if ($presentation.Slides.Count -ne 44) {
        throw "Expected 44 slides before export; found $($presentation.Slides.Count)"
    }
    for ($i = 1; $i -le 44; $i++) {
        $pngPath = Join-Path $previewDir ('slide-' + $i.ToString('00') + '.png')
        $presentation.Slides.Item($i).Export($pngPath, 'PNG', 1920, 1080)
    }
    $presentation.SaveAs($pdfPath, 32)
}
finally {
    if ($null -ne $presentation) {
        $presentation.Close()
        [System.Runtime.InteropServices.Marshal]::FinalReleaseComObject($presentation) | Out-Null
    }
    if ($null -ne $ppt) {
        $ppt.Quit()
        [System.Runtime.InteropServices.Marshal]::FinalReleaseComObject($ppt) | Out-Null
    }
    [GC]::Collect()
    [GC]::WaitForPendingFinalizers()
}

$previewFiles = @(Get-ChildItem -LiteralPath $previewDir -Filter 'slide-*.png' | Sort-Object Name)
if ($previewFiles.Count -ne 44) {
    throw "Expected 44 preview PNGs; found $($previewFiles.Count)"
}
if (-not (Test-Path -LiteralPath $pdfPath)) {
    throw "PowerPoint did not create the PDF: $pdfPath"
}

$receipt = [ordered]@{
    status = 'exported'
    source_pptx = $pptxPath
    source_sha256 = (Get-FileHash -LiteralPath $pptxPath -Algorithm SHA256).Hash.ToLowerInvariant()
    pdf_path = $pdfPath
    pdf_sha256 = (Get-FileHash -LiteralPath $pdfPath -Algorithm SHA256).Hash.ToLowerInvariant()
    pdf_bytes = (Get-Item -LiteralPath $pdfPath).Length
    preview_directory = $previewDir
    preview_count = $previewFiles.Count
    preview_sha256 = @($previewFiles | ForEach-Object {
        [ordered]@{
            name = $_.Name
            sha256 = (Get-FileHash -LiteralPath $_.FullName -Algorithm SHA256).Hash.ToLowerInvariant()
            bytes = $_.Length
        }
    })
}
$receipt | ConvertTo-Json -Depth 6 | Set-Content -LiteralPath $receiptPath -Encoding utf8
Write-Output "Exported PDF: $pdfPath"
Write-Output "Exported $($previewFiles.Count) PowerPoint previews: $previewDir"
