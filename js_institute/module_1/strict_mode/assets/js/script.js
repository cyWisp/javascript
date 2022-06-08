

function variable_tests () {
    let name = "Rob";
    let age = 36;
    let location = "Miami";

    console.log(name + location + age);

}


function main () {

    // Strict mode will catch the undeclared "height" variable
    "use strict";

    let height;
    height = 180;

    console.log(height);
    variable_tests();
}
        
document.onload = main();
