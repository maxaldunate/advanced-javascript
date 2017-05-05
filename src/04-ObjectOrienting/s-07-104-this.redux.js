function Foo(who) {
    this.me = who;
}

Foo.prototype.speak = function nombre() {
    console.log("Hello, " + this.me + ".");
};

var a1 = new Foo("a1");

$("#speak").click(a1.speak);
