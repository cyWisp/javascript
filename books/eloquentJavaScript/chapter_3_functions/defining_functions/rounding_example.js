"use strict";

const square = (x) => {
    return x * x;
}

const roundTo = (n, step) => {
    let remainder = n % step;

    // if n = 23 and step = 10
    // return 23 - 10 + (3 < 10 / 2 ? 0: 10)
    return n - remainder + (remainder < step / 2 ? 0 : step);
}




const main = () => {
    console.log(roundTo(23, 10));
};

main();