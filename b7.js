function check(v,b)
{
    var results=[];
    for(var bl of b)
    {
        var vi=0;
        var bi=0;

        while(vi<v.length && bi <bl.length)
        {
            if(v[vi]===bl[bi])
            {
                vi++;
                bi++;
            }
            else
            {
                vi++;
            }
        }   
        if(bi===bl.length)
        {
            results.push("positive");
        }
        else
        {
            results.push("negative");
        }
    }
    return results;
}





var v = "coronavirus";
var b =  ["ravus", "oron", "covirus", "coronaviruss", "viruscorna"];
var x =check(v,b);

console.log(x);