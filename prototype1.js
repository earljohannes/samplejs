/*
In JavaScript, prototypes are objects that facilitate linking of objects

Prototype property v/s prototype object

Prototype [property] is the property of an object that points to another
object aka prototype [object]
*/

const Hunter = function(fname,lname,sex,ht,wt)
{
	this.fname = fname;
	this.lname = lname;
	this.sex = sex;
	this.ht = sex==="F"? 233 : 186;
	this.wt = sex==="F"? 200 : 216;

	this.getHt = function()
	{
		console.log(this.ht);
		console.log(this.wt);
		return (Math.floor(this.ht/30))+"'"+Math.ceil((this.ht%30)/2.54) ;
	};

	this.getWt = function()
	{
		return Math.ceil(this.wt/2.2) ;
	};

	Hunter.prototype.power = "superfairy";

};

Hunter1 = new Hunter("Ashara","Trimson","F",0,0);

//console.log(Hunter1.getHt());
//console.log(Hunter1['lname']);


//console.log(Object.keys(Hunter1));
/* 
Returns an array with all the own (not in the prototype chain)
enumerable properties' names ("keys") of an object o
*/


//console.log(Object.getOwnPropertyNames(Hunter1));
/*
Returns an array containing all own properties'
names (enumerable or not) of an object  	 
*/


//---------------------------------------------------------------------------------------------------------

/*
When you create any object, say "user", behind the scenes 
JavaScript links your object to the ‘mother of all objects’ "m"
automatically.

Object "m" is known as the prototype of "user"
*/



//console.log(Hunter1.valueOf());
/*
The method — Object.valueOf() is inherited by Hunter1
because its constructor is Hunter(), and Hunter()'s 
prototype is Object(). valueOf() returns the value 
of the object it is called on
*/


//----------------------------------------------------------------------------------------------------------


const Amara = Hunter.prototype;
console.log(Amara);
// Amara is only a prototype object


const rhea = new Hunter();
rhea.sex = "F";
console.log(rhea);
console.log(rhea.getHt());
console.log(Object.getPrototypeOf(rhea));

/**
 * Methods are working because they are referred to
 * the prototype. All the other properties are empty
 * (undefined) but interestingly two properties - ht and wt
 * are not because property "sex" is empty. Wow!.
 */

module.exports = Hunter;
