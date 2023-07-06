function validateusn(usn)
{
    var pattern = /^1[A-Za-z]{2}[0-9]{2}[A-Za-z]{2}[0-9]{2}[1-9]{1}$/;
    if(pattern.test(usn))
    {
        return 1;
    }
    else{
        return 0;
    }
}

var usn = prompt("enter the usn");

if(validateusn(usn))
{
    alert("valid");
}
else{
    alert("invalid");
}