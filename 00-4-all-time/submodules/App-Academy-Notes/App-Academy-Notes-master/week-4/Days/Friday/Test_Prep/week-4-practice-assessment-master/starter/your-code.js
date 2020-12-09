/**********************************Prac  Test********************************************** */

window.addEventListener( "DOMContentLoaded", () => {
    /*
The Console method dir() displays an interactive list of the properties of the specified JavaScript object. 
The output is presented as a hierarchical listing with disclosure triangles 
that let you see the contents of child objects.
    */
    //*****************************Problem #1 Make Circle Blue************************************************************************************** */
    //target.addEventListner("type of event", cb that will do something as a result of cb)
    const blueBtn = document.getElementById( "make-circle-blue" );
    const blueCircle = document.getElementById( "blue-circumference-circle" );

    blueBtn.addEventListener( "click", () => {
        console.dir( blueCircle );
        blueCircle.classList.add( "blue" );
    } );
    //2020-09-05-19-18-22.png
    //***************************Problem 2: Remove Text *****************************************************************************************************/
    /*
    When you click on the button below,
    you should set the innerHTML of the div with the id "made-for-apples" to be an empty string
    (- removing the text "Apples" from the div.) 
    Write code in the "your-code.js" file to make that happen.
    */

    const rmvAppleBtn = document.getElementById( 'remove-content-from-apples' );
    const appleDiv = document.getElementById( "apples-div" );

    rmvAppleBtn.addEventListener( "click", () => { //when you 'click' on the Clear out "Apples" text
        appleDiv.innerHTML = ''; // set the HTML text in the apple div to an empty string(nothing)

    } );

    //2020-09-05-19-35-53.png
    //***************************Problem 3: Add an image ***************************************************************************************/
    /*
Button id: add-image-btn
Div Id: add-image
When you click the button below one of two things will happen:

A. If the div with the id of "add-image" does not have children,
then you should create an image element, 
(set its source attribute to "./images/logo-emblem-black.svg" and append it to the div with the id of "add-image".)

B. If the div with the id of "add-image" has children, nothing should happen
(no image should be added to the element).
    */
    const addImgBtn = document.getElementById( "add-image-btn" );
    const addImgDiv = document.getElementById( "add-image" );

    addImgBtn.addEventListener( "click", () => {
        //if div has no children then create image element and set it's source attribute
        //then append to div
        //else: (nothing happens... don't need the else bc we don't need to do anything)
        console.dir( addImgDiv ); // find out what attribute is responsible for children
        console.log( addImgDiv.childElementCount ); //The ParentNode.childElementCount read-only property returns an unsigned long representing the number of child elements of the given element.
        //2020-09-05-19-52-28.png 
        if ( addImgDiv.childElementCount === 0 ) {
            const image = document.createElement( "img" );
            console.dir( image ); //2020-09-05-20-01-01.png
            image.setAttribute( "src", "./images/logo-emblem-black.svg" );
            addImgDiv.appendChild( image );
            //2020-09-05-20-04-39.png
        }

    } );
    //***************************Problem 4: Stop the Bubbling ****************************************************************************************/
    /*
    2020-09-05-21-24-35.png // (before soln)
Div id: bubble-foe
Input id: bubble-friend
Currently when you type anything into the blue outlined rectangle below the whole rectangle surrounding it turns red. 
This is because the Div with the id of "bubble-foe" is listening to the "keydown" event of the input box (the blue outlined rectangle). 
Write code so that when you input text in the box below the rectangle surrounding it does not turn red: 
because you have stopped the propagation of the event up the stack. 
    */
    const bubDiv = document.getElementById( "bubble-foe" );
    const input = document.getElementById( "bubble-friend" );
    // because we want to stop the event from propagating (i.e. do something with the event it's self we will need to create an event parameter in the cb function)
    input.addEventListener( "keydown", ( event ) => { // need event parameter to anonymous callback function if we are dealing with bubbling/ event propagation.
        event.stopPropagation(); //event.cancelBubble = true;// same as event.stopPropagation();
    } );
    //use open file extension on the Document keydown event.pdf file
    //Documentkeydownevent.pdf
    //Event.bubbles.pdf //(read only property ... so it's not what we want in this case.)
    //Event.cancelBubble.pdf

    //***************************  Problem 5: Adding and Multiplying   ********************************************************************************************************/
    /*
Global variable name: total
Multiply button id: multiply
Add button id: add - two
Reset button id: reset - total
Total value span id: total - value
There 's a global variable available named total that ***(currently evaluates to the integer 1.)***

When you click the "Multiply by Two(x2)"
button, you should multiply the value of total by 2 and update the inner HTML of the element with the id of "total-value" with the new value of total.

When you click the "Add Two(+2)"
button, you should add 2 to the value of total and update the inner HTML of the element with the id of "total-value" with the new value of total.

When you click the "Reset to One"
button, you should set the value of total to one and update the inner HTML of the element with the id of "total-value" with the new value of total.
    */
    //console.log( total ); // total is a global variable in the "not your code.js" file

    /***********TO TYPE ON MULTIPLE LINES SIMULTANEOUSLY HOld CTRL + ALT AND USE THE ARROW UP OR DOWN KEYS */


    function updateCounter() {
        let totalEl = document.getElementById( "total-value" );
        totalEl.innerHTML = total;
    }

    document.getElementById( "multiply" ).addEventListener( "click", ( e ) => {
        total *= 2;
        updateCounter();
    } );

    document.getElementById( "add-two" ).addEventListener( "click", ( e ) => {
        total += 2;
        updateCounter();
    } );
    document.getElementById( "reset-total" ).addEventListener( "click", ( e ) => {
        total = 1;
        updateCounter();
    } );
    //***************************Problem 6: Storage and key presses ********************************************/
    /*
Input box id: my - name - is
Store Flavor button id: store - flavor
When the button below is clicked, store the value of the input box in local storage.When the page loads,
    if there 's a stored value in local storage for the input box, set the value of the input box to the stored value. Write code in the "your-code.js" file to make that happen.

When you refresh the page, the input value should still be in the input box.For example,
    if someone types "chocolate"
into the text box, clicks the "Store Flavor"
button, and then refreshes the page, the text "chocolate"
should show back up in the text box after the page reloads.

To get the value of what is in the text box, get the element by its id and use the value property to get and set the value of the input box.For example,
    if you had the following HTML:

    <
    input type = "text"
id = "nickname" >
    the following code would set the value of the input box to "Dima".
document.getElementById( 'nickname' ).value = 'Dima';
    */
    //read about .value using the open file extension: HTMLinputElement_________-contains .value.pdf




    document.getElementById( "store-flavor" ).addEventListener( 'click', () => { // event listener on the 'Store Flavor" button
        const inputBox = document.getElementById( 'fav-flavor' );
        //syntax: localStorage.setItem(keyName,keyValue);// use open file extension: Storage.setItem().pdf
        localStorage.setItem( 'flavor', inputBox.value );
    } );

    let favFlavorVal = localStorage.getItem( 'flavor' );
    if ( favFlavorVal ) // if the value exists
    {
        let input = document.getElementById( 'fav-flavor' );
        input.value = favFlavorVal;
    }
    //2020-09-06-00-36-55.png




    //***************************Problem 7: Can't click this! ********************************************/
    /*
Input id: will - not - check
Subscribe to the "click" event of the checkbox below and prevent the default behavior from occurring.
You 'll know it works when you click on the checkbox and nothing happens (it won't check and uncheck ).
    */

    const checkBox = document.getElementById( 'will-not-check' );

    checkBox.addEventListener( "click", ( event ) => {
        //console.dir( event ); //click checkbox to see mouse event object
        //MDN documentation:  Event.preventDefault().pdf
        event.preventDefault();
    } )





} );