function buildCar(requirementsObj) {
    let carObj = {}
    const smallEngine = { power: 90, volume: 1800 }
    const normalEngine = { power: 120, volume: 2400 }
    const monsterEngine = { power: 200, volume: 3500 }

    carObj.model = requirementsObj.model

    carObj.engine = {}
    if (requirementsObj.power <= 90) {          // if small is enough
        carObj.engine = smallEngine
    } else if (requirementsObj.power > 120) {     // if monster is required
        carObj.engine = monsterEngine
    } else {                                      // if inbetween is required
        carObj.engine = normalEngine
    }

    carObj.carriage = {
        type: requirementsObj.carriage,
        color: requirementsObj.color,
    }

    carObj.singleWheel = (requirementsObj.wheelsize % 2 === 0) ?
        requirementsObj.wheelsize - 1 : requirementsObj.wheelsize
    carObj.wheels = [carObj.singleWheel, carObj.singleWheel, carObj.singleWheel, carObj.singleWheel]

    return carObj
}

/*
{ model: 'VW Golf II',
  engine: { power: 90,
            volume: 1800 },
  carriage: { type: 'hatchback',
              color: 'blue' },
  wheels: [13, 13, 13, 13] }
*/

console.log(buildCar({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}))

console.log(buildCar({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}))
console.log(buildCar({
    model: 'Ferrari ',
    power: 200,
    color: 'red',
    carriage: 'coupe',
    wheelsize: 21
}))