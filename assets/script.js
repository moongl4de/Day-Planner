//Unfortunately on this assignment, I spent all of my time working out the JavaScript logic. I started out hardcoding literally everything which, as you can imagine, was an absolute nightmare. Functional... but a nightmare. That being said, the styling isn't nearly up to par with what I usually do, and I will definitely continue working on this until it's exactly how I want it. But it is 100% functional.
$( document ).ready(function() {
//displays the date and time at the top of the application
setInterval(function(){ 
    $("#top-text").text(moment().format("dddd, MMMM Do YYYY -  h:mm:ss a")); 
}, 1);

//Object for all of my inputs. I was using an array at first but ran into an issue where if you updated existing text, it would push that new data into the array instead of replacing the existing data.
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
//using 24 hour time because it ended up being way easier than trying to determine if 9am is earlier or later than 1pm.
var currentTime= parseInt(moment().format("k"))
console.log(currentTime)
//Grab everything with the class ".timeClass"
var timeBlock = $(".timeClass");
//Grab everything with the class "inputfield"
var timeBlockText = $(".inputfield")
// console.log("timeblock length: " + timeBlock.length)
//a for loop that loops thru each element with a class of ".timeClass", grabs the "data-time" attribute and then checks to see if its greater than/less than/equal to the actual time, then gives it the appropriate class for past, present or future.
for(i = 0; i < timeBlock.length; i++){
    var dataTime = parseInt(timeBlock[i].getAttribute("data-time"));
    console.log(dataTime)
    if (currentTime > dataTime) {
        timeBlock[i].classList.add('past');
        timeBlockText[i].classList.add("past")
        console.log("past: " + dataTime)
    }
    if (currentTime === dataTime) {
        timeBlock[i].classList.add('present');
        timeBlockText[i].classList.add("present")
        console.log("present: " + dataTime)
    }
    if (currentTime < dataTime) {
        timeBlock[i].classList.add('future');
        timeBlockText[i].classList.add("future")
        console.log("future: " + dataTime)
    }
}

//Pretty straightforward here... loading whatever is saved to localStorage using "input" concatenated with "i". Maybe not the best way of doing this but it works out nicely because each input has an ID of the same name. "input1","input2","input3", etc etc etc

function loadData(){
    for(var i = 1; i < 10; i++){
       var getData = localStorage.getItem("input" + i)
       var parsedData = JSON.parse(getData);
    console.log("parsedData " + i + ": " + parsedData)
       $("#input" + i).val(parsedData);
    }
}
//I've got one even listener for every button. When a button is clicked, it grabs the previous element, which is the input field.
//Then, it grabs the id of that input field, saved to a variable
//Finally, it stores that input element's value to the dayPlanner object.
//Using an object instead of an array, I'm able to overwrite existing data. 
//For example, if you had "walk dog" saved at 9AM, but wanted to change it to "get coffee", it will simply replace the old data instead of just adding it to existing data.
$(".planner-buttons").on('click', function(){
    var inputEl = $(this).prev()
    // console.log(inputEl)
    var inputId = inputEl.attr("id")
    dayPlanner[inputId] = inputEl.val();
    // console.log(dayPlanner[inputId])
    var inputstring = JSON.stringify(dayPlanner[inputId])
    console.log(inputstring)
    localStorage.setItem([inputId], inputstring)
    }
)

loadData();

});










