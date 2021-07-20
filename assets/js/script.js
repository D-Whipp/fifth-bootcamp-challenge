var textboxEl = document.querySelector("#text");
var nowTime = +moment().format("HH");
var fixedTime = +moment().hour(13).format("HH");

// sets current day on top of page
var nowDate = moment().format("MMMM Do YYYY");
$("#currentDay").html(nowDate);

// $(".timeblock").each(function (i, item) {
//   console.log($(this).children("#text").addClass("past"));
// });

var compareTime = function () {
  //   loop through timeblock elements
  $(".timeblock").each(function (i, item) {
    var eachBlock = $(this).children("#text");
    var eBlock = document.querySelector(".timeblock .text-box");
    console.log(eBlock);
    console.log(this);
    console.log(eachBlock);

    if (eachBlock < nowTime) {
      eBlock.classList.add("past");
    } else if (eachBlock === nowTime) {
      // check if the time is now
      eBlock.classList.remove("past");
      eBlock.classList.add("present");
    } else {
      // check if the time is in the future
      eBlock.classList.remove("past");
      eBlock.classList.remove("present");
      eBlock.classList.add("future");
    }
  });
};

compareTime();
