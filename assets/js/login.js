const loginForm = document.querySelector('#loginForm');
const userEmail = document.querySelector('#userEmail');
const userPass = document.querySelector('#userPass');
const userLogin = document.querySelector('#userLogin');
const userRegister = document.querySelector('#userRegister');
const loginError = document.querySelector('#loginError');

userRegister.addEventListener('click', function (e) {
	e.preventDefault();
	location.href = 'register.html';
});

loginForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    const loggedUser = {
        email: userEmail.value,
        password: userPass.value
    }

    try {
        const response = await fetch('http://localhost:3000/login', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(loggedUser)
        });
        const data = await response.json();
        if(!response.ok) throw new Error('Email o password non corrette');
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('loggedUser', JSON.stringify(data.user));
        loginError.textContent = 'Login corretto, accesso all\'area riservata...';
        setTimeout(() => {
            location.href = 'benvenuto.html';
        }, 3000);
    } catch (err) {
        loginError.textContent = err.message;
        loginForm.reset();
    }
});
