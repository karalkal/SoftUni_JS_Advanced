function getPersons() {
    arr = []

    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            if (lastName) this.lastName = lastName;
            if (age) this.age = age;
            if (email) this.email = email;
        }

        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`

        }
    }


    anna = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com')
    arr.push(anna)
    su = new Person('SoftUni')
    arr.push(su)
    steve = new Person('Stephan', 'Johnson', 25)
    arr.push(steve)
    gabby = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com')
    arr.push(gabby)

    return arr
}

console.log(getPersons())
console.log(getPersons()[0].firstName)
console.log(getPersons()[0].lastName)
console.log(getPersons()[0].toString())
