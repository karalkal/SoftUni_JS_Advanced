window.addEventListener('load', solve);

function solve() {
    let totalPrice = 0
    let priceTotalField = document.getElementsByClassName("total-price")[0]
    let modelField = document.getElementById('model')
    let yearField = document.getElementById('year')
    let descriptionField = document.getElementById('description')
    let priceField = document.getElementById('price')

    document.getElementById('add').addEventListener('click', (event) => {
        if (typeof modelField.value === 'string' && modelField.value !== ''
            && typeof descriptionField.value === 'string' && descriptionField.value !== ''
            && yearField.value >= 0 && priceField.value >= 0) {
            addToTable(event)
        }
    })
    function addToTable(event) {
        event.preventDefault()

        let model = event.target.parentElement.children[2].value
        let year = event.target.parentElement.children[5].value
        let description = event.target.parentElement.children[8].value
        let price = event.target.parentElement.children[11].value

        clearInputFields()

        let tr_VisibleElement = document.createElement('tr')
        tr_VisibleElement.className = 'info'
        //model
        let td_ModelElement = document.createElement('td')
        td_ModelElement.textContent = model
        //price
        let td_PriceElement = document.createElement('td')
        td_PriceElement.textContent = `${Number(price).toFixed(2)}`
        //buttons
        let td_ButtonsElement = document.createElement('td')
        let moreBtn = document.createElement('button')
        moreBtn.classList.add('moreBtn')
        moreBtn.textContent = 'More Info'
        let buyBtn = document.createElement('button')
        buyBtn.classList.add('buyBtn')
        buyBtn.textContent = 'Buy it'
        td_ButtonsElement.appendChild(moreBtn)
        td_ButtonsElement.appendChild(buyBtn)

        tr_VisibleElement.appendChild(td_ModelElement)
        tr_VisibleElement.appendChild(td_PriceElement)
        tr_VisibleElement.appendChild(td_ButtonsElement)


        let tr_HiddenElement = document.createElement('tr')
        tr_HiddenElement.className = 'hide'

        let td_YearElement = document.createElement('td')
        td_YearElement.textContent = 'Year: ' + year
        let td_DescriptionElement = document.createElement('td')
        td_DescriptionElement.colSpan = '3'
        td_DescriptionElement.textContent = 'Description: ' + description

        tr_HiddenElement.appendChild(td_YearElement)
        tr_HiddenElement.appendChild(td_DescriptionElement)


        document.getElementById('furniture-list').appendChild(tr_VisibleElement)
        document.getElementById('furniture-list').appendChild(tr_HiddenElement)

        moreBtn.addEventListener('click', (event) => {
            toggleMoreLess(event, tr_HiddenElement)
        })

        buyBtn.addEventListener('click', (event) => {
            buyItem(event, price, tr_VisibleElement, tr_HiddenElement)
        })
    }

    function buyItem(event, price, visibleRow, hiddenRow) {
        totalPrice += Number(price)
        priceTotalField.textContent = `${Number(totalPrice).toFixed(2)}`
        visibleRow.remove()
        hiddenRow.remove()
    }

    function toggleMoreLess(event, toggleableEl) {
        if (event.target.textContent === 'More Info') {
            event.target.textContent = 'Less Info'
            toggleableEl.style.display = 'contents'
        }
        else if (event.target.textContent === 'Less Info') {
            event.target.textContent = 'More Info'
            toggleableEl.style.display = 'none'
        }
    }

    function clearInputFields() {
        modelField.value = ''
        yearField.value = ''
        descriptionField.value = ''
        priceField.value = ''
    }
}
