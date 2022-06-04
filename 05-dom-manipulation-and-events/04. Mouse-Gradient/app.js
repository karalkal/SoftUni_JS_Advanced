function attachGradientEvents() {
    let result = document.getElementById('result')
    console.log(result)

    document.getElementById('gradient-box')
        .addEventListener('mousemove', calculatePercentage)
    document.getElementById('gradient-box')
        .addEventListener('mouseout', displayNoneIfOut)

    function calculatePercentage(event) {
        // console.log(event)
        // console.log(event.target.scrollWidth)
        result.textContent = Math.floor(
            (event.offsetX / 300) * 100) + '%'
    }

    function displayNoneIfOut(event) {
        result.textContent = ''
    }
}