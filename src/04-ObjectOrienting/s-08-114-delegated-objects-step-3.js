var Foo = {
    init: function Foo(who) {
        this.me = who;
    },
    identify: function () {
        return "I am " + this.me;
    }
};

var Bar = Object.create(Foo);

Bar.speak = function () {
    console.log("Hello, " + this.identify() + ".");
};

var b1 = Object.create(Bar);
b1.init("b1");
b1.speak();


//Max's way
var Foo2 = {
    init: function Foo(who) {
        this.me = who;
        return this;
    },
    identify: function () {
        return "I am " + this.me;
    }
};

var Bar2 = Object.create(Foo2);

Bar2.speak = function () {
    console.log("Hello, " + this.identify() + ".");
};

// Split declaration and initialization
var b2 = Object.create(Bar2);
b2.init("b2");
b2.speak();

// One step for declaration and initialization
var b3 = Object.create(Bar2).init("b3");
b3.speak();