var currentDayEl = document.querySelector("#currentDay");

var now = moment().format("MMMM Do YYYY");

console.log(now);

var setCurrentDay = function () {
    var setDate = currentDayEl.innerText = now;
    return setDate;
};

setCurrentDay();