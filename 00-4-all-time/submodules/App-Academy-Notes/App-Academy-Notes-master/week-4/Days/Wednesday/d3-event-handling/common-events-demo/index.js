document.addEventListener('DOMContentLoaded', () => {
	//you can use onclick instead of event listener but you shouldn't because onclick is property of element so subsequent uses will overwrite previous 



	let button = document.getElementById('my-button');
	let span = document.getElementById('my-span');

	// add a click event listenener on the button
	button.addEventListener('click', (event) => {
		console.log(event)
		span.innerHTML = `${event.detail}`
	})






	let checkboxes = document.querySelectorAll('.checkbox'); //return value is node list which is array like structure (can itterate over it using forEach)
	let catImg = document.getElementById('cat-img');
	let dogImg = document.getElementById('dog-img');

	checkboxes.forEach(checkbox => {
		checkbox.addEventListener('click', (event) => { // when the event happens... do the function

			let img = event.target.name === 'dog' ? dogImg : catImg;

			if (checkbox.checked) {
				img.classList.add('hide');
			} else {
				img.classList.remove('hide');
			}
		})
	});




	let userInput = document.getElementById('user-input');
	let myDiv = document.getElementById('my-div'); //id should be a unique identifier... class may apply to many elements

	let validColors = ["red", "green", "blue", "yellow", "orange", "pink", "purple"]

	userInput.addEventListener('input', (event) => {

		let value = event.target.value;

		if (validColors.includes(value)) {
			myDiv.style.backgroundColor = value;
		}
	})







	// onclick vs addEventListener

	let otherButton = document.getElementById('other-button');

	// using onclick
	// stored as attribute on element
	// will reassign previous values
	otherButton.onclick = () => console.log('we will never see this!')
	otherButton.onclick = () => console.log('we will only see this') //this one will overwrite the one above it


	// using event listener
	// can register multiple listeners on the same element
	// otherButton.addEventListener('click', () => console.log('we will see this!'))
	// otherButton.addEventListener('click', () => console.log('we will see this too'))

})