function foo() {
    this.baz = "baz";
    console.log(this.bar + " " + baz);
}

var bar = "bar";
var baz = new foo();        //???
console.log(baz.baz);

//4 things occured when 'new' is reached
// 1) a brand-new empty object was created
// 2) and it is linked to a another object
// 3) and it is implicity binding for the 'this' of that function call
// 4) and if not return nothing will 'insert' a return statement