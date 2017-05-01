// is a reference to objects, 
//but is not a closure ... 'cos not 'remeber' referencing the function scope

var foo = (function () {
    var o = { bar: "bar" };
    return { obj: o };
})();

console.log(foo.obj.bar);   //bar