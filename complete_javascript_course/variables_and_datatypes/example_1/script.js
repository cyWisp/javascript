// script.js

// main
var name = "Rob";
var age = 33;
var end = false;

console.log('Hi there, my name is ' + name + ' and I am ' + age + ' years old...');

for(i = 0; i<=5; i++){
	if(i != 5){
		console.log(i);
		end = true
	}
	else{
		console.log("this is the end of the loop...")
		console.log("End: " + end);
	}
}
