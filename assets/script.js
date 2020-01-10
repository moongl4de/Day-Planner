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

var timetest= parseInt(moment().format("k"))
console.log(timetest)





// timeColor()
// function timeColor(){
    
    
//     var divClass = $(".timeClass")
//     for(i = 9; i < 18; i++){
//     var dataTime = divClass.attr("data-time-" + i)
//         console.log(dataTime)
     
        
         
//     }

$('.timeClass').each(function(i, obj) {
    
});

    

// }
function rowColors(){
    if (
        $(".timeClass").attr("data-time") > timetest) {
            $(".timeClass").addClass("future");
        }
    else if (
        $(".timeClass").attr("data-time") === timetest) {
            $(".timeClass").addClass("present");
        }
    else (
        $(".timeClass").attr("data-time") < timetest); {
            $(".timeClass").add("past");
        }   

};

rowColors();




// if(momentTime.isBefore(laterMomentTime)){
//   console.log("Yes 1:30 pm is earlier");
// }

function loadData(){
    for(var i = 1; i < 11; i++){
       var getData = localStorage.getItem("input" + i)
       var parsedData = JSON.parse(getData);
    //    console.log("parsedData " + i + ": " + parsedData)
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
// timeColor();









