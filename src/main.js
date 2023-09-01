const iconMenu = document.querySelector('.icon-menu')
const menu = document.querySelector('.menu')
const openModal = document.querySelector('.open-modal')
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.close')
const videoComplete = document.querySelector('.video-complete')
const links = document.querySelectorAll('#link')
const playerButton = document.querySelector('.player-button')
const music = document.querySelector('audio')
const playIcon = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play"
width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#35a679" fill="none"
stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none" />
<path d="M7 4v16l13 -8z" />
</svg>
`
const pauseIcon = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-pause" width="30"
height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#35a679" fill="none"
stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none" />
<path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
<path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
</svg>
`
let linkModified
let openMenu = false

function toggleAudio() {
    if (music.paused) {
        music.play();
        playerButton.innerHTML = pauseIcon;
    } else {
        music.pause();
        playerButton.innerHTML = playIcon;
    }
}

playerButton.addEventListener('click', toggleAudio);


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



iconMenu.addEventListener('click', () => {
    openMenu = !openMenu
    if (openMenu) {
        menu.classList.add('opened')
    } else {
        menu.classList.remove('opened')
    }
})