function attachEventsListeners() {
    let divElements = Array.from(document.querySelectorAll('div'))

    for (let div of divElements) {
        div.children[2].addEventListener('click', convertNumber)
    }

    function convertNumber(event) {
        let convertThis = Number(event.target.previousElementSibling.value)
        let btnID = event.target.id

        let days = 0
        let hours = 0
        let minutes = 0
        let seconds = 0

        // keep original, convert others
        if (btnID === 'daysBtn') {
            days = convertThis;
            hours = convertThis * 24;
            minutes = hours * 60;
            seconds = minutes * 60
        } else if (btnID === 'hoursBtn') {
            days = convertThis / 24;
            hours = convertThis;
            minutes = convertThis * 60;
            seconds = minutes * 60
        } else if (btnID === 'minutesBtn') {
            days = convertThis / 24 / 60;
            hours = convertThis / 60;
            minutes = convertThis;
            seconds = minutes * 60
        } else if (btnID === 'secondsBtn') {
            days = convertThis / 24 / 60 / 60;
            hours = convertThis / 60 / 60;
            minutes = convertThis / 60;
            seconds = convertThis
        }

        for (let div of divElements) {
            let textID = div.children[1].id
            if (textID === "days") {
                div.children[1].value = days
            }
            if (textID === "hours") {
                div.children[1].value = hours
            }
            if (textID === "minutes") {
                div.children[1].value = minutes
            }
            if (textID === "seconds") {
                div.children[1].value = seconds
            }
        }
    }
}