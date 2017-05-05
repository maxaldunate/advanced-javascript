function Foo(who) {
    this.me = who;
}

Foo.prototype.speak = function() {
    console.log("Hello, " + this.me + ".");
};

var a1 = new Foo("a1");

a1.speak();                     // It's works
//$("#speak").click(a1.speak);    // Doesen't work
$("#speak").on("click", a1.speak.bind(a1.this));