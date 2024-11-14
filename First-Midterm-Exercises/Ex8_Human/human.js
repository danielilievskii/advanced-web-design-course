class Human {
    constructor(name, age) {
        this.name = name;
        this.age=age;
        this.stomach = []
    }

    eat(food) {
        if(this.stomach.length == 10) {
            return
        }
        this.stomach.push(food)
    }

    digest() {
        this.stomach = []
    }

    toString() {
        return this.name + ", " + this.age
    }
}

const human = new Human("John", 30);
console.log(human.toString());