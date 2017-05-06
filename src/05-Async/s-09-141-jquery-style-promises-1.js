var wait = jQuery.Deferred();
var p = wait.promise();

p.done(function (value) {
    console.log(value);
});

setTimeout(function () {
    wait.resolve(Math.random());
}, 1000);
