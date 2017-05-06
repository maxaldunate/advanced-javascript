function getData(d) {
    return ASQ(function (done) {
        setTimeout(function () { done(d); }
            , 1000);
    });
}

ASQ()
    .waterfall(
    function (done) { getData(10).pipe(done); },
    function (done) { getData(30).pipe(done); }
    )
    .seq(function (num1, num2) {
        var x = 1 + num1;
        var y = 1 + num2;
        return getData("Meaning of life: " + (x + 1));
    })
    .val(function (answer) {
        console.log(answer);
    });
