document.addEventListener('DOMContentLoaded', () => {
	//! every time the page is refreshed all the code in this event listener is run.


	// ////storing items in local storage
	// let key = "TAs";
	// let value = ["James", "Brad", "Kristen", "Senyo"];
	// //must serialize value before storing in local storage
	// let serializedValue = JSON.stringify(value);
	// localStorage.setItem(key, serializedValue);
	// // 


	// //retrieving items from local storage
	// let instructors = localStorage.getItem("TAs");
	// console.log("instructors : ", instructors);
	// console.log("typeof instructors: ", typeof instructors); // string


	// //deserializing values retrieved from local storage
	// let deserializedInstructors = JSON.parse(instructors);
	// console.log("deserializedInstructors: ", deserializedInstructors);
	// console.log("typeof deserializedInstructors: ", typeof deserializedInstructors); // object



	// //this wont work because instructors is JSON str not a JS obj
	// instructors.forEach((ta) => console.log(ta));


	// //this will work because deserializedInstructors is now a JS obj
	// deserializedInstructors.forEach((ta) => console.log(ta));


	// TODO: 
	// 1. store the values entered for email, first and last in local storage
	// 2. if values exist in local storage, pre populate relevant inputs
	// with those values
	//! Can change to session storage just by changing the word localStorage to sessionStorage before the get and set methods!!!!!!!!!!!!!!!!!!!!!!!!


	let storedFirst = localStorage.getItem('first');
	let storedLast = localStorage.getItem('last');
	let storedEmail = localStorage.getItem('email');

	email.value = storedEmail;
	first.value = storedFirst;
	last.value = storedLast;



	let first = document.getElementById('first'); // a DOM node is an object representation of an element in our html file
	let last = document.getElementById('last');
	let email = document.getElementById('email');
	let form = document.getElementById('my-form');
	//forms have submit event that fires when we click the submit button that exists inside of them
	form.addEventListener('submit', (event) => {
		//! in general you want to prevent the default behavior of many forms because the default behavior is to refresh the page
		event.preventDefault();
		//storage.setItem(keyName, keyValue);
		localStorage.setItem('first', first.value);
		localStorage.setItem('last', last.value);
		localStorage.setItem('email', email.value);
	})



})