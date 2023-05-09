// Підключення функціоналу "Чертоги Фрілансера"
import {isMobile} from './functions.js';
// Підключення списку активних модулів
import {flsModules} from './modules.js';
// Підключення маски
// import Inputmask from 'inputmask';

function addActiveClass() {
	let menuItems = document.getElementsByClassName('menu__link');
	for (let i = 0; i < menuItems.length; i++) {
		menuItems[i].addEventListener('click', function () {
			if (window.innerWidth > 767) {
				for (let j = 0; j < menuItems.length; j++) {
					menuItems[j].parentElement.classList.remove('_active-border');
				}
				this.parentElement.classList.add('_active-border');
			}
		});
	}
}
addActiveClass();
// const phoneInput = document.getElementById('phone_number');
// Inputmask({mask: '+380 99 999 99 99'}).mask(phoneInput);
// function validatePhoneNumber(phoneNumber) {
// 	var phonePattern = /^[+]{1}[0-9]{1,3}[ ][(]{0,1}[0-9]{1,4}[)]{0,1}[0-9\- ]{5,14}$/;
// 	return phonePattern.test(phoneNumber);
// }

// var inputPhoneNumber = document.getElementById('phone_number').value;
// if (validatePhoneNumber(inputPhoneNumber)) {
// 	console.log('Номер телефону є правильним');
// } else {
// 	console.log('Номер телефону є неправильним');
// }
// validatePhoneNumber();

// document.addEventListener('DOMContentLoaded', () => {
// 	var phones = document.querySelectorAll('input[name=phone_number]');
// 	for (var i = phones.length - 1; i >= 0; i--) {
// 		processInput(phones[i]);
// 	}
// });

// function processInput(phone) {
// 	var iti = window.intlTelInput(phone, {
// 		allowDropdown: true,
// 		initialCountry: 'UA',
// 		nationalMode: true,
// 		autoPlaceholder: 'aggressive',
// 		formatOnDisplay: true,
// 		separateDialCode: true,
// 		utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.15/js/utils.min.js',
// 	});
// 	phone.addEventListener('input', () => {
// 		phone.setCustomValidity('');
// 		if (!iti.isValidNumber()) phone.setCustomValidity('Невірний номер');
// 	});
// }
// import intlTelInput from 'intl-tel-input';

// const input = document.querySelector('#phone_number');
// intlTelInput(input, {
// 	utilsScript: 'path/to/utils.js',
// 	allowDropdown: true,
// 	initialCountry: 'UA',
// 	nationalMode: true,
// 	autoPlaceholder: 'aggressive',
// 	formatOnDisplay: true,
// 	separateDialCode: true,
// 	utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.15/js/utils.min.js',
// });
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
