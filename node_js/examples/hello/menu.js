#!/usr/bin/node

const menu = ["1. add", "2. subtract", "3. exit"];
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function show_menu(){
    for (var x = 0; x < menu.length; x++){
        console.log(menu[x]);
    }
}

function get_input(){
    var x;
    console.log();

    readline.question('Choice: ', c => {
        x = c;
        readline.close();
    })
    return x;
}

show_menu();
choice = get_input();

console.log(choice);
