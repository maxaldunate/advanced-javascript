for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
        console.log("i: " + i);
    }, i * 1000);
}


//Resolution with IIFE
for (var i = 1; i <= 5; i++) {
    (function (i) {
        setTimeout(function () {
            console.log("i IIFE: " + i);
        }, i * 1000);
    })(i);
}

//Resolution with let Kyle
for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
        console.log("i let kyle: " + i);
    }, i * 1000);
}

//Resolution with let Max
for (var i = 1; i <= 5; i++) {
    let y = i;
    setTimeout(function () {
        console.log("i let max: " + y);
    }, i * 1000);
}
