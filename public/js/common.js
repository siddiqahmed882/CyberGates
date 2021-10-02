const hamburger = document.getElementById('hamburger');
const navItems = document.querySelector('.nav__items');
const dropdown = document.querySelector('.dropdown__container');
const dropdownList = document.querySelector('.dropdown__menu');

hamburger.addEventListener('click', () => {
  if (hamburger.classList.contains('menu-active')) {
    hamburger.classList.remove('menu-active');
    navItems.style.animation = 'slideout 200ms ease forwards';
  } else {
    hamburger.classList.add('menu-active');
    navItems.style.animation = 'slidein 200ms ease forwards';
  }
});

dropdown.addEventListener('click', () => {
  if (dropdown.getAttribute('aria-expanded') === 'false') {
    dropdown.setAttribute('aria-expanded', true);
    dropdownList.setAttribute('aria-hidden', false);
    dropdown.querySelector('i').style.transform = 'rotate(-180deg)';
    dropdownList.style.display = 'block';
    dropdownList.style.opacity = 1;
    dropdownList.style.transform = 'translateY(0)';
  } else {
    dropdown.setAttribute('aria-expanded', false);
    dropdownList.setAttribute('aria-hidden', true);
    dropdown.querySelector('span > i').style.transform = 'rotate(0deg)';
    dropdownList.style.display = '';
    dropdownList.style.opacity = 0;
    dropdownList.style.transform = 'translateY(-50%)';
  }
});
