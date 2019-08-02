function dateHours() {
    input =  Math.floor((Math.random() * 10) + 1);
    console.log(input)
    if (input < 5) {
        document.getElementById("dateHoursOutput").innerHTML = "this is an if statement"
    }
    else {
        document.getElementById("dateHoursOutput").innerHTML = new Date().getHours()
    }
}

function Time_function() {
    console.log("agdf")
    var time = new Date().getHours();
    var reply;
    if (time < 12 == time > 0) {
        reply ="It is morning time!";
    }
    else if (time > 12 == time < 18) {
        reply ="It is the afternoon.";
    }
    else {
        reply = "It is evening time.";
    }
    document.getElementById("timeOfDay").innerHTML = reply;
}