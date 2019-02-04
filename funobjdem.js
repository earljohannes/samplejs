/*
The Function constructor creates a new Function object.
Calling the constructor directly can create functions
dynamically, which execute in the global scope only.

Every JavaScript function is actually a Function object.
*/

const f1 = new  Function('val1','val2','val3','return val1+val2+val3');

console.log(f1(2,3,6));

/*
When you use call to execute a function, the first
argument is the value of the context object.

And the reset of the values are arguments to the 
function, separated by commas:
*/

console.log(f1.call({},1,2,3));

/*
Using apply is similar to call, you pass the context
object as the first argument. But you pass the
arguments to the function as an array instead of 
passing them one by one.
*/

console.log(f1.apply({},[2,4,6]));