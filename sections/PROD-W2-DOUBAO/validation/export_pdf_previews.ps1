$ErrorActionPreference = 'Stop'
$pptx = 'E:\PG\2026 Hydrological cycle\sections\PROD-W2-DOUBAO\L16_W2_Doubao_Slides13-15_v01.pptx'
$pdf  = 'E:\PG\2026 Hydrological cycle\sections\PROD-W2-DOUBAO\L16_W2_Doubao_Slides13-15_v01.pdf'
$prev = 'E:\PG\2026 Hydrological cycle\sections\PROD-W2-DOUBAO\previews'
$app = New-Object -ComObject PowerPoint.Application
$pres = $app.Presentations.Open($pptx, $true, $false, $false)
$pres.SaveAs($pdf, 32)
$names = @('slide-13', 'slide-14', 'slide-15')
for ($i = 1; $i -le $pres.Slides.Count; $i++) {
    $out = Join-Path $prev ($names[$i - 1] + '.png')
    $pres.Slides.Item($i).Export($out, 'PNG', 1280, 720)
}
$pres.Close()
$app.Quit()
[System.Runtime.Interopservices.Marshal]::ReleaseComObject($app) | Out-Null
Write-Output 'DONE'
