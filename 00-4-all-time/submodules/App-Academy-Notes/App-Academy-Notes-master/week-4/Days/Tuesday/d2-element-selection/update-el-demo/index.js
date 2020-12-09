

document.addEventListener('DOMContentLoaded', () => {

	// CAPITALIZE H1 TEXT

	// grabbing by className => document.querySelector('.<className>');
	// grabbing by ID  => document.querySelector('#<id>');
	// grabbing by tagname => document.querySelector('<tagname>');


	// method #1 using querySelector
	let h1 = document.querySelector('h1') 
	let oldText = h1.innerText; // 'Hello World';
	h1.innerText = oldText.toUpperCase();




	// method #2 using getElementsByClassName
	// let h1 = document.getElementsByClassName('h1')[0];
	// let oldText = h1.innerText; // 'Hello World';
	// h1.innerText = oldText.toUpperCase();




	
	// CAPITALIZE LABELS

	// node list solution
	let labels = document.querySelectorAll('label');
	labels.forEach(label => {
		let text = label.innerText;
		label.innerText = text.toUpperCase();
	})


	// // method #1 with hTMLCollection
	// let labels = document.getElementsByTagName('label');
	// Array.from(labels).forEach(label => {
	// 	let text = label.innerText;
	// 	label.innerText = text.toUpperCase();
	// })

	// // method #2 with hTMLCollection
	// for (let i = 0; i < labels.length; i++) {
	// 	let label = labels[i];
	// 	let text = label.innerText;
	// 	label.innerText = text.toUpperCase();
	// }




	// CAPITALIZE LIST ITEMS FOR COLORS AND NUMBERS

	let items = document.querySelectorAll('li');
	items.forEach(item => {
		item.innerText = item.innerText.toUpperCase();
	})



})