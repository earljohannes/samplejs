function f1(someval)
{
	return ++someval;
}

function f2 (someval)
{
	return --someval;
}

module.exports.alias1 = f1;
module.exports = f2;



/*
Both the functions are exported
*/