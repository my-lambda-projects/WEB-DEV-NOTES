// // The Law of Demeter 


class Airplane {

    constructor(plane) {
        this.plane = plane;
    }
    getEngine(engine) {
        this.engine = engine;
    }

}

class Engine {
    constructor() {
        this.electricEngine = new Throttle();
    }

    getThrottle() {
        return this.electricEngine;
    }

    getPumps() {
        return this.electricEngine.startPumps();
    }
}

class Throttle {
    constructor() {
        this.pump = new Pumps();
    }
    close() {
        return "hello"
    }

    startPumps() {
        return this.pump.walk();
    }

}

class Pumps {
    walk() {
        return "running"
    }
}

let AmericanAirlines = new Airplane("American Airlines");
let electricEngine = new Engine();
AmericanAirlines.getEngine(electricEngine);
console.log(AmericanAirlines.engine.getPumps());




// class Animal {
//     constructor(name) {
//         this.name = name;
//         this.tail = "furry";
//     }

//     printName() {
//         return this.name;
//     }

//     hasFurryTail() {
//         return "furry" === this.tail;
//     }

//     static sameName(animal1, animal2) {
//         return animal1.name === animal2.name;
//     }
// }


// class Dog extends Animal {
//     constructor(name, tail, age) {
//         super(name, tail);
//         this.age = age;
//     }


//     hasFurryTail() {
//         return !("furry" === this.tail);
//     }

//     printName() {
//         return `${this.name} is ${this.age} years old!`;
//     }

//     whosDog(owner) {
//         this.owner = owner;
//         return this.owner;
//     }
// }

// let dog = new Animal("Ollie");
// let Barry = new Dog("Ollie", "furry", 2);
// console.log(Barry.printName());
// console.log(Barry.whosDog("Alfredo"));
// console.log(Barry)
// let dog2 = new Animal("Luna");
// console.log(Animal.sameName(dog, Barry))

class Animal {
    constructor(name) {
        this.name = name;
        this.tail = "furry";
    }

    printName() {
        return this.name;
    }

    hasFurryTail() {
        return "furry" === this.tail;
    }

    static sameName(animal1, animal2) {
        return animal1.name === animal2.name;
    }
}

class Dog extends Animal {
    constructor(name, tail, age) {
        super(name, tail);
        this.age = age;
    }


    hasFurryTail() {
        return !("furry" === this.tail);
    }

    changeName(name) {
        return this.name = name;
    }

    whosDog(owner) {
        this.owner = owner;
        return this.owner;
    }
}

let Barry = new Dog("Ollie", "furry", 2);
Barry.changeName("Luna")
console.log(Barry);
console.log(Animal.sameName(dog, Barry))




// module.exports = {
//     Animal,
//     Dog
// }