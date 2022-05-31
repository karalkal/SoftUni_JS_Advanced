function subtract() {
    const first = Number(document.getElementById('firstNumber').value);
    const second = Number(document.getElementById('secondNumber').value);
    const result = first - second;
    document.querySelector('div#result').textContent = result
    // document.getElementById('result').textContent = result
}
