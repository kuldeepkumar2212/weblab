 var sentence=prompt("enter the sentence");

 const pattern = /(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/(19|20)\d{2}/;

 const result = sentence.match(pattern);

 if(result)
 {
     alert(result[0]);
 }
 else{
     alert("no valid date found");
 }
