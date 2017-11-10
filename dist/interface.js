function showName(p1) {
    console.log(p1.name);
}
var p1 = {
    name: 'ldh',
    age: 39,
    sex: 'male',
    job: 'IT'
};
showName(p1);
function sell(f1) {
    var f2 = { color: 'blue', height: 25 };
    if (f1.color) {
        f2.color = f1.color;
    }
    return f2;
}
var s1 = sell({ color: 'red', price: 34 });
