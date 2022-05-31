/*
Your function will receive a string parameter, representing the target element ID, 
from which text must be extracted. The text should be extracted from the DOM.
*/

function extract(elementID) {
    let content = document.getElementById(elementID).textContent
    let matchedWords = []
    let foundOpeningBracket = false
    let newWord = ''
    let text = ''

    for (let ch of content) {

        /* 
        logically this check must be at the end, but in this implemetation it is meant to:
        1. add the newly created word to array
        2. stop the concatenation
        3. start with blank newWord
        */
        if (ch === ")") {
            matchedWords.push(newWord);
            foundOpeningBracket = false;
            newWord = '';
            continue;
        }

        if (ch === "(") {
            foundOpeningBracket = true
            continue;
        }

        if (foundOpeningBracket) {
            newWord += ch
        }
    }

    text = matchedWords.join('; ')
    return text
}

// console.log(extract('AK (ab) ja(f)dh (jah) sdgahwfg (kk)'))
// console.log(extract('The Rose Valley (Bulgaria) is located just south of the Balkan Mountains (Kazanlak).The most common oil-bearing rose found in the valley is the pink-petaled Damask rose (Rosa damascena Mill)'))