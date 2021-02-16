# Hints 5: Giving Up

A way to tackle this is to subscribe to the click event of the "Give Up" button.
Then, in that click event handler, end the game for the "other" player according
to your game logic.

If you've reviewed the hints for steps 1, 2, 3, and 4, then you can follow these
directions to make it work.

## In the HTML file

* Add an `id` attribute with a value of `give-up` to the `<button>` with the
  text "Give Up"

## In the JavaScript file

* In the `checkGameStatus` function, in the last check to see if `gameStatus`
  is not an empty string, add new code in there to set the `give-up` button's
  `disabled` property to `true`.
* In the `DOMContentLoaded` event handler, add a click event handler to the
  element with the `give-up` id.
* In the click event handler, set the variable `gameStatus` to the upper-cased
  version of the "other" player's symbol.
* Also, perform the same logic as found in the last steps of `checkGameStatus`
  to set the header, enable the "New Game" button, and disable the "Give Up"
  button.
* In the click event handler for the "new-game" button, add a line in there to
  set the "give-up" button's `disabled` state to `false`.


When you get done, it should look something like this.

![giving up](https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/requirement-5.gif)
