// sets current date at top of page
var nowDate = moment().format("MMMM Do YYYY");
$("#currentDay").html(nowDate);

var timeBlockEl = $(".timeblock");

var auditTime = function (timeBlockEl) {
  var currentTime = moment().format("HH");
  console.log(currentTime);

  $(".timeblock").each(function () {
    var timeBlocks = parseInt($(this).attr("id").split("-")[1]);
    var textAreaEL = document.querySelector("#text");
    console.log(textAreaEL);

    if (timeBlocks < currentTime) {
      textAreaEL.addClass("past");
    }
  });
};

auditTime();
