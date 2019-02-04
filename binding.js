const hunter = 
{
	fname : "Ashara",
	lname : "Lancester",
	getName : function()
	{
		return this.fname+" "+this.lname;
	}
};

const name = hunter.getName();
console.log(name);
/*
The function is called in the context of the hunter object
So the context object is implicitly bound to the util object
*/


const gn = hunter.getName;

/*
We can assign the getName function to a variable and then call 
the function without any context
*/

const fullname = gn();
console.log(fullname);

/*
This will be bound to the window object, and if you are on the 
server, this will be bound to the global object.

Undefined because the function gn() is bound to global object.
*/

//-----------------------------------------------------------------------------------------------

/*
In cases where you want to explicitly bind a function to a context,
you can use bind. Bind() takes the context object as its arguments
and returns a new function bound to the given object.
*/

const gN = hunter.getName.bind(hunter);
console.log(gN());

/*
gN, here is bound to hunter object
*/
