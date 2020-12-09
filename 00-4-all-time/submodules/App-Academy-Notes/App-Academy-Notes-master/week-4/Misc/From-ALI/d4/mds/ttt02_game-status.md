# Requirement 3: Determining Game Status

In this requirement, you will now determine if a game is won or in a tie state.
To do this, you will need to check the following:

* If a player has any three in a row, then that player wins.
* If a player has any three in a column, then that player wins.
* If a player has either of the diagonals, then that player wins.
* If there is no win _and_ all squares have a player symbol in there, then
  the game is a tie.
* When the game begins, the header at the top should have no text in it.
* When a player wins the game, then the following happens:
  * The header at the top should read "Winner: X" or "Winner: Y" depending on
    which player won.
  * Empty squares in the grid no longer react to clicks.
* When the game goes into a tied state, the header at the top should read
  "Winner: None".

During development, you can just refresh the browser to clear the board.
