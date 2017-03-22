

var range = function (b, e ){
var a=[];
for (var i= b; i<=e; i++)
{a.push(i);}
return a;
}
range(1,10);

function rangeadd(b, e ,s){
var a=[];
for (var i= b; i<=e; i++)
{a.push(i);
 i+=(s-1);}
console.log("["+a+"]");
}
rangeadd(1,10,1);

function sum(x){
var a = x;
var m=0;

for ( var i = 0; i<=(a.length-1); i++)
  {
    
    m+=i
    
  };
 
return m;
};

console.log(sum(range(1,5)));