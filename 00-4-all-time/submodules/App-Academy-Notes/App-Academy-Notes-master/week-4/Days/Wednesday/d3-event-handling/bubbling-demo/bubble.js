document.addEventListener('DOMContentLoaded', (event) => {

	let middleDiv = document.getElementById('middle');

	middleDiv.onclick = (event) => {
		event.stopPropagation();

		console.log('middle div event triggered');
	}



	// middleDiv.addEventListener('click', event => {
	// 	event.stopPropagation();
	// 	// event.stopImmediatePropagation();
	// })

	// middleDiv.addEventListener('click', event => {
	// 	console.log('middle div event triggered');
	// })
})