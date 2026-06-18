const loginForm = document.querySelector('#loginForm');
const userEmail = document.querySelector('#userEmail');
const password = document.querySelector('#password');
const userLogin = document.querySelector('#userLogin');
const userRegister = document.querySelector('#userRegister');
const loginError = document.querySelector('#loginError');

userRegister.addEventListener('click', function (e) {
	e.preventDefault();
	location.href = 'register.html';
});
