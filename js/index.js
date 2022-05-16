import slideMenu from './menu.js';


slideMenu({
	openBtn: '.header__burger-btn',
	menu: '.navigation',
	classActiveMenu: 'navigation_active',
	closeTrigger: '.navigation__link, .navigation__close',
});

renderVideo();
menuLink();
search();

const API_KEY = 'f8d3320331781f06af992a4baca9fdf2';
