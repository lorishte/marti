const startDate2 = new Date(2023, 9, 25)
const endDate = new Date(2024, 2, 29)

const months = [{
    2023: [9, 10, 11, 12],
    2024: [1, 2, 3]
}]

function daysInMonth (month, year) {
    //Gives the days of the prior month
    //We pass index 1 (which is Feb) and with date 0 receive the days for Jan
    return new Date(year, month, 0).getDate();
}

console.log(daysInMonth(startDate2.getMonth(), startDate2.getFullYear()))