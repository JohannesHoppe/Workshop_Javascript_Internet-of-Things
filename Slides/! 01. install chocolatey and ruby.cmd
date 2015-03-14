@echo off

%~d0
CD "%~dp0"

@echo Downloading Chocolatey
@powershell -NoProfile -ExecutionPolicy unrestricted -Command "iex ((new-object net.webclient).DownloadString('http://bit.ly/psChocInstall'))"
SET PATH=%PATH%;%systemdrive%\chocolatey\bin

@echo Downloading Ruby
CALL cinst ruby -Version 1.9.3.48400

pause