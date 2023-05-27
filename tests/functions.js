function hello() {
    console.log("have a good day");
}
hello();
// can provide default parameter
function sum(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 + num2;
}
console.log(sum(8));
// can provide default parameter and optional parameter
function add(num3, num4) {
    if (num4) {
        return num3 + num4;
    }
    else {
        return num3;
    }
}
console.log(add(5));
