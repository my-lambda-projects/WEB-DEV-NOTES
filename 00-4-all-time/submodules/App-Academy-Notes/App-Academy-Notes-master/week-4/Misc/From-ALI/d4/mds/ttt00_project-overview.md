# Tic-Tac-Toe (Naughts and Crosses)

Welcome to the Tic-Tac-Toe project! In this multi-step project, you will create
a well-designed HTML+CSS+JS browser-based application that will allow you to
play tic-tac-toe. It will combine all of the concepts that
you learned in browser basics, element selection and handling, storage, and
JSON.

Each step has three parts:

* The requirements for the next step of the application
* A reading that will help you design it
* A video walk-through of a "good" solution, where "good" means clear, concise,
  and maintainable

The reason they're set up this way is so that you can attempt to do the
requirements yourself. If you get stuck on how to do it, then there is a reading
available for you to help you take the next step in code. You can watch the
video if you get really stuck or to compare your solution to the way that we
implemented it.

> Remember: working software with **nicely-formatted source code** is the _best_
> software.

Please fork and clone the repository found at
https://github.com/appacademy-starters/dom-api-tic-tac-toe. In that repository,
you will find the following files:

* **index.html**: The HTML file to which you'll make small modifications that
  will make the UI work
* **site.css**: The CSS file that contains all of the styles for your UI
* **tic-tac-toe.js**: The JavaScript file you'll modify to add behavior to your
  game

Here's what it will look like when you're done.

![what the game should look like](https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/requirement-6.gif)

## The rules of tic-tac-toe

In case you don't know the rules of tic-tac-toe, here are some links for you to
investigate.

* Solitaire Classic's [How to play Tic Tac Toe] video
* [Wikipedia's tic-tac-toe article]

[How to play Tic Tac Toe]: https://www.youtube.com/watch?v=5SdW0_wTX5c
[Wikipedia's tic-tac-toe article]: https://en.wikipedia.org/wiki/Tic-tac-toe

## Interesting sections of the index.html

You'll find three sections of interest in the **index.html**.

Near the top of the body of content, you'll see an `h1` with an id
`game-status`. You'll use that element to indicate which player won the game (or
if there is a tie).

In the middle of the body of content, you'll see the following HTML that
represents the tic-tac-toe board. The outer `<div>` makes the black background
that you see as the vertical and horizontal lines of the board. The nine
children `<div>` elements are the nine squares of the board. Those are the HTML
elements that players will click on to place their symbol there.

```html
<div id="tic-tac-toe-board">
  <div id="square-0" class="square row-1 col-1"></div>
  <div id="square-1" class="square row-1 col-2"></div>
  <div id="square-2" class="square row-1 col-3"></div>
  <div id="square-3" class="square row-2 col-1"></div>
  <div id="square-4" class="square row-2 col-2"></div>
  <div id="square-5" class="square row-2 col-3"></div>
  <div id="square-6" class="square row-3 col-1"></div>
  <div id="square-7" class="square row-3 col-2"></div>
  <div id="square-8" class="square row-3 col-3"></div>
</div>
```

At the bottom of the body of content are the action buttons. You'll subscribe
to each of their `click` events to make the game work

```html
<div class="actions">
  <button>New Game</button>
  <div class="spacer"></div>
  <button>Give Up</button>
</div>
```
