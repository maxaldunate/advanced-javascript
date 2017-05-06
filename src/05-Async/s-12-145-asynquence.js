ASQ()
    .then(function (done) {
        setTimeout(done, 1000);
    })
    .gate(
        function (done) {
            setTimeout(done, 1000);
        },
        function () {
            setTimeout(done, 1000);
        }
    )
    .then(function () {
        console.log("2 seconds passed");
    });