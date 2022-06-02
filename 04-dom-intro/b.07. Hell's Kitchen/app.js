function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      // ["Mikes - Steve 1000, Ivan 200, Paul 800", "Fleet - Maria 850, Janet 650"]
      // const inputAsArr = document.querySelector('textarea')
      //    .value.slice(2, -2)  // remove [ and ] from string + very first and very last "
      //    .split('\",\"')      // split by ","
      //    .filter(el => el !== '' && el.includes('\n') === false)  // remove all rubbish

      const inputAsArr = JSON.parse(document.querySelector('textarea').value)

      let restaurants = {}
      let bestRestaurantObj = {}
      let highestAvgSalary = -Infinity
      let highestSalaryInWinner = -Infinity
      let bestRestaurantName = ''

      // perform actions for each string in the array -> destructure, create objects, dicts etc.
      for (let restNameAndWorkersDataString of inputAsArr) {
         // get restaurant name and workers string from big string
         let [restName, workersData] = restNameAndWorkersDataString.split(' - ')

         // from workers str , i. e. 'Steve 1000, Ivan 200, Paul 800' make worker obj
         let restWorkers = []
         let isNewWorker = true
         for (let workerAndSalary of workersData.split(', ')) {
            let [workerName, workerSalary] = workerAndSalary.split(' ')
            let worker = {}

            worker.workerName = workerName
            worker.workerSalary = Number(workerSalary)

            // guess need to check if worker already exists, only add if not?
            for (let rw of restWorkers) {
               if (rw.workerName === worker.workerName) {
                  isNewWorker = false
                  break
               }
            }
            if (isNewWorker === true) {
               // push worker object to restaurant workers array
               restWorkers.push(worker)
            }
         }

         // if restaurant alerady exists -> add new workers to existing ones
         if (Object.keys(restaurants).includes(restName)) {
            let currentWorkers = restaurants[restName]
            restaurants[restName] = currentWorkers.concat(restWorkers)
         } else {
            // if not -> assign workers to restaurant
            restaurants[restName] = restWorkers
         }

         // now the restaurant is created/updated -> calculate their average and best salaries
         let currentRestTotalSalary = -Infinity
         let currentRestHighestSalary = -Infinity
         for (let worker of Object.values(restaurants[restName])) {
            currentRestTotalSalary += worker.workerSalary
            if (worker.workerSalary > currentRestHighestSalary) {
               currentRestHighestSalary = worker.workerSalary
            }
         }
         let currentRestAverageSalary = currentRestTotalSalary / restaurants[restName].length

         // find if it't the best restaurant so far, if yes, assign values
         if (currentRestAverageSalary > highestAvgSalary) {
            bestRestaurantObj = restaurants[restName]
            bestRestaurantName = restName
            highestAvgSalary = currentRestAverageSalary.toFixed(2)
            highestSalaryInWinner = currentRestHighestSalary.toFixed(2)
         }
      }
      // assign to HTML
      document.querySelector('#bestRestaurant p').textContent =
         `Name: ${bestRestaurantName} Average Salary: ${highestAvgSalary} Best Salary: ${highestSalaryInWinner}`

      // create string with sorted salaries
      let sortedWorkers = Object.values(bestRestaurantObj)
         .sort(function (a, b) {
            return b.workerSalary - a.workerSalary
         });
      let printableSalariesString = ''
      for (let sw of sortedWorkers) {
         printableSalariesString +=
            `Name: ${sw.workerName} With Salary: ${sw.workerSalary} `
      }
      // console.log(printableSalariesString)
      document.querySelector('#workers p').textContent = printableSalariesString
   }
}