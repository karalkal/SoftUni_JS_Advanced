function solve(arr) {
    let result = {}
    for (let i = 0; i < arr.length; i += 2) {
        if (i % 2 === 0) {
            result[arr[i]] = Number(arr[i + 1])
        }
    }
    console.log(result);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])