function getData(d) {
    return ASQ(function (done) {
        setTimeout(function () { done(d); }
            , 1000);
    });
}

ASQ()
    .runner(function* () {
        var x = 1 + (yield getData(10));
        var y = 1 + (yield getData(30));
        var answer = yield (getData(
            "Meaning of life: " + (x + y)
        ));
        return answer;
    })
    .val(function (answer) {
        console.log(answer);
    });
