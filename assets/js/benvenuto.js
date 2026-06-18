const welcomeUser = document.querySelector('#welcomeUser');
const btnExit = document.querySelector('#exit');

const accessToken = localStorage.getItem('accessToken');
if (!accessToken) {
	location.href = 'login.html';
}

const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
const userName = loggedUser.name;
const userSurname = loggedUser.surname;

welcomeUser.textContent = `Ciao ${userName} ${userSurname}, sei nella tua area riservata!`;

btnExit.addEventListener('click', function (e) {
	e.preventDefault();
	welcomeUser.textContent =
		'Tra tre secondi sarai reindirizzato alla pagina di login...';
	setTimeout(() => {
		localStorage.removeItem('accessToken');
		localStorage.removeItem('loggedUser');
		location.href = 'login.html';
	}, 3000);
});
