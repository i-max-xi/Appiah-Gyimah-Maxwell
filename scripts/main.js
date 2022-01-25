'useStrict';

// Variables
const hamburger = document.querySelector('#menu');
const closeBtn = document.querySelector('#close_icon');
const menuLinks = document.querySelectorAll('.menu_link');
const menu = document.querySelector('.menu-space');

// Functions
const displayMenu = () => {
    menu.style.display = 'block';
};
const closeMenu = () => {
    menu.style.display = 'none';
};   
 
// Implementations
menuLinks.forEach((el) => el.addEventListener('click', closeMenu));
hamburger.addEventListener('click', displayMenu);
closeBtn.addEventListener('click', closeMenu);