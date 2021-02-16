# Week 4 Learning Objectives
## Browser Basics Lesson Learning Objectives

- Explain the difference between the BOM (browser object model) and the DOM(document object model).
    - the `document` object is a web page, and the DOM represents the object hierarchy of the document
      - html all gets rendered into an object with the tree structure, with nodes representing each html element
    - the browser object model consists of a hierarchy of browser objects—one of which is the `document`
        - the top level object in the BOM is the `window`
        - `window.document` contains a reference to the document the window contains (can be shortened to `document`)
- Given a diagram of all the different parts of the Browser identify each part. Use the Window API to change the innerHeight of a user's window.
  - user interface (UI) is the browser interface. everything except the actual content
  - browser engine manages interactions between UI and rendering engine
  - displays or renders the page content. parses HTML and CSS and render that content
  - networking: handles network calls (e.g. HTTP requests)
  - javascript interpreter: parses and executes js code
  - UI backend: used for drawing basic widgets like combo boxes and windows; uses operating system user interface methods
  - data storage: peristance of data stored in browser (e.g. cookies, localStorage, sessionStorage)
    ![from: https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/](./browser-components.png)
```javascript
// Open a new window
newWindow = window.open("", "", "width=100, height=100");

// Resize the new window
newWindow.resizeTo(500, 500);
```
- Identify the context of an anonymous functions running in the Browser (the window).
    - `window`
- Given a JS file and an HTML file, use a script tag to import the JS file and execute the code therein when all the elements on the page load (using `DOMContentLoaded`)
    - `DOMContentLoaded` ensures that script will run when the document has been loaded without waiting for stylesheets, images and subframes to load.
```html
<!DOCTYPE html>
<html>
  <head>
    <script type="text/javascript" src="dom-ready-script.js"></script>
  </head>
  <body></body>
  <html></html>
</html>
```
```javascript
window.addEventListener("DOMContentLoaded", event => {
  console.log("This script loaded when the DOM was ready.");
});
```
- Given a JS file and an HTML file, use a script tag to import the JS file and execute the code therein when the page loads
```html
<!DOCTYPE html>
<html>
  <head>
    <script type="text/javascript" src="window-load-script.js"></script>
  </head>
  <body></body>
  <html></html>
</html>
```
```javascript
window.onload = () => {
  console.log(
    "This script loaded when all the resources and the DOM were ready."
  )
}
```
- Identify three ways to prevent JS code from executing until an entire HTML page is loaded
  - use `DOMContentLoaded` event in external JS file (event listener)
    - `window.onload` or `window.addEventListener("DomContentLoaded"...)`
  - put a `<script>` tag importing you external code at the bottom of your html file
  - use `async defer` in the script tag in the html file
- Label a diagram on the Request/Response cycle.
  ![from: https://www.oreilly.com/library/view/using-google-app/9780596802462/](./request-response-cycle.png)
- Explain the Browser's main role in the request/response cycle.
    - Parsing HTML, CSS, JS
    - Rendering that information to the user by constructing a DOM tree and rendering it)
- Given several detractors - identify which real-world situations could be implemented with the Web Storage API
  - the critical piece is that Web Storage API is useful when we only need the stuff stored client-side
    - shopping cart, forms saving inputs etc.
- Given a website to visit that depends on cookies (like Amazon), students should be able to go to that site add something to their cart and then delete that cookie using the Chrome Developer tools in order to empty their cart.
  - go into inspector, "application" tab, under cookies
    - delete, refresh page, see what changes
    - names are cryptic by design
  - on amazon, this is the "session-id"
    - unless you're logged in, in which case the cart may be stored somewhere other than just Web Storage API
  - more generally, cookies are small files (<4KB) that are left on a visitor's computer by a website, via a web browser. they store stateful information as key-value pairs. can be modified with javasript through `document.cookie`
    - `document.cookie = "cookieKey=cookieValue";`
    - session cookies are lost once the browser window is closed
    - persistent cookies have an expiration date
      - when deleting a cookie in javascript, you can use the expiration date to get rid of a cookie—just set the expiration to a date in the past
        - `document.cookie = "cookieKey=; expires = Thu, 01 Jan 1970 00:00:00 GMT";`


## Element Selection Lesson Learning Objectives

- Given HTML that includes `<div id=”catch-me-if-you-can”>HI!</div>`, write a JavaScript statement that stores a reference to the `HTMLDivElement` with the `id` “catch-me-if-you-can” in a variable named “divOfInterest”.
  - `getElementById` allows you to reference a single element by its `id`
```javascript
let divOfInterest = document.getElementById('catch-me-if-you-can');
```
- Given HTML that includes seven SPAN elements each with the class “cloudy”, write a JavaScript statement that stores a reference to a NodeList filled with references to the seven HTMLSpanElements in a variable named “cloudySpans”.
  - `querySelectorAll` references all elements with the class name "cloudy" as a static [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)
```javascript
let cloudySpans = document.querySelectorAll('span.cloudy');
```
- Given an HTML file with HTML, HEAD, TITLE, and BODY elements, create and reference a JS file that in which the JavaScript will create and attach to the BODY element an H1 element with the id "sleeping-giant" with the content "Jell-O, Burled!".
  - create new elements with `document.createElement()` and `document.createTextNode`, and append them to existing DOM elements with `Element.appendChild()`
```javascript
const addElement = () => {
  const myElement = document.createElement("h1"); // create new element
  myElement.setAttribute("id", "sleeping-giant"); // set id
  // create new text element
  const myNewContent = document.createTextNode("Jello-Burled!");
  // attach the text as a node to the new element
  myElement.appendChild(myNewContent);
  // attach the new element to the document
  document.body.appendChild(myElement);
}
window.onload = addElement;
```
- Given an HTML file with HTML, HEAD, TITLE, SCRIPT, and BODY elements with the SCRIPT's SRC attribute referencing an empty JS file, write a script in the JS file to create a DIV element with the id "lickable-frog" and add it as the last child to the BODY element.
```javascript
const addElement = () => {
  const myFrogElement = document.createElement("div");
  myFrogElement.setAttribute("id", "lickable-frog");
  document.body.appendChild(myFrogElement)
}
window.onload = addElement;
```
- Given an HTML file with HTML, HEAD, TITLE, SCRIPT, and BODY elements with no SRC attribute on the SCRIPT element, write a script in the SCRIPT block to create a UL element with no id, create an LI element with the id "dreamy-eyes", add the LI as a child to the UL element, and add the UL element as the first child of the BODY element
```HTML
<!DOCTYPE html>
<html>
  <head>
    <script type="text/javascript">
      const addListElement = () => {
        const myUL = document.createElement("ul");
        const myLI = document.createElement("li");
        myLI.setAttribute("id", "dreamy-eyes");
        myUL.appendChild(myLI);
        document.body.appendChild(myUL);
      }
      window.onload = addListElement;
    </script>
  </head>
  <body></body>
</html>
```
- Write JavaScript to add the CSS class "i-got-loaded" to the BODY element when the window fires the DOMContentLoaded event.
```javascript
window.addEventListener("DOMContentLoaded", event => {
  document.body.className = "i-got-loaded";
});
```
- Given an HTML file with a UL element with the id "your-best-friend" that has six non-empty LIs as its children, write JavaScript to write the content of each LI to the console.
  - access children nodes with `NodeList.childNodes`
```javascript
window.addEventListener("DOMContentLoaded", event => {
  const parent = document.getElementById("your-best-friend")l
  const childNodes = parent.childNodes;
  for (let value of childNodes.values()) {
    console.log(value);
  }
});
```
- Given an HTML file with a UL element with the id "your-worst-enemy" that has no children, write JavaScript to construct a string that contains six LI tags each containing a random number and set the inner HTML property of ul#your-worst-enemy to that string.
  - update DOM elements with `Element.innerHTML`
```javascript
// generate a random number for each list item
const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max));
};

// listen for DOM ready event
window.addEventListener("DOMContentLoaded", event => {
  // push 6 LI elements into an array and join
  const liArr = [];
  for (let i = 0; i < 6; i++) {
    liArr.push("<li>" + getRandomInt(10) + "</li>");
  }
  const liString = liArr.join(" ");

  // insert string into the DOM using innerHTML
  const listElement = document.getElementById("your-worst-enemy");
  listElement.innerHTML = liString;
});
```
- Write JavaScript to update the title of the document to the current time at a reasonable interval such that it looks like a real clock.
```javascript
window.addEventListener("DOMContentLoaded", event => {
  const title = document.getElementById("title");
  const time = () => {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    title.innerHTML = hours + ":" + minutes + ":" + seconds;
  };
  setInterval(time, 1000);
});
```

## Event Handling Lesson Learning Objectives

- Given an HTML page that includes `<button id="increment-count">I have been clicked <span id="clicked-count">0</span> times</button>`, write JavaScript that increases the value of the content of span#clicked-count by 1 every time button#increment-count is clicked.
  - you can add an eventListener for a click on a given `button`
  - update clicks everytime the event occurs
  - `button.onclick` can also be used but this overrides existing event listeners, so the  `addEventListener` method is preferred
  - the `.detail` attribute can also be used—counts clicks but has other uses
```javascript
window.addEventListener("DOMContentLoaded", event => {
  const button = document.getElementById("increment-count");
  const count = document.getElementById("clicked-count");
  let clicks = 0;
  button.addEventListener("click", event => {
    clicks += 1;
    count.innerHTML = clicks;
  });
});
```
- Given an HTML page that includes `<input type="checkbox" id="on-off"><div id="now-you-see-me">`Now you see me`</div>`, write JavaScript that sets the display of div#now-you-see-me to "none" when input#on-off is checked and to "block" when input#on-off is not checked.
  - changing the style in the css to `display: "none"` can be used to hide an element
  - one solution is to change the css style.display property for the div directly when the click event occurs
  - another solution is to use `classList.remove()` and `classList.add()` in order to change which styles apply to the element when the event occurs
    - this is more efficient when changing many properties at once so you don't have to change them all individually
  - sort of related, you can use the `data-` attribute to save custom information to a node
    - and get attributes more generally with `.getAttribute`
  - also worth mentioning the `.checked attribute` that checkboxes have
```javascript
window.addEventListener("DOMContentLoaded", event => {
  // store the elements we need in variables
  const checkbox = document.getElementById("on-off");
  const divShowHide = document.getElementById("now-you-see-me");
  // add an event listener for the checkbox click
  checkbox.addEventListener("click", event => {
    // use the 'checked' attribute of checkbox inputs
    // returns true if checked, false if unchecked
    if (checkbox.checked) {
      // if the box is checked, show the div
      divShowHide.style.display = "block";
      // else hide the div
    } else {
      divShowHide.style.display = "none";
    }
  });
});
```
- Given an HTML file that includes `<input id="stopper" type="text" placeholder="Quick! Type STOP">`, write JavaScript that will change the background color of the page to cyan five seconds after a page loads unless the field input#stopper contains only the text "STOP".
  - when you have an input tag, whatever the user types in will be available to you as the `value` attribute
```javascript
// script.js
// run when the DOM is ready
window.addEventListener("DOMContentLoaded", event => {
  const stopCyanMadness = () => {
    // get the value of the input field
    const inputValue = document.getElementById("stopper").value;
    // if value is anything other than 'STOP', change background color
    if (inputValue !== "STOP") {
      document.body.style.backgroundColor = "cyan";
    }
  };
  setTimeout(stopCyanMadness, 5000);
});
```
- Given an HTML page with that includes `<input type=”text” id=”fancypants”>`, write JavaScript that changes the background color of the textbox to #E8F5E9 when the caret is in the textbox and turns it back to its normal color when focus is elsewhere.
```javascript
window.addEventListener("DOMContentLoaded", event => {
  const input = document.getElementById("fancypants");

  input.addEventListener("focus", event => {
    event.target.style.backgroundColor = "#E8F5E9";
  });
  input.addEventListener("blur", event => {
    event.target.style.backgroundColor = "initial";
  });
});
```
- Given an HTML page that includes a form with two password fields, write JavaScript that subscribes to the forms submission event and cancels it if the values in the two password fields differ.
  - listen for "submit" event with `addEventListener`
  - get the values from the forms with `getElementByID`
  - if the passwords don't match, prevent form submission with `event.preventDefault()`
    - the default action if you submit a form is to submit the form and refreshes the page
```javascript
// script.js
window.addEventListener("DOMContentLoaded", event => {
  // get the form element
  const form = document.getElementById("signup-form");

  const checkPasswordMatch = event => {
    // get the values of the pw field and pw confirm field
    const passwordValue = document.getElementById("password").value;
    const passwordConfirmValue = document.getElementById("confirm-password").value;
    // if the values are not equal, alert the user
    // otherwise, submit the form
    if (passwordValue !== passwordConfirmValue) {
      // prevent the default submission behavior
      event.preventDefault();
      alert("Passwords must match!");
    } else {
      alert("The form was submitted!");
    }
  };
  // listen for submit event and run password check
  form.addEventListener("submit", checkPasswordMatch);
});
```
- Given an HTML page that includes a div styled as a square with a red background, write JavaScript that allows a user to drag the square around the screen.
  - make an element draggable with the draggable attribute and the ondragstart global event handler
    - `<div id="red-square" draggable="true"></div>`
  - you need _dragstart_ handler for when user clicks mouse and starts dragging and a _drop_ handler for when the mouse click is released
  - You can subscribe to one event on the thing you want to drag, the `dragstart` event. That event will allow you to customize the element and save data to the `dataTransfer` object.
  - You can subscribe to four events for the "drop zone" element(s): `dragenter`, `dragover`, and `dragleave.` If you want the drop event to work, you must subscribe to both `dragenter` and `dragover` and cancel the event using the `preventDefault()` method of the event.
```html
 <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Red Square is a Drag</title>
  <script type="text/javascript">
    const handleDragStart = e => {
      e.target.classList.add('is-being-dragged');
      e.dataTransfer.setData('text/plain', e.target.id);
      e.dataTransfer.dropEffect = 'move';
    };

    const handleDragEnter = e => {
      // Needed so that the "drop" event will fire.
      e.preventDefault();
      e.target.classList.add('is-active-drop-zone');
    };

    const handleDragLeave = e => {
      e.target.classList.remove('is-active-drop-zone');
    };

    const handleDragOver = e => {
      // Needed so that the "drop" event will fire.
      e.preventDefault();
    };

    const handleDrop = e => {
      const id = e.dataTransfer.getData('text/plain');
      const draggedElement = document.getElementById(id);
      draggedElement.draggable = false;
      e.target.appendChild(draggedElement);
    };

    window.addEventListener('DOMContentLoaded', () => {
      document
        .getElementById('red-square')
        .addEventListener('dragstart', handleDragStart);

      const dropZone = document.getElementById('drop-zone');
      dropZone.addEventListener('drop', handleDrop);
      dropZone.addEventListener('dragenter', handleDragEnter);
      dropZone.addEventListener('dragleave', handleDragLeave);
      dropZone.addEventListener('dragover', handleDragOver);
    });
  </script>
  <style>
    #drop-zone {
      align-items: center;
      border: 1px solid #DDD;
      color: #CCC;
      display: flex;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 2em;
      font-weight: bold;
      height: 200px;
      justify-content: center;
      position: absolute;
      right: 0;
      top: 100px;
      width: 200px;
    }

    #red-square {
      background-color: red;
      box-sizing: border-box;
      height: 100px;
      width: 100px;
    }

    .is-being-dragged {
      opacity: 0.5;
      border: 8px dashed white;
    }

    .is-active-drop-zone {
      background-color: blue;
      color:
    }
  </style>
</head>
<body>
  <div id="red-square" draggable="true"></div>
  <div id="drop-zone">drop zone</div>
</body>
</html>
  ```
- Given an HTML page that has 300 DIVs, create one click event subscription that will print the id of the element clicked on to the console.
  - `event.target` refers to the element on which the event occurred (e.g. a clicked element).
  - `event.currentTarget` refers to the element on which the event handler has been attached—sometimes this is the parent
```javascript
// Wait for the DOM to load
window.addEventListener("DOMContentLoaded", event => {
  // Add a click event listener on the document’s body
  document.body.addEventListener("click", event => {
    // console.log the event target’s ID
    console.log(event.target.id);
  });
});
```
- Identify the definition of the bubbling principle.
  - "When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors."
  - bubbling is when events “bubble” from the inner element up through parents
  - not all events bubble (e.g. focus events don't)
  - events like click or change or keypress, can be put on by prefixing the event name with the word "on". however, you should _never ever ever use that in real production code!_
    - "Don't ever use the on-event-name attribute version of an event handler. Instead, always use the addEventListener method of the DOM object that you get from something like document.getElementById or document.querySelector."
  - bubbling can be bad, so you can stop it with `event.stopPropagation()`
  - but it can also be useful—a single element/handler that will handle all it's children's events
```html
<ul id="my-list">
  <li>This is list item 1.</li>
  <li>This is list item 2.</li>
  <li>This is list item 3.</li>
  <li>This is list item 4.</li>
  <li>This is list item 5.</li>
</ul>
<script>
  document
    .getElementById('my-list')
    .addEventListener('click', e => {
       // will print out "This is list item X"
       // depending on which list item is clicked
      console.log(e.target.innerHTML);

      // always prints "my-list"
      console.log(e.currentTarget.id);
    });
</script>
```

## JSON Learning Objectives
The objective of this lesson is to familiarize you with the JSON format and how to serialize to and deserialize from that format.

The learning objectives for this lesson are that you can:

- Identify and generate valid JSON-formatted strings
  - _JSON is just a string. It's just text_
  - JSON always uses double quotes for strings
    - If your quotation mark delimited string has a quotation mark in it, put a backslash before the interior quotation mark
    - doesn't support multi-line strings—any new line characters will be replaced with `\n`
- Use `JSON.parse` to deserialize JSON-formatted strings
  - `JSON.parse(string);`
- Use `JSON.stringify` to serialize JavaScript objects
  - `JSON.stringify(object)`
- Correctly identify the definition of "deserialize"
  - decoding the text or binary and turning it back into data
- Correctly identify the definition of "serialize"
  - serialization is when you transform data into a string or a binary to send to another computer
- This lesson is relevant because JSON is the lingua franca of data interchange.


## Storage Lesson Learning Objectives

- Write JavaScript to store the value "I <3 falafel" with the key "eatz" in the browser's local storage.
  - `localStorage.setItem("eatz", "I <3 falafel");`
  - local storage has no expiration date and is deleted when browser cache is cleared (or using javascript). has larger storage than session storage or cookies
    - this is in contrast to session storage, which lasts only until the browser or tab is closed, and which has a limit of 5MB (still way larger than cookie limit)

- Write JavaScript to read the value stored in local storage for the key "paper-trail".
  - `const paperTrail = localStorage.getItem("paper-trail");`
