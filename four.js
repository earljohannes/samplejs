class trims
{
	constructor(fname, lname)
	{
		this.fname = fname;
		this.lname = lname;
	}

	get name()
	{
		return this.fullname();
	}

	fullname()
	{
		return this.fname+" "+this.lname;
	} 
}

o1 = {fname : " harrion", lname : "trimson"};
o2 = {fname : "ashara", lname : "winchester"};

o3 = new trims("Harrion","Trimson");
o4 = new trims("Ashara","Winchester");

module.exports.fname = o3;
module.exports = o4;

/*
Only one of the objects is exported(the latter).
If "module. " is not used, empty object is exported.

Different combinations of exports.<property_name> are to be tried
*/