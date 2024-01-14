const pn = 'Post-Neprol'
const npr = 'Neprolysin'
const dmtx = 'Dermatix'

const mapMedicineClasses = {
    'Post-Neprol': 'pn',
    'Neprolysin': 'npr',
    'Dermatix': 'dmtx'
}

const mapImageFolders = (date) => {
    return date.substr(3)
}

const months = [
    ['September 2023', [
        { date: '25-09-2023', medicines: [npr] },
        { date: '26-09-2023', medicines: [npr] },
        { date: '27-09-2023', medicines: [npr] },
        { date: '28-09-2023', medicines: [npr, pn] },
        { date: '29-09-2023', medicines: [npr] },
        { date: '30-09-2023', medicines: [npr, pn] }
    ]],
    ['October 2023', [
        { date: '01-10-2023', medicines: [pn] },
        { date: '02-10-2023', medicines: [pn] },
        { date: '03-10-2023', medicines: [pn] },
        { date: '04-10-2023', medicines: [npr] },
        { date: '05-10-2023', medicines: [pn] },
        { date: '06-10-2023', medicines: [pn] },
        { date: '07-10-2023', medicines: [pn] },
        { date: '08-10-2023', medicines: [npr] },
        { date: '09-10-2023', medicines: [pn] },
        { date: '10-10-2023', medicines: [pn] },
        { date: '11-10-2023', medicines: [pn] },
        { date: '12-10-2023', medicines: [npr] },
        { date: '13-10-2023', medicines: [pn] },
        { date: '14-10-2023', medicines: [pn] },
        { date: '15-10-2023', medicines: [pn] },
        { date: '16-10-2023', medicines: [npr] },
        { date: '17-10-2023', medicines: [pn] },
        { date: '18-10-2023', medicines: [pn] },
        { date: '19-10-2023', medicines: [pn] },
        { date: '20-10-2023', medicines: [npr] },
        { date: '21-10-2023', medicines: [pn] },
        { date: '22-10-2023', medicines: [pn] },
        { date: '23-10-2023', medicines: [pn] },
        { date: '24-10-2023', medicines: [npr] },
        { date: '25-10-2023', medicines: [pn] },
        { date: '26-10-2023', medicines: [pn] },
        { date: '27-10-2023', medicines: [pn] },
        { date: '28-10-2023', medicines: [npr] },
        { date: '29-10-2023', medicines: [pn] },
        { date: '30-10-2023', medicines: [pn] },
        { date: '31-10-2023', medicines: [pn] }
    ]],
    ['November 2023', [
        { date: '01-11-2023', medicines: [npr] },
        { date: '02-11-2023', medicines: [pn] },
        { date: '03-11-2023', medicines: [pn] },
        { date: '04-11-2023', medicines: [pn] },
        { date: '05-11-2023', medicines: [npr] },
        { date: '06-11-2023', medicines: [pn] },
        { date: '07-11-2023', medicines: [pn] },
        { date: '08-11-2023', medicines: [pn] },
        { date: '09-11-2023', medicines: [npr] },
        { date: '10-11-2023', medicines: [pn] },
        { date: '11-11-2023', medicines: [pn] },
        { date: '12-11-2023', medicines: [pn] },
        { date: '13-11-2023', medicines: [npr] },
        { date: '14-11-2023', medicines: [pn] },
        { date: '15-11-2023', medicines: [pn] },
        { date: '16-11-2023', medicines: [pn] },
        { date: '17-11-2023', medicines: [npr] },
        { date: '18-11-2023', medicines: [pn] },
        { date: '19-11-2023', medicines: [pn] },
        { date: '20-11-2023', medicines: [pn] },
        { date: '21-11-2023', medicines: [npr] },
        { date: '22-11-2023', medicines: [pn] },
        { date: '23-11-2023', medicines: [pn] },
        { date: '24-11-2023', medicines: [pn] },
        { date: '25-11-2023', medicines: [npr] },
        { date: '26-11-2023', medicines: [pn] },
        { date: '27-11-2023', medicines: [pn] },
        { date: '28-11-2023', medicines: [pn] },
        { date: '29-11-2023', medicines: [npr] },
        { date: '30-11-2023', medicines: [pn] }
    ]],
    ['December 2023', [
        { date: '01-12-2023', medicines: [pn] },
        { date: '02-12-2023', medicines: [pn] },
        { date: '03-12-2023', medicines: [npr] },
        { date: '04-12-2023', medicines: [pn] },
        { date: '05-12-2023', medicines: [pn] },
        { date: '06-12-2023', medicines: [pn] },
        { date: '07-12-2023', medicines: [npr] },
        { date: '08-12-2023', medicines: [pn] },
        { date: '09-12-2023', medicines: [pn] },
        { date: '10-12-2023', medicines: [pn] },
        { date: '11-12-2023', medicines: [npr] },
        { date: '12-12-2023', medicines: [pn] },
        { date: '13-12-2023', medicines: [pn] },
        { date: '14-12-2023', medicines: [pn] },
        { date: '15-12-2023', medicines: [npr] },
        { date: '16-12-2023', medicines: [pn] },
        { date: '17-12-2023', medicines: [pn] },
        { date: '18-12-2023', medicines: [pn] },
        { date: '19-12-2023', medicines: [npr] },
        { date: '20-12-2023', medicines: [pn] },
        { date: '21-12-2023', medicines: [pn] },
        { date: '22-12-2023', medicines: [pn] },
        { date: '23-12-2023', medicines: [npr] },
        { date: '24-12-2023', medicines: [pn] },
        { date: '25-12-2023', medicines: [pn] },
        { date: '26-12-2023', medicines: [pn] },
        { date: '27-12-2023', medicines: [npr] },
        { date: '28-12-2023', medicines: [pn] },
        { date: '29-12-2023', medicines: [pn] },
        { date: '30-12-2023', medicines: [pn] },
        { date: '31-12-2023', medicines: [npr] }
    ]],
    ['January 2024', [
        { date: '01-01-2024', medicines: [pn] },
        { date: '02-01-2024', medicines: [pn] },
        { date: '03-01-2024', medicines: [pn] },
        { date: '04-01-2024', medicines: [npr] },
        { date: '06-01-2024', medicines: [pn] },
        { date: '05-01-2024', medicines: [pn] },
        { date: '07-01-2024', medicines: [pn] },
        { date: '08-01-2024', medicines: [npr] },
        { date: '09-01-2024', medicines: [pn] },
        { date: '10-01-2024', medicines: [dmtx] },
        { date: '11-01-2024', medicines: [dmtx] },
        { date: '12-01-2024', medicines: [dmtx] },
        { date: '13-01-2024', medicines: [dmtx] },
        { date: '14-01-2024', medicines: [dmtx] },
        { date: '15-01-2024', medicines: [dmtx] },
        { date: '16-01-2024', medicines: [dmtx] },
        { date: '17-01-2024', medicines: [dmtx] },
        { date: '18-01-2024', medicines: [dmtx] },
        { date: '19-01-2024', medicines: [dmtx] },
        { date: '20-01-2024', medicines: [dmtx] },
        { date: '21-01-2024', medicines: [dmtx] },
        { date: '22-01-2024', medicines: [dmtx] },
        { date: '23-01-2024', medicines: [dmtx] },
        { date: '24-01-2024', medicines: [dmtx] },
        { date: '25-01-2024', medicines: [dmtx] },
        { date: '26-01-2024', medicines: [dmtx] },
        { date: '27-01-2024', medicines: [dmtx] },
        { date: '28-01-2024', medicines: [dmtx] },
        { date: '29-01-2024', medicines: [dmtx] },
        { date: '30-01-2024', medicines: [dmtx] },
        { date: '31-01-2024', medicines: [dmtx] }
    ]],
]

const infoSection = $('.info')
let weekNumber = 1
let daysCounter = 0

const addWeek = (array, panelName) => {
    const newWeekRow = $('<div class="info__row week">')
    $(panelName).append(newWeekRow)

    const weekNumberDiv = $(
        `<div class="week__number">
           <p>${weekNumber}</p>
        </div>`
    )
    newWeekRow.append(weekNumberDiv)

    weekNumber++

    for (let j = 0; j < array.length; j++) {
        const day = array[j]
        let imageDate = day.date
        const medicines = day.medicines.map(med => `<span class=${mapMedicineClasses[med]}>${med}</span>`)

        let imageUrl = `assets/images/${mapImageFolders(imageDate)}/${imageDate}.jpg`
        if (imageUrl === 'assets/images/image/no-image.jpg') imageUrl = 'assets/images/no-image.jpg'

        // if (imageDate === 'no-image') {
        //     const date = array[0].date.split('-')
        //     const newDay = Number(date[0]) + j
        //     imageDate = newDay + '-' + date[1] + '-' + date[2]
        // }

        const card = $(
            `<div class="card">
                <div class="card__image">
                    <img src=${imageUrl}/>
                </div>
                <div class="card__copy">
                    <p class="card__date">${imageDate}</p>
                    <p class="card__medicine">
                        ${medicines}
                    </p>
                </div>
            </div>`
        )

        newWeekRow.append(card)
        daysCounter++
    }
}

for (let i = 0; i < months.length; i++) {
    const currentMonth = months[i]
    const nextMonth = months[i + 1]
    const currentMontName = currentMonth[0]
    const currentMonthDays = currentMonth[1]

    const panelName = `<p class="heading-secondary">${currentMontName}</p>`
    infoSection.append(panelName)
    const panel = $('<div class="panel">')

    if (i === months.length - 1) {
        $(panel)[0].classList.add('open')
    }
    infoSection.append(panel)


    while (currentMonthDays.length > 0) {
        const nextWeekDates = currentMonthDays.slice(0, 7)

        if (nextWeekDates.length < 7) {
            const difference = 7 - nextWeekDates.length
            for (let j = 0; j < difference; j++) {
                if (nextMonth) {
                    const day = nextMonth[1][0]
                    nextWeekDates.push(day)
                    nextMonth[1].shift()
                } else {
                    nextWeekDates.push({ date: 'no-image', medicines: [] })
                }
            }
        }

        addWeek(nextWeekDates, panel)
        currentMonthDays.splice(0, 7)
    }
}



