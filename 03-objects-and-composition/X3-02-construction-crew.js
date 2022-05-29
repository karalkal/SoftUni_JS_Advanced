function solve(worker) {
    /*a worker whose dizziness property is set to true it means he needs to intake some water 
    to be able to work correctly. The required amount is 0.1ml per kilogram per year of experience. 
    The required amount must be added to the existing amount (to the levelOfHydrated). 
    Once the water is administered, change the dizziness property to false.    
    */
    if (worker.dizziness === true) {
        worker.levelOfHydrated += worker.weight * worker.experience * .1
        worker.dizziness = false
    }
    return worker
}

console.log(solve({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}))
console.log(solve({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
}))