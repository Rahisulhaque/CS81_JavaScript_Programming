var function BankAcct(acctNum, acctOwner, checkBalance, saveBalance, acctType)
{
	this.acctNum = acctNum; 
	this.acctOwner = acctOwner; 
	this.checkBalance = checkBalanc; 
	this.saveBalance = saveBalance; 
	this.acctType = acctType;
}

BankAcct.prototype.checkTransfer = function (amount) 
{
	if ((amount+ this.checkBalance) > 0)
	{
		this.checkBalance = (amount + this.checkBalance);
	}
}

var myAcc  = new BankAcct ( '100','Audrey', '100', '100', 'checking');

myAcc.checkTransfer(100);

console.log(myAcc.checkBalance);