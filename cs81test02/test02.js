

var myQuote="He who laughs, lasts.";
var a= myQuote.toUpperCase() = HE WHO LAUGHS, LASTS
var b= myQuote.indexOf("a") = 8 //Index starts from 0 and forward.
var c = myQuote.indexOf("@", 1) = -1 // '@' has not been occured in the given string.
var d =myQuote.indexOf("who") = 3 // It strats at the index 3
var e = myQuote.indexOf("a", 10) = 16 // The occurance of 'a' happens  at 16 after 10 th  index(given parameter);
var f =myQuote.lastIndexOf("a") = 16 // Last occurance happened in 16th.
var g =myQuote.lastIndexOf("a", 7) //lastIndex  start search from the last index 7 and couldn't find any 'a';
var h=myQuote.lastIndexOf("a", 10); // from the index 10 this method found 'a in 8th index.'
var i =myQuote.charAt(7); //charecter at 7th index
var j= myQuote.charAt(myQuote.length)
var k= myQuote.charAt(myQuote.length - 3)
console.log(myQuote.length);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(i);
console.log(j);
console.log(k);