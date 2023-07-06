var cipher=(text,key)=>{
    var message="";
    for(var i=0;i<text.length;i++)
    {
        var code = text.charCodeAt(i);

        if(code >=97 && code <= 97+26-1)
        {
            code = code - 97;
            code = (code + key)%26;
            code = code + 97;
        }

        message = message + String.fromCharCode(code);
    }

    return message;
}

var text=prompt("enter the text");
var key=Number(prompt("enter the key value"));

alert(cipher(text,key));