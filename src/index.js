import './styles.css';
import template from './template/menu-item.hbs';
import item from './menu.json';

const menuMarkup = template(item);
const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('afterbegin', menuMarkup)

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const checkboxRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');
const themeRef = localStorage.getItem('theme');

checkTheme();

checkboxRef.addEventListener('change', switchTheme);

function switchTheme(evt) {
  if (evt.target.checked) {
    updateTheme(Theme.DARK, Theme.LIGHT);

    localStorage.setItem('theme', Theme.DARK);
  } else {
    updateTheme(Theme.LIGHT, Theme.DARK);

    localStorage.setItem('theme', Theme.LIGHT);
  }
}

function checkTheme() {
  if (themeRef === Theme.DARK) {
    updateTheme(Theme.DARK, Theme.LIGHT);

    checkboxRef.checked = true;
  } else if (themeRef === Theme.LIGHT) {
    updateTheme(Theme.LIGHT, Theme.DARK);
  }
}

function updateTheme(addClass, remClass) {
  bodyRef.classList.add(addClass);
  bodyRef.classList.remove(remClass);
}