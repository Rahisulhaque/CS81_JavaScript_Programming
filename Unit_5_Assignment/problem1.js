var myJSON = [
	{
		"Names": "Ross",
		"Company": "Quis Urna Nunc Company",
		"Email": "amet.orci@sagittisDuisgravida.com",
		"Phone": "(855) 152-2097"
	},
	{
		"Names": "Jada",
		"Company": "Pretium Corp.",
		"Email": "lacinia.vitae.sodales@quis.com",
		"Phone": "(580) 169-1471"
	},
	{
		"Names": "Iola",
		"Company": "Duis Limited",
		"Email": "sed.pede@et.org",
		"Phone": "(649) 970-8829"
	},
	{
		"Names": "Jonas",
		"Company": "Ac Associates",
		"Email": "scelerisque.dui.Suspendisse@luctus.co.uk",
		"Phone": "(369) 430-5709"
	},
	{
		"Names": "Norman",
		"Company": "Id Foundation",
		"Email": "mus@In.net",
		"Phone": "(713) 889-8319"
	},
	{
		"Names": "Urielle",
		"Company": "Dolor Quisque Tincidunt Associates",
		"Email": "vitae.purus.gravida@MaurismagnaDuis.co.uk",
		"Phone": "(383) 708-2318"
	},
	{
		"Names": "Hyatt",
		"Company": "Purus Ltd",
		"Email": "Curabitur@molestie.co.uk",
		"Phone": "(723) 704-9914"
	}
];
var myJSONlength = myJSON.length;

for(var i  = 0; i <= (myJSONlength -1); i++)
{
	console.log("Company: " + myJSON[i].Company + " - Phone: " + myJSON[i].Phone);


}