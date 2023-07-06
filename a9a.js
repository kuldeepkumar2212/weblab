var startyear = Number(prompt("enter the start year"));
var endyear = Number(prompt("enter the end year"));

function leapyear(startyear,endyear)
{
    var count=0;
    var leapyears=[];
    for(var i=startyear;i<=endyear;i++)
    {
        if(i%4===0 && (i%100 !== 0 || i%400 ===0))
        {
            count++;
            leapyears.push(i);
        }
    }
    if(count==0)
    {
        alert("no leap years");
    }
    else{
        alert(leapyears);
    }
}

leapyear(startyear,endyear);
