var today = moment().format("dddd MMMM Do, YYYY");
var currenthour = moment().format("HH");


//Display Date and Time in the Header Section
$("#date-section").text("Today is " + today);
$("#date-section").css("font-size",'42px');
$("#clock-section").css("padding-top",'36px');
$("#clock-section").css("font-size",'36px');
function UPDATETIME() {
  rightnow = moment().format('hh:mm:ss:a');
  $("#clock-section").text('RIght now it is ' + rightnow);
  var timerInterval = setInterval(updatetime,1000);
  function updatetime() {
      rightnow = moment().format('hh:mm:ss:a');
      $("#clock-section").text('RIght now it is ' + rightnow);
  };
};
UPDATETIME();

//Changing Color of Task Bars Based on Current Hour
var timeline = ["07", "08", "09", "10", "11", "12", "13", "14", "15", "19", "24"];
function TIMEDCOLOR() {
  for (var i = 0; i < timeline.length; i++) {
    if (timeline[i] < currenthour) {
      $(".taskat" + timeline[i]).addClass("past");
    }
    if (timeline[i] === currenthour) {
      $(".taskat" + timeline[i]).addClass("present");
      $(".time" + timeline[i]).addClass("presenttime");
    }
    if (timeline[i] > currenthour) {
      $(".taskat" + timeline[i]).addClass("future");
    }
  }
}
TIMEDCOLOR();

// Looping to Add Event Liteners to Each Button
for (var i = 0; i < timeline.length; i++) {
  $("#" + timeline[i]).on("click", function (event) {
    var index = event.target.id
    var lsContent = $(".taskat" + index).val();
    localStorage.setItem(index + ":00", lsContent);
  });
}

// Looping to Display the Tasks at the Corresponding Timeslot from the Local Storage
for (var i = 0; i < timeline.length; i++) {
  $(".taskat" + timeline[i]).val(localStorage.getItem(timeline[i] + ":00"));
}

//Reset Button
$(".resetBtn").on("click", function () {
  localStorage.clear();
  location.reload();
});
