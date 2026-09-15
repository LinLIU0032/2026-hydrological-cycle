$ErrorActionPreference = 'Stop'

$root = 'E:\PG\2026 Hydrological cycle'
$outDir = Join-Path $root 'qa\GATE9_QA_20260915\source-renders'
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

$decks = [ordered]@{
    'SAMPLE' = 'review\L16_STYLE_SAMPLE_v01.pptx'
    'W1_QODER' = 'sections\PROD-W1-QODER-CN\L16_W1_QoderCN_Slides04-06_v01.pptx'
    'W2_QODER' = 'sections\PROD-W2-QODER-CN\L16_W2_QoderCN_Slides07-08_v01.pptx'
    'W1_DOUBAO' = 'sections\PROD-W1-DOUBAO\L16_W1_Doubao_Slides10-12_v01.pptx'
    'W2_DOUBAO' = 'sections\PROD-W2-DOUBAO\L16_W2_Doubao_Slides13-15_v01.pptx'
    'W2_QIANWEN' = 'sections\PROD-W2-QIANWEN-OFFICE\L16_W2_QianwenOffice_Slides16-17_v01.pptx'
    'W3_QODER' = 'sections\PROD-W3-QODER-CN\L16_W3_QoderCN_Slides18-20_34_v01.pptx'
    'W1_WORKBUDDY' = 'sections\PROD-W1-WORKBUDDY\L16_W1_WorkBuddy_Slides21-22-24_v01.pptx'
    'W2_WORKBUDDY' = 'sections\PROD-W2-WORKBUDDY\L16_W2_WorkBuddy_Slides25-26_v01.pptx'
    'W3_WORKBUDDY' = 'sections\PROD-W3-WORKBUDDY\L16_W3_WorkBuddy_Slides28-33_v01.pptx'
    'W3_QIANWEN' = 'sections\PROD-W3-QIANWEN-OFFICE\L16_W3_QianwenOffice_Slides36-37_39_v01.pptx'
    'W3_DOUBAO' = 'sections\PROD-W3-DOUBAO\L16_W3_Doubao_Slides40-43_v01.pptx'
}

$mapping = @(
    @(1,'SAMPLE',1), @(2,'SAMPLE',2), @(3,'SAMPLE',3),
    @(4,'W1_QODER',1), @(5,'W1_QODER',2), @(6,'W1_QODER',3),
    @(7,'W2_QODER',1), @(8,'W2_QODER',2), @(9,'SAMPLE',4),
    @(10,'W1_DOUBAO',1), @(11,'W1_DOUBAO',2), @(12,'W1_DOUBAO',3),
    @(13,'W2_DOUBAO',1), @(14,'W2_DOUBAO',2), @(15,'W2_DOUBAO',3),
    @(16,'W2_QIANWEN',1), @(17,'W2_QIANWEN',2),
    @(18,'W3_QODER',1), @(19,'W3_QODER',2), @(20,'W3_QODER',3),
    @(21,'W1_WORKBUDDY',1), @(22,'W1_WORKBUDDY',2), @(23,'SAMPLE',5),
    @(24,'W1_WORKBUDDY',3), @(25,'W2_WORKBUDDY',1), @(26,'W2_WORKBUDDY',2),
    @(27,'SAMPLE',6),
    @(28,'W3_WORKBUDDY',1), @(29,'W3_WORKBUDDY',2), @(30,'W3_WORKBUDDY',3),
    @(31,'W3_WORKBUDDY',4), @(32,'W3_WORKBUDDY',5), @(33,'W3_WORKBUDDY',6),
    @(34,'W3_QODER',4), @(35,'SAMPLE',7),
    @(36,'W3_QIANWEN',1), @(37,'W3_QIANWEN',2), @(38,'SAMPLE',8),
    @(39,'W3_QIANWEN',3),
    @(40,'W3_DOUBAO',1), @(41,'W3_DOUBAO',2), @(42,'W3_DOUBAO',3),
    @(43,'W3_DOUBAO',4), @(44,'SAMPLE',9)
)

$ppt = $null
try {
    $ppt = New-Object -ComObject PowerPoint.Application
    foreach ($deckId in $decks.Keys) {
        $presentation = $ppt.Presentations.Open((Join-Path $root $decks[$deckId]), -1, 0, 0)
        try {
            $rows = @($mapping | Where-Object { $_[1] -eq $deckId })
            foreach ($row in $rows) {
                $finalPage = [int]$row[0]
                $localSlide = [int]$row[2]
                $pngPath = Join-Path $outDir ('source-' + $finalPage.ToString('00') + '.png')
                $presentation.Slides.Item($localSlide).Export($pngPath, 'PNG', 1920, 1080)
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

$count = @(Get-ChildItem -LiteralPath $outDir -Filter 'source-*.png').Count
if ($count -ne 44) { throw "Expected 44 source renders; found $count" }
Write-Output "Exported $count accepted-source renders to $outDir"
