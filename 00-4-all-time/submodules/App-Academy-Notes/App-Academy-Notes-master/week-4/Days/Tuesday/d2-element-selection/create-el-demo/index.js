document.addEventListener('DOMContentLoaded', () => {

	let header = document.getElementById('my-header');

	let colorList = document.getElementById('colors');

	let numberList = document.getElementById('numbers');



// ADD H1 TO HEADER


// method #1
let h1 = document.createElement('h1');
h1.innerText = 'Hello World';
header.appendChild(h1);



// method #2
// header.innerHTML = '<h1 class="my-class">Hello World</h1>'




// this does not work 
// header.innerText = "<h1>Hello World</h1>"





// ADD ITEMS TO COLOR AND NUMBER LISTS WITH CLASS NAME

// ('color__item', ["Red", "Green", "Blue"], colorList)
	function addItems(className, items, parent) {
		
		items.forEach(item => {
			let li = document.createElement('li');
			li.setAttribute('class', className);
			li.innerText = item;

			parent.appendChild(li);
		});
	}

	let colors = ["Red", "Green", "Blue"];
	let nums = ["One", "Two", "Three"];

	addItems('color__item', colors, colorList);
	addItems('number__item', nums, numberList);


});





// // SEPARATE EXAMPLE BELOW


// 	function addItem(parentName) {
// 		let body = document.querySelector(parentName);
// 		body.innerHTML = '<div>hello</div>';
// 	}



// // window.onload = addItem;

// let callback = (parent) => {
// 	addItem(parent);
// }

// document.addEventListener('DOMContentLoaded', callback);



