$ErrorActionPreference = 'Stop'
$root = 'E:\PG\2026 Hydrological cycle\sections\PROD-W3-QIANWEN-OFFICE'
$pptx = Join-Path $root 'L16_W3_QianwenOffice_Slides36-37_39_v01.pptx'
$pdf  = Join-Path $root 'L16_W3_QianwenOffice_Slides36-37_39_v01.pdf'
$prev = Join-Path $root 'previews'

$ppt = New-Object -ComObject PowerPoint.Application
$pres = $ppt.Presentations.Open($pptx, -1, 0, 0)
try {
  $pres.SaveAs($pdf, 32)
  $names = @('36_water_vapor_feedback', '37_ice_albedo_feedback', '39_biosphere_feedback')
  for ($i = 1; $i -le $pres.Slides.Count; $i++) {
    $out = Join-Path $prev ($names[$i - 1] + '.png')
    $pres.Slides.Item($i).Export($out, 'PNG', 1280, 720)
  }
  Write-Output ("SLIDES=" + $pres.Slides.Count)
} finally {
  $pres.Close()
  $ppt.Quit()
  [System.Runtime.Interopservices.Marshal]::ReleaseComObject($ppt) | Out-Null
}
Write-Output 'COM_EXPORT_DONE'
