class Employee {

    constructor(name, startDate, salary) {
        this.name = name;
        this.startDate = startDate
        this.salary = salary
    }
}

class SalesPerson extends Employee {
    constructor(name, startDate, salary, targetSalesSum, sales = [], geoArea) {
        super(name, startDate, salary);
        this.geoArea = geoArea
        this.targetSalesSum = targetSalesSum;
        this.sales = sales;
        this.isMonitored = false
        this.successRate = 0;
        this.successString = ''
        this.totalSalary = salary
    }

    toString() {
        console.log('Employee '+this.name+' has '+this.successRate+' % success rate and is '+ (this.isMonitored? 'being monitored.' : 'not being monitored.'))
    }

    success() {
        let actualSalesSum = this.sales.reduce(function (sum, value) {
            return sum+value;
        }, 0)
        this.totalSalary = this.salary + (actualSalesSum*0.2)

        let today = Date.now()
        const oneYearInMilliseconds = 365 * 24 * 60 * 60 * 1000;

        this.successRate = (actualSalesSum / this.targetSalesSum * 100).toFixed(2)

        if(today - this.startDate < oneYearInMilliseconds) {
            if(this.successRate >= 80) {
                this.successString = 'high success'
            } else if (this.successRate >= 30 && this.successRate<80) {
                this.successString = 'medium success'
            } else {
                this.successString = 'low success'
            }
        } else {
            if(this.successRate >= 90) {
                this.successString = 'high success'
            } else if (this.successRate >= 50 && this.successRate<90) {
                this.successString = 'medium success'
            } else {
                this.successString = 'low success'
            }
        }
    }
}

class SalesDepartment {
    constructor() {
        this.employees = []
    }

    addEmployee(emp) {
        this.employees.push(emp)
    }

    checkMonitoring() {
        for(let emp of this.employees) {
            emp.success()
            console.log(emp.name + ' has ' + emp.successString + ' and a salary of ' + emp.totalSalary)
        }
    }

    updateMonitoring() {
        for(let emp of this.employees) {
            emp.success()
            if(emp.successString === 'low success') {
                emp.isMonitored = true;
            }
        }
    }

    print() {
        this.updateMonitoring()
        for (let emp of this.employees) {
           emp.toString()
        }
    }

    successRate(area) {
        let filteredEmployees = this.employees.filter(emp => emp.geoArea === area && !emp.isMonitored)

        let sumSuccessRate = 0
        let avg = 0;
        for(let emp of filteredEmployees) {
            //emp.success()
            sumSuccessRate += Number(emp.successRate)
        }
        if(filteredEmployees.length > 0) {
            avg = (sumSuccessRate / filteredEmployees.length).toFixed(2)
        }
        console.log('The average success rate for '+area+' is '+avg+' %')

    }
}

var salesDepartment = new SalesDepartment();

var emp1 = new SalesPerson("Mark Smiths", new Date(2022, 8, 3), 20000, 5000, [400, 350, 500], "US");
var emp2 = new SalesPerson("Sandy Adams", new Date(2022, 5, 2), 22000, 7000, [500, 400, 600, 450, 550, 400, 350, 450], "Eastern Europe");
var emp3 = new SalesPerson("Bill Jonas", new Date(2022, 3, 1), 21000, 10000, [650, 700, 800, 750, 600, 750, 700, 800, 750, 800, 850], "US");
var emp4 = new SalesPerson("Sasha Denson", new Date(2021, 9, 1), 30000, 15000, [1200, 1500, 1350, 1300, 1400, 900], "US");
var emp5 = new SalesPerson("Chris Ree", new Date(2021, 7, 25), 27000, 14000, [850, 1000, 1150, 1050, 1100], "Eastern Europe");
var emp6 = new SalesPerson("Emily Lee", new Date(2020, 12, 2), 35000, 20000, [1700, 1850, 2000, 1900, 1950, 1800, 1750, 1900, 2000, 1950], "US");

salesDepartment.addEmployee(emp1);
salesDepartment.addEmployee(emp2);
salesDepartment.addEmployee(emp3);
salesDepartment.addEmployee(emp4);
salesDepartment.addEmployee(emp5);
salesDepartment.addEmployee(emp6);

salesDepartment.checkMonitoring();
console.log();
salesDepartment.print();
console.log();

salesDepartment.successRate("US");