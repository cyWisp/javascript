function main () {

    console.log("Getting types of variables.");

    let num = 15;
    let name = "Rob";
    let some_array = [1, 2, 3, 4, 5];

    console.log(`Variable: num | type: ${typeof num}`);
    console.log(`Variable: name | type: ${typeof name}`);
    console.log(`Varaible: some_array | type ${typeof some_array}`);


}
        
document.onload = main();
