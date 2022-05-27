function cityTaxes(name, population, treasury) {
  let city = {
    name: name,
    population: population,
    treasury: treasury,
    taxRate: 10,
    collectTaxes: function () {             // Increase treasury by  population * taxRate
      this.treasury += this.population * this.taxRate
    },
    applyGrowth: function (percentage) {    // applyGrowth(percentage), // Increase population by given percentage
      this.population += this.population * percentage / 100
    },
    applyRecession: function (percentage) {   // applyRecession(percentage): , // Decrease treasury by given percentage
      this.treasury -= this.treasury * percentage / 100
    },
  }
  return city
}

// const city =
//     cityTaxes('Tortuga',
//         7000,
//         15000);
// console.log(city);

const city =
  cityTaxes('Tortuga',
    7000,
    15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
city.applyRecession(10);
console.log(city.treasury);