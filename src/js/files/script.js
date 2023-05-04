// Підключення функціоналу "Чертоги Фрілансера"
import {isMobile} from './functions.js';
// Підключення списку активних модулів
import {flsModules} from './modules.js';

function addActiveClass() {
	let menuItems = document.getElementsByClassName('menu__link');
	for (var i = 0; i < menuItems.length; i++) {
		menuItems[i].addEventListener('click', function () {
			if (window.innerWidth > 767) {
				for (var j = 0; j < menuItems.length; j++) {
					menuItems[j].parentElement.classList.remove('_active-border');
				}
				this.parentElement.classList.add('_active-border');
			}
		});
	}
}
addActiveClass();

// const form = document.getElementById('myForm');
// form.addEventListener('submit', function (event) {
// 	event.preventDefault();

// 	// Получаем данные из формы
// 	const formData = new FormData(form);
// 	const name = formData.get('name');
// 	const email = formData.get('email');
// 	const message = formData.get('message');

// 	// Отправляем сообщение в телеграм-бота
// 	const token = '5979999343:AAHbxXvf3E12lAp_n8s93jd3bspBKc1uNcA';
// 	const chatId = '-851583258';
// 	const bot = new TelegramBot(token, {polling: false});
// 	bot.sendMessage(chatId, `Новое сообщение от ${name} (${email}): ${message}`);

// 	// Очищаем поля формы
// 	form.reset();
// });
