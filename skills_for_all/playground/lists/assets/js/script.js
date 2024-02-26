"use strict";


function main () {
    console.log("Working with lists.");

    let some_dict = {};
    let some_array = [1, 2, 4, 5];

    some_dict = {
        "one": "1",
        "two": "2",
        "three": "3"
    }

    some_dict["four"] = "4";

    for (let key in some_dict) {
        console.log(`${key} : ${some_dict[key]}`);
    }

    for (let i = 0; i < some_array.length; i++){
        console.log(some_array[i]);
    }

    let new_array = [];

    for (let x = 0; x < 10; x++){
        new_array[x] = x;
    }

    console.log("Appending new values to array.")
    for (let c = 0; c < new_array.length; c++){
        console.log(new_array[c]);
    }

}
        
document.onload = main();
