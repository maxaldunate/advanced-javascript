//'use strict';

var obj = {
	a: 2,
	b: 3,
	c: 4
}

obj.a = obj.b + obj.c;
obj.c = obj.b + obj.a;

console.log(obj.a);
console.log(obj.b);
console.log(obj.c);

with (obj){
	a = b +c;
	d = b -a;
	d = 3;
}

console.log(obj.d);
console.log(d);
