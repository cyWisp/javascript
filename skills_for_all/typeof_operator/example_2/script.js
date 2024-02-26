

function get_type(types_array){
    for (let x = 0; x < types_array.length; x++){
        console.log(`${types_array[x]}: ${typeof types_array[x]}`);
    }

}


function main() {

    let some_var = 1990;
    let var_arr = [
        "Rob",
        10,
        2.512,
        "Sammy",
        typeof some_var
    ];

    get_type(var_arr);
}

window.onload = main();