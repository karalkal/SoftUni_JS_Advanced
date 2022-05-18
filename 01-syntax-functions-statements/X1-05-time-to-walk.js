function solve(numberSteps, stepLen, speedKmpH) {
    let distanceInKm = numberSteps * stepLen / 1000
    let delayInSeconds = Math.floor(distanceInKm / .5) * 60
    let timeInSeconds = (distanceInKm / speedKmpH) * 3600 + delayInSeconds

    let hours = Math.floor(timeInSeconds / 3600)
    let minutes = Math.floor(timeInSeconds / 60 - hours * 60)
    let seconds = Math.round(timeInSeconds - (hours * 3600 + minutes * 60))
    // console.log(hours.toString(2), minutes, seconds)

    let hoursAsStr = (hours > 9) ?
        hours.toString() : '0' + hours.toString()
    let minutesAsStr = (minutes > 9) ?
        minutes.toString() : '0' + minutes.toString()
    let secondsAsStr = (seconds > 9) ?
        seconds.toString() : '0' + seconds.toString()

    console.log(hoursAsStr + ':' + minutesAsStr + ':' + secondsAsStr)
}

solve(4000, 0.60, 5)
solve(2564, 0.70, 5.5)
solve(44000, 0.60, 2)