const c = require("./argsdem2");
console.log(c);			//[Function: sum]
console.log(c());		//[Arguments] {}
console.log(c(1,2,4));	//[Arguments] { '0': 1, '1': 2, '2': 6}