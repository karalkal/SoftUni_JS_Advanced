function add(n) {
    let inner = (a) => {
        n += a;
        return inner;
    }
    inner.toString = function () {
        return n;
    }
    return inner
}

// console.log(add(1))
console.log(add(1)(6)(-3))