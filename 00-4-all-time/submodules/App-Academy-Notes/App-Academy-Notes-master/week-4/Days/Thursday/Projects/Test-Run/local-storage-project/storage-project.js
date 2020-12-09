//2020-09-03-12-52-17.png
//Our HTML file contains a simple form 
//with a couple of inputs and a submit button, as well as an area to display cart items.

window.addEventListener("DOMContentLoaded", (event) => {



  //PHASE 1:
  /*
write a function that stores the form values in localStorage whenever the user clicks the add-to-cart button.
Listen for a click event
Grab the form values
Store the item in localStorage
 Recall that we use Storage.setItem() to set a key-value pair in localStorage
  */

  const showCart = () => {
    // const form = document.querySelector(".form"); //   <form class="form form__container"> ...two different classes on this form
    // //grabs first element by class or id ... any selector (whereas getElementById only looks by id)
    // console.log(form);
    // form.addEventListener("submit", (event) => { //target.addEventListner(type,cb);

    //   //get values from select field and the input field
    //   const selectItem = document.getElementById("items"); // grab select element line 17 of html...document represents entire html doc

    //   console.log(selectItem.value);

    //   const numberInputElement = document.getElementById("quantity"); // grab the (quantity input element) on line 33 of html
    //   console.log("this is numberInputElement", numberInputElement); // display the  quantity input element in the console.
    //   console.log("this is numberInputElement value:", numberInputElement.value); //key into value of numberInputElement

    // });

    const cart = document.getElementById("shopping-cart");
    for (let i = 0; i < localStorage.length; i++) {
      //localStorage is a string because it is JSON
      const key = localStorage.key(i);
      //
      const value = localStorage.getItem(key);
      const cartItem = document.createElement("div");
      cartItem.innerHTML = `${key}, ${value}`;
      //attribute examples: id, class, name, type, for, class, href, value
      cartItem.setAttribute("id", key);
      const removeButton = document.createElement("button");
      removeButton.innerHTML = "Remove From Cart";
      removeButton.setAttribute("class", "remove-from-cart-button");
      cartItem.appendChild(removeButton);
      cart.appendChild(cartItem);
    }
  };

  const storeCart = () => {
    //grab the add to cart button element
    const addToCart = document.getElementById("add-to-cart");
    console.log(addToCart);
    addToCart.addEventListener('click', event => {
      //listening for button click event on the add to cart
      const itemName = document.getElementById("items").value;
      //get the value in the items element triggered by the click event
      console.log(itemName);
      const itemAmount = document.getElementById("quantity").value;
      //get the quantity of items that was input to the quantity element
      console.log(itemAmount);
      localStorage.setItem(itemName, itemAmount);


    });
    //see cart everytime items are stored to it
    showCart();
  };


  //PHASE 2:
  /*
  write a function to display the items that have been saved in localStorage to the Shopping Cart part of the page. 
In your HTML file, this is represented by the div with an ID of shopping-car
Retrieve the item(s) stored in localStorage
Insert the items into the DOM in the shopping-cart DIV
Display both the item’s name and its quantity

Hint: You might want to use a loop!

Hint: Recall that we use Storage.getItem(key) to get a value via its key.

Hint: We can also use Storage.key(index) to get a key name via its index.
  */




  //PHASE 3:

  /*
Write a function to remove items from the cart
add to or amend the function you wrote in Phase 2.
Insert Remove buttons next to each cart item you inserted on the page. Then, write a function that does the following:

Listen for a click event on the “Remove” buttons
Remove the corresponding item from localStorage
Remove the item from the shopping-cart DIV

Hint: We can use Storage.removeItem() to remove an item from localStorage.

Hint: We can use document.querySelectorAll() to get a Node List of the buttons. Then, loop through the list.

Hint: Recall what you know about event.target and Element.parentNode.
 It would be helpful to store the item’s key in an ID attribute on the Remove button or the button’s containing DIV, so that you know which corresponding key-value pair to remove from localStorage.

Hint: We can use location.reload to refresh the page when an item is removed. 
If everything is working correctly, the other cart items should still display after a page refresh.
  */


  // const storeItem = () => {

  // };









  const removeItem = () => {
    const removeButtons = document.querySelectorAll(".remove-from-cart-button")
    removeButtons.forEach(())
  };

});