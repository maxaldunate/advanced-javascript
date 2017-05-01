var o = { bar: "bar" };

// NOT WORKING YET AT ES6
//export function bar(){
//	return o.bar;
//}

function bar(){
	return o.bar;
}

module.exports = {
	bar: bar()
};


http://2ality.com/2014/09/es6-modules-final.html