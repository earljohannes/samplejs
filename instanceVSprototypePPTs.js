/*
a closer look at what exactly is happening behind the scenes. 
Let's look at exactly where those properties live. 
*/

const Hunter = function(name, kills, ht, wt)
{
	this.name = name;
	this.kills = kills;
	this.ht = ht;
	this.wt = wt;
}

Hunter.prototype.age = 22;
Hunter.prototype.friend = "Castiel";

var Dean = new Hunter("Dean Winchester", 216, 186, 200);
var Sam = new Hunter("Sam Winchester", 190, 193, 220);

/*
Here we have our Hunter function, and two hunters derived from that function. 
And notice that the Hunter function's prototype has an age property that is
set to 22. That means that each of our hunters have an age of 22. 

If I change Hunter.prototype.age, that will change the age for all 
hunters derived from this function. But what happens if instead of changing 
the prototype's age I change the age of just one of the hunters?
*/

Dean.age = 26;

console.log(Dean.age);
console.log(Sam.age);

/*
Although it makes sense looking 
at the code, it's interesting that in this case, only Dean's age was changed. 
So what exactly is going on here? 

If the age property is coming from the prototype, how is it that I can 
change one without changing the other?

Well, it's because we didn't actually change the prototype's age property. 
What we really did here was add a new property to the Dean object. 
*/


console.log(Dean.age);
console.log(Dean.__proto__.age);

/*
Notice that Dean still has access to both values. So you can see that Dean 
has an age of 26, but Dean's prototype has an age of 22. 

The key concept to notice here is  that prior to setting Dean's age directly, 
the Dean object never really had an age property. 

Only its prototype did. 

But if that's the case, why is it that if we don't have friend property 
on Dean, we can still ask for the friend property on Dean and get a value back?

*/

console.log(Dean.friend);
console.log(Object.getOwnPropertyNames(Dean));

/*
Notice here that  I'm accessing Dean.friend, and it's displaying Castiel 
even though Dean doesn't actually have a friend property. We can further see
that Dean doesn't have a friend property by displaying its keys.

What JavaScript is really doing when we ask for the property value is it 
looks at an object to see if it has a value for that property name. 
And if not, then it asks its prototype. 

We can see this further by using the hasOwnProperty method like this.
*/

console.log(Dean.hasOwnProperty("friend"));


/*
We can see here that Dean does not have its own friend property even though 
we can ask it for friend property and get a value back.


It's important to understand that if you ask an object for the value 
of one of its properties, just because it gives you an answer doesn't
mean that the object itself has that property. It may be one of the 
prototypes in its prototype chain that is actually returning that value. 
*/