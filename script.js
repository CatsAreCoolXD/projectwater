const apiKey = "be3b9fcb975540c2bb4132502240506";
const geoApiKey = "AIzaSyDs27PExzWmcaIgSb9vFWcos8bvh30g-OI";
const cityId = "Amsterdam";
let lat;
let lon;
let outputText = document.getElementById("outputText");
function definePosition(position){
  lat = position.coords.latitude;
  lon = position.coords.longitude;
}

function setTexts(prec, factor, dakSize, citySize){
  console.log("Output is " + prec + " x " + factor + " = " + prec);
  outputText.innerHTML = prec*factor*(citySize/dakSize);
}

navigator.geolocation.getCurrentPosition(definePosition);
function getData(){
  lat = 25.300;
  lon = 91.583;
  let day = 17;
  let month = 6;
  let year = 2023;
  let sMonth = "";
  let sDay = "";
  let apiString = "";
  console.log(apiString);
  let citySize = parseFloat(document.getElementById("stadSize").innerHTML);
  let dakSize = parseFloat(document.getElementById("dakSize").innerHTML);
  let factor = dakSize/citySize;
  var output = 0.0;
  let text = document.getElementById("outputtext");
  text.innerHTML = "Berekenen...";
  var prec = 0;
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
      apiString = "http://api.weatherapi.com/v1/history.json?key=be3b9fcb975540c2bb4132502240506&q="+cityId+"&dt="+year+"-"+month+"-"+day;
      $.ajax({
        url: apiString,
        type: "GET",
        success: function(data){
          let dat = data.forecast.forecastday["0"].day.totalprecip_mm;
          prec += dat;
          text.innerHTML = prec*factor;
          setTexts(prec, factor, dakSize,citySize);
        }
    });
    console.log("Call");
    }
  
  }
    
}

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
