#!/usr/bin/node

function add_nums(first, second){
    return first + second;
}

function print_array(){
    var x = ["rob", "john", "sam"];

    for (var i = 0; i < x.length; i++){
        console.log(x[i]);
    }
}

print_array();
var x = add_nums(2, 3);
console.log(x);