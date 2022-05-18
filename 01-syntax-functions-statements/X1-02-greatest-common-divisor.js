function findGCD(n1, n2) {
    let divisorsN1 = [];
    let greatestCD = 0;
    for (let i = 1; i <= n1; i++) {
        if (n1 % i === 0) {
            divisorsN1.push(i)
        }
    }

    for (let j = 1; j <= n1; j++) {
        if (n2 % j === 0 && divisorsN1.includes(j)) {
            greatestCD = j
        }
    }

    console.log(greatestCD);
}

findGCD(150, 50)