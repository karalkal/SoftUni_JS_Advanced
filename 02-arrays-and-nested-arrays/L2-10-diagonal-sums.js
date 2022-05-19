function solve(matrix) {
    let sumMainDiagonal = 0
    let sumSecondaryDiagonal = 0

    for (let i = 0; i < matrix.length; i++) {
        sumMainDiagonal += matrix[i][i]
        sumSecondaryDiagonal += (matrix[i][matrix.length - i - 1])
    }

    return sumMainDiagonal + " " + sumSecondaryDiagonal
}

console.log(solve(
    [[20, 40],
    [10, 60]]));