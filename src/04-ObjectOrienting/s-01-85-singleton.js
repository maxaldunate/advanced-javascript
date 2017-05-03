var Router = function () {
    //Singleton!
    if (Router.__instance__) {
        console.log("same instance");
        return Router.__instance__;
    }

    console.log("new instance");
    Router.__instance__ = this;
    this.routes = {};
}

Router.prototype.setRoute = function (match, fn) {
    console.log("setRoute");
    this.routes[match] = fn;
};

var myrouter = new Router();
var another = new Router();

console.log(myrouter === another);