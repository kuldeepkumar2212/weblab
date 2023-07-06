function async1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            alert("async1 completed");
            resolve();
        },1000);
    });
}

function async2()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            alert("async 2 completed");
            resolve();
        },1000);
    });
}

function async3()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            alert("async3 completed");
            resolve();
        },1000);
    });  
}

async1().then(()=>{ return async2();}).then(()=>{return async3();}).then(()=>{alert("all functions completed");}).catch((error)=>{alert("error")});