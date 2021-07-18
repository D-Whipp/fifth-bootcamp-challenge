var currentDayEl = document.querySelector("#currentDay");

var nowDate = moment().format("MMMM Do YYYY");
var nowTime = moment().format("hh:mm:ss A");

console.log(nowDate);
console.log(nowTime);

var setCurrentDay = function () {
  var setDate = (currentDayEl.innerText = nowDate);
  return setDate;
};

setCurrentDay();
