"use strict";


function add(x, y){
    return x + y;
}

const addArrowFuncion = (x, y) => {
    return x + y;
}

const main = () => {
    let val_1 = add(1, 2);
    let val_2 = addArrowFuncion(1, 2);

    console.log(`Val 1: ${val_1} | Val 2: ${val_2}`);

}

main();