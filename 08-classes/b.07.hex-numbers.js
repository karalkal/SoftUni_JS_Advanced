class Hex {
    constructor(number) {
        this.number = number
    }

    valueOf() {                         // This function should return the value property of the hex class.
        return this.number
    }

    toString() {                        //This function will show its hexadecimal value starting with "0x"
        return '0x' + this.number.toString(16).toUpperCase()
    }

    plus(value) {                       // This function should add a number or Hex object and return a new Hex object.
        return new Hex(this.number + value)
        // return '0x' + (this.number + value).toString(16).toUpperCase()
    }

    minus(value) {                      // This function should subtract a number or Hex object and return a new Hex object.
        return new Hex(this.number - value)
        // return '0x' + (this.number - value).toString(16).toUpperCase()
    }

    parse(hexString) {                  //Create a parse class method that can parse Hexadecimal numbers and convert them to standard decimal numbers.
        return parseInt(hexString, 16);
    }
}


// let FF = new Hex(255);
// console.log(FF.toString());
// console.log(FF.valueOf() + 1 == 256);

let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');

// console.log(FF.parse('AAA'));