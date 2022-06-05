function lockedProfile() {
    let profileDivs = Array.from(document.getElementsByClassName('profile'))

    profileDivs.forEach(element => {
        element.getElementsByTagName('button')[0]
            .addEventListener('click', displayInfo)
    });

    function displayInfo(event) {
        let isLocked = event.target.parentElement.children[2].checked
        if (!isLocked) {
            let hiddenInfo = event.target.parentElement.children[9]
            hiddenInfo.id = ''

            if (event.target.textContent === "Show more") {
                event.target.textContent = 'Hide it'
            } else if (event.target.textContent === "Hide it") {
                event.target.textContent = 'Show more'
                hiddenInfo.id = 'user1HiddenFields'
            }
        }
    }
}