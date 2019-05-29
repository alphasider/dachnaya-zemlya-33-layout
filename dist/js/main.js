const menuBtn = document.querySelector('.menu-btn');
const headerNav = document.querySelector('.header-nav');
const headerMenu = document.querySelector('.header-menu');
const menuItems = document.querySelectorAll('.header-menu__item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        headerNav.classList.add('show');
        headerMenu.classList.add('show');
        menuItems.forEach(item => item.classList.add('show'));

        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        headerNav.classList.remove('show');
        headerMenu.classList.remove('show');
        menuItems.forEach(item => item.classList.remove('show'));

        showMenu = false;
    }
}