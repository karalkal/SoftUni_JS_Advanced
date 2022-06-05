function deleteByEmail() {
    let emailToDelete = document.querySelector('input[name="email"]').value;
    let trElements = document.querySelectorAll('table tbody tr td');
    let isDeleted = false
    let resultDivElement = document.getElementById('result')

    for (let i = 1; i < trElements.length; i += 2) {
        console.log(trElements[i].textContent, emailToDelete)
        if (trElements[i].textContent === emailToDelete) {
            let row = trElements[i].parentNode
            row.parentElement.removeChild(row)
            isDeleted = true
        }
    }
    if (isDeleted){
        resultDivElement.textContent = "Deleted."
    }else{
        resultDivElement.textContent = "Not found."
    }
    emailToDelete.value = ''
}