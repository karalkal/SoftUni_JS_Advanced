function solve(input) {
    let [width, height, x, y] = input;

    // might have negative indeces probably?
    if (x < 0) {
        x = width - Math.abs(x)
    }
    if (y < 0) {
        y = height - Math.abs(y)
    }

    let arr = [];
    let maxDimension = (width > height) ? width : height;
    let incrementor = 0
    let canGrowRight
    let canGrowLeft
    let canGrowDown
    let canGrowUp

    //create matrix filled with identical elements
    for (r = 0; r < height; r++) {
        let column = [];
        for (c = 0; c < width; c++) {
            column.push('*');
        }
        arr.push(column);
    }

    for (incrementor; incrementor < maxDimension; incrementor++) {
        // Re-evaluate each iteration
        canGrowRight = (incrementor + x < width)
        canGrowLeft = (x - incrementor >= 0)
        canGrowDown = (incrementor + y < height)
        canGrowUp = (y - incrementor >= 0)

        // Fills each incremented 'orbit' with inceremented value if within the matrix limits
        if (canGrowUp) {                        // UP
            for (let x = 0; x < width; x++) {
                arr[y - incrementor][x] = 1 + incrementor
            }
        }
        if (canGrowLeft) {                     // LEFT
            for (let y = 0; y < height; y++) {
                arr[y][x - incrementor] = 1 + incrementor
            }
        }
        if (canGrowDown) {                      // DOWN
            for (let x = 0; x < width; x++) {
                arr[y + incrementor][x] = 1 + incrementor
            }
        }
        if (canGrowRight) {                      // RIGHT
            for (let y = 0; y < height; y++) {
                arr[y][x + incrementor] = 1 + incrementor
            }
        }
    }

    // print result
    for (let r of arr) {
        console.log(r.join(' '))
    }
}

// solve([4, 4, 0, 0])
// solve([5, 5, 2, 2])
// solve([3, 3, 2, 2])
// solve([7, 11, -2, -2])
// solve([7, 11, 2, 2])
// solve([5, 5, 0, 0])
// solve([9, 5, 8, 4])
// solve([3, 11, 0, 2])
solve([1, 6, 0, 2])
