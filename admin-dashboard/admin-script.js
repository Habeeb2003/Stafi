const menuToggler = document.querySelector('.menu-toggler');
const navbar = document.querySelector('.navbar-res');

menuToggler.addEventListener('click', () => {
    navbar.classList.toggle('show-menu');
});