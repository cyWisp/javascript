


function some_func () {
    try {
        console.log(doesnt_exist);
    } catch (e) {
        alert("Something went wrong- review logs.")
        console.log(e);
    }
}



function main () {
    some_func();
}
        
document.onload = main();
