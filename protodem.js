'use strict';
/*
Suppose we wish to extend the array object so we could just ask for the
sum of the array. JS arrays don't have a sum property, so this won't work.

But since JS is dynamically typed, I'm going to add my own sum property here.
*/

var arr = [2,5,1,9,6];

Object.defineProperty(arr, 'sum', {get: function(){
	var sum = 0;
	for(var i=0; i<arr.length; i++)
		sum = sum + arr[i];

	return sum;
}});

console.log(arr.sum);

/*
But this property will be defined for only that array "arr".
*/


var arr2 = [2,93,74,36,51];
console.log(arr2.sum);


/*
We get undefined for any other array. What if we want this property to belong
to all other arrays.
*/

Object.defineProperty(Array.prototype, 'mean', {get: function(){
	var sum = 0;
	for(var i=0; i<this.length; i++)
		sum+=this[i];

	const mean = sum/this.length;
	return mean;
}});

console.log(arr.mean);
console.log(arr2.mean);


//-----------------------------------------------------------------------------------------------------------------------


const Hunter = function(name, kills)
{
	this.name = name;
	this.kills = kills;
};

var Dean = new Hunter("Dean Winchester", 91);

console.log(Hunter.prototype===Dean.__proto__);