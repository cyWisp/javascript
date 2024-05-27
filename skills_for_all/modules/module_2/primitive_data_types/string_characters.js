"use strict";

let main = () => {
    let full_name = 'Samuel B. Johnson';
    console.log(full_name.charAt(3)); // => 'u'

    for (let c in full_name){
        console.log(full_name[c])
    }


    return null;
}

main();