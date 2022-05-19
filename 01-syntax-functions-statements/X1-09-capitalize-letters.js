function solve(string) {
    let arrOfChars = string.split('');
    let arrOfAscii = arrOfChars.map(function (val) { return val.charCodeAt() });
    let capitalizedWords = [];
    let newWord = "";

    for (let code of arrOfAscii) {
        if (65 <= code && code <= 90)           // A-Z
            newWord += String.fromCharCode(code);

        else if (48 <= code && code <= 57)           //0-9
            newWord += String.fromCharCode(code);

        else if (97 <= code && code <= 122)     // a-z
            newWord += String.fromCharCode(code - 32);

        else {      // if char is not letter => word is finished => append it, prepare for new word
            capitalizedWords.push(newWord);
            newWord = "";
        }
    }
    let lastWord = newWord      // last generated word will not be appended automatically if no punctuation at end
    capitalizedWords.push(lastWord)
    // remove all empty strings which somehow get pushed too
    console.log(capitalizedWords.filter(x => x !== "").join(', '))
}

solve('Hi, how are you?')
solve('ahoy')
solve('ahUy?!!')
solve('i.e.  ')
solve('e... e?.....  ')
solve(`'    ~~~"£~Az   Za; ZA, az'`)
solve(`123jh, "gyz goljam" si,,,, shefe    !  !!...`)
solve(`...`)