/*
GENERAL NOTES:
here the word attribute is used as a synonym for CSS Class selector

*/

// to keep track of the state of the square grid
let current = 'x'; //first player draws 'x's on the board...
//                 s0  s1  s2  s3  s4  s5  s6  s7  s8
let gridSquares = [ '', '', '', '', '', '', '', '', '' ]; //arr of 9 empty elements each to represent a square on the game grid

let gameResult = ''; //if there is an x in here than means that x won... if  o is in here o won.... if it's still empty that means a tie

let newGameBtn = document.querySelector( ".actions > button" );

let giveUpBtn = document.querySelectorAll( ".actions > button" )[ 1 ]; // this is at index 1, New Game is at index 0

function gameState() {
    //visual of gridSquares Array:
    //   |  s0 | s1  | s2  |
    //   |-----|-----|-----|
    //   | s3  | s4  | s5  |
    //   |-----|-----|-----|
    //   | s6  | s7  | s8  |

    //check rows (s0,s1,s2)(s3,s4,s5)(s6,s7,s8)  see picture 2020 - 09 - 05 - 16 - 35 - 56. png
    for ( let i = 0; i < 9; i += 3 ) {
        // on every iteration incrementing i by 3 moves us onto the next row ...
        //we start at zero and check if anyone has won that row... if not we move onto the next row (i=3)
        if ( ( gridSquares[ i ] !== '' ) && ( gridSquares[ i ] === gridSquares[ i + 1 ] ) && ( gridSquares[ i ] === gridSquares[ i + 2 ] ) ) {
            gameResult = gridSquares[ i ];

        }
    }
    //check columns : (s0,s3,s6)(s1,s4,s7)(s2,s5,s8)   see picture 2020 - 09 - 05 - 16 - 35 - 56. png
    for ( let i = 0; i < 3; i++ ) { //
        if ( ( gridSquares[ i ] !== '' ) && ( gridSquares[ i ] === gridSquares[ i + 3 ] ) && ( gridSquares[ i ] === gridSquares[ i + 6 ] ) ) {
            gameResult = gridSquares[ i ];
            // halts execution if a winning state is detected.
        }
    }
    //check diagonals:
    if ( ( gridSquares[ 0 ] !== '' ) && ( gridSquares[ 0 ] === gridSquares[ 4 ] ) && ( gridSquares[ 0 ] === gridSquares[ 8 ] ) ) {
        gameResult = gridSquares[ i ];
    }
    if ( ( gridSquares[ 2 ] !== '' ) && ( gridSquares[ 2 ] === gridSquares[ 4 ] ) && ( gridSquares[ 2 ] === gridSquares[ 6 ] ) ) {
        gameResult = gridSquares[ i ];
    }
    //check for tie:
    let fullGrid = true;
    for ( let i = 0; i < 8; i++ ) {
        if ( gridSquares[ i ] === '' ) {
            fullGrid = false;

        }
    }
    if ( fullGrid === true ) {
        gameResult = 'not yet decided';
    }

    if ( gameResult !== '' ) {
        console.log( "daniel2", gameResult )
        document.getElementById( 'game-winner' ).innerHTML = `Winner: ${gameResult.toUpperCase()}`
    }

}

function giveUpDisable() {
    if ( gameResult === '' ) {
        //all of the children of type button in the actions class
        giveUpBtn.disabled = false;
    } else {
        giveUpBtn.disabled = true;
    }

}


function newGameDisable() {

    if ( gameResult === '' ) {
        //all of the children of type button in the actions class
        newGameBtn.disabled = true;
    } else {
        newGameBtn.disabled = false;
    }

}

function giveUp() {
    gridSquares = [ '', '', '', '', '', '', '', '', '' ]; //reassigning grid squares 
    gameResult = ''
    if ( current === "x" ) {
        document.getElementById( 'game-winner' ).innerHTML = `Winner: O`
    } else {
        document.getElementById( 'game-winner' ).innerHTML = `Winner: X `
    }

    let squares = document.querySelectorAll( '.square' );
    squares.forEach( sqr => {
        //If the image inside of the square has the id of x or o remove that element as a child from the square.
        if (
            Array.from( sqr.childNodes ).includes(
                document.getElementById( "x" )
            )
        ) {
            sqr.removeChild( document.getElementById( "x" ) );
        } else if (
            Array.from( sqr.childNodes ).includes(
                document.getElementById( "o" )
            )
        ) {
            sqr.removeChild( document.getElementById( "o" ) );
        }
    } )
    current = 'x';
    newGameBtn.disabled = false;
}

function newGame() {
    gridSquares = [ '', '', '', '', '', '', '', '', '' ]; //reassigning grid squares 
    gameResult = ''
    document.getElementById( 'game-winner' ).innerHTML = ''
    let squares = document.querySelectorAll( '.square' );
    squares.forEach( sqr => {
        //If the image inside of the square has the id of x or o remove that element as a child from the square.
        if (
            Array.from( sqr.childNodes ).includes(
                document.getElementById( "x" )
            )
        ) {
            sqr.removeChild( document.getElementById( "x" ) );
        } else if (
            Array.from( sqr.childNodes ).includes(
                document.getElementById( "o" )
            )
        ) {
            sqr.removeChild( document.getElementById( "o" ) );
        }
    } )
    current = 'x';
}



window.addEventListener( "DOMContentLoaded", () => { // this means dom has loaded and we can get element on any element in DOM tree (potentially bu ID)

    let board = document.getElementById( "tic-tac-toe-board" ); //represents the tic tac toe grid element... 9 divs

    board.addEventListener( "click", event => { // listening for click event on the document object (web page)

        const targetAttribute = event.target.id; // represents the id of the grid that was clicked on

        //if ( !targetAttribute.startsWith( 'square-' ) ) return; // if target id does not start with "square-"... in other words if the click does not occur on one of the 9 grid squares

        const pressedSquareNum = Number.parseInt( targetAttribute.slice( 7 ) ); // represents the number that is the last character of the id of whatever gird square...that is clicked to trigger the event

        const player = document.createElement( "img" ); //create document 

        if ( gridSquares[ pressedSquareNum ] !== '' ) return; // if the square that was clicked on already as a symbol (has already been played) than ignore any clicks on it


        if ( gridSquares[ pressedSquareNum ] === '' ) {
            gridSquares[ pressedSquareNum ] = current;
            console.log( "Daniel", gridSquares )
        }

        //element to represent image of x or o
        player.setAttribute( "src", `https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-${current}.svg` ); // by interpolating this string we change the image to whatever symbol the current player uses.
        player.setAttribute( 'id', current ) //add id attribute to the x's and o's on the board


        event.target.appendChild( player ); //append image element as a child of the respect div square element (event.target is the div of whatever square gets pressed )
        // appendChild puts the new child element inside of the parent element


        if ( current === "x" ) {
            current = "o";
        } else {
            current = "x";
        };
        console.log( current );
        gameState();
        newGameDisable();
        giveUpDisable()
    } );


    newGameBtn.addEventListener( "click", ( e ) => {
        newGame()
    } )

    giveUpBtn.addEventListener( "click", ( e ) => {
        giveUp()
    } )
} );