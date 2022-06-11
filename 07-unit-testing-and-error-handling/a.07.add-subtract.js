function createCalculator() {
    let value = 0;
    return {
        add: function (num) { value += Number(num); },
        subtract: function (num) { value -= Number(num); },
        get: function () { return value; }
    }
}

module.exports = { createCalculator }

let kur = createCalculator()
console.log(kur.get())
kur.add('kur')
console.log(kur.get())
// console.log(kur.get())
// kur.add(22)
// console.log(kur.get())
// kur.add(-26)
// console.log(kur.get())