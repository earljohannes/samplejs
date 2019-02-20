var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let arr = [];
var i = 0;

rl.on('line', function (input) {
	arr.push(input);
	i++;

	console.log("I am waiting for a newline, Whenever there would be a newline, I would get triggered");

	if(i>=4)
	{
		rl.close(() => console.log("Insanity callback"));
		console.log("Ab chala : "+arr);
	}
});

setTimeout(() => console.log("Abhi nahi chala : "+arr), 3000);