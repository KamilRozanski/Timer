const nowTime = new Date("2019/10/03 22:53:00").getTime();
const endTime = new Date("2019/10/11 0:00:00").getTime();
const spanDays = document.querySelector('span.d');
const spanHours = document.querySelector('span.h');
const spanMinutes = document.querySelector('span.m');
const spanSeconds = document.querySelector('span.s');


setInterval(()=>{
    const nowTime = new Date().getTime(); //get a current time
    
    
    let days = Math.floor((endTime / (1000 * 60 * 60 * 24)) - (nowTime / (1000 * 60 * 60 * 24)));
    // 1000s (micro sec), 60m (minuts), 60s (seconds) 24h (hours) = days
    days = days < 10 ? `0${days}` : days;


    let hours = Math.floor((endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60))) % 24;
    hours = hours < 10 ? `0${hours}` : hours; // add "0" if hours < 10.

    let minutes = Math.floor((endTime / (1000 * 60) - nowTime / (1000 * 60))) % 60;
    minutes = minutes < 10 ? `0${minutes}` : minutes;// add "0" if minutes < 10.

    let seconds = Math.floor((endTime / 1000 - nowTime / 1000)) % 60;
    seconds = seconds < 10 ? `0${seconds}` : seconds; // add "0" if seconds < 10.


    spanDays.innerHTML = days;
    spanHours.innerHTML = hours;
    spanMinutes.innerHTML = minutes;
    spanSeconds.innerHTML = seconds;

}, 1000)


// // Set the date we're counting down to
// var countDownDate = new Date("2019-10-11 0:00:00").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
//   var now = new Date().getTime();

//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
//   // Display the result in the element with id="demo"
//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";

//   // If the count down is finished, write some text 
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);
