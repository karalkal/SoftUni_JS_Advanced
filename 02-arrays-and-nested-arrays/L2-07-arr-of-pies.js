function solve(arr, first, last) {
    let fromIndex = arr.indexOf(first)
    let toIndex = arr.indexOf(last) + 1
    return arr.slice(fromIndex, toIndex)
}

console.log(solve(['Pumpkin Pie', 'Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie', 'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'))

console.log(solve(['Apple Crisp', 'Mississippi Mud Pie', 'Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'))