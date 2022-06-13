/*
    • The username - between 3 and 20 symbols inclusively, only letters and numbers
    • The password and confirm-password - between 5 and 15 inclusively symbols, 
      only word characters are allowed (letters, numbers, and _).
    • The inputs of the password and confirm-password field must match.
    • The email field must contain the “@” symbol and at least one "."(dot) after it.
*/

function validate() {
    const validUsername = /^[0-9a-zA-Z]+$/i;
    const validPassword = /^\w+$/;
    // const validEmail = /^\w+@\w+\.\w+(\.\w+)*$/gm
    const validEmail = /.*@.*\..*/g
    let formIsValid = true

    let usernameField = document.getElementById('username')
    let emailField = document.getElementById('email')
    let passwordField = document.getElementById('password')
    let confirmPasswordField = document.getElementById('confirm-password')
    let companyInfoFieldset = document.getElementById('companyInfo')
    let companyNumberField = document.getElementById('companyNumber')
    let formValidField = document.getElementById('valid')

    let isCompanyChckBox = document.getElementById('company')
    const submitButton = document.getElementById('submit')

    let allInputFields = document.getElementsByTagName('input')

    isCompanyChckBox.addEventListener('change', toggleCompanyField)
    submitButton.addEventListener('click', verifyData)


    function verifyData(event) {
        event.preventDefault()

        if (!validUsername.test(usernameField.value)
            || (usernameField.value).length < 3
            || (usernameField.value).length > 20) {
            usernameField.class = 'invalid'
        }
        if (!validEmail.test(emailField.value)) {
            emailField.class = 'invalid'
        }
        if (!validPassword.test(passwordField.value)
            || (passwordField.value).length < 5
            || (passwordField.value).length > 15) {
            passwordField.class = 'invalid'
        }
        if (!validPassword.test(confirmPasswordField.value)
            || (confirmPasswordField.value).length < 5
            || (confirmPasswordField.value).length > 15) {
            confirmPasswordField.class = 'invalid'
        }
        if (confirmPasswordField.value !== passwordField.value) {
            passwordField.class = 'invalid'
            confirmPasswordField.class = 'invalid'
        }

        for (let inputField of allInputFields) {
            if (inputField.class === 'invalid') {
                formIsValid = false
                inputField.style.borderColor = 'red'
            }
        }

        if (formIsValid) {
            formValidField.style.display = 'block'
        }
    }

    function toggleCompanyField(event) {
        if (event.target.checked) {
            companyInfoFieldset.style.display = 'block'
            if (companyNumberField.value < 1000 || companyNumberField.value > 9999) {
                companyNumberField.class = 'invalid'
            }
        } else {
            companyInfoFieldset.style.display = 'none'
        }
    }
}

