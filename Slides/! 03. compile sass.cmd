@echo off

%~d0
CD "%~dp0"

@echo Starting Sass
sass --watch css/theme/source/:css/theme --style expanded

pause