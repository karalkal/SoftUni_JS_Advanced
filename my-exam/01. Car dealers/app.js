window.addEventListener("load", solve);

function solve() {
    let totalProfit = 0
    let makeField = document.getElementById('make')
    let modelField = document.getElementById('model')
    let yearField = document.getElementById('year')
    let fuelField = document.getElementById('fuel')
    let originalCostField = document.getElementById('original-cost')
    let sellingPriceField = document.getElementById('selling-price')

    document.getElementById('publish').addEventListener('click', addToTable)


    function addToTable(event) {
        event.preventDefault()

        if (!makeField.value || !modelField.value || !yearField.value
            || !fuelField.value || !originalCostField.value || !sellingPriceField.value
            || Number(sellingPriceField.value) <= Number(originalCostField.value)) {
            return
        }

        let trElement = document.createElement('tr')
        trElement.className = 'row'

        let makeTD = document.createElement('td')
        makeTD.textContent = makeField.value
        let modelTD = document.createElement('td')
        modelTD.textContent = modelField.value
        let yearTD = document.createElement('td')
        yearTD.textContent = yearField.value
        let fuelTD = document.createElement('td')
        fuelTD.textContent = fuelField.value
        let originalCostTD = document.createElement('td')
        originalCostTD.textContent = originalCostField.value
        let sellingPriceTD = document.createElement('td')
        sellingPriceTD.textContent = sellingPriceField.value

        let buttonsTD = document.createElement('td')
        let editButton = document.createElement('button')
        editButton.classList.add('action-btn', 'edit')
        editButton.textContent = 'Edit'
        let sellButton = document.createElement('button')
        sellButton.classList.add('action-btn', 'sell')
        sellButton.textContent = 'Sell'
        buttonsTD.appendChild(editButton)
        buttonsTD.appendChild(sellButton)

        trElement.appendChild(makeTD)
        trElement.appendChild(modelTD)
        trElement.appendChild(yearTD)
        trElement.appendChild(fuelTD)
        trElement.appendChild(originalCostTD)
        trElement.appendChild(sellingPriceTD)
        trElement.appendChild(buttonsTD)

        document.getElementById('table-body').appendChild(trElement)

        makeField.value = ''
        modelField.value = ''
        yearField.value = ''
        fuelField.value = ''
        originalCostField.value = ''
        sellingPriceField.value = ''

        editButton.addEventListener('click', editData)

        sellButton.addEventListener('click', sellCar)
    }


    function sellCar(event) {
        let ulEelement = document.getElementById('cars-list')

        let allChildren = event.target.parentElement.parentElement.children
        let trElement = event.target.parentElement.parentElement

        let liElement = document.createElement('li')
        liElement.className = 'each-list'

        let makeAndModelSpan = document.createElement('span')
        makeAndModelSpan.textContent = allChildren[0].textContent + ' ' + allChildren[1].textContent
        let yearSpan = document.createElement('span')
        yearSpan.textContent = allChildren[2].textContent
        let profitSpan = document.createElement('span')
        let currentProfit = Number(allChildren[5].textContent) - Number(allChildren[4].textContent)

        profitSpan.textContent = currentProfit
        totalProfit += currentProfit

        liElement.appendChild(makeAndModelSpan)
        liElement.appendChild(yearSpan)
        liElement.appendChild(profitSpan)

        ulEelement.appendChild(liElement)

        let profitField = document.getElementById('profit')
        profitField.textContent = totalProfit.toFixed(2)

        trElement.remove()
    }


    function editData(event) {
        let allChildren = event.target.parentElement.parentElement.children
        let trElement = event.target.parentElement.parentElement

        makeField.value = allChildren[0].textContent
        modelField.value = allChildren[1].textContent
        yearField.value = allChildren[2].textContent
        fuelField.value = allChildren[3].textContent
        originalCostField.value = allChildren[4].textContent
        sellingPriceField.value = allChildren[5].textContent

        trElement.remove()

        document.getElementById('publish').addEventListener('click', addToTable)
    }

}