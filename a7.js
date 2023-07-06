var nums=prompt("enter the number sepearted by ,").split(",").map(nums=>Number(nums));
var key=Number(prompt("enter the key"));

var binarysearch = (nums,key)=>{
    var l=0;
    var r = nums.length;
    
    while(l<=r)
    {
        var mid = Math.floor((l+r)/2);
        if(nums[mid] === key)
        {
            return mid;
        }
        else if(key>nums[mid])
            {
                l=mid+1;
            }
            else
            {
                r=mid-1;
            }
    }
    return -1;
}

var result = binarysearch(nums,key);

if(result == -1)
{
    alert("elemet not found");
}
else{
    alert("elemet fount at " + (result+1));
}