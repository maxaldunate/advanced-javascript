function Foo(who) {
    this.me = who;
}

Foo.prototype.identify = function () {
    return "I am " + this.me;
};

console.log("This is SHADOWING");
var a1 = new Foo("a1");
console.log(a1.identify());  // I am a1

a1.identify = function () {     //Shadowing
    console.log("Hello, " +
        Foo.prototype.identify.call(this) + //It is work but is crappy
        ".");
};

a1.identify();  // I am a1

console.log();
console.log("This is Magic mechanism, no shadowing");
Foo.prototype.speak = function () {
    this.identify(); //It is work ans is not crappy
};

a1.speak();  // Hello, I am a1
