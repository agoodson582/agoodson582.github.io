const CLASS_HIDDEN = 'hidden'

function toggleMobileLinks() {
    let mLinks = document.querySelector('header .links.mobile-only')
    console.log(mLinks.classList)
    mLinks.classList.toggle(CLASS_HIDDEN)
}

document.getElementsByClassName('hamburger-menu')[0].addEventListener('click', () => {
    toggleMobileLinks()
})

console.log("Hello world! Thanks for visiting!")