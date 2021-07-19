var textboxEl = document.querySelector("#text");

var nowDate = moment().format("MMMM Do YYYY");
$("#currentDay").html(nowDate);


var compareTime = function () {
  var nowTime = +moment().format("HH");
  console.log(typeof nowTime);

  // loop through timeblock elements
  $(".timeblock").each(function () {
    var timeBlocks = parseInt($(this).attr("id").split("-")[1]);
    console.log(timeBlocks);
    //   check if the time is in the past
    if (timeBlocks < nowTime) {
        $(textboxEl).addClass("past");
    }
  });
};

compareTime();
