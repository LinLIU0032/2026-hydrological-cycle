$ErrorActionPreference = 'Stop'
$pptx = 'E:\PG\2026 Hydrological cycle\sections\PROD-W3-DOUBAO\L16_W3_Doubao_Slides40-43_v01.pptx'
$pdf  = 'E:\PG\2026 Hydrological cycle\sections\PROD-W3-DOUBAO\L16_W3_Doubao_Slides40-43_v01.pdf'
$prev = 'E:\PG\2026 Hydrological cycle\sections\PROD-W3-DOUBAO\previews'
$app = New-Object -ComObject PowerPoint.Application
$pres = $app.Presentations.Open($pptx, $true, $false, $false)
$pres.SaveAs($pdf, 32)
$names = @('slide-40', 'slide-41', 'slide-42', 'slide-43')
for ($i = 1; $i -le $pres.Slides.Count; $i++) {
    $out = Join-Path $prev ($names[$i - 1] + '.png')
    $pres.Slides.Item($i).Export($out, 'PNG', 1280, 720)
}
$pres.Close()
$app.Quit()
[System.Runtime.Interopservices.Marshal]::ReleaseComObject($app) | Out-Null
Write-Output 'DONE'
