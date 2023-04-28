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
