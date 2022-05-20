// by length in ascending order as primary criteria
// by alphabetical value in ascending order as second criteria

function sortArr(arr) {
    let sortedArr = arr.sort(sortAandB)
    console.log(sortedArr.join('\n'));


    function sortAandB(a, b) {
        if (a.length === b.length) {
            return a.localeCompare(b)
        }
        return a.length - b.length
    }
}

sortArr(['alpha', 'beta', 'gamma'])
sortArr(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])