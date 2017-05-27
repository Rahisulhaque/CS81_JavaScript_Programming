function person ( name, age, gender)
{
	this.name = name;
	this.age = age;
	this.gender = gender;

	this.hello = function()
	{
		console.log("Hello World!");
	}
}

var Steve = new person("Steve", 28, "male");
var Julie = new person("Julie", 21, "Female");



function say ( human1, human2)
{
	console.log(human1.name + " said, I'm your supervisor" + human2.name);
}


say(Steve, Julie);
