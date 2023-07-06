var mymap = new Map();

mymap.set("name","kuldeep");
mymap.set("id","2212");
mymap.set("state","karnataka");

var key="id";

if(mymap.has(key))
{
    alert(mymap.get(key));
}
else{
    alert("notfound");
}

mymap.forEach((value,key)=>{alert(value+" "+key)});