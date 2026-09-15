$ErrorActionPreference = 'Stop'

$root = 'E:\PG\2026 Hydrological cycle'
$qaDir = Join-Path $root 'qa\GATE9_QA_20260915'
$manifestPath = Join-Path $qaDir 'accepted_source_manifest.json'
$outPath = Join-Path $root 'final\L16_Hydrological_Carbon_Cycles_v02.pptx'
$receiptPath = Join-Path $qaDir 'integration_receipt_v02.json'

if (Test-Path -LiteralPath $outPath) {
    throw "Refusing to overwrite existing output: $outPath"
}

$manifest = Get-Content -LiteralPath $manifestPath -Raw | ConvertFrom-Json
if ($manifest.status -ne 'passed') {
    throw "Accepted-source manifest has not passed: $manifestPath"
}

$segments = @(
    [pscustomobject]@{ Deck='SAMPLE'; Start=1; End=3; FinalStart=1; FinalEnd=3 },
    [pscustomobject]@{ Deck='W1_QODER'; Start=1; End=3; FinalStart=4; FinalEnd=6 },
    [pscustomobject]@{ Deck='W2_QODER'; Start=1; End=2; FinalStart=7; FinalEnd=8 },
    [pscustomobject]@{ Deck='SAMPLE'; Start=4; End=4; FinalStart=9; FinalEnd=9 },
    [pscustomobject]@{ Deck='W1_DOUBAO'; Start=1; End=3; FinalStart=10; FinalEnd=12 },
    [pscustomobject]@{ Deck='W2_DOUBAO'; Start=1; End=3; FinalStart=13; FinalEnd=15 },
    [pscustomobject]@{ Deck='W2_QIANWEN'; Start=1; End=2; FinalStart=16; FinalEnd=17 },
    [pscustomobject]@{ Deck='W3_QODER'; Start=1; End=3; FinalStart=18; FinalEnd=20 },
    [pscustomobject]@{ Deck='W1_WORKBUDDY'; Start=1; End=2; FinalStart=21; FinalEnd=22 },
    [pscustomobject]@{ Deck='SAMPLE'; Start=5; End=5; FinalStart=23; FinalEnd=23 },
    [pscustomobject]@{ Deck='W1_WORKBUDDY'; Start=3; End=3; FinalStart=24; FinalEnd=24 },
    [pscustomobject]@{ Deck='W2_WORKBUDDY'; Start=1; End=2; FinalStart=25; FinalEnd=26 },
    [pscustomobject]@{ Deck='SAMPLE'; Start=6; End=6; FinalStart=27; FinalEnd=27 },
    [pscustomobject]@{ Deck='W3_WORKBUDDY'; Start=1; End=6; FinalStart=28; FinalEnd=33 },
    [pscustomobject]@{ Deck='W3_QODER'; Start=4; End=4; FinalStart=34; FinalEnd=34 },
    [pscustomobject]@{ Deck='SAMPLE'; Start=7; End=7; FinalStart=35; FinalEnd=35 },
    [pscustomobject]@{ Deck='W3_QIANWEN'; Start=1; End=2; FinalStart=36; FinalEnd=37 },
    [pscustomobject]@{ Deck='SAMPLE'; Start=8; End=8; FinalStart=38; FinalEnd=38 },
    [pscustomobject]@{ Deck='W3_QIANWEN'; Start=3; End=3; FinalStart=39; FinalEnd=39 },
    [pscustomobject]@{ Deck='W3_DOUBAO'; Start=1; End=4; FinalStart=40; FinalEnd=43 },
    [pscustomobject]@{ Deck='SAMPLE'; Start=9; End=9; FinalStart=44; FinalEnd=44 }
)

$deckLookup = @{}
foreach ($property in $manifest.decks.PSObject.Properties) {
    $deckLookup[$property.Name] = $property.Value
}
foreach ($deckId in $deckLookup.Keys) {
    $deck = $deckLookup[$deckId]
    $actualHash = (Get-FileHash -LiteralPath $deck.path -Algorithm SHA256).Hash.ToLowerInvariant()
    if ($actualHash -ne $deck.sha256.ToLowerInvariant()) {
        throw "Source changed after audit: $deckId ($($deck.path))"
    }
}

New-Item -ItemType Directory -Force -Path (Split-Path -Parent $outPath) | Out-Null

$ppt = $null
$presentation = $null
$receipts = @()
$designLookup = @{}
try {
    $ppt = New-Object -ComObject PowerPoint.Application
    $presentation = $ppt.Presentations.Add(0)
    $presentation.PageSetup.SlideWidth = 960
    $presentation.PageSetup.SlideHeight = 540

    foreach ($segment in $segments) {
        $deck = $deckLookup[$segment.Deck]
        if (-not $designLookup.ContainsKey($segment.Deck)) {
            $sourcePresentation = $null
            try {
                $sourcePresentation = $ppt.Presentations.Open($deck.path, -1, 0, 0)
                if ($sourcePresentation.Designs.Count -ne 1) {
                    throw "Expected one source Design for $($segment.Deck); found $($sourcePresentation.Designs.Count)"
                }
                $sourceDesign = $sourcePresentation.Designs.Item(1)
                $clonedDesign = $presentation.Designs.Clone(
                    $sourceDesign,
                    $presentation.Designs.Count + 1
                )
                $clonedDesign.Name = 'SRC_' + $segment.Deck
                $designLookup[$segment.Deck] = $clonedDesign
                [System.Runtime.InteropServices.Marshal]::FinalReleaseComObject($sourceDesign) | Out-Null
            }
            finally {
                if ($null -ne $sourcePresentation) {
                    $sourcePresentation.Close()
                    [System.Runtime.InteropServices.Marshal]::FinalReleaseComObject($sourcePresentation) | Out-Null
                }
            }
        }
        $before = $presentation.Slides.Count
        $expected = $segment.End - $segment.Start + 1
        $inserted = $presentation.Slides.InsertFromFile(
            $deck.path,
            $before,
            $segment.Start,
            $segment.End
        )
        $after = $presentation.Slides.Count
        if ($inserted -ne $expected -or ($after - $before) -ne $expected) {
            throw "Insert mismatch for $($segment.Deck) slides $($segment.Start)-$($segment.End): returned=$inserted delta=$($after-$before) expected=$expected"
        }
        $sourceDesign = $designLookup[$segment.Deck]
        $sourceLayout = $sourceDesign.SlideMaster.CustomLayouts.Item(1)
        for ($slideIndex = $before + 1; $slideIndex -le $after; $slideIndex++) {
            $slide = $presentation.Slides.Item($slideIndex)
            $slide.Design = $sourceDesign
            $slide.CustomLayout = $sourceLayout
            [System.Runtime.InteropServices.Marshal]::FinalReleaseComObject($slide) | Out-Null
        }
        [System.Runtime.InteropServices.Marshal]::FinalReleaseComObject($sourceLayout) | Out-Null
        $receipts += [pscustomobject]@{
            deck_id = $segment.Deck
            source_path = $deck.path
            source_start = $segment.Start
            source_end = $segment.End
            final_start = $segment.FinalStart
            final_end = $segment.FinalEnd
            inserted = $inserted
        }
    }

    if ($presentation.Slides.Count -ne 44) {
        throw "Expected 44 output slides; found $($presentation.Slides.Count)"
    }
    if ($presentation.Designs.Count -lt 12) {
        throw "Expected cloned source Designs; found only $($presentation.Designs.Count) total Designs"
    }
    $presentation.SaveAs($outPath, 24)
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

if (-not (Test-Path -LiteralPath $outPath)) {
    throw "PowerPoint did not create the output file: $outPath"
}

$receipt = [ordered]@{
    status = 'created'
    output_path = $outPath
    output_sha256 = (Get-FileHash -LiteralPath $outPath -Algorithm SHA256).Hash.ToLowerInvariant()
    output_bytes = (Get-Item -LiteralPath $outPath).Length
    slide_count = 44
    canvas_points = @(960, 540)
    segments = $receipts
}
$receipt | ConvertTo-Json -Depth 6 | Set-Content -LiteralPath $receiptPath -Encoding utf8
Write-Output "Created $outPath"
Write-Output "Receipt $receiptPath"
