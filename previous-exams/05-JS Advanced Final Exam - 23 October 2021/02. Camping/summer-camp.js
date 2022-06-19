class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer
        this.location = location
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 }
        this.listOfParticipants = []
    }

    registerParticipant(name, condition, money) {  // condition is supposed to represent participant type
        let pricesPerType = Object.keys(this.priceForTheCamp)
        if (!pricesPerType.includes(condition)) {
            throw new Error("Unsuccessful registration at the camp.")
        }

        let campPrice = this.priceForTheCamp[condition]
        if (money < campPrice) {
            return `The money is not enough to pay the stay at the camp.`
        }

        let foundParticipant = this.listOfParticipants.find(person => person.name === name)
        if (foundParticipant) {
            return `The ${name} is already registered at the camp.`
        }
        else {
            this.listOfParticipants.push({ name, condition, power: 100, wins: 0 })
            return `The ${name} was successfully registered.`
        }

    }

    unregisterParticipant(name) {
        let foundParticipant = this.listOfParticipants.find(person => person.name === name)
        if (!foundParticipant) {
            throw new Error(`The ${name} is not registered in the camp.`)
        }
        else {
            this.listOfParticipants.splice(this.listOfParticipants.indexOf(foundParticipant), 1)
            return `The ${name} removed successfully.`
        }
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        //  'Battleship'
        if (typeOfGame === 'Battleship') {
            let foundParticipant = this.listOfParticipants.find(person => person.name === participant1)
            if (!foundParticipant) {
                throw new Error(`Invalid entered name/s.`)
            }
            else {
                foundParticipant.power += 20
                return `The ${participant1} successfully completed the game Battleship.`
            }
        }

        // 'WaterBalloonFights'
        else if (typeOfGame === 'WaterBalloonFights') {
            let firstGuy = this.listOfParticipants.find(person => person.name === participant1)
            let secondGuy = this.listOfParticipants.find(person => person.name === participant2)

            if (!firstGuy || !secondGuy) {
                throw new Error(`Invalid entered name/s.`)
            }

            if (firstGuy.condition !== secondGuy.condition) {
                throw new Error(`Choose players with equal condition.`)
            }

            if (firstGuy.power > secondGuy.power) {
                firstGuy.wins += 1
                return `The ${firstGuy.name} is winner in the game WaterBalloonFights.`
            }
            else if (secondGuy.power > firstGuy.power) {
                secondGuy.wins += 1
                return `The ${secondGuy.name} is winner in the game WaterBalloonFights.`
            }
            // if equal 
            return `There is no winner.`
        }
    }


    toString() {
        let result = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}\n`
        let sortedByWinsString = this.listOfParticipants
            .sort((camper1, camper2) => camper2.wins - camper1.wins)
            .map(camper => `${camper.name} - ${camper.condition} - ${camper.power} - ${camper.wins}`)
            .join('\n')
        return result + sortedByWinsString
    }
}



// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

// console.log(summerCamp.toString());

