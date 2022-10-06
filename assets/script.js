console.log("Linked");
var clockEl = $('#currentDay');
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
    "#seventeen"
]
var currentTime;
var currentHour = parseInt(moment().format("H"));


function init() {
currentTime = moment().format("MMM Do, YYYY");
clockEl.text(currentTime);
console.log(currentHour);

//Update the background on the event sections of each time bar.
for (var i = 0; i < hours.length; i++) {
    var hourCompare = parseInt(moment(8+i, "H").format("H"));
    if (hourCompare > currentHour) {
        $(hours[i]).removeClass("past");
        $(hours[i]).addClass("future");
    } else if (hourCompare === currentHour){
        $(hours[i]).removeClass("past");
        $(hours[i]).addClass("present");
    }
}

// On page load check if there are any stored values for the planner hours.
// If not null set the placeholder text for each input to the stored values.

//Event listener for the separate save buttons. When button is clicked, store the input value in local storage. Set the placeholder value to the locally stored value.

// If each button has an ID, then you can use event.target to be able to save the section with the same time.

}

init();