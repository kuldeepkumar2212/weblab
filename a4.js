var jumpsort = (nums,key) => {
    var n=nums.length;
    var jumpvalues=Math.floor(Math.sqrt(n));
    var left=0;
    var right=0;
    while(right<n && nums[right]<key)
    {
        left=right;
        right=right+jumpvalues;
    }

    right=Math.min(right,n);

    while(right>left)
    {
        if(nums[right]===key)
        {
            return right;
        }
    }
    return -1;
}

var nums=prompt("enter the values seperated by ,").split(",").map(nums=>Number(nums));
var key=Number(prompt("enter the key"));

var res = jumpsort(nums,key);

if(res=== -1)
{
    alert("elemnt not found");
}
else{
    alert("element found at" + (res+1));
}