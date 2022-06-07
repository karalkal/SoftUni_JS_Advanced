function solution(number) {

    // you need to return a function which will add the new parameter to the one your function has        
    function addNumber(externalNumber) {
        return number + externalNumber

    }
    return addNumber
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));

let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));