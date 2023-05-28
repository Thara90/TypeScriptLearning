export {}

// can delcare a variable without assigning a value
let x;
x=100;

// typescript infer the type of variable based on assigned value
let a = 10;
//a = 'hello';
console.log(a);

// defining variable type
let num1:number = 90;
let name:string = 'Jack';
let found:boolean = true;

let u:undefined = undefined;
let n: null = null

// array
let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3,4];

// tuple - should follow the same ordder
let tuple1: [number,string,number];
tuple1 = [10,'apple',100]

// enum
enum Color{red=4, green, blue}
//to print the key
let c:Color = Color.green
console.log(c)
//to print the value
console.log(Color[4])

// unknown - cannot do any operation
let notSure : unknown ;
console.log(notSure)

// any
let anyValue : any = 'vader' ;
console.log(anyValue)

// vader - no return type
function myTest(): void{
    console.log("my test function")
}

// union types - infer the type of variable based on assigned value

let peopleAllowed : number|boolean ;
peopleAllowed = 10;
peopleAllowed = false;
