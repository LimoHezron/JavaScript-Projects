const sliderContainer = document.querySelector('.container-slider')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length

let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLength -1) *100}vh`

upButton.addEventListener('click', ()=> changeSlide('up'))
downButton.addEventListener('click', ()=> changeSlide('down'))

const changeSlide = (direction) => {
    const slideHeight = sliderContainer.clientHeight
    if(direction === 'up') {
        activeSlideIndex ++
        if(activeSlideIndex > slidesLength -1) {
            activeSlideIndex = 0
        }
    }
    else if(direction === 'down'){
        activeSlideIndex --
        if(activeSlideIndex < 0){
            activeSlideIndex = slidesLength -1
        }
    }
    console.log(activeSlideIndex)

    slideRight.style.transform = `translateY(-${activeSlideIndex * slideHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * slideHeight}px)`
}