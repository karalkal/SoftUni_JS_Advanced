const bookSelection = {
  isGenreSuitable(genre, age) {
    if (age <= 12 && (genre === "Thriller" || genre === "Horror")) {
      return `Books with ${genre} genre are not suitable for kids at ${age} age`;
    } else {
      return `Those books are suitable`;
    }
  },
  isItAffordable(price, budget) {
    if (typeof price !== "number" || typeof budget !== "number") {
      throw new Error("Invalid input");
    }

    let result = budget - price;

    if (result < 0) {
      return "You don't have enough money";
    } else {
      return `Book bought. You have ${result}$ left`;
    }
  },
  suitableTitles(array, wantedGenre) {
    let resultArr = [];

    if (!Array.isArray(array) || typeof wantedGenre !== "string") {
      throw new Error("Invalid input");
    }
    array.map((obj) => {
      if (obj.genre === wantedGenre) {
        resultArr.push(obj.title);
      }
    });
    return resultArr;
  },
};

module.exports = { bookSelection }

console.log(bookSelection.isGenreSuitable('Horror', 13))
console.log(bookSelection.isGenreSuitable('Horror', 12))
console.log(bookSelection.isGenreSuitable('Thriller', 12))
console.log(bookSelection.isGenreSuitable('OK', 13))


console.log(bookSelection.isItAffordable(1, 12))
console.log(bookSelection.isItAffordable(12, 12))
console.log(bookSelection.isItAffordable(12, 1))

console.log(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], "Thriller"))
console.log(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "none" }], "Thriller"))

