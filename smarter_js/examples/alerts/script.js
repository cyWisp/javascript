
function print_name(){
    var name = "Rob";
    console.log("hi my name is " + name);
}

function greet(){
    var greeting = "Welcome!!";
    window.alert(greeting);
}

function print_nums(){
    let max = 20;
    for (var i = 1; i <= max; i++){
        if (i % 2 == 0){
            console.log('Even: ' + i);
        } else {
            console.log('Not even: ' + i);
        }
    }
}

function main(){
    console.log("hi there");
    print_name();
    greet();
    print_nums();
}

window.onload = main();