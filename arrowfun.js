/*
Arrow functions, as opposed to ordinary functions, do not
create a new context. That means that the this object is not
bound to the function when an arrow function is created.

Also, arrow functions cannot be used as constructors and they 
do not have a prototype property. Moreover, they do not have 
their own arguments object and because of that you would need 
to use a rest parameter to read multiple arguments.
*/
const self = a => a*2;


const fn = (a,b) =>	
{
	if(a%b==0)	
		return b;	

	else	
		return fn(a,a%b);
}

const fn2 = (a,b,c) =>
{
	this.a = a;
	this.b = b+c;

	/*
	in the Node environment, it will print the invocation arguments
	of the script and not the function arguments.
	*/
	//console.log(arguments);
	return this;
}

const fn3 = function(a,b,c)
{
	const [p,q,r] = arguments;

	const fn = (x,y,z)=>
	{
		//arguments object will refer to the arguments passed to the outer function
		console.log(arguments);
	}

	fn();

	return p;
	/*
	if instead of "return p" we do "console.log(p)" and console.log(fn3(4,5,6))
	it will print the "p" to console and "undefined" in the next line
	because the function "fn3" is not returning anything 
	*/
}

const hunter = (fname,lname)=>
{
	this.fname = fname;
	this.lname = lname;

	//if we comment the above lines, the new call below will print hunter {}
	return fname+" "+lname;
}

console.log(fn(60,45));
console.log(fn2(1,2,3));
console.log(fn3(4,5,6));

//console.log(new hunter("Ashara","Trimson"));
/*
If we call this with an arrow function, we'll receive error 
"hunter is not a constructor"
*/


/*

const add = (a, b) => a + b;

The snippet above is the same as the following:

const add = (a, b) => 
{
	 return a + b;
};

*/
console.log(self(5));