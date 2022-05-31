function colorize() {
    let everySecondRow = Array.from(document.getElementsByTagName('tr'))
        .filter((_, i) => i % 2 === 1);
    // console.log(everySecondRow);
    for (row of everySecondRow) {
        // console.log(row)
        row.style.background = 'teal';
    }
}