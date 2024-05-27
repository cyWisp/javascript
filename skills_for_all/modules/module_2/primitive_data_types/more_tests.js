"use strict";


let func_1 = (another_func) => {
    console.log('this is func 1');
    another_func();
}

let func_2 = () => {
    console.log('This is func 2');
}

let main = () => {

    func_1(func_2);

    return null;
}

main();