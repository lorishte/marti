const pn = 'Post-Neprol'
const npr = 'Neprolysin'
const dmtx = 'Dermatix'

const mapMedicineClasses = {
    'Post-Neprol': 'pn',
    'Neprolysin': 'npr',
    'Dermatix': 'dmtx'
}

const mapImageFolders = (date) => {
    const monthFolder = date.substr(3)
    console.log(monthFolder)
    return monthFolder
}

const months = {
    september: {
        25: {
            image: '25-09-2023',
            medicines: [npr]
        },
        26: {
            image: '26-09-2023',
            medicines: [npr]
        },
        27: {
            image: '27-09-2023',
            medicines: [npr]
        },
        28: {
            image: '28-09-2023',
            medicines: [npr, pn]
        },
        29: {
            image: '29-09-2023',
            medicines: [npr]
        },
        30: {
            image: '30-09-2023',
            medicines: [npr, pn]
        }
    },

    october: {
        1: {
            image: '01-10-2023',
            medicines: [pn]
        },
        2: {
            image: '02-10-2023',
            medicines: [pn]
        },
        3: {
            image: '03-10-2023',
            medicines: [pn]
        },
        4: {
            image: '04-10-2023',
            medicines: [npr]
        },

        5: {
            image: '05-10-2023',
            medicines: [npr]
        },
        6: {
            image: '06-10-2023',
            medicines: [npr]
        },
        7: {
            image: '07-10-2023',
            medicines: [npr]
        },
        8: {
            image: '08-10-2023',
            medicines: [npr]
        },
        9: {
            image: '09-10-2023',
            medicines: [npr]
        },
    }
}


const monthsAsKeys = Object.keys(months)
const infoSection = $('.info')
let weeksCounter = 1
let weekNumber = 1

monthsAsKeys.forEach(monthName => {

    const panelName = `<p class="heading-secondary">${monthName}</p>`
    const panel = $('<div class="panel open">')
    const week = $('<div class="info__row week">')
    const weekDiv = $(
        `<div class="week__number">
           <p>${weekNumber}</p>
        </div>`
    )

    infoSection.append(panelName)
    infoSection.append(panel)
    panel.append(week)
    week.append(weekDiv)

    const monthDays = Object.values(months[monthName])

    monthDays.map(day => {
        if (weeksCounter % 7 === 0) {
            weekNumber++
            week.append(weekDiv)
        }

        const image = day.image
        const medicines = day.medicines.map(med => `<span class=${mapMedicineClasses[med]}>${med}</span>`)

        const card = $(
            `<div class="card">
                <div class="card__image">
                    <img src="assets/images/${mapImageFolders(image)}/${image}.jpg"/>
                </div>
                <div class="card__copy">
                    <p class="card__date">${image}</p>
                    <p class="card__medicine">
                        ${medicines}
                    </p>
                </div>
            </div>`
        )

        week.append(card)
        weeksCounter++
    })
})