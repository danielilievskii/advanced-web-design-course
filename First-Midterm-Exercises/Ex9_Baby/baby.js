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

class Baby extends Human {
    constructor(name, age, favToy) {
        super(name, age)
        this.favToy = favToy
    }

    play() {
        return 'Baby '+this.name+', '+this.age+' is playing with ' + this.favToy
    }
}

const baby = new Baby("Alice", 1, "Bear");
console.log(baby.play())