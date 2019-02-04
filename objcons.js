//A "constructor" in JavaScript is "just" a function that happens to be called with the new operator.

const Hunter = function(fname, lname, hunts)
{
	this.lname = lname;
	this.fname = fname;
	this.hunts = hunts;
};

var c = new Object(Hunter);
//console.log(c);

//---------------------------------------------------------------------------------------------------------

/*
The inherited ones are the ones defined on the prototype 
property (you could call it a sub-namespace) — that is, the 
ones that begin with Object.prototype., and not the ones 
that begin with just Object.

All the methods that are available on the data types come 
from the value of the prototype property of the constructor
function.

The prototype property's value is an object, which is 
basically a bucket for storing properties and methods that 
we want to be inherited by objects further down the prototype 
chain.


So Object.prototype.watch(), Object.prototype.valueOf(), etc., 
are available to any object types that inherit from 
Object.prototype, including new object instances created 
from the Hunter() constructor.


Object.is(), Object.keys(), and other members not defined inside 
the prototype bucket are not inherited by object instances or 
object types that inherit from Object.prototype. They are 
methods/properties available just on the Object() constructor 
itself.
*/


String.prototype.first = function()
{
	return this.charAt(0);
}

console.log(Object.keys(String.prototype));
console.log(Object.getOwnPropertyNames(String.prototype));

module.exports = Hunter;

