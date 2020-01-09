$("#top-text").text(moment().format("dddd, MMMM Do YYYY -  h:mm a"))

var timeFormat = "h:mm"
var currentTime = moment().format("hh:mm")
console.log(currentTime)
var timeCheck = moment()

function initialize(){
    for(var i = 0;i<10;i++){
        
    }
}


function loadData(){
    for (let i = 1; i < 11; i++) {
      var parsedData = JSON.parse(localStorage.getItem("input" + i));
      $("#planner-input-" + i).val(parsedData);
    }
}


loadData();

//***I know this is definitely not the best way to do this & I'm going to condense it all down into way fewer lines of code. I've spent hours trying to figure it out using 'this' to no avail, so I'm just doing it this way for now so it at least functions.***

$("#planner-button-1").on('click', function(){
    var userInput1 = $("#planner-input-1").val()
    var Input1string = JSON.stringify(userInput1)
    localStorage.setItem("input1", Input1string)
    console.log(Input1string)
})
//--------------------------------------
$("#planner-button-2").on('click', function(){
    var userInput2 = $("#planner-input-2").val()
    var Input2string = JSON.stringify(userInput2)
    localStorage.setItem("input2", Input2string)
    console.log(Input2string)
})
//--------------------------------------
$("#planner-button-3").on('click', function(){
    var userInput3 = $("#planner-input-3").val()
    var Input3string = JSON.stringify(userInput3)
    localStorage.setItem("input3", Input3string)
    console.log(Input3string)
})
//--------------------------------------
$("#planner-button-4").on('click', function(){
    var userInput4 = $("#planner-input-4").val()
    var Input4string = JSON.stringify(userInput4)
    localStorage.setItem("input4", Input4string)
    console.log(Input4string)
})
//--------------------------------------
$("#planner-button-5").on('click', function(){
    var userInput5 = $("#planner-input-5").val()
    var Input5string = JSON.stringify(userInput5)
    localStorage.setItem("input5", Input5string)
    console.log(Input5string)
})
//--------------------------------------
$("#planner-button-6").on('click', function(){
    var userInput6 = $("#planner-input-6").val()
    var Input6string = JSON.stringify(userInput6)
    localStorage.setItem("input6", Input6string)
    console.log(Input6string)
})
//--------------------------------------
$("#planner-button-7").on('click', function(){
    var userInput7 = $("#planner-input-7").val()
    var Input7string = JSON.stringify(userInput7)
    localStorage.setItem("input7", Input7string)
    console.log(Input7string)
})
//--------------------------------------
$("#planner-button-8").on('click', function(){
    var userInput8 = $("#planner-input-8").val()
    var Input8string = JSON.stringify(userInput8)
    localStorage.setItem("input8", Input8string)
    console.log(Input8string)
})
//--------------------------------------
$("#planner-button-9").on('click', function(){
    var userInput9 = $("#planner-input-9").val()
    var Input9string = JSON.stringify(userInput9)
    localStorage.setItem("input9", Input9string)
    console.log(Input9string)
})
//--------------------------------------
$("#planner-button-10").on('click', function(){
    var userInput10 = $("#planner-input-10").val()
    var Input10string = JSON.stringify(userInput10)
    localStorage.setItem("input10", Input10string)
    console.log(Input10string)
})


function loadData(){
    for (let i = 1; i < 11; i++) {
        var parsedData = JSON.parse(localStorage.getItem("input" + i));
        $("#planner-input-" + i).val(parsedData);
    }
}

//***I know this is definitely not the best way to do this & I'm going to condense it all down into way fewer lines of code. I've spent hours trying to figure it out using 'this' to no avail, so I'm just doing it this way for now so it at least functions.***

// function loadData(){
    // var getInput1 = localStorage.getItem("input1")
    // var parsedInput1 = JSON.parse(getInput1)
    // // console.log(parsedInput1)
    // $("#planner-input-1").val(parsedInput1)
    // //--------------------------------------
    // var getInput2 = localStorage.getItem("input2")
    // var parsedInput2 = JSON.parse(getInput2)
    // // console.log(parsedInput2)
    // $("#planner-input-2").val(parsedInput2)
    // //--------------------------------------
    // var getInput3 = localStorage.getItem("input3")
    // var parsedInput3 = JSON.parse(getInput3)
    // // console.log(parsedInput3)
    // $("#planner-input-3").val(parsedInput3)
    // //--------------------------------------
    // var getInput4 = localStorage.getItem("input4")
    // var parsedInput4 = JSON.parse(getInput4)
    // // console.log(parsedInput4)
    // $("#planner-input-4").val(parsedInput4)
    // //--------------------------------------
    // var getInput5 = localStorage.getItem("input5")
    // var parsedInput5 = JSON.parse(getInput5)
    // // console.log(parsedInput5)
    // $("#planner-input-5").val(parsedInput5)
    // //--------------------------------------
    // var getInput6 = localStorage.getItem("input6")
    // var parsedInput6 = JSON.parse(getInput6)
    // // console.log(parsedInput6)
    // $("#planner-input-6").val(parsedInput6)
    // //--------------------------------------
    // var getInput7 = localStorage.getItem("input7")
    // var parsedInput7 = JSON.parse(getInput7)
    // // console.log(parsedInput7)
    // $("#planner-input-7").val(parsedInput7)
    // //--------------------------------------
    // var getInput8 = localStorage.getItem("input8")
    // var parsedInput8 = JSON.parse(getInput8)
    // // console.log(parsedInput8)
    // $("#planner-input-8").val(parsedInput8)
    // //--------------------------------------
    // var getInput9 = localStorage.getItem("input9")
    // var parsedInput9 = JSON.parse(getInput9)
    // // console.log(parsedInput9)
    // $("#planner-input-9").val(parsedInput9)
    // //--------------------------------------
    // var getInput10 = localStorage.getItem("input10")
    // var parsedInput10 = JSON.parse(getInput10)
    // // console.log(parsedInput10)
    // $("#planner-input-10").val(parsedInput10)
    // //--------------------------------------





