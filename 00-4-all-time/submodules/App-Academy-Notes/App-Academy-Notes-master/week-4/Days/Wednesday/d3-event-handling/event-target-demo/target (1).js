window.addEventListener("DOMContentLoaded", event => {

	let list = document.getElementById('grid');

	list.addEventListener('click', (event) => {

		// the target will be whichever element triggers event
		console.log('Event.target : ', event.target);
		
		// current target will always be the UL because that is the element
		// we attached out event listener to
		console.log('Event.currentTarget : ', event.currentTarget);

	})
});