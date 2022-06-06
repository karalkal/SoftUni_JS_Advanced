function solve() {
    let inputJSONField = document.querySelectorAll('div#exercise textarea')[0];
    let outputStringField = document.querySelectorAll('div#exercise textarea')[1];

    let tableBody = document.getElementsByTagName('tbody')[0]

    let generateBtn = document.getElementsByTagName('button')[0]
    let buyBtn = document.getElementsByTagName('button')[1]

    generateBtn.addEventListener('click', generateRowsFromJSON)
    buyBtn.addEventListener('click', displayResultString)

    function generateRowsFromJSON() {
        let parsedInput = JSON.parse(inputJSONField.value); // array of objects

        for (let item of parsedInput) {
            let trElement = document.createElement('tr');

            let tdElement1_Img = document.createElement('td');
            let imgElement = document.createElement('img');
            imgElement.src = item.img;
            tdElement1_Img.appendChild(imgElement);

            let tdElement2_Name = document.createElement('td');
            let pElement_Name = document.createElement('p');
            pElement_Name.textContent = item.name;
            tdElement2_Name.appendChild(pElement_Name);

            let tdElement3_Price = document.createElement('td');
            let pElement_Price = document.createElement('p');
            pElement_Price.textContent = item.price;
            tdElement3_Price.appendChild(pElement_Price);

            let tdElement4_Dec = document.createElement('td');
            let pElement_Dec = document.createElement('p');
            pElement_Dec.textContent = item.decFactor;
            tdElement4_Dec.appendChild(pElement_Dec);

            let tdElement5_input = document.createElement('td');
            let inputElement_Chckbox = document.createElement('input');
            inputElement_Chckbox.type = 'checkbox';
            tdElement5_input.appendChild(inputElement_Chckbox)

            trElement.appendChild(tdElement1_Img);
            trElement.appendChild(tdElement2_Name);
            trElement.appendChild(tdElement3_Price);
            trElement.appendChild(tdElement4_Dec);
            trElement.appendChild(tdElement5_input);

            // console.log(trElement.innerHTML)
            tableBody.appendChild(trElement);
        }
    }

    function displayResultString() {
        let resultToDisplay = ''
        let bougthItems = []
        let totalPrice = 0
        let totalDecoration = 0

        let checkedElements = tableBody.querySelectorAll('input[type="checkbox"]')

        for (let ticked of checkedElements) {
            let isChecked = ticked.parentElement.children[0].checked;
            if (isChecked) {
                let itemName = ticked.parentElement.parentElement.children[1].textContent;
                let itemPrice = Number(ticked.parentElement.parentElement.children[2].textContent);
                let itemDecFactor = Number(ticked.parentElement.parentElement.children[3].textContent);

                bougthItems.push(itemName)
                totalPrice += itemPrice
                totalDecoration += itemDecFactor
            }
        }
        resultToDisplay = `Bought furniture: ${bougthItems.join(', ')}`
        resultToDisplay += `\nTotal price: ${totalPrice.toFixed(2)}`
        resultToDisplay += `\nAverage decoration factor: ${totalDecoration/bougthItems.length}`

        outputStringField.value = resultToDisplay
    }
}