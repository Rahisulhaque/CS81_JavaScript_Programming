function MedRecord(fistName, lastName, medRecord, medID, insuranceInfo)
{
	this.firstName = firstName;
	this.lastName = lastName;
	this.medRecord = medRecord;
	this.medID = medID;
	this.insuranceInfo = insuranceInfo;
	this .changeInsuranse = function(NewInsuranceInfo)
									{
										this.insuranceInfo = NewInsuranceInfo;
									}

}