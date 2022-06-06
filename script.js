const menuToggler = document.querySelector('.menu-toggler')
const navbar = document.querySelector('.navbar')
const collapsibleMenu = document.querySelector('.collapsible-menu')

const faqList = document.querySelector('.faq-list')
const faqListItem = document.querySelector('.faq-list-item')
const dropdown = document.querySelector('.dropdown')
const faqListText = document.querySelector('.faq-list-text')

const faq1 = document.querySelector('.faq-1')
const faq2 = document.querySelector('.faq-2')
const faq3 = document.querySelector('.faq-3')
const faq4 = document.querySelector('.faq-4')

const dropdown1 = document.querySelector('.dropdown-1')
const dropdown2 = document.querySelector('.dropdown-2')
const dropdown3 = document.querySelector('.dropdown-3')
const dropdown4 = document.querySelector('.dropdown-4')

let popup = document.querySelector('.popup')
let overlay = document.querySelector('.overlay')


// Menu Toggle

menuToggler.addEventListener ('click', () => {
    navbar.classList.toggle ('show-menu')
})

// Faq List

dropdown1.addEventListener('click', () => {
    faq1.classList.toggle('activated')
})

dropdown2.addEventListener('click', () => {
    faq2.classList.toggle('activated')
})

dropdown3.addEventListener('click', () => {
    faq3.classList.toggle('activated')
})

dropdown4.addEventListener('click', () => {
    faq4.classList.toggle('activated')
})

// Popup

function openPopup(){
    popup.classList.add("activated")
    overlay.classList.add("activated")
}

function closePopup(){
    popup.classList.remove("activated")
    overlay.classList.remove("activated")
}