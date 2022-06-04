function focused() {
    let allDivs = Array.from(document.querySelectorAll('div input'))

    allDivs.forEach(el => {
        el.addEventListener('focus', applyFocus)
        el.addEventListener('blur', removeFocus)
    });

    function applyFocus(event) {
        event.target.parentElement.classList = 'focused'
    }

    function removeFocus(event) {
        event.target.parentElement.classList = ''
    }
}