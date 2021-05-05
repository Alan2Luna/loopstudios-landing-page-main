const buttonHamburger = document.querySelector('.button__hamburger')
const img = document.querySelector('.button__hamburger-img')
const nav = document.querySelector('.nav')

const openNavBar = () => {
    nav.classList.toggle('nav-mobile-active')

    if(nav.classList.contains('nav-mobile-active')) {
        img.src = "./images/icon-close.svg"
        document.body.style.overflowY = "hidden";
        return
    } else {
        img.src = "./images/icon-hamburger.svg"
        document.body.style.overflowY = "initial";
        return
    }
}


buttonHamburger.addEventListener('click', openNavBar)