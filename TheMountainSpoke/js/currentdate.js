var d = new Date();
var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var y = d.getFullYear();
var day = d.getDate();
var w = weekday[d.getDay()];
var m = months[d.getMonth()];

document.getElementById("currentdate").innerHTML = w+ ", " +day+ " " +m+ " " +y;


//Monday, 6 April 2020
//days[d.getDay()]