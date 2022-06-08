function solve(...inputArgs) {
    let types = {}
    for (let arg of inputArgs) {
        argType = typeof arg
        if (!Object.keys(types).includes(argType)) { // if not included
            types[argType] = 0
        }
        types[argType] += 1 // either way add 1

        console.log(`${argType}: ${arg}`)
    }
    let sortedTypes = Object.entries(types).sort((a, b) => b[1] - a[1])
    sortedTypes.forEach(
        element => console.log(`${element[0]} = ${element[1]}`)
    )

}

solve('cat', 42, 77, 79, function () {
    console.log('Hello world!');
})