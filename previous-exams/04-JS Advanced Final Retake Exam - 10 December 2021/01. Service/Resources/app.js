window.addEventListener('load', solve);

function solve() {
    let productTypeField = document.getElementById("type-product")
    let description = document.getElementById("description")
    let clientName = document.getElementById("client-name")
    let clientPhone = document.getElementById("client-phone")
    document.querySelector('button[type = "submit"]')
        .addEventListener('click', (event) => {          // check if all fields are filled, only if yes proceed
            if (productTypeField.value && description.value && clientName.value && clientPhone.value) {
                sendForRepair(event)
            }
        })


    function sendForRepair(event) {
        event.preventDefault()

        let orderDetails = event.target.parentElement.children
        let textProductType = 'Product type for repair: ' + orderDetails[1].value
        let textDescription = 'Description of the problem: ' + orderDetails[3].value
        let textClientName = orderDetails[5].value
        let textClientPhone = orderDetails[7].value
        let textClientInfo = 'Client information: ' + textClientName + ', ' + textClientPhone


        clearInputFields()

        let divElement = document.createElement('div')
        divElement.classList.add('container')
        let h2Element = document.createElement('h2')
        h2Element.textContent = textProductType
        let h3Element = document.createElement('h3')
        h3Element.textContent = textClientInfo
        let h4Element = document.createElement('h4')
        let startBtn = document.createElement('button')
        startBtn.textContent = 'Start repair'
        startBtn.classList.add('start-btn')
        let finishBtn = document.createElement('button')
        finishBtn.textContent = 'Finish repair'
        finishBtn.classList.add('finish-btn')
        finishBtn.setAttribute('disabled', '')

        h4Element.textContent = textDescription
        divElement.appendChild(h2Element)
        divElement.appendChild(h3Element)
        divElement.appendChild(h4Element)
        divElement.appendChild(startBtn)
        divElement.appendChild(finishBtn)
        document.getElementById('received-orders').appendChild(divElement)

        startBtn.addEventListener('click', () => {
            startBtn.setAttribute('disabled', '')
            finishBtn.removeAttribute('disabled', '')

            finishBtn.addEventListener('click', (event) => {
                startBtn.remove()
                finishBtn.remove()
                completeOrder(event, divElement)
            })
        })
    }


    function completeOrder(event, divElement) {
        document.getElementById('completed-orders').appendChild(divElement)
        document.getElementsByClassName('clear-btn')[0].addEventListener('click', ClearCompletedOrders)
    }


    function ClearCompletedOrders(event) {
        let allCompletedDivs = document.querySelectorAll('section#completed-orders div')
        // console.log(allCompletedDivs)

        for (div of allCompletedDivs) {
            div.remove()
        }
    }


    function clearInputFields() {
        productTypeField.value = 'Computer'
        description.value = ''
        clientName.value = ''
        clientPhone.value = ''
    }
}