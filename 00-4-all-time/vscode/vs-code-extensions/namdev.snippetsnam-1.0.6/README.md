# JavaScript
## VS Code JavaScript code snippets by namDev
-------------------

This extension contains code snippets for JavaScript in ES6 syntax for [Vs Code][code] editor (supports both JavaScript and TypeScript).

## Installation

In order to install an extension you need to launch the Command Pallete (Ctrl + Shift + P or Cmd + Shift + P) and type Extensions.
There you have either the option to show the already installed snippets or install new ones. Search for *JavaScript (ES6) code snippets* and install it.

## Supported languages (file extensions)
* JavaScript (.js)
* TypeScript (.ts)
* JavaScript React (.jsx)
* TypeScript React (.tsx)
* Html (.html)
* Vue (.vue)

## Snippets

Below is a list of all available snippets and the triggers of each one. The **⇥** means the `TAB` key.

### Import and export
| Trigger  | Content |
| -------: | ------- |
| `imp→`   | imports entire module `import moduleName from 'module'`|
| `ex→`   | export  module `export const name`|
| `exd`   | export  module `export default name`|
| `exc`   | export default class `export default className {}`|

### Various methods
| Trigger  | Content |
| -------: | ------- |
| `fore→`   | forEach loop in ES6 syntax `array.forEach(currentItem => {})`|
| `forof→`   | for ... of loop `for(const item of object) {}` |
| `forin→`   | for ... in loop `for(const item in object) {}` |
| `setinterval`   | set interval helper method `setInterval(() => {});` |
| `settimeout`   | set timeout helper method `setTimeout(() => {});` |
| `then→` | adds then and catch declaration to a promise `then((rs) => {)`|

### Function methods
| Trigger  | Content |
| -------: | ------- |
| `f`   | Arrow Function `(argument) => {}`|
| `fn`   | Function normal `function name(argument) =>{}` |
| `fa`   | Async function `async function(argument) {}` |
| `fan`   | async Arrow function `async () => {}` |

### Other methods
| Trigger  | Content |
| -------: | ------- |
| `rqr`   | require('package') |

### Console methods
| Trigger  | Content |
| -------: | ------- |
| `clg→`   | console log `console.log()` |
| `clo→`   | console log variable with message `console.log('variable :', variable);` |
| `c→`   | console other `console.()` |

[code]: https://code.visualstudio.com/
