var timeEl = document.querySelector(".timeblock .time").innerText;

var nowDate = moment().format("MMMM Do YYYY");
var nowTime = moment().format("hh:mm:ss A");
var compareTime = moment().format("hA");

console.log(moment().hour());
console.log(nowDate);
console.log(nowTime);
console.log(compareTime);


$("#currentDay").html(nowDate);