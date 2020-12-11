const year = document.getElementById("year");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown");
const spinner = document.getElementById("spinner");

const currentYear = new Date().getFullYear();
const newYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// Add year in DOM
year.innerText = currentYear + 1;

// Remove spinner and display countdown at the beginning
setTimeout(() => {
  spinner.remove();
  countdown.style.display = "flex";
}, 1000);

// Update the countdown
function updateCountdown() {
  let currentTime = new Date();
  let difference = newYear - currentTime;

  // Calculation from milliseconds
  let d = Math.floor(difference / 1000 / 60 / 60 / 24);
  let h = Math.floor(difference / 1000 / 60 / 60) % 24;
  let m = Math.floor(difference / 1000 / 60) % 60;
  let s = Math.floor(difference / 1000) % 60;

  // Add values to DOM
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;
}

// Runs every second
setInterval(updateCountdown, 1000);
