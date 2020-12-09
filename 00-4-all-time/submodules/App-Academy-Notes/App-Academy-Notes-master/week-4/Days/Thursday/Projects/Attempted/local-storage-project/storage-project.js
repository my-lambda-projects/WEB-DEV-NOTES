window.addEventListener("DOMContentLoaded", (event) => {
  /*
    //refer to localstorage
  // localstorage.getitem()
  // insert items into document DIV
  // display item's name and quantity
  
  */

  const showCart = () => {
    const cart = document.getElementById("shopping-cart");
    let quantityArr = [];
    let productsArr = [];
    Object.keys(localStorage).forEach((key) => {
      quantityArr.push(key);
    });
    Object.values(localStorage).forEach((value) => {
      productsArr.push(value);
    });
    for (let i = 0; i < quantityArr.length; i++) {
      const cartItem = document.createElement("div");
      const productInfo = `You have ${quantityArr[i]} ${productsArr[i]}'s in your cart!!!🍪`;
      cartItem.innerHTML = productInfo;
      cart.appendChild(cartItem);
    }
  };
  showCart();

  const storeItem = () => {
    const add2CartBtn = document.getElementById("add-to-cart");
    add2CartBtn.addEventListener("click", (event) => {
      const selectionValue = document.getElementById("items").value;
      const quantityValue = document.getElementById("quantity").value;
      localStorage.setItem(quantityValue, selectionValue);
    });
  };
  storeItem();
});
