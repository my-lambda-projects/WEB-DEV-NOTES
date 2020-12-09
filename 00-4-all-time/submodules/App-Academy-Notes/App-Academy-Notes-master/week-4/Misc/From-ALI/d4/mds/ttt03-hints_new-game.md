# Hints 4: Creating A New Game

A way to tackle this is to subscribe to the click event of the "New
Game" button. Then, in that click event handler, just reset everything.

If you've reviewed the hints for steps 1, 2, and 3, then you can follow these
directions to make it work.

## In the HTML file

* Add an `id` attribute with a value of `new-game` to the `<button>` with the
  text "New Game"
* Add the `disabled` attribute to the button.

## In the JavaScript file

* In the `checkGameStatus` function, in the last check to see if `gameStatus`
  is not an empty string, add new code in there to set the `new-game` button's
  `disabled` property to `false`.
* In the `DOMContentLoaded` event handler, add a click event handler to the
  element with the `new-game` id.
* In the click event handler, reset the variables to their original values
  * `currentPlayerSymbol = 'x';`
  * `squareValues = ['', '', '', '', '', '', '', '', ''];`
  * `gameStatus = '';`
* Also, clear out the header that contains the game status.
* Also, loop through the values 0 through 8, get a reference to the HTML element
  with the id `square-X` where X is one of those numeric values, and set that
  HTML elements `innerHTML` property to an empty string to clear out an image
  that may be in there.
* Also, set the `new-game` buttons' `disabled` property to `true`.

When you get done, it should look something like this.

![creating a new game](https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/requirement-4.gif)
