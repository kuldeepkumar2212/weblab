var a = Number(prompt("enter the ist number"));
var b = Number(prompt("enter the second number"));

function operation(symbol,a,b)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            switch(symbol)
            {
                case "add": var res = a+b;
                            break;
                case "sub": var res = a-b;
                            break;
                case "mul": var res = a*b;
                            break;   
                case "del": var res = a/b;
                            break;  
                default: reject("error");
                            break;
            }
            resolve(res);
        },1000);
    });
}

async function perform()
{
    var result = await operation("add",a,b);
    alert(result);

    var result = await operation("sub",a,b);
    alert(result);

    var result = await operation("mul",a,b);
    alert(result);

    var result = await operation("del",a,b);
    alert(result);
}

perform();