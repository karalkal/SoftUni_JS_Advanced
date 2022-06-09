function calculator() {
    n1 = null
    n2 = null
    result = null

    return {
        init,
        add,
        subtract,
    }

    function init(selector1, selector2, resultSelector) {
        n1 = document.querySelector(selector1);
        n2 = document.querySelector(selector2);
        result = document.querySelector(resultSelector);
    }

    function add() {
        result.value = Number(n1.value) + Number(n2.value)
    }

    function subtract() {
        result.value = Number(n1.value) - Number(n2.value)
    }
}


// const calculate = calculator();
// calculate.init('#num1', '#num2', '#result');