//set the date we're countdown to
var countDownDate = new Date("January 31, 2021 24:00").getTime()
// Update the count down every 1 second
var countDownfunction = setInterval(function(){
//Get todays date and time
  var now = new Date().getTime();
//find the distance between now an the count down date
  var distance = countDownDate - now;

//time calculations for days, hours, minutes, and, seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 ));
  var minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //Output the result in an element with id = "demo"
  document.getElementById("demo").innerHTML = days + "d" + " " + " " + hours + "h" + " " + minutes + "m" + " " + seconds + "s";

  //If the count down is over, write some text
  if(distance < 0){
    clearInterval(countDownfunction);
    document.getElementById("demo").innerHTML = "Expired";

  }
}, 1000);
