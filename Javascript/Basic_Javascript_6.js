function Ride_function() {
    var height, can_ride;
    Height = document.getElementById("height").nodeValue;
    can_ride = (height < 52) ? 'You are to short':'You are tall enough';
    document.getElementById("ride").innerHTML = can_ride + "to ride.";
};
function voteAgeInput() {
    var age = document.getElementById("voteAge").value;
    var oldEnough = (age > 18) ? "You CAN vote":"You CAN'T vote";
    document.getElementById("voteAge").value = oldEnough;
};

function vehicle(make, model, year, color) {
    this.vehicleMake = make;
    this.vehicleModel = model;
    this.vehicleYear = year;
    this.vehicleColor = color;
}

var jack = new vehicle("dodge" , "viper", 2020, "red");
var emily = new vehicle("jeep", "trail hawk", 2019, "White and black");
var erik = new vehicle("ford", "pinto", 1971, "mustard");
function keywordFunction() {
    document.getElementById("keywordAndConstructors").innerHTML =
    "erik drives a " + erik.vehicleColor + " colored" + erik.vehicleModel +
    " manufactured in " +  erik.vehicleYear;
}

function nestedFunction() {
    input = document.getElementById("nestedFunction").value;
    squareRoot(input)
    document.getElementById("nestedFunction").value = input * input;
    function squareRoot(input) {
        Math.sqrt(input)
        console.log(input)
        return input;
    }
}