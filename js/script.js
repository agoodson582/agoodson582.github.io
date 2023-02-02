const CLASS_ACTIVE_HEADER = 'active'
const CLASS_ACTIVE_IMG = 'active'
const CLASS_HIDDEN = 'hidden'

let currentSlide = 1

console.log("Hello world! Thanks for visiting!")
let slideCaptions = document.querySelectorAll('.image-slide-caption')
let thumbnailDiv = document.getElementsByClassName('image-slide-thumbnails')[0]
for (let i = 0; i < thumbnailDiv.children.length; i++) {
    let slideCaption = slideCaptions[i].getElementsByTagName('p')[0]
    slideCaption.textContent = thumbnailDiv.children[i].alt
}
setSlide(currentSlide)

// Event listeners
document.getElementsByClassName('hamburger-menu')[0].addEventListener('click', () => {
    toggleMobileLinks()
})
document.getElementsByClassName('links mobile-only')[0].childNodes.forEach(link => {
    link.addEventListener('click', () => toggleMobileLinks())
})
document.addEventListener('click', ev => {
    let header = document.getElementsByTagName('header')[0]
    if (!ev.composedPath().includes(header) && header.classList.contains('active')) {
        toggleMobileLinks()
    }
})
document.getElementsByClassName('prev-slide-button')[0].addEventListener('click', () => {
    advanceSlidesBy(-1)
})
document.getElementsByClassName('next-slide-button')[0].addEventListener('click', () => {
    advanceSlidesBy(1)
})
let thumbnailEntries = document.querySelectorAll('.image-slide-thumbnails > img').entries()
for (const thumbnail of thumbnailEntries) {
    thumbnail[1].addEventListener('click', () => setSlide(thumbnail[0] + 1))
}

function toggleMobileLinks() {
    let mLinks = document.querySelector('header .links.mobile-only')
    mLinks.classList.toggle(CLASS_HIDDEN)
    mLinks.parentElement.classList.toggle(CLASS_ACTIVE_HEADER)
}

function advanceSlidesBy(number) {
    viewSlide(currentSlide += number)
}

function setSlide(number) {
    viewSlide(currentSlide = number)
}

function viewSlide(number) {
    let slides = document.getElementsByClassName('image-slide')
    let thumbnails = document.getElementsByClassName('image-slide-thumbnails')[0].children
    
    if (number > slides.length) currentSlide = 1 // wrap to beginning
    if (number < 1) currentSlide = slides.length // wrap to end
    
    let i
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    }
    for (i = 0; i < thumbnails.length; i++) {
        thumbnails[i].classList.remove(CLASS_ACTIVE_IMG)
    }

    slides[currentSlide-1].style.display = 'block'
    thumbnails[currentSlide-1].classList.add(CLASS_ACTIVE_IMG)
}