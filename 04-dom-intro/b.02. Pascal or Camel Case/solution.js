function solve() {
  const text = document.getElementById('text').value;
  const textAsArr = text.split(' ')
  const namingConvention = document.getElementById("naming-convention").value;
  let resultToDisplay = ""

  // if valid request, only first item will be different
  if (namingConvention === "Camel Case") {
    resultToDisplay = textAsArr[0].toLowerCase();
    resultToDisplay += addAllOthers(textAsArr);
  }

  else if (namingConvention === "Pascal Case") {
    resultToDisplay = textAsArr[0].charAt(0).toUpperCase() +
      textAsArr[0].slice(1).toLowerCase();

    resultToDisplay += addAllOthers(textAsArr);
  }

  else {
    resultToDisplay = 'Error!'
  }
  // console.log(resultToDisplay)
  document.querySelector('span#result').textContent = resultToDisplay


  function addAllOthers(textAsArr) {
    let stringToReturn = ''
    for (let i = 1; i < textAsArr.length; i++) {  // skipping first one
      stringToReturn += textAsArr[i].charAt(0).toUpperCase() +
        textAsArr[i].slice(1).toLowerCase();
    }
    return stringToReturn;
  }

}