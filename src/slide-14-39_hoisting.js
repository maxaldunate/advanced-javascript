/* First Step

var a = b();
var c = d();
console.log(a);
console.log(c);

function b(){
	return c;
}

var d = function(){
	return b();
}


*/

function b(){
	return c;
}
var a;
var c;
var d;
a = b();
c = d();

console.log(a);
console.log(c);

d = function d(){
	return b();
}