function solve(inputJSON, criteria) {
    let rawResult = [];
    let inputArr = JSON.parse(inputJSON);
    if (criteria === "all") {
        rawResult = inputArr
    } else {
        let [keyCriteria, valueCriteria] = criteria.split('-');

        for (let person of inputArr) {
            for (let k in person) {
                if (k === keyCriteria && person[k] === valueCriteria) {
                    rawResult.push(person)
                }
            }
        }
    }
    // 0. Kaylee Johnson - k0@cnn.com
    rawResult.forEach((element, index) => {
        console.log(`${index}. ${element.first_name} ${element.last_name} - ${element.email}`)
    });
}


solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female')

// solve(`[{
//     "id": "1",
//     "first_name": "Kaylee",
//     "last_name": "Johnson",
//     "email": "k0@cnn.com",
//     "gender": "Female"
//   }, {
//     "id": "2",
//     "first_name": "Kizzee",
//     "last_name": "Johnson",
//     "email": "kjost1@forbes.com",
//     "gender": "Female"
//   }, {
//     "id": "3",
//     "first_name": "Evanne",
//     "last_name": "Maldin",
//     "email": "emaldin2@hostgator.com",
//     "gender": "Male"
//   }, {
//     "id": "4",
//     "first_name": "Evanne",
//     "last_name": "Johnson",
//     "email": "ev2@hostgator.com",
//     "gender": "Male"
//   }]`,
//     'last_name-Johnson')