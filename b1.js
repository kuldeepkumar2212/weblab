var myobj = new Object();
var mymap = new Map();

console.time("object-insertion time");
for(var i=0;i<100000;i++)
{
    myobj[i]=i;
}
console.timeEnd("object-insertion time");
console.log(myobj);
console.time("object-deletion time");
for(var i=0;i<100000;i++)
{
    delete myobj[i];
}
console.timeEnd("object-deletion time");

console.time("map-insertion time");
for(var i=0;i<100000;i++)
{
    mymap.set(i,i);
}
console.timeEnd("map-insertion time");
console.log(mymap);

console.time("map-deletion time");
for(var i=0;i<100000;i++)
{
    mymap.delete(i);
}
console.timeEnd("map-deletion time");