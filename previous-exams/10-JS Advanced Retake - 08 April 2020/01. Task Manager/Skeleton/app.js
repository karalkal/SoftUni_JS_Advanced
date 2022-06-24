function solve() {
    let taskElement = document.getElementById('task')
    let descriptionElement = document.getElementById('description')
    let dateElement = document.getElementById('date')
    let addBtn = document.getElementById('add')
    addBtn.addEventListener('click', (event) => {
        event.preventDefault()

        if (taskElement.value && descriptionElement.value && dateElement.value) {
            (moveToOpen(event, taskElement, descriptionElement, dateElement))
        }
    })


    function moveToOpen(event, taskElement, descriptionElement, dateElement) {
        let orangeSection = document.querySelector('section div h1.orange').parentElement.parentElement
        let orangeDiv = orangeSection.children[1]

        let article = document.createElement('article')

        let h3Element = document.createElement('h3')
        h3Element.textContent = taskElement.value
        let pDescription = document.createElement('p')
        pDescription.textContent = 'Description: ' + descriptionElement.value
        let pDueDate = document.createElement('p')
        pDueDate.textContent = 'Due Date: ' + dateElement.value

        let divButtons = document.createElement('div')
        divButtons.className = 'flex'
        let startButton = document.createElement('button')
        startButton.textContent = 'Start'
        startButton.className = 'green'
        let deleteButton = document.createElement('button')
        deleteButton.textContent = 'Delete'
        deleteButton.className = 'red'
        divButtons.appendChild(startButton)
        divButtons.appendChild(deleteButton)

        article.appendChild(h3Element)
        article.appendChild(pDescription)
        article.appendChild(pDueDate)
        article.appendChild(divButtons)

        orangeDiv.appendChild(article)

        taskElement.value = ''
        descriptionElement.value = ''
        dateElement.value = ''

        startButton.addEventListener('click', (event) => {
            startButton.remove()
            moveToProgress(event, article, divButtons)
        })
        deleteButton.addEventListener('click', () => {
            article.remove()

        })
    }


    function moveToProgress(event, article, divButtons) {
        let yellowSection = document.querySelector('section div h1.yellow').parentElement.parentElement
        let yellowDiv = yellowSection.children[1]

        let finishButton = document.createElement('button')
        finishButton.textContent = 'Finish'
        finishButton.className = 'orange'
        divButtons.appendChild(finishButton)

        yellowDiv.appendChild(article)

        finishButton.addEventListener('click', (event) => {
            divButtons.remove()
            moveToCompleted(event, article)
        })
    }


    function moveToCompleted(event, article) {
        let greenSection = document.querySelector('section div h1.green').parentElement.parentElement
        let greenDiv = greenSection.children[1]

        greenDiv.appendChild(article)

    }
}
