function validate() {
    let inputElement = document.getElementById('email')
    inputElement.addEventListener('change', validateEmail)

    function validateEmail(event) {
        let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/gs;
        if (pattern.test(inputElement.value) === false) {
            event.target.classList = 'error'
        }else{
            event.target.classList = null
        }
    }
}