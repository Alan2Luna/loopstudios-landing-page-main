const buttonHamburger = document.querySelector('.button__hamburger')
const img = document.querySelector('.button__hamburger-img')
const nav = document.querySelector('.nav')

buttonHamburger.addEventListener('click', () => {
    nav.classList.toggle('nav-mobile-active')

    if(nav.classList.contains('nav-mobile-active')) {
        img.src = "./images/icon-close.svg"
    } else {
        img.src = "./images/icon-hamburger.svg"
    }
})