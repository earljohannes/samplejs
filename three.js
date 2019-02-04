function f1(someval)
{
	someval+=10;
	return someval;
}

function f2(someval)
{
	someval*=2;
	return someval;
}



module.exports.alias1 = f1;
module.exports.alias2 = f2;


//Equivalent
module.exports = 
{
	alias1: f1,
	alias2: f2
}

/*
Only one of the functions(the one declared later) is exported
*/