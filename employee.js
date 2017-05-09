var employee(firstname, lastname, ssn, eid,dpt)
	{
		this.firstname = firstname;
		this.lastname = lastname;
		this. ssn = ssn;
		this.eid = eid;
		this.dpt = dpt;
	};
employee.prototype.method = funtion()
{

	console.log(this.first+''+this.last+ ":"+ this.dpt);
};

var eJohnDoe = new employee("John", "Doe", "123-34-1234", "001234", "acct");
var eSallyRally = new employee("Sally", "Rally","123-34-1235", "001235", "hr");