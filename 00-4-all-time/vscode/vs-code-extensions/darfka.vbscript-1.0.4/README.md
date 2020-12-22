# VBScript Language

This package provide not only syntax highlighting, but also basic snippets integration and auto indentation rules.

## Features

- Complete syntax highlighting for VBScript
- Snippets
- Auto Indentation Rules

## Requirements

 - Your version of Visual Studio Code needs to be at least at 1.14 for this extension to work, because of the auto-indentation rules this update introduced.

## Known Issues

- The automatic indentation don't always indent at the right indent level. I will try to fix that soon.

## Release Notes

	Version 1.0.0
	Initial release of the extension

	Version 1.0.1
	New Snippet variable $TM_FILENAME_BASE used instead of $TM_FILENAME in class snippet. It removes the file extension that was included by default.

	Version 1.0.2
	Lowercased all snippets since it seems to help the script being properly recognized by outside tools (like Visual Studio).
	Separated the if snippets in two to easily choose between the two most common format ("if ... end if" and "if ... else ... end if")

	Version 1.0.3
	Quick fix for the class snippet who wasn't properly indented.

	Version 1.0.4
	Quick fix for the with statement that wasn't included in the autoindentation rules.