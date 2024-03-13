const Employees = require('./Employees.js');

class SoftwareEngineer extends Employees{
    #programmingLanguages;

    constructor(name, id){
        super(name, id);
        this.#programmingLanguages = [];
    }

    getProgrammingLanguages(){
        return [...this.#programmingLanguages];
    }

    setProgrammingLanguage(language){
        return this.#programmingLanguages.push(language);
    }
}

module.exports = {
    SoftwareEngineer,
}