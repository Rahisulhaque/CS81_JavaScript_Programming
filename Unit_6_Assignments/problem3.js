
function checkProperty(Testobject, givenProperty)
{
	if(Testobject.hasOwnProperty(givenProperty))
		{
			console.log("Your object has this property!");
		}
	else
		{
			console.log('Sorry, There is not such a property');
		}
}

//-----------------------------------------Test---------------------------------------------------------------------------//



function  mytest(property0, property1, property2, property3)
{
	this.property0 = property0;
	this.property1 = property1;
	this.property2 = property2;
	this.property3 = property3;
	this.propertyfunction = function()
	{
		console.log('Hello World!');
	}
}



var test1 = new mytest("name", 42, true, [1,2,3]);

checkProperty(test1, "property0");

checkProperty(test1,"property6");

console.log(object.prototype.hasOwnProperty.call(mytest, 'property0'));