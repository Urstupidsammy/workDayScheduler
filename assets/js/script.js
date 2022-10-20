$(document).ready(function (){
//current time is displayed at the top of the scheduler
var currentTime = moment().format("MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(currentTime);

//timeblocks presented for each hour in the business dya

var now = parseInt(moment().format("H"));

//each timeblock is color coded to show past/present/future
$(".row").each(function (i, hour) {
    //console.log($(this))
    var hourID = parseInt($(this)[0].children[2].id); 
    var savedNote = localStorage.getItem(hourID)

    $(this)[0].children[1].value = savedNote
    if (hourID === now) {
        $(this).addClass("present");
    }else if (hourID < now) {
        $(this).addClass("past");

    }else {
        $(this).addClass("future");
    }
});

//able to click on the time row and save event text to local storage and remain after refresh
$('.btn').on("click", function (event){
    //console.log(event.target.attributes[0].value)
    var calenderItem = event.target.parentElement.children[1].value;
    //console.log(calenderItem)
    localStorage.setItem(event.target.attributes[0].value, calenderItem);

});

//after refresh still saved
    
});