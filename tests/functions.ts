function hello() {
    console.log("have a good day");
}

hello();
// can provide default parameter
function sum(num1: number, num2: number = 10): number {
    return num1 + num2;
}

console.log(sum(8));

// can provide default parameter and optional parameter
function add(num3: number, num4?: number ): number {
    if (num4) {
        return num3 + num4;
    } else {
        return num3;
        }
    }

    console.log(add(5));

