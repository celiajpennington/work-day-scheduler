//Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

//You'll need to use the Moment.js library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.


//AS AN employee with a busy schedule
//I WANT to add important events to a daily planner
//SO THAT I can manage my time effectively
//Acceptance Criteria
//GIVEN I am using a daily planner to create a schedule
//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar
    // 1 Movement function update() {
    //$('#currentDay').html(moment().format('D. MMMM YYYY H:mm:ss'));//}//setInterval(update, 1000); might not need the time

//WHEN I scroll down

//THEN I am presented with timeblocks for standard business hours
    // Bootstrap grid or input form
//WHEN I view the timeblocks for that day
//THEN each timeblock is color coded to indicate whether it is in the past, present, or future
    // Conditional- look through jquery
//WHEN I click into a timeblock
    //eventlistener 
//THEN I can enter an event
    //input
//WHEN I click the save button for that timeblock
    //button & event listener
//THEN the text for that event is saved in local storage
        // Local Storage
//WHEN I refresh the page THEN the saved events persist
  //Look through Local storage persist activity
//The following animation demonstrates the application functionality:

//A user clicks on slots on the color-coded calendar and edits the events.

var currentTime = moment().hours()
///Current day
var currentDay = moment().format("dddd LL");
$("#currentDay").text(currentDay);

//Create save button to set item to localstorage with parent div id value as key & input value as the local storage value
$(".saveBtn").on("click" , function(){
    var inputTextValue = $(this).siblings("#inputvalue").val();
    var divTimeKey = $(this).parent().attr("id");

    window.localStorage.setItem(divTimeKey, inputTextValue);
})

$("#9 #inputvalue").val(window.localStorage.getItem("9"));
$("#10 #inputvalue").val(window.localStorage.getItem("10"));
$("#11 #inputvalue").val(window.localStorage.getItem("11"));
$("#12 #inputvalue").val(window.localStorage.getItem("12"));
$("#13 #inputvalue").val(window.localStorage.getItem("13"));
$("#14 #inputvalue").val(window.localStorage.getItem("14"));
$("#15 #inputvalue").val(window.localStorage.getItem("15"));
$("#16 #inputvalue").val(window.localStorage.getItem("16"));
$("#17 #inputvalue").val(window.localStorage.getItem("17"));

function colorBlock () {
  $(".input-group").each(function(){
    var colorBlock = $(this).attr("id")
      if (currentTime > colorBlock){
        $(this).addClass("past")
      } else if (currentTime == colorBlock){
        $(this).removeClass("past")
         $(this).addClass("present")
      } else if (currentTime < colorBlock){ 
        $(this).removeClass("present")
        $(this).addClass("future")
      }
  } )
}
colorBlock();

