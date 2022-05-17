function drawSquare(number) {
    let row = '* '.repeat(number) + '\n';
    let matrix = row.repeat(number);
    console.log(matrix);
}

drawSquare(8)