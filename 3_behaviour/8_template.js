class Employee {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }

    responsibilities() {}

    work() {
        return `${this.name} is ${this.responsibilities()}`
    }

    getPaid() {
        return `${this.name} takes ${this.salary}`
    }
}

class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary) 
    }

    responsibilities() {
        return `creating programs`
    }
}

class Tester extends Employee {
    constructor(name, salary) {
        super(name, salary) 
    }

    responsibilities() {
        return 'testing programs'
    }
}

const dev = new Developer('Yegor', 40000)
console.log(dev.getPaid())
console.log(dev.work())

const tester = new Tester('Petr', 35000)
console.log(tester.getPaid())
console.log(tester.work())