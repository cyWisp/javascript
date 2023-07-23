



const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const choices = [1, 2, 3, 'exit'];
let choice = null;

function show_menu () {
    console.log('1. Option 1\n2.Option 2\n 3. Option 3\n[Type "exit" to exit.]');
}


while (choice !== 'exit') {
    show_menu();

    readline.question('\n> ', choice => {
        readline.close();
    })

    if (!(choice in choices)) {
        console.log(`${choice} is not a valid selection.\n`);
    } else {
        console.log(`User selected choice ${choice}`);
    }
}