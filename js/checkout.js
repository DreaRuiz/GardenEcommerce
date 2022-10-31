// Exercise 7
function validate() {
	let error = 0;

	// Get the input fields
	let fName = document.getElementById('fName');
	let fEmail = document.getElementById('fEmail');
	let fAddress = document.getElementById('fAddress');
	let fLastN = document.getElementById('fLastN');
	let fPassword = document.getElementById('fPassword');
	let fPhone = document.getElementById('fPhone');

	// Get the error elements

/* 	let errorEmail = document.getElementById('errorEmail');
	let errorAddress = document.getElementById('errorAddress');
	let errorLastN = document.getElementById('errorLastN');
	let errorPassword = document.getElementById('errorPassword');
	let errorPhone = document.getElementById('errorPhone'); */

	// Invalid items
	const letters = /^[A-Za-z]+$/;
	const numbers = /^[0-9]+$/;
	const letterNumber = /^[0-9a-zA-Z]+$/;
	const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	// Validate fields entered by the user: name, phone, password, and email
	if (fName.value == '' || fName.value.length <= 3 || !fName.value.match(letters)) {
		document.getElementById('fName').classList.add('is-invalid');
		error++;
	}
	if (fEmail.value == '' || fEmail.length <= 3 || !fEmail.value.match(mailformat)) {
		document.getElementById('fEmail').classList.add('is-invalid');
		error++;
	}
	if (fPhone.value == '' || fPhone.length <= 3 || !fPhone.value.match(numbers)) {
		document.getElementById('fPhone').classList.add('is-invalid');
		error++;
	}
	if (fPassword.value == '' || fPassword.length <= 3 || !fPassword.value.match(letterNumber)) {
		document.getElementById('fPassword').classList.add('is-invalid');
		error++;
	}

	if (fAddress.value == '' || fAddress.length <= 3) {
		document.getElementById('fAdress').classList.add('is-invalid');
		error++;
	}
	if (fLastN.value == '' || fLastN.length <= 3) {
		document.getElementById('fLastN').classList.add('is-invalid');
		error++;
	}

	if (error > 0) {
		return false;
	} else {
		return true;
	}
}
