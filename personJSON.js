
var person = [{
	  "firstname":"Mike",
	    "lastname":"Smith"
},{
	  "firstname":"Anna",
	    "lastname":"House"
},{
	  "firstname":"Mark",
	    "lastname": "McDonald"
			  }]
  
var json = JSON.stringify(person);
  

  
for( var i = 0 ; i <3; i++)
{
	  var n = (person[i].firstname[0].toLowerCase()+ person[i].lastname.toLowerCase());
	    console.log(n);
}

