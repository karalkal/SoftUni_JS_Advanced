function printPrevDay(year, month, date) {
    let currentDay = new Date(year, month - 1, date);
    let previousDay = new Date(currentDay - 1);

    console.log(previousDay)
    console.log(previousDay.getFullYear() + '-' + (previousDay.getMonth() + 1) + '-' + previousDay.getDate()); // Returns '02-8-16')

}

printPrevDay(2016, 9, 30)
printPrevDay(2016, 1, 1)
printPrevDay(2012, 3, 1)
