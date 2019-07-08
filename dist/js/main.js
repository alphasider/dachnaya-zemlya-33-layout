// Меню бургер
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


const tablinks = document.querySelectorAll('.articles-tabs__item'); // Вкладки
const tabcontent = document.querySelectorAll('.articles-content__item'); // Содержимое

// Табы на странице новости
function switchTab(e, id) {

  // let evTar = e.target;
  // let curTar = e.currentTarget;
  let clickedTab = e.target.attributes['id'].value;
  let activeTabContent = document.querySelector('.articles-content__item.' + clickedTab);

  // Скрытие всех данных
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Удаление активных классов
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" articles-tabs__item_active", "");
  }

  // console.log(evTar, curTar);

  activeTabContent.style.display = "block";
  e.currentTarget.className += " articles-tabs__item_active";
}

// const tablinks = document.querySelector('.articles-tabs');
for (let i = 0; i < tablinks.length; i++) {
  tablinks[i].addEventListener('click', switchTab);
}



// Слайдер: Slick.js
$(document).ready(function () {

  // Слайдер на главной странице
  $('.home-slider').slick({
    infinite: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1199,
      settings: {
        arrows: false
      }
    }]
  });

  // Слайдер на странице участка
  $('.product-slider').slick({
    infinite: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1199,
      settings: {
        arrows: false
      }
    }]
  });
});