//Other way "error-first style"
function trySomething(cb) {
    setTimeout(function () {
        var num = Math.random();
        if (num > 0.5) cb(null, num);
        else cb("Too low");
    }, 1000);
}

//What happen if return both: error and num values ...
//You will ignore success value (num)
trySomething(function (err, num) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Number:" + num);
    }
})