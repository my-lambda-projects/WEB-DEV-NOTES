window.addEventListener('DOMContentLoaded', (event) => {
	// ** Phase 1B: Update license with event delegation and event.target **
	const form = document.getElementById('drivers-license-form');
	form.addEventListener('input', (e) => {
		switch (e.target.id) {
			case 'title':
				document.getElementById('card-title').innerHTML = e.target.value;
				break;
			case 'first-name':
				document.getElementById('card-first-name').innerHTML = e.target.value;
				break;
			case 'last-name':
				document.getElementById('card-last-name').innerHTML = e.target.value;
				break;
			case 'eye-color':
				document.getElementById('card-eye-color').innerHTML = e.target.value;
				break;
			case 'height':
				document.getElementById('card-height').innerHTML = e.target.value;
				break;
			case 'license-num':
				// let confirmVal = document.getElementById('license-num-confirm').value;
				// document.getElementById('card-license-num').innerHTML =
				// 	e.target.value === confirmVal ? e.target.value : 'Confirm License Number';
				updateLicenseNum(e);
				break;
			case 'license-num-confirm':
				// let origVal = document.getElementById('license-num').value;
				// document.getElementById('card-license-num').innerHTML =
				// 	e.target.value === origVal ? e.target.value : 'Confirm License Number';
				updateLicenseNum(e);
				break;
			case 'donor-status':
				let licenseStatus = document.getElementById('card-donor-status');
				licenseStatus.innerHTML = e.target.checked ? 'Donor' : 'Non-Donor';
				break;
			default:
				break;
		}
	});

	// ** Phase 2: Add focus and blur events to form inputs **

	// focus and blur events do not bubble.
	// clicking the input will not bubble the focus event to the form
	// we use capture instead of bubble (true as third argument)
	form.addEventListener(
		'focus',
		(e) => {
			if (e.target.tagName === 'INPUT') {
				e.target.style.backgroundColor = 'lightgreen';
			}
		},
		true
	);

	form.addEventListener(
		// 'blur',
		'focusout',
		(e) => {
			if ([ 'license-num', 'license-num-confirm' ].includes(e.target.id) && !checkMatchingLicenseNum()) {
				e.target.style.backgroundColor = 'lightcoral';
				return;
			} else if (e.target.tagName === 'INPUT') {
				e.target.style.backgroundColor = 'initial';
			}
		}
		// true
	);

	// ** Phase 3: Check that license numbers match **
	// function checkMatchingLicenseNum(e) {
	// 	let origNum = document.getElementById('license-num');
	// 	let confirmNum = document.getElementById('license-num-confirm');
	// 	let cardLicenseNum = document.getElementById('card-license-num');

	// 	if (origNum.value === confirmNum.value) {
	// 		origNum.style.backgroundColor = 'initial';
	// 		confirmNum.style.backgroundColor = 'initial';
	// 		e.target.style.backgroundColor = 'lightgreen';
	// 		cardLicenseNum.innerHTML = origNum.value;
	// 	} else {
	// 		origNum.style.backgroundColor = 'lightcoral';
	// 		confirmNum.style.backgroundColor = 'lightcoral';
	// 		cardLicenseNum.innerHTML = 'Please Confirm Number';
	// 	}
	// }

	function checkMatchingLicenseNum() {
		let origVal = document.getElementById('license-num').value;
		let confirmVal = document.getElementById('license-num-confirm').value;
		return origVal === confirmVal;
	}

	function updateLicenseNum(e) {
		let origNum = document.getElementById('license-num');
		let confirmNum = document.getElementById('license-num-confirm');
		let cardLicenseNum = document.getElementById('card-license-num');

		if (origNum.value === confirmNum.value) {
			origNum.style.backgroundColor = 'initial';
			confirmNum.style.backgroundColor = 'initial';
			e.target.style.backgroundColor = 'lightgreen';
			cardLicenseNum.innerHTML = origNum.value;
		} else {
			origNum.style.backgroundColor = 'lightcoral';
			confirmNum.style.backgroundColor = 'lightcoral';
			cardLicenseNum.innerHTML = 'Please Confirm Number';
		}
	}

	// ** Phase 4: Update submit button click count **
	let count = 0;
	let submitButton = document.querySelector('button.form__submit');
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		count++;
		submitButton.innerHTML = `Submit (clicked ${count} times)`;
	});

	// Bonus
	let partsContainer = document.getElementById('body-parts-container');
	partsContainer.addEventListener('dragstart', handleDragStart);

	let photo = document.getElementById('license-photo');
	photo.addEventListener('drop', handleDrop);
	photo.addEventListener('dragenter', handleDragEnter);
	photo.addEventListener('dragleave', handleDragLeave);
	photo.addEventListener('dragover', handleDragOver);

	let partsList = document.getElementById('card-body-parts-list');

	function handleDragStart(e) {
		e.target.classList.add('is-being-dragged');
		e.dataTransfer.setData('text/plain', e.target.name);
		e.dataTransfer.dropEffect = 'move';
	}

	function handleDragEnter(e) {
		// Needed so that the "drop" event will fire.
		e.preventDefault();
		e.target.classList.add('is-active-drop-zone');
	}

	function handleDragLeave(e) {
		e.target.classList.remove('is-active-drop-zone');
	}

	function handleDragOver(e) {
		// Needed so that the "drop" event will fire.
		e.preventDefault();
	}

	function handleDrop(e) {
		const name = e.dataTransfer.getData('text/plain');
		const draggedElement = document.getElementsByName(name)[0];
		draggedElement.draggable = false;
		const newPart = document.createElement('li');
		newPart.innerText = name;
		partsList.appendChild(newPart);
		handleDragLeave(e);
		draggedElement.classList.remove('is-being-dragged');
		draggedElement.classList.add('was-added');
	}
});
