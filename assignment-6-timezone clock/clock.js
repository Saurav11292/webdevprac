let hrs = document.querySelector(".hrs");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");
let thisDay = document.querySelector(".day");
let todayDate = document.querySelector(".date")
let button = document.querySelector(".btn");
let startButton = document.querySelector(".startbtn")
let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

button.addEventListener("click", function stop() {
  clearInterval(clock);
});



const clock = setInterval(function time() {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  let tday = today.getDay();
  let tdate = today.getDate();

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  hrs.textContent = hours;
  min.textContent = minutes;
  sec.textContent = seconds;
  thisDay.textContent = day[tday];
  todayDate.textContent = tdate;

}, 1000);



