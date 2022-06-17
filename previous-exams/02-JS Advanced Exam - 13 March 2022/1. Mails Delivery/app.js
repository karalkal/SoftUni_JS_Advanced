function solve() {
    let recipientField = document.getElementById('recipientName')
    let titleField = document.getElementById('title')
    let messageField = document.getElementById('message')
    let addBtn = document.getElementById('add')
    let resetBtn = document.getElementById('reset')

    addBtn.addEventListener('click', addToList)
    resetBtn.addEventListener('click', resetFields)


    function clearInputValues() {
        recipientField.value = ''
        titleField.value = ''
        messageField.value = ''
    }
    
    function resetFields(event) {
        event.preventDefault()

        // All fields are non-empty strings
        if (!recipientField.value || !titleField.value || !messageField.value) {
            return
        }

        clearInputValues()
    }

    function addToList(event) {
        event.preventDefault()

        // All fields are non-empty strings
        if (!recipientField.value || !titleField.value || !messageField.value) {
            return
        }


        let liElement = document.createElement('li')
        let h4Title = document.createElement('h4')
        h4Title.textContent = `Title: ${titleField.value}`
        let h4Recipient = document.createElement('h4')
        h4Recipient.textContent = `Recipient Name: ${recipientField.value}`
        let spanElement = document.createElement('span')
        spanElement.textContent = messageField.value
        let divButtons = document.createElement('div')
        divButtons.id = 'list-action'
        let btnSend = document.createElement('button')
        btnSend.textContent = 'Send'
        btnSend.id = 'send'
        let btnDelete = document.createElement('button')
        btnDelete.textContent = 'Delete'
        btnDelete.id = 'delete'

        divButtons.appendChild(btnSend)
        divButtons.appendChild(btnDelete)
        liElement.appendChild(h4Title)
        liElement.appendChild(h4Recipient)
        liElement.appendChild(spanElement)
        liElement.appendChild(divButtons)
        document.getElementById('list').appendChild(liElement)

        clearInputValues()

        btnSend.addEventListener('click', sendEmail)
        btnDelete.addEventListener('click', deleteEmail)
    }

    function sendEmail(event) {
        let liContainer = event.target.parentElement.parentElement
        let textTitle = liContainer.children[0].textContent
        let textRecipient = liContainer.children[1].textContent
        // let textMessage = liContainer.children[2].textContent

        let liElement = document.createElement('li')
        let spanToElement = document.createElement('span')
        spanToElement.textContent = textRecipient.replace('Recipient Name: ', 'To: ')
        let spanTitleElement = document.createElement('span')
        spanTitleElement.textContent = textTitle
        let divDeleteBtn = document.createElement('div')
        divDeleteBtn.className = 'btn'
        let btnDelete = document.createElement('button')
        btnDelete.textContent = 'Delete'
        btnDelete.className = 'delete'

        divDeleteBtn.appendChild(btnDelete)
        liElement.appendChild(spanToElement)
        liElement.appendChild(spanTitleElement)
        liElement.appendChild(divDeleteBtn)
        document.getElementsByClassName('sent-list')[0].appendChild(liElement)

        liContainer.remove()

        btnDelete.addEventListener('click', deleteEmail)

    }

    function deleteEmail(event) {
        let liContainer = event.target.parentElement.parentElement
        let textTitle = liContainer.children[0].textContent
        let textRecipient = liContainer.children[1].textContent

        let liElement = document.createElement('li')
        let spanToElement = document.createElement('span')
        spanToElement.textContent = textRecipient.replace('Recipient Name: ', 'To: ') // if diverted directly from unsent list replace, if from sent do nothing
        let spanTitleElement = document.createElement('span')
        spanTitleElement.textContent = textTitle

        liElement.appendChild(spanToElement)
        liElement.appendChild(spanTitleElement)
        document.getElementsByClassName('delete-list')[0].appendChild(liElement)

        liContainer.remove()
    }
}
solve()