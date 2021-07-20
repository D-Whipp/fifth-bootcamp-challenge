var textboxEl = document.querySelector("#text");
var nowTime = +moment().format("HH");
var fixedTime = +moment().hour(13).format("HH");
console.log(fixedTime);

// sets current day on top of page
var nowDate = moment().format("MMMM Do YYYY");
$("#currentDay").html(nowDate);

$(".timeblock").each(function (i, item) {
  console.log($(this).children("#text").addClass("past"));
});

var compareTime = function () {
//   console.log(nowTime);
//   //   loop through timeblock elements
//   $(".timeblock").each(function (i, item) {
//     console.log($(".text-box"));
//     var eachBlock = parseInt($(item).attr("id").split("-")[1]);
//     console.log(item);
//   });
};

// var auditTime = function (eachBlock) {
//     var a = eachBlock;
//   if (a < nowTime) {
//     $(textboxEl).addClass("past");
//   } else if (a === nowTime) {
//     // check if the time is now
//     $(textboxEl).removeClass("past");
//     $(textboxEl).addClass("present");
//   } else {
//     // check if the time is in the future
//     $(textboxEl).removeClass("past");
//     $(textboxEl).removeClass("present");
//     $(textboxEl).addClass("future");
//     console.log("hi");
//   }
// };

compareTime();
