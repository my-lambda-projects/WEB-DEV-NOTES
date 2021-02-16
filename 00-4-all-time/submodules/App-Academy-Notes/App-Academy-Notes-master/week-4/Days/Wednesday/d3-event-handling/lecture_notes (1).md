# VIDEO 1 - EVENT TARGET




Event Target and Current Target
- `event.target`: element on which event occurred (ele you clicked on)
- `event.currentTarget`: element the event handler is attached to






# VIDEO 2 - COMMON PAGE EVENTS


Common Events Overview
- "click" : fires when associated element has been clicked
- "input" : fires when value of INPUT, SELECT, or, TEXTAREA has changed



1. update click count via span


```js


	// method #1
	let span = document.getElementById('my-span');

	button.addEventListener('click', (event) => {
		console.log(event)
		span.innerHTML = `${event.detail}`
	})
	

	// method #2
	let span = document.getElementById('my-span');

	button.addEventListener('click', (event) => {
		let count = span.innerHTML
		count++
		span.innerText = count;
	})


```





2. hide / show images after checking box


```js

	// method #1
	let checkbox = document.getElementById('checkbox');
	let catImg = document.getElementById('cat-img')

	checkbox.addEventListener('click', (event) => {

		if (checkbox.checked) {
			catImg.style.display = 'none';
		} else {
			catImg.style.display = 'block';
		}
	})



	// method #2 - multiple checkboxes

	let checkboxes = document.querySelectorAll('.checkbox');
	let catImg = document.getElementById('cat-img');
	let dogImg = document.getElementById('dog-img');

	checkboxes.forEach(checkbox => {
		checkbox.addEventListener('click', (event) => {

			let img = event.target.name === 'dog' ? dogImg : catImg;

			if (checkbox.checked) {
				img.classList.add('hide');
			} else {
				img.classList.remove('hide');
			}
		})
	})


```


3. handling user input


```js

	let userInput = document.getElementById('user-input');
	let myDiv = document.getElementById('my-div');

	let validColors = ["red", "green", "blue", "yellow", "orange", "pink", "purple"]

	userInput.addEventListener('input', event => {

		let value = event.target.value;

		if (validColors.includes(value)) {
			myDiv.style.backgroundColor = value;
		}

	})

```



4. go over difference between addEventListener and onclick
- onclick
	* just a property
	* will be overwritten
	* inline JS is discouraged (highest specificity)
- addEventListenerr
	* bind event handler to element
	* can assign multiple handlers

```js

	let otherButton = document.getElementById('other-button');

	// using onclick
	otherButton.onclick = () => console.log('the button was clicked!')
	otherButton.onclick = () => console.log('we will only see this')


	// using event listenerr
	otherButton.addEventListener('click', () => console.log('we will see this!'))
	otherButton.addEventListener('click', () => console.log('we will see this too'))

```









# VIDEO 3 - FORM VALIDATION




Events Overview
- "focus" : fires when element has received focus (when user clicks in field)
	 * typically used for inputs
- "blur" : fires when element has lost focus (user clicks away0)
	 * typically used for inputs
- "submit" : fires when form's submit button is clicked
	 * attach event listener to form element



* TODO: SHOW THEM FOCUS / BLUR INPUT EVENTS


the "submit" event
- forms have special behavior 
- clicking a button in a <form></form> element triggers a "submit" event on form
- attach eventlistener for "submit" to the form




Default Actions
- some events have default behavior 
	- behavior that will occur when event fires, in addition to code in event handler
	- ex: default behavior for a form submission is to refresh the page
	- ex: default behavior of clicking on a link is to follow the URL
- sometimes we don't want the default behavior to occur
	- might not want the page to refresh
- `event.preventDefault()` : method called on event object to prevent default behavior




* TODO: SHOW THEM FORM SUBMISSION EVENT AND VALIDATIONS






# VIDEO 4 - BUBBLING PRINCIPLE




Event Bubbling
- event bubbles up through DOM, causing other events to happen



Event Propogation
- blanket term for event bubbling and event capturing
- phases:
	1. Event Capture Phase
	   - event works from window to target
		 - capturer listeners are called
		 - capturer: listener registered with third param as `true`
	2. Event Target Phase
		 - listeners registered on event target will be called
	3. Event Bubbling Phase
		 - event bubbles up through DOM
		 - invokes registered event handlers on ancestor elements






# VIDEO 5 - DRAG AND DROP



Drag Events
- dragstart handler: occurs when the user clicks the mouse and starts dragging
- dragenter handler: occurs when element enters drop zone
- dragover handler: occurs when the dragged element is over the drop target
- dragleave handler: occurs when the dragged element leaves the drop target
- drop handler: occurs when the user releases the mouse click and "drops" the element



Drag and Drop Process
1. add attribute `draggable="true"` to element you want to drag
2. register `dragstart` event on draggable element
   - fires when user clicks the mouse and starts dragging
   - event handler should set relevant data in `dataTransfer` object
3. can subscribe to four events in "drop zone"
	 - `dragenter`, `dragover`, `dragleave`, `drop`
   - must `preventDefault` on `dragenter` and `dragover` events in order for `drop` event to fire



Data Transfer Object
- includes drag event's state (i.e type of drag being done - move/copy)
- includes drag's data (one or more items)


