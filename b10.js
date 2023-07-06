if(localStorage.getItem("visitor"))
{
    localStorage.setItem("visitor",Number(localStorage.getItem("visitor"))+1);
}
else
{
    localStorage.setItem("visitor",1);
}

document.write(localStorage.getItem("visitor"))