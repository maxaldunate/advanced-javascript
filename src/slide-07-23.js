var foo = "foo";

(function() {
	var foo = "foo2";
	console.log(foo);
})(); //execute immediatly

console.log(foo);