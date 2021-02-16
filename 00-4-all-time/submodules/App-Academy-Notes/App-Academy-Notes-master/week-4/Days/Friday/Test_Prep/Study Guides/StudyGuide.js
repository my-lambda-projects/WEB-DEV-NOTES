/*
The DOM is part of the BOM; the dom is a representation of all of the objects on a page document, the BOM is a representation of all objects on the browser.

A browser's main role in request/response cycle is parsing HTML,CSS,JS and rendering that info by constructing a DOM tree.

The window API includes methods and properties that you can use on the window object, (core of BOM)

The context of an anonymous function in the browser will be the window object. 
In general context is determined by how a function is invoked.


3 ways to prevent the script from running until the page loads:
1.)     Use DOMContentLoaded
2.)     Place script tag at bottom of HTML file
3.)     Add attributes like async or defer (in the HTML script tag before the src attribute)

<script> :without any attributes will pause HTML parsing and a request will be made to fetch the script (if it is external). 
The script will be executed before parsing is resumed.
Differences between async and defer:
- async: downloads the file during HTML parsing and will pause the HTML parser to execute it once it has downloaded.
-defer: downloads the file during HTML parsing but will only execute it after the parser has completed.
--> standard practice is to use async then defer.


Cookies vs Web Storage API:
-->Cookies: store user info and send it to a server (under 4kB)
-->Session Storage: stores data only for a session until the browser-window/tab is closed. Does not transfer data to server (5MB) storage limit. 
-->local storage: stores data w/o an expiration date, does not transfer data to server; deleted when browser cache is cleared. Storage limit varies from browser to browser.

When to use web storage API:
-- >shopping cart
-- >input data on forms
-- >user info ... i.e. user preferences

When to use Cookies:
-- > Session Cookie: stores session info on user login/validation (lost once browser is closed)(unless you use a persistent cookie)









*/

//***********************Use window API to resize browser window:
// newWindow = window.open( "http://127.0.0.1:5500/Study%20Guides/StudyGuide.HTML", "name", 'width=100', "height=100" );
// newWindow.resizeTo( 500, 500 );
// newWindow.resizeBy( 100, -200 );


//*****************************Run the script on DOMContentLoaded (when the doc has loaded but without waiting for style sheets and images) */
window.addEventListener( "DOMContentLoaded", ( event ) => {
    console.log( "This script is loaded once the DOM is ready!" )
} );

//*******************Run the Script on page load using window.onload...(wait for everything to load) */
window.onload = () => {
    console.log( "This script is loaded once all resources and the DOM is ready!" )
}

//****************Create a Cookie*************************************************************** */
const cookie1 = "favoriteCat=million";
document.cookie = cookie1;
const cookie2 = "favoriteDog=bambi";
document.cookie = cookie2;
console.log( document.cookie ); //favoriteCat=million; favoriteDog=bambi
document.cookie = "favoriteCat=; expires =Thu, 01 Jan 1970 00:00:00 GMT ";
console.log( document.cookie ); //favoriteDog=bambi

//************Create Local Storage Data*************************************************************** */
localStorage.setItem( "firstThing", "firstValue" );
let item = localStorage.getItem( "firstThing" );
console.log( item ); //firstValue

//****************************************************************************************************** */
/*Given HTML that includes <div id="catch-me-if-you-can>HI!</div>,
 write a JS statement that stores a reference to the HTMLDivElement with the id "catch-me-if-you-can" 
 in a variable named"divOfInterest"
 */
const divOfInterest = document.getElementById( "catch-me-if-you-can" );

/*
Given HTML that includes seven SPAN elements each with the class "cloudy",
write a JS statementthat stores a reference to a NodeList
filled with references to the seven HTMLSpanElements in a variable named "cloud
*/
const cloud = document.querySelectorAll( "span.cloudy" ); // why do we need span.cloudy instead of just .cloudy?
/*
Given an HTML file with HTML, HEAD, TITLE, and BODY elements, 
create and reference a JS file that in which the JS will create and 
attach to the BODY element an H1 element with the id "sleeping-giant"
with the content "Jell-O, Burled!". < scripttype = "text/javascript"
src = "location.file" > < /script>
*/

let newHead = document.createElement( "h1" );
newHead.setAttribute( "id", "sleeping-giant" );
newHead.innerHTML = "Jell-O, Burled!"
//const newContent = document.createTextNode( "Jell-O, Burled!" );
//Document.createTextNode().pdf
document.body.appendChild( newHead );


/*
Given an HTML file with HTML, HEAD, TITLE, SCRIPT, and BODY elements 
with the SCRIPT 's SRCattribute referencing an empty JS file, 
write a script in the JS file to create a DIV element with the id"lickable-frog" and 
add it as the last child to the BODY element
*/