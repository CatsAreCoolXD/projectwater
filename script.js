function getData(){
    $.ajax({
        url: "http://api.weatherapi.com/v1/current.json?key=be3b9fcb975540c2bb4132502240506&q=Amsterdam&aqi=no",
        method: "GET"
    }).done(function(data){
        document.getElementById("output").innerHTML = data;
    });
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
