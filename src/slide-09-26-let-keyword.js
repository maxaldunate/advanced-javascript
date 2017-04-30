function foo(){
	var bar = "bar";
	for (let i = 0; i <bar.length; i++) {
		console.log(bar.charAt(i));
	}
	console.log(i); //Reference error
}

foo();