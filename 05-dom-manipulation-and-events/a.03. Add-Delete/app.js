function addItem() {
    let text = document.getElementById('newItemText').value;

    let liElement = document.createElement('li');
    liElement.textContent = text;

    let aElement = document.createElement('a');
    aElement.textContent = '[Delete]'
    aElement.href = "#"
    aElement.addEventListener('click', deleteEntry)

    liElement.appendChild(aElement)

    let ulElement = document.getElementsByTagName('ul')[0];
    ulElement.appendChild(liElement);

    document.getElementById('newItemText').value = ''

    function deleteEntry() {
        aElement.parentElement.parentElement.removeChild(liElement)
    }
}