"use strict";

setInterval(showTime, 1000);

const domHour = document.querySelector(".hours");
const domMinute = document.querySelector(".minutes");
const domSecond = document.querySelector(".seconds");

function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();

  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  domHour.innerHTML = hour;
  domMinute.innerHTML = minute;
  domSecond.innerHTML = second;
}

showTime();
