// Accordion
const accordion = document.getElementsByClassName("heading-secondary");

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
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



// Image modal
const cards = $('.card')
const modalBackdrop = $('#modal__backdrop')[0]
const modalOverlay = $('#modal__overlay')[0]
let modalOverlayCompare = $('#modal__overlay-compare')
const modalControls = $('#modal__controls')[0]
let selectedImage = null
let cardIndex = null
const prevArrow = $('#prev')
const nextArrow = $('#next')

cards.each(function (index) {
    const card = $(this)
    card.click(function () {
        cardIndex = index
        modalBackdrop.classList.add('visible')
        modalControls.classList.add('visible')
        $('body').css("overflow", "hidden");
        selectedImage = $(card[0]).clone()[0];
        modalOverlay.append(selectedImage)

        // Add event listener on keydown
        document.addEventListener('keydown', handleKeyEvent, false);
    })
})

// Compare images
let compareItemsList = []
const compareElements = $(':checkbox')

compareElements.click(function (e) {
    const imageDate = e.target.name

    if (compareItemsList.includes(imageDate)) {
        compareItemsList = compareItemsList.filter(el => el !== imageDate)
    } else {
        compareItemsList.push(imageDate)

        if (compareItemsList.length >= 2) {
            compareItemsList.forEach(item => {
                const card = $(`[data-date='${item}']`).clone()[0]
                $(modalOverlayCompare).append(card)
            })

            modalBackdrop.classList.add('visible')
            $('body').css("overflow", "hidden");
        }
    }

    console.log(modalOverlayCompare)
})

const handleKeyEvent = (event) => {
    const name = event.key;
    if (name === 'ArrowRight') loadNextImage()
    if (name === 'ArrowLeft') loadPrevImage()
    if (name === 'Escape') closeModal()
}

$(modalBackdrop).click(function () {
    closeModal()
})

$(prevArrow).click(function () {
    loadPrevImage()
})

$(nextArrow).click(function () {
    loadNextImage()
})

const closeModal = () => {
    modalBackdrop.classList.remove('visible')
    modalControls.classList.remove('visible')
    $('body').css("overflow", "auto");

    // Clear Image Preview
    $(modalOverlay).empty()

    // Clear Image Compare
    $(modalOverlayCompare).empty()
    compareElements.each(function (){
        $(this)[0].checked = false
    })
    compareItemsList = []

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
    console.log(index)
    selectedImage = $(cards[index]).clone()[0];
    $(modalOverlay).empty()
    modalOverlay.append(selectedImage)
}




