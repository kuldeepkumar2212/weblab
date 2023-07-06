
var mail = prompt("enter the email address");
var expression = /^[A-za-z0-9.-_]+@[A-Za-z.-]+\.[A-Za-z]{2,6}$/;
if(expression.test(mail))
{
    alert("valid");
}
else{
    alert("invalid");
}