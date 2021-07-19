var nowDate = moment().format("MMMM Do YYYY");
$("#currentDay").html(nowDate);

var compareTime = function () {
  var nowTime = moment().format("HH");
  console.log(nowTime);

  // loop through timeblock elements
  $(".timeblock").each(function () {
    console.log(parseInt($(this).attr("id").split("-")[1]));
  });
  console.log("I DID IT!!!!!!!!!!!!!!!!!!!");
};

compareTime();
