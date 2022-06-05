function encodeAndDecodeMessages() {
    let firstTextarea = document.getElementsByTagName('textarea')[0]
    let secondTextarea = document.getElementsByTagName('textarea')[1]
    secondTextarea.value = ''

    let encodeBtn = document.getElementsByTagName('button')[0]
    let decodeBtn = document.getElementsByTagName('button')[1]

    encodeBtn.addEventListener('click', encodeText)

    decodeBtn.addEventListener('click', decodeText)


    function encodeText(event) {
        let originalText = firstTextarea.value

        let encodedText = ''
        for (let i = 0; i < originalText.length; i++) {
            encodedText += String.fromCharCode(originalText.charCodeAt(i) + 1)
        }
        firstTextarea.value = '' // clear textarea
        secondTextarea.value = encodedText
    }

    function decodeText(event) {
        let encodedText = secondTextarea.value
        let decodedText = ''
        for (let i = 0; i < encodedText.length; i++) {
            decodedText += String.fromCharCode(encodedText.charCodeAt(i) - 1)
        }
        secondTextarea.value = decodedText
    }
}