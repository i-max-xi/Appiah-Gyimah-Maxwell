    "useStrict";
    
    // Variables
    let hamburger = document.querySelector('#menu');
    let close_btn = document.querySelector('#close_icon');
    let menu_links = document.querySelectorAll('.menu_link');
    let menu = document.querySelector('.menu-space');

    // Functions
    let displayMenu = () => {
        menu.style.display = "block";
    }
    let closeMenu = () => {
        menu.style.display = "none";
    }

    // Implementations
    menu_links.forEach(el => el.addEventListener('click', closeMenu));
    hamburger.addEventListener('click',displayMenu);
    close_btn.addEventListener('click',closeMenu);

