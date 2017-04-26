/* Thisis the constructor functionwhich takes an argumnet and assignn in the name varibale */

function Thing(name) 
{

  this.name = name;

}

/*
"doSomething" is a method of the thing object which takes a prototype call back function and an argument to pass in the funtion.
*/

Thing.prototype.doSomething = function(callback, salutation) 
{

  callback.call(this, salutation);

}
/*Afunction is a generic function/method which takes a variable argunent to pass and use the global variable of the object*/

function Afunction(salutation) 
{

  console.log(salutation + " " + this.name);

}
//New object
var t ;
t = new Thing('John Smith');

t.doSomething(Afunction, 'Hello'); // The output will be : Hello John Smith
