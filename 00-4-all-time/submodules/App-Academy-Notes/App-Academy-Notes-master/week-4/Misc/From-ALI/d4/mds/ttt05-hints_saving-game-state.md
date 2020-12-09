# Hints 6: Saving Game State

A way to tackle this is to use local storage and JSON serialization to save the
state of the game with each change.

You can do that by creating a function that saves the game state to local
storage. You should call that function everywhere that the state of the game
changes.

You can then create a function that loads the state from the local storage (if
it exists) and restores the state of the game and the UI. You can call that
function after the DOM content loads.

You should probably create top-level constant variable(s) that hold the key(s)
that you will use for local storage so that you declare once and use often. Make
sure that the keys that you use are "unique" in that, if another developer comes
along and wants to store something for the same domain, that they won't
accidentally overwrite your game status. Maybe prefix your key name(s) with
'tic-tac-toe-' or something similar.

When you get done, it should look something like this. The "flashing" in the
screen recording is the page refreshing.

![state saved between refreshes](https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/requirement-6.gif)
