function generateReport() {
    let headers = Array.from(document.querySelectorAll('table thead tr th input[type="checkbox"]')) //:checked

    let rows = Array.from(document.querySelectorAll('tr')).splice(1)
    console.log(headers)

    let reportData = []
    for (let r of rows) { // convert row data to array
        let columnData = (r.textContent) // get text for each row
            .split('\n') // split it by newline
            .map(emp => emp.trim()) // trim white space from values
            .filter(entry => entry !== "") // remove empty strings

        let newObject = {}

        for (let i = 0; i < headers.length; i++) {
            if (headers[i].checked) { // if header is checked
                let key = headers[i].name
                let value = columnData[i]
                // console.log(headers[i].name, columnData[i])
                newObject[key] = value
            }
        }
        console.log(newObject)
        reportData.push(newObject)
    }

    let result = JSON.stringify(reportData, null, 4)

    document.getElementById('output').value = result
}