"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// can delcare a variable without assigning a value
var x;
x = 100;
// typescript infer the type of variable based on assigned value
var a = 10;
//a = 'hello';
console.log(a);
// defining variable type
var num1 = 90;
var name = 'Jack';
var found = true;
var u = undefined;
var n = null;
// array
var list1 = [1, 2, 3];
var list2 = [1, 2, 3, 4];
// tuple - should follow the same ordder
var tuple1;
tuple1 = [10, 'apple', 100];
// enum
var Color;
(function (Color) {
    Color[Color["red"] = 4] = "red";
    Color[Color["green"] = 5] = "green";
    Color[Color["blue"] = 6] = "blue";
})(Color || (Color = {}));
//to print the key
var c = Color.green;
console.log(c);
//to print the value
console.log(Color[4]);
// unknown - cannot do any operation
var notSure;
console.log(notSure);
// any
var anyValue = 'vader';
console.log(anyValue);
// vader - no return type
function myTest() {
    console.log("my test function");
}
// union types - infer the type of variable based on assigned value
var peopleAllowed;
peopleAllowed = 10;
peopleAllowed = false;
