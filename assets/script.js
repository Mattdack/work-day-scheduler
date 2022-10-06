console.log("Linked");
var clockEl = $("#currentDay");
var plannerPageEl = $("#planner-page");
var hours = [
  "#eight",
  "#nine",
  "#ten",
  "#eleven",
  "#twelve",
  "#thirteen",
  "#fourteen",
  "#fifteen",
  "#sixteen",
  "#seventeen",
];
var currentTime;
var currentHour = parseInt(moment().format("H"));
var events = ["", "", "", "", "", "", "", "", "", ""];

function init() {
  currentTime = moment().format("MMM Do, YYYY");
  clockEl.text(currentTime);
  console.log(currentHour);

  //Update the background on the event sections of each time bar.
  for (var i = 0; i < hours.length; i++) {
    var hourCompare = parseInt(moment(8 + i, "H").format("H"));
    if (hourCompare > currentHour) {
      $(hours[i]).removeClass("past");
      $(hours[i]).addClass("future");
    } else if (hourCompare === currentHour) {
      $(hours[i]).removeClass("past");
      $(hours[i]).addClass("present");
    }
  }
  getStoredEvents();
}

function getStoredEvents() {
  if (localStorage.getItem("events") !== null) {
    events = JSON.parse(localStorage.getItem("events"));
  }
  for (let i = 0; i < events.length; i++) {
    $(hours[i]).val(events[i])
  }
}

function setStoreEvents(event) {
  event.preventDefault();
    console.log(event.target.tagName);
  if (event.target.tagName === "BUTTON" || event.target.tagName === "I") {
    for (let i = 0; i < events.length; i++) {
        console.log("Storing each event now.")
      events[i] = $(hours[i]).val();
      localStorage.setItem("events", JSON.stringify(events));
    }
  }
}

init();
plannerPageEl.on("click", setStoreEvents);
