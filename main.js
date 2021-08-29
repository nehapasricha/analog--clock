const minEl = document.querySelector(".min");
const secEl = document.querySelector(".sec");
const hourEl = document.querySelector(".hour");

setInterval(() => {
  const date = new Date();
  const secDeg = (date.getSeconds() / 60) * 360 - 90;
  secEl.style.transform = `rotate(${secDeg}deg)`;
  const minDeg = (date.getMinutes() / 60) * 360 - 90;
  minEl.style.transform = `rotate(${minDeg}deg)`;
  const hourDeg = (date.getHours() / 12) * 360 - 90;
  hourEl.style.transform = `rotate(${hourDeg}deg)`;
}, 1000);
