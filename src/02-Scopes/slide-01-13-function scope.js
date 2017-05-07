var foo = "bar";

function bar() {
	console.log("bar function");
	var foo = "baz";
	console.log("foo");
	console.log(foo);
}

function baz(foo){
	console.log("baz function");
	foo = "bam";
	bam = "yay";
	console.log("foo");
	console.log(foo);
	console.log("bam");
	console.log(bam);
}

bar();
baz();
console.log("global foo");
console.log(foo);
