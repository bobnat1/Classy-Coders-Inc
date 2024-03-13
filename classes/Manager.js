const Manager = require("./classes/Employees")

class Manager extends Employees{

    #employeesManaged = [];

    constructor(department){
        this.department = department;
    
    }
    getEmplyeesManaged() {
        return this.#employeesManaged;
    }
    setEmployeesManaged(employee) {
        this.#employeesManaged.push(employee);
    }

    
}

module.exports = {

    Manager,
}