class Vehicle {
    travelTime() {
        return this.timeTaken
    }
}

class Bus extends Vehicle {
    constructor() {
        super()
        this.timeTaken = 30
    }
}

class Taxi extends Vehicle {
    constructor() {
        super()
        this.timeTaken = 15
    }
}

class Car extends Vehicle {
    constructor() {
        super()
        this.timeTaken = 10
    }
}

class Commute {
    travel(transport) {
        return transport.travelTime()
    }
}

const commute = new Commute()

console.log(commute.travel(new Bus()))
console.log(commute.travel(new Taxi()))
console.log(commute.travel(new Car()))