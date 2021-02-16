Reflow Markdown
===============

Reflow Markdown is a Visual Studio Code Extension originally forked from the [Reflow paragraph](https://marketplace.visualstudio.com/items?itemName=TroelsDamgaard.reflow-paragraph)
extension by [Troels Damgaard](https://github.com/dontrolle/vscode-reflow-lines).
Instead of targeting any line of text, however it focuses on Markdown files
only and the specific formatting constructs unique to it such as paragraphs,
headings, block quotes, lists, and code blocks.

Format the current heading, paragraph, list, or blockquote to have lines no
longer than your preferred line length, using the `alt+q` shortcut or your own
user-specific keyboard-binding.

This extension defaults to reflowing lines to be no more than 80 characters
long. The preferred line length may be overridden using the config value of
`reflowMarkdown.preferredLineLength`.

Extension Settings
------------------

This extension contributes the following settings:

- `reflowMarkdown.preferredLineLength`: Set the preferred line length for
  reflowing paragraph (default: `80`).

- `reflowMarkdown.doubleSpaceBetweenSentences`: Insert two spaces instead of
  one between each sentence (default `false`).

- `reflowMarkdown.resizeHeaderDashLines`: Modifies the length of the ---'s or
  ==='s under H1s and H2s to be the same length as the header text.  If the
  header text spans multiple lines, the dashes are set to be the length of the
  longest line.

- `reflowMarkdown.wrapLongLinks`: Specifies how links will be wrapped when they
  cause a line to extend beyond the preferred length.
  
Keyboard Shortcuts
------------------

- Invoke a reflow using `alt+q` (default).
