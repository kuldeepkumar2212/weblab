if(navigator.geolocation)
{
    navigator.geolocation.getCurrentPosition(success,error);
}
else{
    alert("Geolocation is not supported by this browser.");
}

function success(p){
    var lat = p.coords.latitude;
    var long = p.coords.longitude;

    alert("lat:" + lat + "long:" + long);
}

function error(e){
    alert(e);
}