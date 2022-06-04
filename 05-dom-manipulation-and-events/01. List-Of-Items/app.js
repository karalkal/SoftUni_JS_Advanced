function addItem() {
    let text = document.getElementById('newItemText').value
    let li = document.createElement('li')
    li.textContent = text

    let ulElement = document.querySelector('ul#items')

    ulElement.appendChild(li)

    document.getElementById('newItemText').value = ''
}