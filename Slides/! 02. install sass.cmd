@echo off

%~d0
CD "%~dp0"

@echo Downloading Sass
CALL gem install sass

pause