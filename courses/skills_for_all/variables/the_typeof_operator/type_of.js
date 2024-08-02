"use strict";


function func_1(){
    console.info('Currently in the func_1 function.');
}


function main(){
    console.log('Initializing typeof tests...')

    let name = 'Rob';
    let num = 123;
    let weird = false
    let nothing;
    let really_nothing = null;

    console.info(`name variable | content: ${name} | data type: ${typeof name}`);
    console.info(`name variable | content: ${num} | data type: ${typeof num}`);
    console.info(`name variable | content: ${weird} | data type: ${typeof weird}`);
    console.info(`name variable | content: ${nothing} | data type: ${typeof nothing}`);
    console.info(`name variable | content: ${really_nothing} | data type: ${typeof really_nothing}`);


    console.info(`Is name an instance of a string? - ${name instanceof String}`);
}

main();