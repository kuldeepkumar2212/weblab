let arr=[];
var myset = new Set();

console.time("array-insertion");
for(var i=0;i<10000;i++)
{
    arr[i]=i;
}
console.timeEnd("array-insertion");

console.time("array-search");
arr.find[5000];
console.timeEnd("array-search");

console.time("set-insertion");
for(var i=0;i<10000;i++)
{
    myset.add(1);
}
console.timeEnd("set-insertion");

console.time("set-searching");
myset.has(5000);
console.timeEnd("set-searching");