class Employee {

    public employeeName: string;

    constructor(name) {
        this.employeeName = name;
    }

    hello() {
        console.log(`test class ${this.employeeName}`);
    }

}
let emp1 = new Employee('Anne');
emp1.hello();


class Manager extends Employee {
    constructor(name) {
        super(name)
    }
    greet() {
        console.log(`manager ${this.employeeName}`);
    }
}

let mng1 = new Manager('George');
console.log(mng1.employeeName);
mng1.hello();
mng1.greet();