const burgerIcon = document.querySelector(".burger-menu-icon");
const burgerMenu = document.querySelector(".burger-menu");

const icon1 = document.querySelector("#open-menu");  
const icon2 = document.querySelector("#close-menu");  

burgerIcon.addEventListener('click', function showBurgerMenu(params) {
	burgerMenu.classList.toggle('open-menu');
icon1.classList.toggle('switch-icon');
icon2.classList.toggle('switch2-icon');
});