function age(current_age)
{
	console.log("I\'m " + current_age  + " years old .");
}


age(25);


function simpleclass( name, ftnum)
{
	this.name = name;
	this.ftnum = ftnum;
}

simpleclass.prototype.addage(year)
{
	this.ftnum = (this.year+1);
}

var ft_obj = new simpleclass( "Audrey", 22 );
ft_obj.addage();
console.log(ft_obj.name);
console.log(ft_obj.ftnum);