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

Other
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
3) constructor to bind
4) return it

Object.create() makes the first 2 steps

### Quiz
1) What is a constructor?
Is a fn that is the new keyword in fron of it
2) What is a [[Prototype]] ?
Is a linkage from one object to another object. And come from:
a) From object create
b) through step 2 linked
3) How does a [[Prototype]] affect an object ?
Delegate up to prototype chain to a different object
4) How do we find out where an object's [[Prototype]] point to ? (3 ways)
a) dunder proto
b) object.getPrototyptOf
c) .constructor.prototype

## Object Orientation 

### OLOO: Objects Linked to Other Objects

* JS have not Inheritance, JS have "Behavior Delegation"

See examples on s-08-114 ....js

OLOO (objects linked to other objects) pattern explored (with comparison to the prototype style of the same code) 
https://gist.github.com/getify/5572383

Playing around with an `Object.make()` helper
https://gist.github.com/getify/5226305

### Delegation vs. Classes

Delegation is more powerful thanl class because you can implement classes in delegation but you cannot the reverse.
You can't implement delegation ina class mechanism.

Tradeoffs:
* shadowing
* everithing is public

Conclusions:
* 95% of time Module pattern, no multiple instances needed
* 5% delegation instead of prototype

## Async Patterns

### Callbacks

* Samples
** Nested
** No nested
* Callback hell
* Inversion of control
** Separate callback
** Error-first style
** Nested callback tasks

### Generators (yield)

* Iterators like, but return value
* coroutines
* generator messages
* yield tasks

### Promises

Are important because they invert the 'inversion of control' of the callbacks

* Metaphor: 
** Fastfood after pay
** Completion event or a continuation event


* jQuery style promeses

Asynquence

https://github.com/getify/asynquence

* then: next step
* gate: many parallel steps
* waterfall: one step and the next one. like a pipeline
* seq
* val

Experimental: CSP Communicating Serial Processes





