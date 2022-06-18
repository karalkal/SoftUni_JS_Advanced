function solve() {
    let fNameField = document.getElementById('fname')
    let lNameField = document.getElementById('lname')
    let emailField = document.getElementById('email')
    let birthField = document.getElementById('birth')
    let positionField = document.getElementById('position')
    let salaryField = document.getElementById('salary')
    let budgetSpan = document.getElementById('sum')
    let budget = 0

    document.getElementById('add-worker').addEventListener('click', addToTable)

    function addToTable(event) {
        event.preventDefault()


        if (fNameField.value === ''
            || lNameField.value === ''
            || emailField.value === ''
            || birthField.value === ''
            || positionField.value === ''
            || salaryField.value === '') {
            return
        }
        let tableRow = document.createElement('tr')

        let td1FName = document.createElement('td')
        td1FName.textContent = fNameField.value
        let td2LName = document.createElement('td')
        td2LName.textContent = lNameField.value
        let td3Email = document.createElement('td')
        td3Email.textContent = emailField.value
        let td4DoB = document.createElement('td')
        td4DoB.textContent = birthField.value
        let td5Position = document.createElement('td')
        td5Position.textContent = positionField.value
        let td6Salary = document.createElement('td')
        td6Salary.textContent = salaryField.value

        let td7Action = document.createElement('td')
        let fireBtn = document.createElement('button')
        fireBtn.textContent = 'Fired'
        fireBtn.className = 'fired'
        let editBtn = document.createElement('button')
        editBtn.textContent = 'Edit'
        editBtn.className = 'edit'
        td7Action.appendChild(fireBtn)
        td7Action.appendChild(editBtn)

        tableRow.appendChild(td1FName)
        tableRow.appendChild(td2LName)
        tableRow.appendChild(td3Email)
        tableRow.appendChild(td4DoB)
        tableRow.appendChild(td5Position)
        tableRow.appendChild(td6Salary)
        tableRow.appendChild(td7Action)

        budget += Number(salaryField.value)
        budgetSpan.textContent = budget.toFixed(2)


        document.getElementById('tbody').appendChild(tableRow)
        fireBtn.addEventListener('click', removeEntry)
        editBtn.addEventListener('click', editEntry)

        fNameField.value = ''
        lNameField.value = ''
        emailField.value = ''
        birthField.value = ''
        positionField.value = ''
        salaryField.value = ''
    }

    function removeEntry(event) {
        let rowToRemove = event.target.parentNode.parentNode

        salaryField.value = rowToRemove.children[5].textContent

        budget -= Number(salaryField.value)
        budgetSpan.textContent = budget.toFixed(2)

        rowToRemove.remove()
    }

    function editEntry(event) {
        let rowToEdit = event.target.parentNode.parentNode

        fNameField.value = rowToEdit.children[0].textContent
        lNameField.value = rowToEdit.children[1].textContent
        emailField.value = rowToEdit.children[2].textContent
        birthField.value = rowToEdit.children[3].textContent
        positionField.value = rowToEdit.children[4].textContent
        salaryField.value = rowToEdit.children[5].textContent

        budget -= Number(salaryField.value)
        budgetSpan.textContent = budget.toFixed(2)

        rowToEdit.remove()

        document.getElementById('add-worker').addEventListener('click', addToTable)
    }
}
// solve()