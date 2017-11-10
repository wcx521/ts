var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
        this.name = name;
    }
    Animal.prototype.move = function (meter) {
        if (meter === void 0) { meter = 0; }
        console.log(this.name + " moved " + meter);
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (meter) {
        if (meter === void 0) { meter = 3; }
        console.log('i am small, and i love you !');
        _super.prototype.move.call(this, meter);
    };
    return Snake;
}(Animal));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (meter) {
        if (meter === void 0) { meter = 100; }
        console.log('i am a horse, i am big');
        _super.prototype.move.call(this, meter);
    };
    return Horse;
}(Animal));
var sss1 = new Snake('snake1');
var h1 = new Horse('horse2');
sss1.move(200);
h1.move(2000);
