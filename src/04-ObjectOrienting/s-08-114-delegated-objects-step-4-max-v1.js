var Foo = {
    init: function Foo(who) {
        this.me = who;
    },
    identify: function () {
        return "I am " + this.me;
    }
};

var Bar = {
    init: function (who) {
        this.linked = Object.create(Foo);
        this.linked.init(who);
    },
    speak: function () {
        console.log("Hello, " + this.linked.identify() + ".");
    }
};

var myBar = Object.create(Bar);
myBar.init("myBar");
myBar.speak();
console.log("Identify is : " + myBar.linked.identify());
