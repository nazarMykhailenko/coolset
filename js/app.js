// burger
(function () {
    let menu = document.querySelector(`.menu`)
    let icon = document.querySelector(`.header__icon`)
    let body = document.querySelector(`body`)
    icon.addEventListener(`click`, () => {
        menu.classList.toggle(`_active`)
        body.classList.toggle(`_lock`)
    })
}())

// Circle
function showText() {
    let circle = document.querySelectorAll(`.circle`)
    circle.forEach((item) => {
        item.addEventListener(`click`, () => {
            item.classList.toggle(`_active`)
            let textSelector = item.getAttribute(`data-block`)
            let currentTextBlock = document.querySelector(textSelector)
            currentTextBlock.classList.toggle(`_active`)
        })
    })
}
showText()

// Loading

function loadAnimate() {
    let loadCircle = document.querySelectorAll(`.load__circle`)
    let activeIndex = 1
    setInterval(() => {
        loadCircle[activeIndex].classList.remove(`_active`)
        if (activeIndex === 3) {
            activeIndex = 0
        } else {
            activeIndex++
        }
        loadCircle[activeIndex].classList.add(`_active`)
    }, 1000)
}
loadAnimate()

// Footer arrow
