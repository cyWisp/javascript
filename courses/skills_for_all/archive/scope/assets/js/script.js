

const PI = 3.1415;
let name = "Rob";

function func_1 () {
    let counter_1 = 1;
    console.log(`Counter 1: ${counter_1}`);
    console.log(`PI from func_1 ${PI}`);
    console.log(`Name from func_1 ${name}`);

    return counter_1
}

console.log(`PI from module level: ${PI}`);
console.log(`Name from module level: ${name}`);

function main () {
    let counter_1 = func_1();

    console.log(`Counter 1 in main(): ${counter_1}`);
    console.log(`PI from main: ${PI}`);
    console.log(`Name from main: ${name}`);
}


document.onload = main();