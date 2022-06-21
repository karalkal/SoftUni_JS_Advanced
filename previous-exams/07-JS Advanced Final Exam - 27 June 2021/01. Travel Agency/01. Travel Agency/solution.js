window.addEventListener('load', solution);

function solution() {
  let fnameField = document.getElementById('fname')
  let emailField = document.getElementById('email')
  let phoneField = document.getElementById('phone')
  let addressField = document.getElementById('address')
  let codeField = document.getElementById('code')
  let submitBtn = document.getElementById("submitBTN")

  submitBtn.addEventListener('click', (event) => {
    event.preventDefault()
    if (fnameField.value && emailField.value) {

      previewInfo(event,
        fnameField.value,
        emailField.value,
        phoneField.value,
        addressField.value,
        codeField.value)

      clearInputValues()
    }
  })


  function previewInfo(event, name, email, phone, address, code) {
    submitBtn.disabled = true

    let ulElement = document.getElementById('infoPreview')

    let nameLi = document.createElement('li')
    let emailLi = document.createElement('li')
    let phoneLi = document.createElement('li')
    let addressLi = document.createElement('li')
    let codeLi = document.createElement('li')
    nameLi.textContent = 'Full Name: ' + name
    emailLi.textContent = 'Email: ' + email
    phoneLi.textContent = 'Phone Number: ' + phone
    addressLi.textContent = 'Address: ' + address
    codeLi.textContent = 'Postal Code: ' + code

    ulElement.appendChild(nameLi)
    ulElement.appendChild(emailLi)
    ulElement.appendChild(phoneLi)
    ulElement.appendChild(addressLi)
    ulElement.appendChild(codeLi)

    let editBtn = document.getElementById("editBTN")
    let continueBtn = document.getElementById("continueBTN")
    editBtn.disabled = false
    continueBtn.disabled = false

    editBtn.addEventListener('click', (event) => {
      editInfo(event, nameLi, emailLi, phoneLi, addressLi, codeLi,
        editBtn, continueBtn,
        name, email, phone, address, code)
    })

    continueBtn.addEventListener('click', finalizeReservation)
  }


  function editInfo(event, nameLi, emailLi, phoneLi, addressLi, codeLi,
    editBtn, continueBtn,
    name, email, phone, address, code) {
    nameLi.remove()
    emailLi.remove()
    phoneLi.remove()
    addressLi.remove()
    codeLi.remove()
    editBtn.disabled = true
    continueBtn.disabled = true

    fnameField.value = name
    emailField.value = email
    phoneField.value = phone
    addressField.value = address
    codeField.value = code

    submitBtn.disabled = false
  }


  function finalizeReservation() {
    let blockDivElement = document.getElementById('block')
    blockDivElement.innerHTML = ''
    let h3Element = document.createElement('h3')
    h3Element.textContent = "Thank you for your reservation!"
    blockDivElement.appendChild(h3Element)

  }


  function clearInputValues() {
    fnameField.value = ''
    emailField.value = ''
    phoneField.value = ''
    addressField.value = ''
    codeField.value = ''
  }

}