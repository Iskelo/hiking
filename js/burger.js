"use strict";
function burgerMenu() {
	const menu = document.querySelector('.header__menu');
	const burger = document.querySelector('.header__burger');
	const b = document.querySelector('body');
	burger.addEventListener('click', () => {
		burger.classList.toggle('active');
		menu.classList.toggle('active');
		b.classList.toggle('lock');
	})
}
burgerMenu();

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
