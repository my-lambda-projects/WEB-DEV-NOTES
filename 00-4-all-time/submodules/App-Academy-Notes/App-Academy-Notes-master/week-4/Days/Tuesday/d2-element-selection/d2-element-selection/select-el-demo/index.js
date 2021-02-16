document.addEventListener('DOMContentLoaded', () => {


	// 1. getElementById
	let header = document.getElementById('my-header');
	console.log('getElementById: ', header);



	// 2. getElementByClassName
	let colorItems = document.getElementsByClassName('color__item');
	console.log('getElementsByClassName: ', colorItems);




	// 3. querySelectorAll
	let numberItems = document.querySelectorAll('.number__item');
	console.log('querySelectorAll: ', numberItems);




	// 4. getElementByClassName
	let lists = document.getElementsByTagName('ul');
	console.log('getElementsByTagName: ', lists);



	// 5. querySelector
	let firstLabel = document.querySelector('label');
	console.log('querySelector: ', firstLabel)









// ITERATING THROUGH HTML COLLECTIONS



// ITERRATING THROUGH NODE LIST



// STATIC NODE LIST VS LIVE HTML COLLECTION



})

