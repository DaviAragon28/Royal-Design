const iconMenu = document.querySelector('.icon-menu')
const menu = document.querySelector('.menu')

let openMenu = false


iconMenu.addEventListener('click', () => {
    openMenu = !openMenu
    if (openMenu) {
        menu.classList.add('opened')
    } else {
        menu.classList.remove('opened')
    }
})