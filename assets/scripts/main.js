// Add dates to html
const startDate = new Date("2023-09-25");
const dates = $('.card__date')
dates.each(function (index) {
    const date = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + index).toDateString()
    $(this).text(date)
})



// Image popup
const cards = $('.card')
const popupOverlay = $('#gallery-popup')[0]
const popupImageContainer = $('#gallery-popup__info')[0]
const galleryControls = $('.gallery-popup__controls')[0]
let selectedImage = null
let index = null
const prevArrow = $('#prev')
const nextArrow = $('#next')

cards.each(function () {
    const card = $(this)
    card.click(function () {
        index = card.index()
        popupOverlay.classList.add('visible')
        galleryControls.classList.add('visible')
        $('body').css("overflow", "hidden");
        selectedImage = $(card[0]).clone()[0];
        popupImageContainer.append(selectedImage)
    })
})

$(popupOverlay).click(function () {
    popupOverlay.classList.remove('visible')
    galleryControls.classList.remove('visible')
    $(popupImageContainer).empty()
    $('body').css("overflow", "auto");
})

$(prevArrow).click(function () {
    if (index < 1) {
        index = cards.length - 1
    } else {
        index -= 1
    }
    loadImage(index)
})

$(nextArrow).click(function () {
    if (index >= cards.length - 1) {
        index = 0
    } else {
        index += 1
    }
    loadImage(index)
})

const loadImage = (index) => {
    selectedImage = $(cards[index]).clone()[0];
    $(popupImageContainer).empty()
    popupImageContainer.append(selectedImage)
}

