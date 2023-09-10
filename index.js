// Days of the week
const date = new Date();
const currentDate = date.getUTCDay();
const days = ["Sunday","Monday","Teusday","Wednesday","Thursday","Friday","Saturday",];
const currentDay = days[currentDate];
document.getElementById("currentday").innerHTML = ` <p> The current day of the week:</p> ${currentDay}`;
//Function to determine the milli-seconds
function millisecond() {
  const date = new Date();
  const currentTime = date.getTime();
  document.getElementById(
    "time"
  ).innerHTML = `${currentTime}`;
}
// Calling out the function to determine the milliseconds
setInterval(millisecond, 1000);