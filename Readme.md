## Max's note from 
# Advanced Javascript course on pluralsight
## by Kyle Simpson

## Intro

Kyle Simpson
http://getify.me
https://github.com/getify
LABjs . Script Loader. https://github.com/getify/LABjs
Books. you don't know JS
grips. Templating Engine. https://github.com/getify/grips
asynquence.  Promise-style async sequence flow control . https://github.com/getify/asynquence 

## Javascript resources

MSN mozilla Developer Network
https://developer.mozilla.org/en-US/docs/Web/JavaScript

Idiomatic.js. Principles of Writing Consistent, Idiomatic JavaScript
https://github.com/rwaldron/idiomatic.js/

ECMAScript Language Specification
http://www.ecma-international.org/ecma-262/5.1/

http://wiki.ecmascript.org/doku.php?id=harmony:proposals

## Scope
* Javascript is a compile language ... bash script is interpreted (ex line 3 & 4)
* Compiler Terminology
* Finding declaration of variables declaration
* JIT compiler
* LHS left-hand side..... on an assigment
* RHS right-hand side... on an assigment (Not Left, just functions)
* eval keyword. lexical scope cheated
* with keyword. lexical scope cheated
* IIFE pattern sorounbding with parentesis
* Doug Crockford (function(){})(); vs (function(){} () ); 
* let keyword... how to simulate... block scope
* dynamic scope vs lexial scope...  runtime vs author time
* Hoisting (slide-13-37.js)
* Function expression vs function declaration
* Functions are hoisted before variables
* Why hoisting... recursion? mutual recursion?
* In C language header files are manual hoisting
* Temporal dead zone
* "this" Keyword
* explicit binding and hard binding
* new keyword: "constructor call" (nothing about classes and initialization)

### 4 question for scope (4rules)
1) Was th fn called with new?
2) Was th fn called with 'call' or 'apply' specifying an explicit this?
3) Was th fn called via a containing/owning object(context)?
4) Default: global object (except strict mode = undefined)

### 4 rules
new keyword
explicit(call/apply/bind)
implicit(obj declaration)
global(default)


## Closures

When a function remembers its lexical scope, even when the Function is executing outside its lexical scope

### Classic Module Pattern
1) there must be an outer enclosing 
2) From inside of that function is must return at least one inner function (that have a closure)
Encapsulation
Export
Not working http://2ality.com/2014/09/es6-modules-final.html

### Tradeoff of module pattern
1) test inner stuff hard or impossible
2) create a new module i am creating a whole new copy of all that internal functions


### New keyword 4 steps
1) create a brand new object
2) Linked
3)
4)

Object.create() make the first 2 steps

