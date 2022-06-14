class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName
        this.age = age;
        this.email = email;
    };

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    };
};



ivan = new Person('ivan', 'ivanov', 99, 'kur@kur.com')
console.log(ivan)