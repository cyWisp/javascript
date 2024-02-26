

function greet(first_name, last_name){
    console.log(`Hi, my name is ${first_name} ${last_name}`);
}

function get_area (length, width) {
    let area = length * width;
    console.log(`Length: ${length} | Width: ${width}`);

    return area
}

function main () {
    let name = 'Rob';

    console.log('Hi my name is ' + name);
    console.log(`Hi my name is ${name}`);

    for (let i = 0; i < 10; i++) {
        if ((i % 2) === 0 && i != 0) {
            console.log(`Divisible by 2: ${i}`);
        }

    }

    greet('Rob', 'Daglio');
    console.log(`Area: ${get_area(3, 5)}`);

}

main();

