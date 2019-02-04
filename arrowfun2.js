var square = n => n*n;
console.log(square(5));

var add = (a,b) => a+b;
console.log(add(2,3));

var does = (a,b) => {a = a+b; b = a-b; return a*b;}
console.log(does(10,5));
//for more than one statements, parentheses are required



process.stdin.on('readable', function (key) 
{
    var key = process.stdin.read();
    if (!process.stdin.isRaw) 
    {
    	process.stdin.setRawMode( true );
    } 

    else 
    {
    	var i = String(key);
    	if (i == 'q') 
    	{
        	process.exit(0);
    	}

    	else 
    	{
        	console.log('you press ' +i); // null
        	console.log('e: ' +arr[i]);
        	showArrElem();
    	};
    };  
});

