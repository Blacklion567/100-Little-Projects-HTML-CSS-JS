const year = document.getElementById('year');
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const loading = document.getElementById('loading');

const nextYear = new Date().getFullYear() + 1;
const nextYearTime = new Date(`January 01 ${nextYear} 00:00:00`);

function updateCountdown() {
  const currentTime = new Date();
  const difference = nextYearTime - currentTime;
  const currentDays = Math.floor(difference / 1000 / 60 / 60 / 24);
  const currentHours = Math.floor(difference / 1000 / 60 / 60) % 24;
  const currentMinutes = Math.floor(difference / 1000 / 60) % 60;
  const currentSeconds = Math.floor(difference / 1000) % 60;
  days.innerText = currentDays < 10 ? '0' + currentDays : currentDays;
  hours.innerText = currentHours < 10 ? '0' + currentHours : currentHours;
  minutes.innerText = currentMinutes < 10 ? '0' + currentMinutes : currentMinutes;
  seconds.innerText = currentSeconds < 10 ? '0' + currentSeconds : currentSeconds;
}

setTimeout(() => {
  loading.remove();
  countdown.style.display = 'flex';
}, 1000);

setInterval(updateCountdown, 1000);

year.innerText = nextYear;
