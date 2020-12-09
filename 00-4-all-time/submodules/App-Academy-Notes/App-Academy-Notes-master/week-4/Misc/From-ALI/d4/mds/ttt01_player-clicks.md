# Requirement 2: Tracking Grid Clicks

In this requirement, you will now track the clicks of the players and fill the
grid with the appropriate symbols.

* For the "X" player, use the image found at
  https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg.
* For the "O" player, use the image found at
  https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg.
* When the player clicks an empty square, then it is filled with that player's
  symbol.
* When the player clicks a square that already contains a symbol, the game does
  nothing.
* The first click results in an "X". After that, the symbols "O" and "X"
  alternate with each click per the rules of tic-tac-toe.

During development, you can just refresh the browser to clear the board.

To make this game work, you'll eventually get around to checking if one of the
players won or if there is a tie. Plan ahead for how you track the grid clicks
because you'll need to know the "value" of each square to calculate wins.
