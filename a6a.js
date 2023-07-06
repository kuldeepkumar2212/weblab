var str=prompt("enter the string");

str= str.split(" ");

for(var i=0,x=str.length;i<x;i++)
{
    str[i] = str[i][0].toUpperCase() + str[i].substring(1);  
}

str = str.join(" ");

alert(str);