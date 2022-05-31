function editElement(element, replaceThis, withThis) {
    let text = element.textContent;
    const originalAsRegex = new RegExp(replaceThis, 'g')
    let result = text.replace(originalAsRegex, withThis);

        element.textContent = result;
}