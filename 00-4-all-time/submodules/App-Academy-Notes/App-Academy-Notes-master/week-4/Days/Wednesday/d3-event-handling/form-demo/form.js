window.addEventListener("DOMContentLoaded", event => {

	// BLUR/FOCUS DEMO


	let inputs = document.getElementsByClassName('form__field'); //grabbing elements by class fourm field
	//returns HTML collection which is another array like structure ... cannot use for each on it ... need to turn it into an array to itterate over it 
	Array.from(inputs).forEach(input => {

		// when we click in input, change background to blue
		input.addEventListener('focus', (event) => { //when we click on input field
			event.target.style.backgroundColor = '#00808042';
		});

		// when we click away from input, change background back to white
		input.addEventListener('blur', (event) => {
			event.target.style.backgroundColor = 'white';
		})
	})






	// FORM VALIDATION DEMO 

	// get the form element
	const form = document.getElementById("signup-form");
	const password = document.getElementById("password");
	const passwordConfirm = document.getElementById("confirm-password");
	const email = document.getElementById('email');
	const name = document.getElementById('name');
	const body = document.querySelector('body')

	let errors = [];

	const checkPasswordMatch = event => {
		if (password.value !== passwordConfirm.value) {
			errors.push('Passwords must match') //closing over errors variable in outter scope
		}
	};

	const checkEmail = event => {
		if (!email.value.includes('@')) { //only checking that email includes @
			errors.push('Must provide a valid email')
		}
	}

	const checkInputs = event => {
		let myInputs = [password, passwordConfirm, email, name]
		for (let i = 0; i < myInputs.length; i++) { //itterating through array of elements
			let input = myInputs[i];
			if (input.value.length < 1) {
				errors.push('A required field is empty');
				return;
			}
		};
	}

	// listen for submit event and run password check
	form.addEventListener("submit", (event) => {
		event.preventDefault();

		let errorsContainer = document.getElementById('errors');
		errorsContainer.innerHTML = '';
		errors = [];
		//check inputs
		checkPasswordMatch();
		checkEmail();
		checkInputs();


		if (errors.length === 0) { //then change inner html to say form was successfully submitted
			body.innerHTML = "<h1>Your form was successfully submitted</h1>";

		} else {
			errors.forEach(error => {
				let el = document.createElement('li'); //cre
				el.innerText = error;
				errorsContainer.appendChild(el);
			})
		}
	});
});