// background color related variables
let bgColorInput = document.querySelector('#bgcolor');
let htmlElem = document.querySelector('html');
// font color related variables
let fontColorInput = document.querySelector('#fontcolor');
let pElem = document.querySelector('p');
// font style related variables
let fontStyleSelect = document.querySelector('#font');
let fontStyleElem = document.querySelector('.font-style');
// image related variables
let imageSrcSelect = document.querySelector('#image');
let imageElem = document.querySelector('img');
// textarea related variables
let textAreaElem = document.querySelector('textarea');
let textAreaInput = document.querySelector('#textArea');
let noteBtn = document.querySelector('#note-btn');
let getNoteBtn = document.querySelector('#get-note-btn');
// clear storage button
const clearStorageButton = document.querySelector('.clear');
// storage quota message div
const storageQuotaMsg = document.getElementById('storage-quota-msg');
// empty storage button
const emptyStorageButton = document.querySelector('.empty');

// clear storage function. Only clears the note local storage.
function clearStorage() {
  let note = document.querySelector('#textArea');
  note.value = '';
  localStorage.removeItem('note', note.value);
}

// empty local storage, meaning everything.
function emptyStorage() {
  let note = document.querySelector('#textArea');
  note.value = '';
  localStorage.clear();
}

// check for local storage
function localStorageSupport() {
  return typeof Storage !== 'undefined';
}

/* if there isn't a 'bgcolor' key to get in local storage, make a call to populateStorage() function.  Else, make a call to the setStyles() function. */
if (
  !localStorage.getItem('bgcolor') ||
  !localStorage.getItem('fontfamily') ||
  !localStorage.getItem('image') ||
  !localStorage.getItem('fontcolor')
) {
  populateStorage();
} else {
  setStyles();
}

/* populate storage using the setItem() method. Also check for localStorage support and storage quota. */
function populateStorage() {
  // run detection with inverted expression
  if (!localStorageSupport) {
    // change value to inform visitor of no session storage support
    storageQuotaMsg.innerHTML = 'Sorry. No HTML5 session storage support here.';
  } else {
    try {
      localStorage.setItem('bgcolor', document.getElementById('bgcolor').value);
      localStorage.setItem('fontfamily', document.getElementById('font').value);
      localStorage.setItem('image', document.getElementById('image').value);
      localStorage.setItem(
        'fontcolor',
        document.querySelector('#fontcolor').value
      );
      localStorage.setItem('note', document.querySelector('#textArea').value);
      setStyles();
    } catch (domException) {
      domException = new DOMException();
      if (
        domException.name === 'QUOTA_EXCEEDED_ERR' ||
        domException.name === 'NS_ERROR_DOM_QUOTA_REACHED'
      ) {
        storageQuotaMsg.innerHTML = 'Local Storage Quota Exceeded!';
      }
    }
  }
}

/* Set styles of body background color, font style, image selection, and paragraph font color using the getItem() method to retrieve their values from local storage. */
function setStyles() {
  let currentBgColor = localStorage.getItem('bgcolor');
  let currentFont = localStorage.getItem('fontfamily');
  let currentImage = localStorage.getItem('image');
  let currentFontColor = localStorage.getItem('fontcolor');

  document.getElementById('bgcolor').value = currentBgColor;
  document.getElementById('font').value = currentFont;
  document.getElementById('image').value = currentImage;
  document.getElementById('fontcolor').value = currentFontColor;
  document.querySelector('.font-color').value = currentFontColor;

  htmlElem.style.backgroundColor = '#' + currentBgColor;
  pElem.style.fontFamily = currentFont;
  fontStyleElem.style.color = '#' + currentFontColor;
  imageElem.setAttribute('src', currentImage);
}

// save textarea text to local storage on click
noteBtn.addEventListener('click', () => {
  localStorage.setItem('note', document.querySelector('#textArea').value);
});

// get note local storage value and save it to value of textarea text
getNoteBtn.addEventListener('click', () => {
  localStorage.getItem('note', document.querySelector('#textArea').value);
  document.querySelector('#textArea').value = localStorage.getItem('note');
});

// clear the note local storage key value
clearStorageButton.addEventListener('click', clearStorage);
// empty local storage completely
emptyStorageButton.addEventListener('click', emptyStorage);
// listen for change in background color input field
bgColorInput.addEventListener('change', populateStorage);
// listen for change in font color input field
fontColorInput.addEventListener('change', populateStorage);
// listen cor change in selection of font style
fontStyleSelect.addEventListener('change', populateStorage);
// listen for change in image selection
imageSrcSelect.addEventListener('change', populateStorage);
// listen for changes in the textarea element
textAreaInput.addEventListener('change', populateStorage);
