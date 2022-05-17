function drawSquare(number) {
    let matrix = []
    for (let i = 0; i < number; i++) {
        let row = [];

        for (let j = 0; j < number; j++) {
            row.push('*');
        }

        matrix.push(row.join(' '));
    }
    console.log(matrix.join('\n'));
}

drawSquare(8)