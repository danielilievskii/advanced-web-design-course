abstract class Human2 {
    name: string;
    age: number;
    stomach: string[];

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.stomach = [];
    }

    abstract eat(food: string): void;

    abstract digest(): void;
    abstract toString(): string;
}

class Baby2 extends Human2 {
    favToy: string;
    constructor(name: string, age:number, favToy: string) {
        super(name, age);
        this.favToy = favToy
    }
    digest(): void {
        this.stomach = []
    }

    eat(food: string): void {
        if(this.stomach.length == 10) {
            return
        }
        this.stomach.push(food)
    }

    toString(): string {
        return this.name + ", " + this.age;
    }

    play() {
        return 'Baby '+this.name+', '+this.age+' is playing with ' + this.favToy
    }

}
const baby = new Baby2("Alice", 1, "Bear");
console.log(baby.play())



