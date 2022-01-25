"useStrict";
const hamburger = document.querySelector('#menu');          // Variables
const closeBtn = document.querySelector('#close_icon');
const menuLinks = document.querySelectorAll('.menu_link');
const menu = document.querySelector('.menu-space');

let displayMenu = () => {                                   // Functions
    menu.style.display = "block";
};
let closeMenu = () => {
    menu.style.display = "none";
};   
 
menuLinks.forEach(el => el.addEventListener('click', closeMenu)); // Implementations
hamburger.addEventListener('click', displayMenu);
closeBtn.addEventListener('click', closeMenu);