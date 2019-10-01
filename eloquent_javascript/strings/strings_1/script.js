function hello_world(){
	console.log("Hello World!");
	hello = document.getElementById('example').innerHTML = 'Hello, World!';
}

function add(num_1, num_2){
	return num_1 + num_2;
}

hello_world();
var sum = add(3, 2);
console.log(sum);

for(i = 0; i <= 10; i++){
	if(i == 5){
		continue;
	}
	else{
		console.log("Current count: " + i);
	}
}

