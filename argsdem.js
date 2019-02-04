/*

 The output of typeof function () {} 
 should be object because functions are 
 objects in JavaScript. 

*/

const c = function sum(v1,v2,v3)
{
	arguments[2] = 6;
	return arguments;
}

module.exports = c;