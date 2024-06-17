const apiKey = "be3b9fcb975540c2bb4132502240506";
const geoApiKey = "AIzaSyDs27PExzWmcaIgSb9vFWcos8bvh30g-OI";
const cityId = "Amsterdam";
let lat;
let lon;
function definePosition(position){
  lat = position.coords.latitude;
  lon = position.coords.longitude;
}
navigator.geolocation.getCurrentPosition(definePosition);
function getData(){
    lat = 25.300;
    lon = 91.583;
    let day = 12;
    let month = 6;
    let year = 2023;
    let sMonth = "";
    let sDay = "";
    let apiString = "";
    console.log(apiString);
    let citySize = parseFloat(document.getElementById("stadSize").innerHTML);
    let dakSize = parseFloat(document.getElementById("dakSize").innerHTML);
    let factor = dakSize/citySize;
    //document.getElementById("output").innerHTML = 
    let prec = 0.0;
    
    for (let x = 0; x < 335; x++){
      if (true){
        day += 1;
        if (day > 28){
          month += 1;
          day = 1;
        }
        if (month > 12){
          year += 1;
          month = 1;
          day = 1;
        }
        let apiString = "http://api.weatherapi.com/v1/history.json?key=be3b9fcb975540c2bb4132502240506&q="+cityId+"&dt="+year+"-"+month+"-"+day;
        console.log(apiString);
        $.ajax({
          url: apiString,
          type: "GET",
          success: function(data){
            let dat = data.forecast.forecastday["0"].day.totalprecip_mm;
            console.log(dat);
            prec += dat;
            console.log(prec);
            if (x=334){
              let output = prec*factor;
              console.log(prec);
              document.getElementById("output").innerHTML = output;
            }
          }
      })
      }
    }
}