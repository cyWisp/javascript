// Hello world function
function hello_world(){
	console.log("hello world!");
	var hello;

	hello = document.getElementById('par');
	hello.innerHTML = 'Hi there!';
}

function change_color(new_color){
	var elem = document.getElementById('foo');
	elem.style.color = new_color;
}

// Main
hello_world();
