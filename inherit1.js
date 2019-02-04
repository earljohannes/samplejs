const Hunter = function(fname,lname,sex,ht,wt)
{
	this.fname = fname;
	this.lname = lname;
	this.sex = sex;
	this.ht = sex==="Female"? 233 : ht;
	this.wt = sex==="Female"? 200 : wt;

	this.getHt = function()
	{
		return (Math.floor(this.ht/30))+"'"+Math.ceil((this.ht%30)/2.54) ;
	};

	this.getWt = function()
	{
		return Math.ceil(this.wt/2.2) ;
	};

};


const Hunter1 = new Hunter("Dean", "Winchester", "Male", 186, 220);


Hunter.prototype.superpower = "Hunting";
Hunter.prototype.sex = "TwiceADay";
Hunter.prototype.kill = function()
{
	return this.fname + " a " +this.sex + " hunter killed a demon"; 
}

console.log(Hunter1.sex);	//M
/*
Is there a 'b' own property on o? Yes, and its value is 2.
The prototype also has a 'b' property, but it's not visited. 
This is called Property Shadowing
*/

console.log(Hunter1.superpower);
/*
Is there a 'superpower' own property on Hunter1? 
No, check its prototype.
Is there a 'superpower' own property on Hunter1.[[Prototype]]? 
Yes, its value is 4.
*/

//---------------------------------------------------------------------------------------------------------


/*
JavaScript does not have "methods" in the form that 
class-based languages define them. In JavaScript, any function 
can be added to an object in the form of a property. 
Anvinherited function acts just as any other property, 
including property shadowing


When an inherited function is executed, the value of this 
points to the inheriting object, not to the prototype object 
where the function is an own property.
*/

const Hunter2 = Object.create(Hunter1);
Hunter2.sex = "F";
Hunter2.ht = 216;

console.log(Hunter1.getHt());
console.log(Hunter2.getHt());


console.log(Hunter1.kill());
console.log(Hunter2.kill());


//--------------------------------------------------------------------------------------------------------

const ManOfLetters = function(fname,lname,sex,ht,wt,weapon,curse)
{
	Hunter.call(this,fname,lname,sex,ht,wt);
	this.curse = curse;
	this.weapon = weapon;
}

const ManOfLetters1 = new ManOfLetters("Ashara","Trimson","Female",234,216,"Mark of Cain","First Blade");
console.log(ManOfLetters1);
console.log(Object.getPrototypeOf(ManOfLetters1));
console.log(Object.getOwnPropertyNames(ManOfLetters));
console.log(ManOfLetters.prototype);

