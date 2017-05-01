function foo() {
    var bar = "bar";

    function baz() {
        console.log(bar);
    }

    bam(baz);
}

function bam(baz) {
    baz();  // "bar"  ... That is CLOSURE: baz function will access variable bar 
            // defined in their original lexical scope at foo function
}

foo();



