window.addEventListener('load', solve);

function solve() {
    let genreField = document.getElementById('genre')
    let nameField = document.getElementById('name')
    let authorField = document.getElementById('author')
    let dateField = document.getElementById('date')
    let totalLikes = 0
    let likesField = document.querySelector('div.likes p')

    document.getElementById('add-btn').addEventListener('click', (event) => {
        if (genreField.value && nameField.value && authorField.value && dateField.value) {
            addToCollection(event, genreField.value, nameField.value, authorField.value, dateField.value)
        }
        else {
            event.preventDefault()
            clearInputFields()
        }
    })


    function addToCollection(event, genreText, nameText, authorText, dateText) {
        event.preventDefault()
        clearInputFields()

        let divEl = document.createElement('div')
        divEl.classList.add('hits-info')
        let imgEl = document.createElement('img')
        imgEl.src = './static/img/img.png'
        let genre_h2El = document.createElement('h2')
        genre_h2El.textContent = 'Genre: ' + genreText
        let name_h2El = document.createElement('h2')
        name_h2El.textContent = 'Name: ' + nameText
        let author_h2El = document.createElement('h2')
        author_h2El.textContent = 'Author: ' + authorText
        let date_h3El = document.createElement('h3')
        date_h3El.textContent = 'Date: ' + dateText
        let saveBtn = document.createElement('button')
        saveBtn.className = 'save-btn'
        saveBtn.textContent = 'Save song'
        let likeBtn = document.createElement('button')
        likeBtn.className = 'like-btn'
        likeBtn.textContent = 'Like song'
        let deleteBtn = document.createElement('button')
        deleteBtn.className = 'delete-btn'
        deleteBtn.textContent = 'Delete'

        divEl.appendChild(imgEl)
        divEl.appendChild(genre_h2El)
        divEl.appendChild(name_h2El)
        divEl.appendChild(author_h2El)
        divEl.appendChild(date_h3El)
        divEl.appendChild(saveBtn)
        divEl.appendChild(likeBtn)
        divEl.appendChild(deleteBtn)
        document.querySelector('div.all-hits-container').appendChild(divEl)

        saveBtn.addEventListener('click', (event) => {
            saveSong(event, divEl)
        })

        likeBtn.addEventListener('click', likeSong)

        deleteBtn.addEventListener('click', (event) => {
            event.target.parentElement.remove()
        })
    }


    function saveSong(event, divEl) {
        document.getElementsByClassName('saved-container')[0].appendChild(divEl)
        divEl.children[5].remove()
        divEl.children[5].remove()
    }


    function likeSong(event) {
        event.target.disabled = true
        totalLikes += 1
        likesField.textContent = `Total Likes: ${totalLikes}`
    }

    function clearInputFields() {
        genreField.value = ''
        nameField.value = ''
        authorField.value = ''
        dateField.value = ''
    }
}