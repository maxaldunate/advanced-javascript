function foo(bar) {
	/*
	let (baz = bar) {
		console.log(baz);		
	}
	console.log(baz); //error
	*/

	/* let */{ let baz = bar;
		console.log(baz);		
	}
	console.log(baz); //error

}

foo("bar");