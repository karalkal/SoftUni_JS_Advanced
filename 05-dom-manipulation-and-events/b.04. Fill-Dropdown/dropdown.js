function addItem() {

    let itemText = document.getElementById("newItemText");
    let itemValue = document.getElementById("newItemValue");

    let optionElement = document.createElement('option');
    optionElement.text = itemText.value;
    optionElement.value = itemValue.value;

    let selectElement = document.getElementById('menu');
    selectElement.appendChild(optionElement);

    itemText.value = '';
    itemValue.value = '';
}