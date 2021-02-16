# Open file

This extension enables the user to open a file under the current cursor position. Just right-click on a pathname within a open document and select the ```open file under cursor``` option (or just press `Alt + P` without right-click).
If the file is found by vscode then it will open a new tab with this file.

If the string is has an tailing number separated by a colon (i.e. `:23`) it will open the file at the specified line number.  `:23:45` means line 23 column 45.

It is also possible to select one or more text segments in the document and open them.

## Example

You have a document, containing some text, that exists in a folder, say ```c:\Users\guest\Documents\myfile.txt```.
In that file the path strings could look like as follows:

```
[...]
 c:\Users\guest\Documents\Temp\stuff.txt
[...]
 "..\..\administrator\readme.txt"
[...]
 "..\user\readme.txt:33"
[...]
```

With this extension you can right-click on such a path and choose ```open file under cursor``` and VSCode will open a new tab with that file.

## Main Features

- support file string selection(s), or, no selection and auto *detect path outside quotes* or within quotes `'file-path'`.
- support *opening multiple files* at a time.  (Either a multi-lined selection or multiple selections.)
- path lookup from multiple locations to find *nearest match*: absolute, current document's folder, workspace, workspace's `src`, defined search paths, etc.
- *line and column positioning* with `file:line:column`.
- possible to open like `[src/]class/SomeClass.php` from just `someClass`.  (Use case insensitive file system to support the different in letter case.)
- allow `/path/to/sth` to be lookup as both absolute and relative path.  Useful for code like `projectFolder + '/path/to/sth'`.
- support opening single or multiple files from *Linux `grep` output* with line number, which has the line pattern `file:line[:column]:content` (content is discarded).
- fallback to VS Code's "Quick Open" input box if file not found.  (For handy custom search, or find containing files if the path is a folder in the workspace.)
- include a simple "Open file like this file" command to call Quick Open with current file's relative path (without file extension), for lookup files like it.

## Path Lookup Detail

Relative paths are relative to the these folders (in listed order):

1. Currently opened document's folder, and

    (if it is within a workspace folder) the document's parent folders (up to the workspace folder).

2. All workspace folders, and their sub-folders listed in the option `seito-openfile.searchSubFoldersOfWorkspaceFolders`.

3. All search paths in the option `seito-openfile.searchPaths`.

Remarks:
- Absolute paths `/...` (`/` or `\`), if not found, are searched like relative paths too.
- If `~/...` paths not found from user's home, the step 2 of "Relative paths" is searched if option `seito-openfile.lookupTildePathAlsoFromWorkspace` is true.
