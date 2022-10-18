//current time is displayed at the top of the scheduler
var currentTime = moment().format("MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(currentTime);

//timeblocks presented for each hour in the business dya
var timeBlock = $(".hour");
var now = parseInt(moment().format("H"));

//each timeblock is color coded to show past/present/future
$.each(timeBlock, function (i, hour) {
    var hourID = parseInt($(this).attr("id"));
    if (hourID === now) {
        $(this).next().addClass("present");
    }else if (hourID < now) {
        $(this).next().addClass("past");

    }else if (hourID > now) {
        $(this).next().addClass("future");
    }
});

//able to click on the time row and save event text to local storage and remain after refresh
$('.saveBtn').on("click", function (event){
    var calenderItem = event.target.parentElement.previousElementSibling.children[0].value;
    localStorage.setItem(event.target.attributes[0].value, calenderItem);

});

//after refresh still saved
$(document).ready(function (){
    if(localStorage["9"] !==null && localStorage["9"] !== undefined) {
        var nineAm = $("<p>" + localStorage["9"] + "</p>");
        $("nineAm").append(nineAm[0].innerText);
    }else {
        ("");
    }
    if(localStorage["10"] !==null && localStorage["10"] !== undefined) {
        var tenAm = $("<p>" + localStorage["10"] + "</p>");
        $("tenAm").append(tenAm[0].innerText);
    }else {
        ("");
    }
    if(localStorage["11"] !==null && localStorage["11"] !== undefined) {
        var elevenAm = $("<p>" + localStorage["11"] + "</p>");
        $("elevenAm").append(elevenAm[0].innerText);
    }else {
        ("");
    }
    if(localStorage["12"] !==null && localStorage["12"] !== undefined) {
        var twelvePm = $("<p>" + localStorage["12"] + "</p>");
        $("twelvePm").append(twelvePm[0].innerText);
    }else {
        ("");
    }
    if(localStorage["1"] !==null && localStorage["1"] !== undefined) {
        var onePm = $("<p>" + localStorage["1"] + "</p>");
        $("onePm").append(onePm[0].innerText);
    }else {
        ("");
    }
    if(localStorage["2"] !==null && localStorage["2"] !== undefined) {
        var twoPm = $("<p>" + localStorage["2"] + "</p>");
        $("twoPm").append(twoPm[0].innerText);
    }else {
        ("");
    }
    if(localStorage["3"] !==null && localStorage["3"] !== undefined) {
        var threePm = $("<p>" + localStorage["3"] + "</p>");
        $("threePm").append(threePm[0].innerText);
    }else {
        ("");
    }
    if(localStorage["4"] !==null && localStorage["4"] !== undefined) {
        var fourPm = $("<p>" + localStorage["4"] + "</p>");
        $("fourPm").append(fourPm[0].innerText);
    }else {
        ("");
    }
    if(localStorage["5"] !==null && localStorage["5"] !== undefined) {
        var fivePm = $("<p>" + localStorage["5"] + "</p>");
        $("fivePm").append(fivePm[0].innerText);
    }else {
        ("");
    }
});