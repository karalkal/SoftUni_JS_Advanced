function solve() {
    let taskTitle = document.getElementById('task')
    let taskDescr = document.getElementById('description')
    let taskDueDate = document.getElementById('date')
    let addBtn = document.getElementById('add')
    let allSections = document.getElementsByTagName('section')

    addBtn.addEventListener('click', addTaskToOpen)
    // console.log(taskTitle.value)
    // console.log(taskDescr.value)
    // console.log(taskDueDate.value)

    function addTaskToOpen(event) {
        // console.log(taskTitle.value)
        // console.log(taskDescr.value)
        // console.log(taskDueDate.value)

        event.preventDefault()

        // if empty filed -> return
        if (!taskTitle.value || !taskDescr.value || !taskDueDate.value) {
            return
        }
        // identify relevant section and its div to contain all elements
        let section_OpenTasks = allSections[1]
        let div_OpenTasks = section_OpenTasks.getElementsByTagName('div')[1]

        let article = document.createElement('article')

        let h3_Title = document.createElement('h3')
        h3_Title.textContent = taskTitle.value
        let p_Descr = document.createElement('p')
        p_Descr.textContent = `Description: ${taskDescr.value}`
        let p_DueDate = document.createElement('p')
        p_DueDate.textContent = `Due Date: ${taskDueDate.value}`
        let div = document.createElement('div')
        div.className = 'flex'

        let startBtn = document.createElement('button')
        startBtn.id = 'startBtn'
        startBtn.className = 'green'
        startBtn.textContent = 'Start'
        let deleteBtn = document.createElement('button')
        deleteBtn.id = 'deleteBtn'
        deleteBtn.textContent = 'Delete'
        deleteBtn.className = 'red'
        let finishBtn = document.createElement('button')
        finishBtn.id = 'finishBtn'
        finishBtn.textContent = 'Finish'
        finishBtn.className = 'yellow'

        div.appendChild(startBtn)
        div.appendChild(deleteBtn)

        article.appendChild(h3_Title)
        article.appendChild(p_Descr)
        article.appendChild(p_DueDate)
        article.appendChild(div)

        div_OpenTasks.appendChild(article)

        clearFields()

        startBtn.addEventListener('click', moveTaskToInProgress)
        deleteBtn.addEventListener('click', deleteTask)
    }


    function deleteTask(event) {
        let divToBeDeleted = event.target.parentElement.parentElement
        divToBeDeleted.remove()
    }


    function moveTaskToInProgress(event) {
        let section_InProgressTasks = allSections[2]
        let div_InProgressTasks = section_InProgressTasks.getElementsByTagName('div')[1]
        let divToBeMoved = event.target.parentElement.parentElement
        // remove start button
        divToBeMoved.children[3].firstChild.remove()
        // divToBeMoved.getElementById('startBtn').remove()

        // append finish button
        let finishBtn = document.createElement('button')
        finishBtn.textContent = 'Finish'
        finishBtn.className = 'orange'
        divToBeMoved.children[3].appendChild(finishBtn)

        // move whole div to the next section
        div_InProgressTasks.appendChild(divToBeMoved)

        finishBtn.addEventListener('click', moveTaskToCompleted)
    }


    function moveTaskToCompleted(event) {
        let section_CompletedTasks = allSections[3]
        let div_CompletedTasks = section_CompletedTasks.getElementsByTagName('div')[1]
        let divToBeMoved = event.target.parentElement.parentElement
        // remove both buttons
        divToBeMoved.children[3].remove()

        // move whole div to the next section
        div_CompletedTasks.appendChild(divToBeMoved)
    }


    function clearFields() {
        taskTitle.value = ''
        taskDescr.value = ''
        taskDueDate.value = ''
    }
}