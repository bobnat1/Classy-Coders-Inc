class Employees {

    static #allEmployees = [];

    #salary;
    #isHired;

    constructor(name, title, salary){
        this.#salary = salary
        this.name = name;
        this.#isHired = true;
        this.title = title;
        
        Employees.#allEmployees.push(this);
    


    }
    setSalary(amount){
        this.#salary = amount;
    }

    getSalary(){
        return this.#salary;
    }

    setStatus(command){
        if (command === 'hire')
            this.#isHired = true;
        else if (command === 'fire')
            this.#isHired = false;
    }

    getStatus(){
        return this.#isHired;
    }

    static getEmployees(){
        return Employees.#allEmployees
    }

    static getTotalPayroll(){
        let sum = 0;
        for (let i = 0; i < Employees.#allEmployees.length; i++){
            sum += Employees.#allEmployees[i].#salary;
        }
        return sum;
    }

    
}

let testEmployee = new Employees("doug", "qc", 20000);
let testEmployee2 = new Employees("greg", "janitor", 50000);

// console.log(testEmployee);
console.log(Employees.getTotalPayroll());
// Employees.getTotalPayroll();
module.exports = {
    Employees,
}