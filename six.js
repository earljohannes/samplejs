class Person
{
	constructor(ssn, fname, lname)
	{
		this.ssn = ssn;
		this.fname = fname;
		this.lname = lname;
	}

	ht(val)
	{
		this.hgt = val;
	}

	wt(val)
	{
		this.wgt = val;
	}

}

o1 = new Person("Ashara","Winchester");
o2 = new Person("Dean","McAllistair");
o3 = new Person("Harrion","Trimson");

o1.ht(236);
o1.wt(108);
o2.ht(216);
o2.wt(105);
o3.ht(186);
o3.wt(90);



module.exports =
{
	p1:o1,
	p2:o2,
	p3:o3
};