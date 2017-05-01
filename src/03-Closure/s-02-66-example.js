function foo() {
    var bar = "bar";

    return function baz() {
        console.log(bar);
    };
}

function bam() {
    foo()();        //bar
}

bam();


