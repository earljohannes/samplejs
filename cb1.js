function doHomework(subject, callback) 
{
	console.log("Starting my "+ subject +" homework.");
  	callback();
}


doHomework('math', () => console.log("Finished my homework"));

