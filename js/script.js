const CLASS_ACTIVE_IMG = 'active'
const CLASS_HIDDEN = 'hidden'

let currentSlide = 1

console.log("Hello world! Thanks for visiting!")
setSlide(currentSlide)


// Event listeners
document.getElementsByClassName('hamburger-menu')[0].addEventListener('click', () => {
    toggleMobileLinks()
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
    console.log(mLinks.classList)
    mLinks.classList.toggle(CLASS_HIDDEN)
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
    let captionText = document.getElementsByClassName('image-slide-caption')[0].children[0]
    
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
    captionText.innerHTML = thumbnails[currentSlide-1].alt
}