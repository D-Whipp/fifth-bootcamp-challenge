var textboxEl = document.querySelector("#text");

var nowDate = moment().format("MMMM Do YYYY");
$("#currentDay").html(nowDate);


var compareTime = function () {
  var nowTime = +moment().format("HH");
  console.log(typeof nowTime);

  // loop through timeblock elements
  $(".timeblock").each(function () {
    var timeBlocks = parseInt($(this).attr("id").split("-")[1]);
    //   check if the time is in the past
    if (timeBlocks < nowTime) {
        $(textboxEl).addClass("past");
    } else if (timeBlocks === nowTime) {
        console.log(timeBlocks);
        // check if the time is now
        $(textboxEl).removeClass("past");
        $(textboxEl).addClass("present");
    } else {
        // check if the time is in the future
        $(textboxEl).removeClass("past");
        $(textboxEl).removeClass("present");
        $(textboxEl).addClass("future");
    }
  });
};

compareTime();
