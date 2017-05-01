function foo() {
    var bar = 0;

    $("#btn").click(function (evt) {
        console.log(bar++);
    });
}

foo();

// At html file
//<button id="btn" type="button">Click Me!</button>
//<script src="jquery.js"></script>
//<script src="03-Closure\s-04-68-clicks.js"></script>