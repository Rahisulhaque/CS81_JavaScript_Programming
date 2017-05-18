o = new Object();
o.prop = 'exists';

function changeO() {
  o.newprop = o.prop;
  delete o.prop;
}

console.log(o.hasOwnProperty('prop'));   // returns true
changeO();
o.hasOwnProperty('prop');   // returns false

//-----------------------------------------------------------------------------------------------------------------------------------------------//

var myObj={
	a: "Hello World!",
	b:42,
	c: true
}


console.log(myObj.hasOwnProperty('a'));