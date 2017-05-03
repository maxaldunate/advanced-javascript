var Router = function () {
    //Singleton!
    if (Router.__instance__) {
        console.log("same instance");
        return Router.__instance__;
    }

    function setRoute(match, fn) {
        console.log("setRoute");
        routes[match] = fn;
    };

    console.log("new instance");
    var routes = {};
    var publicAPI = Router.__instance__ = { setRoute: setRoute };
    return publicAPI;
};


var myrouter = new Router();
var another = new Router();

console.log(myrouter === another);