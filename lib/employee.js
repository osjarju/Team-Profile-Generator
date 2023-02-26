class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //function to take in name (letters only) using reg expression
    getName() {
        return this.name
    }

    //function to take numbers
    getId() {
        return this.id
    }

    //function to take email
    getEmail() {
        return this.email
    }

    //function to role
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;