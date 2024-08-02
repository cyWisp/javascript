"use strict";

let main = () => {
    let obj_1 = {};
    let arr_1 = [
        'one',
        'two',
        'three'
    ]

    for (let i = 0; i < arr_1.length; i++){
        obj_1[i + 1] = arr_1[i];
    }

    for (const [k, v] of Object.entries(obj_1)){
        console.log(`${k}: ${v}`);
    }

    return null;
}

main();