class SmartHike {
    constructor(username) {
        this.username = username
        this.goals = {}                 //– an empty object
        this.listOfHikes = []           //– an empty array 
        this.resources = 100            //– 100
    }
    addGoal(peak, altitude) {
        for (let p of Object.keys(this.goals)) {   // peak names
            if (p === peak) {
                return `${peak} has already been added to your goals`
            }
        }
        this.goals[peak] = altitude
        return `You have successfully added a new goal - ${peak}`
    }
    hike(peak, time, difficultyLevel) {
        if (!Object.keys(this.goals).includes(peak)) {
            throw new Error(`${peak} is not in your current goals`)
        }
        if (this.resources === 0) {
            throw new Error("You don't have enough resources to start the hike")
        }

        let leftResources = (this.resources - time * 10)
        if (leftResources < 0) {
            return "You don't have enough resources to complete the hike"
        }
        this.resources = leftResources
        this.listOfHikes.push({ peak, time, difficultyLevel })
        return `You hiked ${peak} peak for ${time} hours and you have ${leftResources}% resources left`
    }
    rest(time) {
        this.resources += time * 10

        if (this.resources >= 100) {
            this.resources = 100
            return `Your resources are fully recharged. Time for hiking!`
        }
        return `You have rested for ${time} hours and gained ${time * 10}% resources`
    }

    showRecord(criteria) {
        if (criteria === "hard" || criteria === "easy") {
            let bestHike = {}
            let bestValue = 0

            if (this.listOfHikes.length === 0) {
                return `${this.username} has not done any hiking yet`
            }

            let hikesByCriteria = []
            for (let hike of this.listOfHikes) {
                if (hike.difficultyLevel === criteria) {
                    hikesByCriteria.push(hike)
                }
            }

            for (let hike of hikesByCriteria) {
                if (hike.time > bestValue) {
                    bestValue = hike.time
                    bestHike = hike
                }
            }
            if (Object.keys(bestHike).length === 0) {
                return `${this.username} has not done any ${criteria} hiking yet`
            }

            return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`
        }

        if (criteria === 'all') {
            let result = "All hiking records:"
            for (let climb of Object.values(this.listOfHikes)) {
                // console.log(climb)
                result += `\n${this.username} hiked ${climb.peak} for ${climb.time} hours`
            }
            return result

        }
    }

}

const user = new SmartHike('Vili');
console.log(user.showRecord('easy'));

user.addGoal('Musala', 2925);
console.log(user.hike('Musala', 8, 'hard'));
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));