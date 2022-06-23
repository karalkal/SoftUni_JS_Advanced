function solution() {
    let inputField = document.querySelector('div input[type="text"]')
    let addBtn = document.querySelector('div button')

    addBtn.addEventListener('click', addToList)

    function addToList(event) {
        event.preventDefault()
        let giftName = inputField.value
        inputField.value = ''

        // there are three <section class="card"
        let ulContainer = document.querySelectorAll('section.card ul')[0]

        let liElement = document.createElement('li')
        liElement.classList.add('gift')
        liElement.textContent = giftName

        let sendBtn = document.createElement('button')
        sendBtn.id = 'sendButton'
        sendBtn.textContent = 'Send'
        liElement.appendChild(sendBtn)

        let discardBtn = document.createElement('button')
        discardBtn.id = 'discardButton'
        discardBtn.textContent = 'Discard'
        liElement.appendChild(discardBtn)

        sendBtn.addEventListener('click', confirmGift)
        discardBtn.addEventListener('click', discardGift)


        // add new to existing ones
        ulContainer.appendChild(liElement)

        // sort them and save them in array of li Objects
        let sortedLiElements = Array.from(ulContainer.children)
            .sort((li1, li2) => li1.textContent.localeCompare(li2.textContent))

        // clear ul Element and recreate it with new values
        ulContainer.innerHTML = ''
        for (let li of sortedLiElements) {
            ulContainer.appendChild(li)
            // ulContainer += li.innerHTML
        }
    }

    function confirmGift(event) {
        let giftName = event.target.parentElement.textContent
            .replace('Send', '')
            .replace('Discard', '')

        event.target.parentElement.remove()

        let liElement = document.createElement('li')
        liElement.classList.add('gift')
        liElement.textContent = giftName
        // there are three <section class="card"
        document.querySelectorAll('section.card ul')[1].appendChild(liElement)
    }


    function discardGift(event) {
        let giftName = event.target.parentElement.textContent
            .replace('Send', '')
            .replace('Discard', '')

        event.target.parentElement.remove()

        let liElement = document.createElement('li')
        liElement.classList.add('gift')
        liElement.textContent = giftName
        // there are three <section class="card"
        document.querySelectorAll('section.card ul')[2].appendChild(liElement)
    }

}