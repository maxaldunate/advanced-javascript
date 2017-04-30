function foo(bar){
	if(bar){
		let baz = bar;
		if(baz){
			let bam = baz;
		}
		console.log(bam); //error
	}
	console.log(baz); //error
}

foo("bar");