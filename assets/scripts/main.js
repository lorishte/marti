// Add dates to html
// const startDate = new Date("2023-09-25");
// const dates = $('.card__date')
// dates.each(function (index) {
//     const date = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + index).toDateString()
//     $(this).text(date)
// })

// Accordion
const accordion = document.getElementsByClassName("heading-secondary");

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
        this.classList.toggle("active");
        const panel = $(this).next('.panel')[0];
        const openClass = 'open'

        if (panel.classList.contains(openClass)) {
            panel.classList.remove(openClass);
        } else {
            panel.classList.add(openClass)
        }
    });
}


// Image popup
const cards = $('.card')
const popupOverlay = $('#gallery-popup')[0]
const popupImageContainer = $('#gallery-popup__info')[0]
const galleryControls = $('.gallery-popup__controls')[0]
let selectedImage = null
let cardIndex = null
const prevArrow = $('#prev')
const nextArrow = $('#next')

cards.each(function (index) {
    const card = $(this)
    card.click(function () {
        cardIndex = index
        popupOverlay.classList.add('visible')
        galleryControls.classList.add('visible')
        $('body').css("overflow", "hidden");
        selectedImage = $(card[0]).clone()[0];
        popupImageContainer.append(selectedImage)

        // Add event listener on keydown
        document.addEventListener('keydown', handleKeyEvent, false);
    })
})

const handleKeyEvent = (event) => {
    const name = event.key;
    if (name === 'ArrowRight') loadNextImage()
    if (name === 'ArrowLeft') loadPrevImage()
    if (name === 'Escape') closePopup()
}

$(popupOverlay).click(function () {
    closePopup()
})

$(prevArrow).click(function () {
    loadPrevImage()
})

$(nextArrow).click(function () {
    loadNextImage()
})

const closePopup = () => {
    popupOverlay.classList.remove('visible')
    galleryControls.classList.remove('visible')
    $(popupImageContainer).empty()
    $('body').css("overflow", "auto");

    // Remove event listener on keydown
    document.removeEventListener('keydown', handleKeyEvent)
}

const loadPrevImage = () => {
    if (cardIndex < 1) cardIndex = cards.length - 1
    else cardIndex -= 1
    loadImage(cardIndex)
}

const loadNextImage = () => {
    if (cardIndex >= cards.length - 1) cardIndex = 0
    else cardIndex += 1
    loadImage(cardIndex)
}

const loadImage = (index) => {
    selectedImage = $(cards[index]).clone()[0];
    $(popupImageContainer).empty()
    popupImageContainer.append(selectedImage)
}



