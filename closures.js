/*
a closure is a dynamic reference that is created when an
inner function uses variables of an outer function. 

And to access the closure, you simply call the inner 
functions returned from the outer function.
*/

function makeClosure(val)
{
	var statval = val;
	function cl()
	{
		statval+=1;
		return statval;
	}

	return cl;
}

const closure = makeClosure(1);

console.log(closure());
