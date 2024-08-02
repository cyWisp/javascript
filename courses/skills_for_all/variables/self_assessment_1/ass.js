"use strict";

const PROFESSION = 'Programmer';


function func_1(){
    const SOME_CONST = 12;

}

function main(){
    let name = 'Rob', age = 38, location = 'Miami';

    for (const i in {name, age, location}) {
        console.log(i);
    }

    console.log(`Hi there- my name is ${name}. I am ${age} years old, hailing from ${location}.`);
    console.log(`I am a ${PROFESSION} by trade.`);


    try {
        console.log(`Some const is ${SOME_CONST}`);

    } catch (e) {
        if (e instanceof ReferenceError) {
            console.error('This variable was declared in a separate scope.')
        } else {
            console.error('This is some other error.')
        }
    }
}


main();