var a=prompt("enter the string");
var count=0;
for(var i=0;i<a.length;i++)
{
    if(a[i]==='a' || a[i]==='e' || a[i]==='o' || a[i]==='i' || a[i]==='u'){
        count=count+1;
    }
}
alert(count);