var myset = new Set();

var num1=prompt("enter a number");
var num2=prompt("enter a number");
var num3=prompt("enter a number");
var num4=prompt("enter a number");

myset.add(num1);
myset.add(num2);
myset.add(num3);
myset.add(num4);

var retrive = prompt("enter the value to retrive");
if(myset.has(retrive))
{
    alert(retrive);
}
else{
    alert("not present");
}

myset.forEach((val)=>{alert(val)});