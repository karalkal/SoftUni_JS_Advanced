function determineSpeed(speed, location) {
    let motorwayLimit = 130
    let interstateLimit = 90
    let cityLimit = 50
    let residentialLimit = 20
    let limit
    let isSpeeding

    switch (location) {
        case 'motorway':
            limit = motorwayLimit
            break;
        case 'interstate':
            limit = interstateLimit;
            break;
        case 'city':
            limit = cityLimit;
            break;
        case 'residential':
            limit = residentialLimit
    }

    let overTheLimit = speed - limit;

    if (0 < overTheLimit && overTheLimit <= 20) {
        isSpeeding = 'speeding';
    }
    else if (20 < overTheLimit && overTheLimit <= 40) {
        isSpeeding = 'excessive speeding';
    }
    else if (40 < overTheLimit) {
        isSpeeding = 'reckless driving';
    }

    if (!isSpeeding) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else {
        console.log(`The speed is ${overTheLimit} km/h faster than the allowed speed of ${limit} - ${isSpeeding}`)
    }
}


// determineSpeed(40, 'city')          //Driving 40 km/h in a 50 zone
// determineSpeed(21, 'residential')   //The speed is 1 km/h faster than the allowed speed of 20 - speeding
// determineSpeed(120, 'interstate')   //The speed is 30 km/h faster than the allowed speed of 90 - excessive speeding
// determineSpeed(200, 'motorway')     //The speed is 70 km/h faster than the allowed speed of 130 - reckless driving
determineSpeed(130, 'motorway')     //The speed is 70 km/h faster than the allowed speed of 130 - reckless driving
determineSpeed(150, 'motorway')     //The speed is 70 km/h faster than the allowed speed of 130 - reckless driving