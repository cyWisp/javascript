"use strict";

let string_concat = (first_name, second_name) => {
    return first_name + ' ' + second_name;
}

let greeting = (first_name, last_name) => {
    return `Hi ${first_name} ${last_name}, its nice to meet you!`;
}

let timer = (loop_iters) => {
    console.time();
    for (let i = 0; i < loop_iters; ++i) {
        continue;
    }
    console.timeEnd();
}


function main(){
    let first_name = 'Rob';
    let last_name = 'Schneider';

    let full_name = string_concat(first_name, last_name);
    console.log(`Full name is ${full_name}`);

    let greet_rob = greeting(first_name, last_name);
    console.log(greet_rob);

    timer();

    return null;
}

main();