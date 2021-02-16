//! when you click on an input field and it changes color that is the blur and focus events
/*
//bubbling is when an event bubbles through the DOM causing a chain of other events as a result of
3 phases
-->capturing phase ... down dom until we get down to the element and
--> bubbling phase event originates on child and moves up to parent and then it's parent ... all the way through it's ancestor elements up to the window.
*/



window.addEventListener( "DOMContentLoaded", ( event ) => {
    const LICENSE_FORM = document.getElementById( "drivers-license-form" );
    const LICENSE_NUM = document.getElementById( "license-num" );
    const NUM_CONFIRM = document.getElementById( "license-num-confirm" );
    LICENSE_FORM.addEventListener( "input", ( userInput ) => {
        const licenseEl = document.getElementById( `card-${userInput.target.id}` );
        userInput.preventDefault();
        userInput.target.id === "donor-status" ?
            userInput.target.checked ?
            ( licenseEl.innerHTML = "Y" ) :
            ( licenseEl.innerHTML = "N" ) :
            !userInput.target.id.includes( "license-num" ) ?
            ( licenseEl.innerHTML = userInput.target.value ) :
            undefined;
    } );
    LICENSE_FORM.addEventListener( "submit", ( submitInput ) => {
        submitInput.preventDefault();
        const cardLicenseNum = document.getElementById( "card-license-num" );
        LICENSE_NUM.value !== NUM_CONFIRM.value ?
            alert( "License number not confirmed." ) :
            ( cardLicenseNum.innerHTML = LICENSE_NUM.value ),
            alert( "Form Submitted" );
    } );
    LICENSE_FORM.addEventListener(
        "focus",
        ( focusInput ) => {
            focusInput.target.style.background = "lightgreen";
            if ( LICENSE_NUM.value !== NUM_CONFIRM.value ) {
                LICENSE_NUM.style.background = "lightcoral";
                NUM_CONFIRM.style.background = "lightcoral";
            }
        },
        true
    );
    LICENSE_FORM.addEventListener(
        "blur",
        ( blurInput ) => {
            blurInput.target.style.background = "";
        },
        true
    );
    const submitButton = document.querySelector( ".form__submit" );
    const submitCount = document.querySelector( "#click-count" );
    let clickedTimes = 0;
    submitButton.addEventListener( "click", () => {
        clickedTimes++;
        submitCount.innerHTML = clickedTimes.toString();
    } );
} );
