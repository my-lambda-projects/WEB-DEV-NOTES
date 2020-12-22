# Treedbox Javascript

How fast do you want to be to transform an idea into code?

## VS Code Javascript extension

> It's not an extension that forces you to remember some "custom prefix" to call the snippets. **Treedbox Javascript** was designed to serve snippets in the most logical way, delivering the most commons code structures and combinations to make your combo's code speedy and powerful.

Javascript snippets [Visual Studio Code](https://code.visualstudio.com/) Extension for fast development.

By: [Jonimar Marques Policarpo](https://www.linkedin.com/in/treedbox/ "LinkEdin") at [Treedbox](http://treedbox.com)

## Screenshots:

Screenshot 1: Using snippet for fetch DELETE:

![Screenshot 1](https://github.com/treedbox/treedboxjavascript/raw/master/assets/screenshot-1.png "Screenshot 1: Using snippet for fetch DELETE")

Screenshot 2: Accessing all fetch snippets:

![Screenshot 2](https://github.com/treedbox/treedboxjavascript/raw/master/assets/screenshot-2.png "Screenshot 2: Accessing all fetch snippets")

## Install

Launch VS Code Quick Open (Ctrl+P), paste the following command, and press enter

`ext install treedbox.treedboxjavascript`

Or search for `treedbox` in the VS Code Extensions tab.

## Pages

![Treedbox](https://github.com/treedbox/treedboxjavascript/raw/master/icon.png "Treedbox.com")

GitHub: https://github.com/treedbox/treedboxjavascript

VS Code extension: https://marketplace.visualstudio.com/items?itemName=treedbox.treedboxjavascript

## Features

Version 1.0.0: **501** javascript snippets!

- Snippets for `fetchGET`, `fetchPOST`, `fetchPUT`, `fetchDELETE`;
- Include: URL interface https://developer.mozilla.org/docs/Web/API/URL
  `URLcreateObjectURL`, `URLrevokeObjectURL`;
- Snippets without semicolons; [YouTube: Semicolons cannot save you! - FunFunFunction [#9](https://github.com/treedbox/treedboxjavascript/issues/9)](https://www.youtube.com/watch?v=Qlr-FGbhKaI), [Article: Semicolons in JavaScript: A preference](https://blog.kentcdodds.com/semicolons-in-javascript-a-preference-dd8fc8b80895);
- Fixed: typo with `parseInt`.

###### All Math properties and methods

Including an extra complete functions as `MathRandomCompleteFunc` or `randomCompleteFunc`:

```
const random = (min,max) => Math.floor(Math.random() * (max - min + 1)) + min
```

and many others **Extras** that you will find out when you need it :)

## How to use

#### Example:

in a `.js` file or in a `.html` file, between the HTML tag `<script></script>`,
type: `fetchblob` and press "**Tab/Enter**" to generate:

```
fetch(url)
  .then(response => response.blob())
  .then(data =>{
      console.log('data:',data)
  }).catch(error => console.log('ERROR:',error))
```

Like `fetchblob`, you have a lot of snippets to help you with `import`, `forEach`, `map`, `generator` and so on.

## Release Notes

## [1.0.6]

- fix .js comment snippet.

- starting .ts snippets.

### [1.0.5]

- Fixing mimeTypes.

### [1.0.4]

- Improving description.

### [1.0.3]

- Fix typo.

### [1.0.2]

- Optimizing fetch snippets;
- Add images and more info to README.

### [1.0.1]

- fix README links.

### [1.0.0]

- **501** javascript snippets!;
- All Math properties and methods.

## Tested

**Visual Studio Code 1.37.1**

## Meta

Author: [Jonimar Marques Policarpo](https://www.linkedin.com/in/treedbox/ "LinkEdin") [Frontend Developer]

LinkEdin: [Jonimar Marques Policarpo | Treedbox](https://www.linkedin.com/in/treedbox/ "LinkEdin")

Twitter: [@treedbox](https://twitter.com/treedbox)

E-mail: [treedbox@gmail.com](https://github.com/treedbox/treedboxjavascript/blob/master/mailto:treedbox@gmail.com)

WebSite: [treedbox.com](https://treedbox.com)

## License

[MIT](https://github.com/treedbox/treedboxjavascript/blob/master/LICENSE.md) © [TreedBox](https://github.com/treedbox)

### Offical Repository

[https://github.com/treedbox/treedboxjavascript/](https://github.com/treedbox/treedboxjavascript/)
