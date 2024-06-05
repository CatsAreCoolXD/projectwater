function getData(){
    $.ajax({
        url: "http://api.weatherapi.com/v1/current.json?key=be3b9fcb975540c2bb4132502240506&q=Amsterdam&aqi=no",
        method: "GET"
    }).done(function(data){
        document.getElementById("output").innerHTML = data;
    });
}


