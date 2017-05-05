var Foo = {
    init: function Foo(who) {
        this.me = who;
        return this;
    },
    identify: function () {
        return "I am " + this.me;
    }
};

var Bar = {
    init: function (who) {
        this.linked = Object.create(Foo).init(who);
        return this;
    },
    speak: function () {
        console.log("Hello, " + this.linked.identify() + ".");
    },
    identify: function () {
        return this.linked.identify();
    }
};

var myBar = Object.create(Bar).init("myBar");
myBar.speak();
console.log("Identify is : " + myBar.linked.identify());
console.log("Identify is : " + myBar.identify());

console.log();
console.log();
console.log();

var myBar2 = Bar.init("myBar2");
myBar2.speak();
console.log("Identify is : " + myBar2.linked.identify());
console.log("Identify is : " + myBar2.identify());
