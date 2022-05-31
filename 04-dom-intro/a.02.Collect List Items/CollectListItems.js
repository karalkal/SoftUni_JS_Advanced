function extractText() {
    // console.log('it works!!!!!!')
    items = Array.from(document.getElementsByTagName('li'));
    textarea=document.getElementById('result')
    textarea.value = items.map(i => i.textContent).join('\n')
}