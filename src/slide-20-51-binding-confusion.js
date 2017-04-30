function foo() {
    var bar = "bar1";
    baz();
}

function baz() {
    console.log(this.bar);
}

var bar = "bar2";
foo();  //why is bar2



//Max's code
function foo2() {
    var o = { bar2: "bar1", b: baz2 };
    o.b();
}

function baz2() {
    console.log(this.bar2);
}

var bar2 = "bar2";
foo2();  //now is bar1 !!!