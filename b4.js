var loc = prompt("enter the location");

function result(loc){
    return new Promise((resolve,reject)=>{
        if(loc == "paris")
        {
            resolve("lets take a trip to paris");
        }
        else{
            reject("invalid location")
        };
    });
}

result(loc).then((msg)=>{alert(msg)}).catch((err)=>{alert(err)})