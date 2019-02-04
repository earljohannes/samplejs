/*
JavaScript is designed on a simple object-based 
paradigm. An object is a collection of properties, 
and a property is an association between a 
name (or key) and a value. A property's value
can be a function, in which case the property
is known as a method.
*/

/*
Properties of JavaScript objects can also be
accessed or set using a bracket notation. Objects
are sometimes called associative arrays, since
each property is associated with a string value 
that can be used to access it. 
*/

/*
Objects in JavaScript can only have String type 
as key type
*/


//Using Object initializer
const Ashara = 
{
	name :
	{
		fname : "Ashara",
		lname : "Trimson"
	},

	sex : "F",
	ht : 233,
	wt : 216,

	getHt : function()
	{
		return (Math.floor(this.ht/30))+"'"+Math.ceil((this.ht%30)/2.54) ;
	},

	getWt()
	{
		return Math.ceil(this.wt/2.2) ;
	}

};

console.log(Ashara.getHt());
console.log(Ashara.getWt());

/*
A method is a property of an object that is a function.
Methods are defined the way normal functions are 
defined, except that they have to be assigned as the 
property of an object
*/


const fun = Ashara.getHt;	
/*
currently fun is bound to global object and so is called 
in the context of the global object
*/
console.log(fun());



//Method reassignment : Method assigned to another function.
const HT = function()
{
	return Math.floor(this.ht/30)*2 +"'" + Math.ceil((this.ht%30)/2.54);
}

Ashara.getHt = HT;
console.log(Ashara.getHt());


//--------------------------------------------------------------------------------------------------------
//Prototype using Object.create()

/*
What create() actually does is to create a new object from 
a specified prototype object. Here, cochin is being created 
using ashara as a prototype object.
*/

var cochin = Object.create(Ashara);
console.log("Properties are undefined : "+cochin.fname);
console.log("But Methods are working : "+cochin.getHt());
console.log("And object is empty : "+cochin);


/*
Now we will explicitly assign values to the "cochin" object
which we can do whether or not we are dealing with prototypes
*/
cochin.fname = "Cochin";
cochin.lname = "Trimson";
console.log(cochin);
console.log(Object.keys(cochin));
console.log(Object.getPrototypeOf(cochin));

/*
So cochin does not contain Ashara's properties but can refer
to her methods
*/


//console.log(Object.getOwnPropertyNames(Ashara.prototype));


//--------------------------------------------------------------------------------------------------------





