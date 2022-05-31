function sumTable() {
    let sum = 0
    const itemsPrices = Array.from(document.querySelectorAll('tbody tr :nth-child(2n)')).slice(1, -1);
    for (price of itemsPrices) {
        sum += Number(price.textContent)
    }
    console.log(sum);
    document.getElementById('sum').textContent = sum
}