function solve(str, ...operations) {
    let number = Number(str)
    // • chop - divide the number by two
    // • dice - square root of a number
    // • spice - add 1 to the number
    // • bake - multiply number by 3
    // • fillet - subtract 20% from the number

    for (op of operations){
        if (op=== 'chop'){
            number /= 2
        }
        else if (op=== 'dice'){
            number = Math.sqrt(number)
        }
        else if (op=== 'spice'){
            number += 1
        }
        else if (op=== 'bake'){
            number *= 3
        }
        else if (op=== 'fillet'){
            number -= number * .2
        }
        console.log(number);
    }
}

// solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')