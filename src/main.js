const iconMenu = document.querySelector('.icon-menu')
const menu = document.querySelector('.menu')
const openModal = document.querySelector('.open-modal')
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.close')
const videoComplete = document.querySelector('.video-complete')
const links = document.querySelectorAll('#link')

let linkModified

openModal.addEventListener('click', () => {
    videoComplete.play()
    modal.classList.add('opened-modal')
})

closeModal.addEventListener('click', () => {
    videoComplete.pause()
    modal.classList.remove('opened-modal')
})


window.addEventListener('hashchange', (e) => {
    changeColorLink(e.newURL)
})

const changeColorLink = (linkURL) => {
    let newURL = linkURL.toString().split('#')

    links.forEach(link => {
        linkModified = link.textContent.toLocaleLowerCase().split(' ').join('-');

        if (newURL[1] === linkModified) {
            link.classList.add('clicked')
        } else {
            link.classList.remove('clicked')
        }
    })

}

let openMenu = false


iconMenu.addEventListener('click', () => {
    openMenu = !openMenu
    if (openMenu) {
        menu.classList.add('opened')
    } else {
        menu.classList.remove('opened')
    }
})