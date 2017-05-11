function Human(ft_name, age, gender, mobile)
	{
		this.ft_name = ft_name;
		this.age = age;
		this.gender = gender;
		this.mobile = 2138404870;
		this.greet = function(Friend)
		{
			console.log("Hello " + Friend +" I'm " + this.ft_name + " nice to meet you!")
		}
	}

var Audrey  = new Human("Audrey", 21, "female");

Audrey.greet("Rahisul");

var Jane  = new Human ("Jane", 25, "female");
Human.prototype.miss = function ()
	{
		console.log('I never missed you!');
	}
Audrey.miss();
Human.prototype.addmobile = function(number)
{
	this.mobile = number;
}

Audrey.addmobile(1231231234);


conosle.log(Audrey.mobile);
