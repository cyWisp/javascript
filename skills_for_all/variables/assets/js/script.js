"use strict";

function main () {
    console.log("Hello, World!");

    let a = 1;
    let b = 2;

    let sum = (num_1, num_2) => {
        return num_1 + num_2;
    }

    console.log(sum(a, b));

}
        
document.onload = main();
