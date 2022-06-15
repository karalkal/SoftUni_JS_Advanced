class Company {
    constructor() {
        this.allDepartments = {}
    }


    addEmployee(...params) {
        if (params.length < 4
            || params.some(prm => prm === "")
            || params.some(prm => prm === undefined)
            || params.some(prm => prm === null)) {
            throw Error("Invalid input!")
        }

        let [name, salary, position, department] = params
        salary = Number(salary)
        if (salary < 0) {
            throw Error("Invalid input!")

        }
        if (!this.allDepartments[department]) {
            this.allDepartments[department] = {}
        }
        this.allDepartments[department][name] = [salary, position]
        return `New employee is hired. Name: ${name}. Position: ${position}`
    }

    bestDepartment() {
        let highestSalary = -Infinity
        let bestDeptName = null
        let bestDept = {}
        let strToReturn = ''

        for (let [deptName, deptStaff] of Object.entries(this.allDepartments)) { // iterate over all depts
            let deptTotalSalary = 0
            let deptAverageSalary = 0

            for (let employee of Object.values(deptStaff)) {  // iterate over current dept and sum salaries
                deptTotalSalary += employee[0]
            }

            //calculate avg salary
            deptAverageSalary = deptTotalSalary / Object.values(deptStaff).length

            // if best so far, set values
            if (deptAverageSalary > highestSalary) {
                highestSalary = deptAverageSalary
                bestDeptName = deptName
                bestDept = this.allDepartments[bestDeptName]
            }
        }
        strToReturn = `Best Department is: ${bestDeptName}\nAverage salary: ${highestSalary.toFixed(2)}`

        console.log(this.allDepartments[bestDeptName])


        console.log(bestDept)
        let sorted1 = Object.entries(bestDept).sort((a, b) => a[0].localeCompare(b[0]))
        let sorted2 = sorted1.sort((a, b) => b[1][0] - a[1][0])
        // console.log(sorted1, sorted2)

        for (let [empName, empProps] of sorted2) {
            strToReturn += `\n${empName} ${empProps[0]} ${empProps[1]}`
        }

        return strToReturn

    }
}


let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Human resources");

// c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
// c.addEmployee("Slavi", 500, "dyer", "Construction");
// c.addEmployee("Stan", 2000, "architect", "Construction");
// c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
// c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
// c.addEmployee("Gosho", 1350, "HR", "Human resources");
// console.log(c.bestDepartment());
