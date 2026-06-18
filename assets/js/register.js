class NewUser {
	constructor(_name, _surname, _email, _password) {
		this.name = _name;
		this.surname = _surname;
		this.email = _email;
		this.password = _password;
	}
}

const registerForm = document.querySelector('#registerForm');
const userName = document.querySelector('#name');
const userSurname = document.querySelector('#surname');
const userEmail = document.querySelector('#email');
const userPassword = document.querySelector('#password');
const regMessage = document.querySelector('#regMessage');

registerForm.addEventListener('submit', async function (e) {
	e.preventDefault();
	const newUser = new NewUser(
		userName.value,
		userSurname.value,
		userEmail.value,
		userPassword.value,
	);
	try {
		const response = await fetch('http://localhost:3000/register', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newUser),
		});
		const data = await response.json();
		if (!response.ok) {
			throw new Error('Email già presente');
		}
		registerForm.style.display = 'none';
		regMessage.textContent =
			'Registrazione completata, reindirizzamento al login...';
		setTimeout(() => (location.href = 'login.html'), 1500);
	} catch (err) {
		regMessage.textContent = err;
        registerForm.reset();
	}
});
