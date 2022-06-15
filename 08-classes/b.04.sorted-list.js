class List {
    constructor() {
        this.arr = []
        this.size = 0
    }

    add(number) {
        this.arr.push(number)
        this.arr.sort((a, b) => a - b)
        this.size = this.arr.length
    }

    remove(index) {
        if (index >= 0 && index < this.arr.length) {
            this.arr.splice(index, 1)
            this.size = this.arr.length
        }
    }

    get(index) {
        return this.arr[index]
    }

    // get size() {
    //     return this.arr.length
    // }
}

// let list = new List();
// list.add(59);
// console.log(list)

// list.add(96);
// console.log(list)

// list.add(17);
// console.log(list)

// console.log(list.get(1));
// list.remove(1);
// console.log(list)

// console.log(list.get(1));
// console.log(list.size);

let myList = new List();
myList.add(55);
console.log(myList.get(0))
myList.add(33);
console.log(myList.get(0))
console.log(myList.size)
myList.remove(0);
console.log(myList.get(0))
myList.remove(80);
console.log(myList.get(1))
myList.add(11);
console.log(myList.get(1))
console.log(myList.size)
console.log(myList.hasOwnProperty('size'))


