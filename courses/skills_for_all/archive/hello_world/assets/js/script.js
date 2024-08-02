
function add_nums (num_1, num_2) {
    return num_1 + num_2;
}


function main () {
    console.log("Hello, World!");

    const max_iters = 10;

    for (let i = 0; i <= max_iters; i++){
        console.log(`Iteration: ${i}`);
    }

    let n1 = 5;
    let n2 = 2;
    let sum = add_nums(n1, n2);

    console.log(`The sum of ${n1} and ${n2} is ${sum}`);


}
        
document.onload = main();
