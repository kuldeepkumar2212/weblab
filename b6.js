var weight = Number(prompt("enter the weight in kgs"));

const convert = (weight) =>{
    const lbs = 2.2*weight;
    if(lbs>150)
    {
        alert("obese");
    }
    else if(lbs>=100 && lbs <=150)
    {
        alert("ur ok");
    }
    else
    {
        alert("under weight");
    }
}



convert(weight);
