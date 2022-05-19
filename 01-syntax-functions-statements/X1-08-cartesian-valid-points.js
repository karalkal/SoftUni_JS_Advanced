function solve(x1, y1, x2, y2) {
    let actualResult1 = Math.sqrt((0 - x1) ** 2 + (0 - y1) ** 2)
    let resultAsInt1 = Number(actualResult1.toFixed(0))

    let actualResult2 = Math.sqrt((x2 - 0) ** 2 + (y2 - 0) ** 2)
    let resultAsInt2 = Number(actualResult2.toFixed(0))

    let actualResult3 = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
    let resultAsInt3 = Number(actualResult3.toFixed(0))

    if (actualResult1 === resultAsInt1) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    if (actualResult2 === resultAsInt2) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    if (actualResult3 === resultAsInt3) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

solve(3, 0, 0, 4)
solve(2, 1, 1, 1)