var X = /** @class */ (function () {
    function X(msg) {
        this.words = msg;
    }
    X.prototype.showWords = function () {
        //console.log(`hello ${this.words}`)
    };
    return X;
}());
var x1 = new X('ldh');
x1.showWords();
