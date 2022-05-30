function createHeroes(arr) {
    heroesArr = []
    for (let entry of arr) {
        let currentHero = {}
        let [name, level, itemsAsStr] = entry.split(' / ')
        // let itemsAsArr = (itemsAsStr) ?  // same as below but less readable, i.e. if itemsAsStr is true
        let itemsAsArr = (typeof itemsAsStr !== 'undefined') ?  // if the hero has items at all, i.e. string might be undefined
            itemsAsStr.split(', ') : []
        currentHero.name = name
        currentHero.level = Number(level)
        currentHero.items = itemsAsArr
        heroesArr.push(currentHero)
    }
    // console.log(heroesArr)
    return JSON.stringify(heroesArr)
}

console.log(createHeroes([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Kurcho / 11111111',
    'Hes / 1 / Desolator, Sentinel, Antara']))