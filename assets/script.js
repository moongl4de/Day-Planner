//displays the date and time at the top of the application
$("#top-text").text(moment().format("dddd, MMMM Do YYYY -  h:mm a"))

var dayPlanner = {
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
    input7: "",
    input8: "",
    input9: "",
    input10: "",
}
//using 24 hour time because it ended up being way easier than trying to determine if 9am is earlier or later than 1pm lol
var timetest= parseInt(moment().format("k"))
console.log(timetest)
var timeBlock = $(".timeClass");
var timeBlockText = $(".inputfield")
console.log("timeblock length: " + timeBlock.length)
//a for loop that loops thru each element with a class of ".timeClass", grabs the "data-time" attribute and then checks to see if its greater than/less than/equal to the actual time, then gives it the appropriate class for past, present or future
for(i = 0; i < timeBlock.length; i++){
    var dataTime = parseInt(timeBlock[i].getAttribute("data-time"));
    console.log(dataTime)

    if (timetest > dataTime) {
        timeBlock[i].classList.add('past');
        timeBlockText[i].classList.add("past")
        console.log("past: " + dataTime)
    }
    if (timetest === dataTime) {
        timeBlock[i].classList.add('present');
        timeBlockText[i].classList.add("present")
        console.log("present: " + dataTime)
    }
    if (timetest < dataTime) {
        timeBlock[i].classList.add('future');
        timeBlockText[i].classList.add("future")
        console.log("future: " + dataTime)
    }


}

function loadData(){
    for(var i = 1; i < 11; i++){
       var getData = localStorage.getItem("input" + i)
       var parsedData = JSON.parse(getData);
    console.log("parsedData " + i + ": " + parsedData)
       $("#input" + i).val(parsedData);
    }
}

$(".planner-buttons").on('click', function(){
    var inputEl = $(this).prev()
    var inputId = inputEl.attr("id")
    dayPlanner[inputId] = inputEl.val();
    var inputstring = JSON.stringify(dayPlanner[inputId])
    localStorage.setItem([inputId], inputstring)
    }
)





loadData();










