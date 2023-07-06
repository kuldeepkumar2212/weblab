let flag=Number(0);

function bookflight(flag)
{
    return new Promise((resolve,reject)=>{
        if(flag==1)
        {
            setTimeout(()=>{
                resolve("flight booked");
            },1000);
        }
        else
        {
            setTimeout(()=>{
                reject("fligh not booked");
            },1000);
        }
    });
}


function bookhotel(flag)
{
    var result = bookflight(flag);

    result.then((booked)=>{
        alert(booked);
        setTimeout(()=>{
            alert('Hotel Booked');
        },1000);
    }).catch((err)=>{
        setTimeout(()=>{
            alert(err);
        })
    })
}

bookhotel(flag);