const c = function fun()
{
	console.log(arguments.callee);
	console.log(arguments.caller);
	console.log(statememts);
	return arguments;
}

module.exports = c;