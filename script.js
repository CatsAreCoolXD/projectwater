const apiKey = "be3b9fcb975540c2bb4132502240506";
const geoApiKey = "AIzaSyDs27PExzWmcaIgSb9vFWcos8bvh30g-OI";
const cityId = "Amsterdam";
let lat;
let lon;
var outputText = document.getElementById("outputtext");
var badText = document.getElementById("bad");
var douchText = document.getElementById("douch");
var wasText = document.getElementById("was");
var toiletText = document.getElementById("wc");
var output = 0;
var bekers;
var baden;
var douchen;
var wasmachine;
var toilet;
var dagen = 335;
function definePosition(position){
  lat = position.coords.latitude;
  lon = position.coords.longitude;
}
var a = 0.01;
var o = 0;
function setTexts(prec, dakSize, x){
  if (true){
    output = Math.round(prec*dakSize);
    outputText.innerHTML = "Er valt per jaar " + output + " liter water op jouw dak!";
    bekers = output;
    baden = Math.round(output/110);
    douchen = Math.round(output/360);
    wasmachine = Math.round(output/60);
    toilet = Math.round(output/7);
    badText.innerHTML = "Dat zijn gemiddeld "+baden+" baden!";
    douchText.innerHTML = "Dat is gemiddeld "+douchen+" uur douchen!";
    wasText.innerHTML = "Dat zijn gemiddeld "+wasmachine+" wasmachine sessies!";
    toiletText.innerHTML = "Dat is gemiddeld "+toilet+" keer je wc doorspoelen!";
  }
}

navigator.geolocation.getCurrentPosition(definePosition);
function getData(){
  lat = 25.300;
  lon = 91.583;
  let day = 18;
  let month = 6;
  let year = 2023;
  let apiString = "";
  console.log(apiString);
  let dakSize = parseFloat(document.getElementById("dakSize").value);
  let text = document.getElementById("outputtext");
  text.innerHTML = "Berekenen...";
  var prec = 0;
  for (let x = 0; x < dagen; x++){
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
          setTexts(prec, dakSize, x);
        }
    });
    console.log("Call");
    }
  
  }
    
}

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
}
  
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}