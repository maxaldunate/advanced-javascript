function waitForN(n) {
    var d = $.Deferred();
    setTimeout(d.resolve, n);
    return d.promise();
}

waitForN(1000)
    .then(function () {
        console.log("Hello world");
        return waitForN(2000);
    })
    .then(function () {
        console.log("Finally");
    });