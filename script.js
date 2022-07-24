const menuToggler = document.querySelector('.menu-toggler');
const navbar = document.querySelector('.navbar');
const collapsibleMenu = document.querySelector('.collapsible-menu');

let popup = document.querySelector('.popup');
let overlay = document.querySelector('.overlay');

const faqListItems = document.querySelectorAll('.faq-list-item');

faqListItems.forEach((element) => {
  element.addEventListener('click', () => {
    element.classList.toggle('faq-show');
  });
});

// Menu Toggle

menuToggler.addEventListener('click', () => {
  navbar.classList.toggle('show-menu');
});

// // Popup

function openPopup() {
  popup.classList.add('activated');
  overlay.classList.add('activated');
}

function closePopup() {
  popup.classList.remove('activated');
  overlay.classList.remove('activated');
}
