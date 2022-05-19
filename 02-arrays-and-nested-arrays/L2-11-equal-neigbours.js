function solve(arr) {
    let nOfMatches = 0;
    let nOfRows = arr.length;
    let nOfColumns = arr[0].length;
    let current;
    let itemBelow;
    let itemRight;

    // last comparison will go out of bounds in one direction but we still need to make it to check in the other
    for (let r = 0; r < nOfRows; r++) {
        for (let c = 0; c < nOfColumns; c++) {
            current = arr[r][c];
            
            if (r !== nOfRows - 1) { // if is NOT on last row
                itemBelow = arr[r + 1][c]
            }
            itemRight = arr[r][c + 1];

            if (r !== nOfRows - 1) { // if is NOT on last row
                if (current === itemBelow) nOfMatches += 1
            }
            if (current === itemRight) nOfMatches += 1
        }
    }
    return nOfMatches
}

console.log(solve([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]));

console.log(solve([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]));

console.log(solve([
    [2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]
]));