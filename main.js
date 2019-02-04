var greetings = require("./greetings.js");

/*

The above code is equivalent to

var greetings = 
{
	sayHelloInEnglish: function() 
	{
		return "HELLO";
	},

	sayHelloInSpanish: function() 
	{
		return "Hola";
	}	
};
*/

greetings.sayHelloInEnglish();

greetings.sayHelloInSpanish();