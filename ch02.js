var x = function(a){
	var line=" ";
	for (var i= 1; i<=a ; i++){
								if ((i%2)===1)
									{line+='#'}
								else if ( (i%2)===0)
									{line+=' '}
								else {
									line+='#'
								};

	}
	console.log(line)
};
var y = function(a){
	var line="#";
	for (var i= 1; i<=a ; i++){
								if ((i%2)===1)
									{line+=' '}
								else if ( (i%2)===0)
									{line+='#'}
								else {
									line+=' '
								};

	}
	console.log(line)
};


function main (a,b, size) {

	// main function  body...
	for (var n=1; n<=(size/2); n++)
	{
		a(size) ;
	    b(size);
     };
};


main(x,y,16);
