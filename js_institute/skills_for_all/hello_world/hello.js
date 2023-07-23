


function greet (name, location) {
    return `Hi, my name is ${name}, and I'm from ${location}.`;
}


function add (num_1, num_2) {
    return num_1 + num_2;
}

function for_loop_example() {
    for (let i=1; i<=10; i++) {
        console.log(i);
    }
}


function main () {
    let greeting_string = greet('Rob', 'Miami');
    console.log(greeting_string);

    let sum = add(1, 3);
    console.log(`1 + 3 = ${sum}`);

    for_loop_example();


}

// main();

window.onload = main;