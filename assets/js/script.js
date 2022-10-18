//Global Variables
//Reference moment.js
var today = moment();
//Referance the whole task 
var timeBlockEl = document.querySelector('container');

//References 
//Display the current date and time on the paragraph with an id of "currentDay"
$('#currentDay').text(today.format('LLLL')); //LLLL represents the day of week, date and time

//Event Listeners
//Event Listener for the Save Button 
$('.saveBtn').on('click', function (){
    //get values of description from jquery
    var textValue = $(this).siblings('.description').val();
    //get the id attribute of the parent div element
    var timeKey = $(this).parent().attr('id');

//save in local storage
    localStorage.setItem(timeKey, textValue);
});


//Get item (if any) from local storage
$('#hour8 .description').val(localStorage.getItem('hour8'));
$('#hour9 .description').val(localStorage.getItem('hour9'));
$('#hour10 .description').val(localStorage.getItem('hour10'));
$('#hour11 .description').val(localStorage.getItem('hour11'));
$('#hour12 .description').val(localStorage.getItem('hour12'));
$('#hour13 .description').val(localStorage.getItem('hour13'));
$('#hour14 .description').val(localStorage.getItem('hour14'));
$('#hour15 .description').val(localStorage.getItem('hour15'));
$('#hour16 .description').val(localStorage.getItem('hour16'));
$('#hour17 .description').val(localStorage.getItem('hour17'));

//Function that will track wether a task is in the past, present or future and color code it accordingly
function auditTask() {
    //get current number of hours
    var currentHour = today.hours();

    //loop over each time block
    $('.time-block').each(function () {
        var timeId =parseInt($(this).attr('id').split("hour")[1]);
       //if the time Id attribute is earlier than the current hour, add the past class
        if (timeId < currentHour) {
            $(this).addClass('past');
        }
        //if the time Id attribute is equal to the current hour, remove the past and future class and add the present class
        else if (timeId === currentHour){
            $(this).removeClass('past');
            $(this).removeClass('future');
            $(this).removeClass('present');
        }
        //If the time Id attribute is after the current hour, remove the past and present class and add the future class
        else{
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).removeClass('future');

        }

        
    });
    //Call the audit task function
    auditTask();


    //Use setTimeout to update the time every minute (1000ms * 60s)
    setTimeout(function (){
        //clear the current URl
        location = '';//location references the current URL
    }, 1000 * 60);

}