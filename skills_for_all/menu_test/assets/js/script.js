
function menu () {
    let items = Object();
    let user_input = '';

    items['1'] = 'Menu Item 1';
    items['2'] = 'Menu Item 2';
    items['3'] = 'Menu Item 3';
    items['00'] = 'Exit.';

    while (user_input !== '00') {
        for (let item in items) {
            console.log(`${item}: ${items[item]}`);
        }

        user_input = prompt('Choice: ');
        console.log(`User selected: ${user_input}`);
    }
}


function main () {
    console.log("Hello, World!");
    menu();

    return null;
}
        
document.onload = main();
