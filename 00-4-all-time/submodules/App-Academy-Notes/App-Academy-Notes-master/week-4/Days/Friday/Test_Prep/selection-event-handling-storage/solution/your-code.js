window.addEventListener( "DOMContentLoaded", () => {
  // Problem One***********************************************************************
  document.getElementById( "make-circle-blue" ).addEventListener( "click", () => {
    document.getElementById( "blue-circumference-circle" ).classList.add( "blue" );
  } );

  // Problem Two***********************************************************************
  document
    .getElementById( "remove-content-from-apples" )
    .addEventListener( "click", () => {
      document.getElementById( "apples-div" ).innerHTML = "";
    } );

  // Problem Three***********************************************************************
  document.getElementById( "add-image-btn" ).addEventListener( "click", () => {
    let square = document.getElementById( "add-image" );
    // if our element already has the image (has a child) we can just return
    if ( square.children.length ) return;
    let newImg = document.createElement( "img" );
    newImg.src = "./images/logo-emblem-black.svg";
    square.appendChild( newImg );
  } );

  // Problem Four***********************************************************************
  document.getElementById( "bubble-friend" ).addEventListener( "keydown", ( e ) => {
    e.stopPropagation();
  } );

  // Problem Five***********************************************************************
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
  // Problem Six***********************************************************************
  document.getElementById( "store-flavor" ).addEventListener( "click", () => {
    const flavorInput = document.getElementById( "fav-flavor" );
    localStorage.setItem( "favorite-flavor", flavorInput.value );
  } );

  let favFlavorValue = localStorage.getItem( "favorite-flavor" );
  if ( favFlavorValue ) {
    let input = document.getElementById( "fav-flavor" );
    input.value = favFlavorValue;
  }

  // Problem seven***********************************************************************
  document.getElementById( "will-not-check" ).addEventListener( "click", ( e ) => {
    e.preventDefault();
  } );
} );