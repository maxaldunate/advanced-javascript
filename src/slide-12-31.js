//theorical dynamic scoping
function foo() {
	console.log(bar); //dynmaic
}


function baz(){
	var bar = "bar";
	foo();
}

baz();