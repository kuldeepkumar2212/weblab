var input=document.getElementById("string");
var submit=document.getElementById("btn");

submit.addEventListener("click",()=>{
    alert(input.value.split("").sort().join(""));
})