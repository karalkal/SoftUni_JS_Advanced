function solution() {
    let result = ''
    return {
        append: function (string) {
            result += string
        },
        removeStart: function (number) {
            result = result.slice(number)
        },
        removeEnd: function (number) {
            result = result.slice(0, -number)
        },
        print: function () {
            console.log(result)
        },
    }
}

let firstZeroTest = solution();
firstZeroTest.
append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();