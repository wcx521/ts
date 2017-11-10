"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var pression = 'hello';
var list = [1, 2, 3];
var list2 = [1, 2, 3];
var list3 = [1, '23', true];
var list4 = [1, 'dfkl', false];
var input = [1, 2];
var first = input[0], last = input[1];
_a = [last, first], first = _a[0], last = _a[1];
var _b = [1, 2, 3, 4], f1 = _b[0], rest = _b.slice(1);
var o = {
    a: 'liu',
    b: 29,
    c: 'dh'
};
var a = o.a, b = o.b;
var arr1 = [23, 45];
var arr2 = [1, 6];
var arr3 = [0].concat(arr1, arr2, [6]);
var Stu = /** @class */ (function () {
    function Stu() {
        this.name = 'ldh';
    }
    Stu.prototype.showName = function () { };
    ;
    return Stu;
}());
var stu1 = new Stu();
var clone = __assign({}, stu1);
function testFn() {
    console.log('testing....');
}
function sayHello(name) {
    return pression + " from " + name;
}
exports.sayHello = sayHello;
var _a;
