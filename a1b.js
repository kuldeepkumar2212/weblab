var n= prompt("enter the number to be reversed");
var rev=(n)=>{
   return Number(n.split("").reverse().join(""));
}
alert("reversed number is" + rev(n));