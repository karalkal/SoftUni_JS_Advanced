function validate() {
    let inputField = document.querySelector('input#email');
    let validEmailRegex = /^[a-z]+\@[a-z]+\.[a-z]+$/gm
    inputField.addEventListener("change", checkEntry);


    function checkEntry() {
        let entry = inputField.value
        if (!validEmailRegex.test(entry)) {
            inputField.className = 'error'
        }
        else {
            inputField.removeAttribute('class')
        }
    }
}