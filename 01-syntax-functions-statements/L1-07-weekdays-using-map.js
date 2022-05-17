function solve(input) {
    let weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    if (weekdays.includes(input)) {
        console.log(weekdays.indexOf(input) + 1);
    } else {
        console.log('error')
    }
}