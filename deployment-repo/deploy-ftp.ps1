<#
PowerShell deploy script using WinSCP (recommended on Windows).
Requires WinSCP command-line `winscp.com` available in PATH.
#>
param(
    [string]$Host = $env:FTP_HOST,
    [string]$User = $env:FTP_USER,
    [string]$Pass = $env:FTP_PASSWORD,
    [string]$RemoteDir = $env:FTP_REMOTE_DIR
)

if (-not $Host -or -not $User -or -not $Pass) {
    Write-Error "FTP_HOST, FTP_USER and FTP_PASSWORD environment variables are required."
    exit 1
}

if (-not $RemoteDir) { $RemoteDir = '/public_html/' }

$localDir = Join-Path -Path (Get-Location) -ChildPath 'dist'
if (-not (Test-Path $localDir)) {
    Write-Error "Build directory '$localDir' not found. Run 'npm run build' first."
    exit 1
}

# Prepare WinSCP script
$winscpScript = @"
open ftp://$User:`$Pass@$Host/
option batch abort
option confirm off
lcd `"$localDir`"
cd $RemoteDir
# synchronize remote with local
synchronize remote -delete
bye
"@

$scriptFile = Join-Path (Get-Location) -ChildPath 'winscp-deploy.txt'
$winscpScript | Out-File -FilePath $scriptFile -Encoding ASCII

Write-Host "Deploying $localDir to $User@$Host:$RemoteDir using WinSCP..."
$winscpExe = 'winscp.com'
$proc = Start-Process -FilePath $winscpExe -ArgumentList "/script=$scriptFile" -NoNewWindow -Wait -PassThru
if ($proc.ExitCode -ne 0) { Write-Error "WinSCP failed with exit code $($proc.ExitCode)"; exit $proc.ExitCode }
Write-Host "Deploy complete."
