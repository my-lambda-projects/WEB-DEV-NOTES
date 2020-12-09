window.addEventListener( 'DOMContentLoaded', event => {
  // ** Phase 1B: Update license with event delegation and event.target **
  //Set up event listeners on the form whenever the user inputs a value into a form input.
  //Get the value of that form input and update the corresponding information on the driver’s license
  const licenseForm = document.getElementById( 'drivers-license-form' )
  const pushBtn = document.getElementById()
  licenseForm.addEventListener( 'input', event => {
    const licenseEle = document.getElementById( 'card-' + event.target.id )
    licenseEle.innerText = event.target.value
    const checkBox = document.getElementById( 'donor-status' )
  } )

  // ** Phase 2: Add focus and blur events to form inputs **
  ////add quick color change on focus, and removing it on blur.
  //Give active inputs a background color of lightgreen and no background color( initial state ) when inactive.Use the following to do so:
  ////Element: focus event
  ////Element: blur event

  Array.from( document.getElementsByClassName( 'form__input' ) ).forEach(
    inputEle => {
      inputEle.addEventListener( 'focus', event => {
        event.target.style.backgroundColor = 'lightseagreen'
      } )
      inputEle.addEventListener( 'blur', event => {
        event.target.style.backgroundColor = 'unset'
      } )
    }
  )

  // ** Phase 3: Check that license numbers match **

  document
    .querySelector( '.form__submit' ) // Pulls the first instance of form__submit
    .addEventListener( 'click', event => {
      // Tack the event listener onto that directly
      const licenseNum = document.getElementById( 'license-num' ).value
      const licenseNumConfirm = document.getElementById( 'license-num-confirm' )
        .value
      if ( licenseNum !== licenseNumConfirm ) {
        event.preventDefault()
        alert( 'Passwords must match!' )
      } else {
        alert( 'The form was submitted!' )
      }
    } )

  /*
  ////     form-validation.png
  window.addEventListener( "DOMContentLoaded", event => {
    // get the form element
    const form = document.getElementById( "signup-form" );

    const checkPasswordMatch = event => {

      // get the values of the pw field and pw confirm field
      const passwordValue = document.getElementById( "password" ).value;
      const passwordConfirmValue = document.getElementById( "confirm-password" )
        .value;

      // if the values  are not equal, alert the user
      // otherwise, submit the form (send to server)
      if ( passwordValue !== passwordConfirmValue ) {

        //// prevent the default submission behavior ( if the password and confirm password do not match)
        event.preventDefault();
        alert( "Passwords must match!" );
      } else {
        alert( "The form was submitted!" );
      }
    };

    // listen for submit event and run password check
    form.addEventListener( "submit", checkPasswordMatch );
  } );
  */

  // ** Phase 4: Update submit button click count **

  pushBtn.addEventListener( "click", ( event ) => {
    event.preventDefault();
    pushBtn.innerHTML = `${event.detail}`;
  } );


} );
