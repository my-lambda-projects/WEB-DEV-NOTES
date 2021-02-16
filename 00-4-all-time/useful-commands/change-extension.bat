@echo off
Cd C:\0-a-A-October\02-student-website\01-student-website\a-A-Student\PUBLIC\other-pages\blog-posts\Student-Profiles\Bryan Guner _ LinkedIn_files
forfiles /S /M *.File /C "cmd /c rename @file @fname.js"