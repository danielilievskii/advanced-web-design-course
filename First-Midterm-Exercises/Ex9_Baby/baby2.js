var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human2 = /** @class */ (function () {
    function Human2(name, age) {
        this.name = name;
        this.age = age;
        this.stomach = [];
    }
    return Human2;
}());
var Baby2 = /** @class */ (function (_super) {
    __extends(Baby2, _super);
    function Baby2(name, age, favToy) {
        var _this = _super.call(this, name, age) || this;
        _this.favToy = favToy;
        return _this;
    }
    Baby2.prototype.digest = function () {
        this.stomach = [];
    };
    Baby2.prototype.eat = function (food) {
        if (this.stomach.length == 10) {
            return;
        }
        this.stomach.push(food);
    };
    Baby2.prototype.toString = function () {
        return this.name + ", " + this.age;
    };
    Baby2.prototype.play = function () {
        return 'Baby ' + this.name + ', ' + this.age + ' is playing with ' + this.favToy;
    };
    return Baby2;
}(Human2));
var baby = new Baby2("Alice", 1, "Bear");
console.log(baby.play());
