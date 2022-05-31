function calc() {
    const number1 = Number(document.getElementById('num1').value);
    const number2 = Number(document.getElementById('num2').value);
    const total = number1 + number2;
    // console.log(total)
    document.getElementById('sum').value = total

}
