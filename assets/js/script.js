var currentDayEl = document.querySelector("#currentDay");
var timeEl = document.querySelector(".time").innerText;
console.log(nineTimeEl);

var nowDate = moment().format("MMMM Do YYYY");
var nowTime = moment().format("hh:mm:ss A");
var compareTime = moment().format("hA");

console.log(nowDate);
console.log(nowTime);
console.log(compareTime);

var setCurrentDay = function () {
  var setDate = (currentDayEl.innerText = nowDate);
  return setDate;
};

var checkTime = function (nowTime) {
  var currentTime = nowTime;

  for (i = 0; i < 8; i++) {}

  console.log(currentTime);
  console.log("hi");
};

var convertTime = function (value) {

};

convertTime();
checkTime(nowTime);
setCurrentDay();
