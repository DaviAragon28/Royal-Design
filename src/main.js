const iconMenu = document.querySelector('.icon-menu')
const menu = document.querySelector('.menu')
const openModal = document.querySelector('.open-modal')
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.close')
const videoComplete = document.querySelector('.video-complete')
const links = document.querySelectorAll('#link')
const playerButtonDesktop = document.querySelector('.player-button-desktop')
const musicDesktop = document.querySelector('.audio-desktop')
const playerButtonMobile = document.querySelector('.player-button-mobile')
const musicMobile = document.querySelector('.audio-mobile')
const containerShape = document.querySelector('.shape')
const footer = document.querySelector('.container-items-footer')
const wave = document.querySelector('.wave')
const contactUsSection = document.querySelector('#contact-us')

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

function toggleAudioMobile() {
    if (musicMobile.paused) {
        musicMobile.play();
        playerButtonMobile.innerHTML = pauseIcon;
    } else {
        musicMobile.pause();
        playerButtonMobile.innerHTML = playIcon;
    }
}
function toggleAudioDesktop() {
    if (musicDesktop.paused) {
        musicDesktop.play();
        playerButtonDesktop.innerHTML = pauseIcon;
    } else {
        musicDesktop.pause();
        playerButtonDesktop.innerHTML = playIcon;
    }
}

playerButtonDesktop.addEventListener('click', toggleAudioDesktop)
playerButtonMobile.addEventListener('click', toggleAudioMobile)



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


window.onscroll = function () {
    const alturaTotalPagina = document.body.scrollHeight;
    // Obtener la posición actual de desplazamiento vertical del usuario
    const posicionActual = document.documentElement.scrollTop;
    // Obtener la altura de la ventana visible
    const alturaVentana = window.innerHeight;

    // Verificar si la posición actual de desplazamiento más la altura de la ventana es igual o mayor que la altura total de la página
    if (posicionActual + alturaVentana >= alturaTotalPagina) {
        // Se ha llegado al final de la página
        containerShape.classList.add('shape-to-footer')
        contactUsSection.children[0].style.display = 'none'
        contactUsSection.children[1].style.display = 'none'
        wave.style.display = 'none'
        // wave.style.top = `-20rem`
        footer.style.display = 'flex'
    } else {
        contactUsSection.children[0].style.display = 'block'
        contactUsSection.children[1].style.display = 'flex'
        wave.style.display = 'block'
        footer.style.display = 'none'
        containerShape.classList.remove('shape-to-footer')
    }
};
