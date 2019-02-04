/*
The context object, this is a dynamic object which
is set dynamically depending on the way a function
is called. There are several rules to follow in order
to figure out what this is bound to.
*/

/*
The purpose of the new keyword is to invoke a function 
as a constructor of objects.

When a function is called with the new keyword,
couple of things happen behind the scenes:

-> A new empty object is created
-> The context object this is bound to the new empty object
-> The new object is linked to the function’s prototype property
-> "this" is automatically returned unless another non-primitive 
	value is returned explicitly from the function

This is the mechanism provided by JavaScript to link objects with 
prototype objects.

These functions are known as constructor functions.
*/

function Person(fname, lname)
{
	this.fname = fname;
	this.lname = lname;
}

function Person2(fname, lname)
{
	//this.fname = fname;
	//this.lname = lname;
	return this;
}

var hunter = new Person("Dean", "Winchester");
console.log(hunter.fname);
console.log(hunter.lname);

//This is bound to hunter

var hunter2 = new Person("Bella","Peterson");
console.log(hunter2.fname);
console.log(hunter2.lname);

//Two distinct objects are created; the first object is not overwriiten


hunter = new Person("Lucifer","Hey! Ass-Butt");
console.log(hunter.fname);
console.log(hunter.lname);

// But now hunter is overwritten



/*---------------------------------------------------------------------------------------------*/

var hunter3 = Person2.call({fname:'Jo',lname:'Harvelle'},'Allen','Harper');
console.log(hunter3);
console.log(hunter3);

/*
So inside the function, this will be bound to {fname:'Jo',lname:'Harvelle'}
*/

