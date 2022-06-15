function solve(input) {
    let quantities = new Map()
    let bottles = new Map()

    for (let entry of input) {
        let [type, quantity] = entry.split(' => ')
        quantity = Number(quantity)
        if (!quantities.has(type)) { // if new
            quantities.set(type, quantity)
        } else {
            quantities.set(type, quantities.get(type) + quantity) // existing quantity + new
        }

        for (let [k, v] of quantities) {
            if (v >= 1000) {
                let wholePart = Math.floor(v / 1000)
                let remainingPart = v % 1000

                if (!bottles.has(k)) {
                    bottles.set(k, wholePart)
                } else {
                    bottles.set(k, bottles.get(k) + wholePart) // existing bottles + new ones
                }
                quantities.set(k, remainingPart)
            }
        }
    }
    for (let [k, v] of bottles) {
        console.log(k + ' => ' + v)
    }
}



solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
)

solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
)