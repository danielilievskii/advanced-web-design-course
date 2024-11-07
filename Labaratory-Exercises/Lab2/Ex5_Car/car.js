function Car(model, milesPerGallon) {
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = 0;
}

Car.prototype.fill = function (gallons) {
    this.tank+=gallons;
}

Car.prototype.drive = function (miles) {
    let gallons = miles / this.milesPerGallon;
    if(this.tank >= gallons) {
        this.odometer+=miles;
        this.tank -= gallons;
        return "Vehicle has "+ this.odometer +" miles and "+ this.tank +" gallons left."
    } else {
        let drovenMiles = this.tank * this.milesPerGallon;
        this.odometer += drovenMiles;
        this.tank = 0;
        return "Vehicle ran out of gas after driving "+drovenMiles+" miles. Vehicle now has "+this.odometer+" miles on the odometer and "+this.tank+" gallons of gas."
    }
}

// const car1 = new Car("Toyota", 25);
// car1.fill(10)
// console.log(car1.drive(100))

const car2 = new Car("Honda", 30);
car2.fill(5);
console.log(car2.drive(200));