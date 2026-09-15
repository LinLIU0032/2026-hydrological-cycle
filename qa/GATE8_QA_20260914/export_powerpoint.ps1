$ErrorActionPreference = 'Stop'

$root = 'E:\PG\2026 Hydrological cycle'
$qaRoot = Join-Path $root 'qa\GATE8_QA_20260914'
$decks = [ordered]@{
    'QODER-CN' = 'sections\PROD-W3-QODER-CN\L16_W3_QoderCN_Slides18-20_34_v01.pptx'
    'WORKBUDDY' = 'sections\PROD-W3-WORKBUDDY\L16_W3_WorkBuddy_Slides28-33_v01.pptx'
    'QIANWEN-OFFICE' = 'sections\PROD-W3-QIANWEN-OFFICE\L16_W3_QianwenOffice_Slides36-37_39_v01.pptx'
    'DOUBAO' = 'sections\PROD-W3-DOUBAO\L16_W3_Doubao_Slides40-43_v01.pptx'
}
$pageNumbers = [ordered]@{
    'QODER-CN' = @(18, 19, 20, 34)
    'WORKBUDDY' = @(28, 29, 30, 31, 32, 33)
    'QIANWEN-OFFICE' = @(36, 37, 39)
    'DOUBAO' = @(40, 41, 42, 43)
}

$ppt = $null
try {
    $ppt = New-Object -ComObject PowerPoint.Application
    foreach ($name in $decks.Keys) {
        $inputPath = Join-Path $root $decks[$name]
        $outDir = Join-Path $qaRoot $name
        New-Item -ItemType Directory -Force -Path $outDir | Out-Null
        $presentation = $ppt.Presentations.Open($inputPath, -1, 0, 0)
        try {
            $pdfPath = Join-Path $outDir ($name + '_POWERPOINT.pdf')
            $presentation.SaveAs($pdfPath, 32)
            for ($i = 1; $i -le $presentation.Slides.Count; $i++) {
                $page = $pageNumbers[$name][$i - 1]
                $pngPath = Join-Path $outDir ('slide-' + $page + '.png')
                $presentation.Slides.Item($i).Export($pngPath, 'PNG', 1920, 1080)
            }
            [pscustomobject]@{
                Producer = $name
                Slides = $presentation.Slides.Count
                Width = $presentation.PageSetup.SlideWidth
                Height = $presentation.PageSetup.SlideHeight
                PDF = $pdfPath
            }
        }
        finally {
            $presentation.Close()
        }
    }
}
finally {
    if ($null -ne $ppt) {
        $ppt.Quit()
        [System.Runtime.InteropServices.Marshal]::FinalReleaseComObject($ppt) | Out-Null
    }
    [GC]::Collect()
    [GC]::WaitForPendingFinalizers()
}
