
function some_func () {
    for (let x = 1; x <= 10; x++) {
        if (x % 2 === 0) {
            console.log(`Number: ${x}`);
        } else {
            console.log(`${x} is not divisible by 3`)
        }
    }
}

function main () {
    console.log("Hello, World!");
    some_func();
}
        
document.onload = main();
