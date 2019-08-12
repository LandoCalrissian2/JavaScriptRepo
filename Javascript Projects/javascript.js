
var numberOutput;
var numbers;
numbers = document.getElementById("inputNum").value;

function numFunction() {


    switch(numbers) {
        case "1":
            numberOutput = "one";
            break;
        case "2":
            numberOutput = "two";
            break;
        case "3":
            numberOutput = "three";
            break;
        default:
            numberOutput = "Please input 1,2,3";
    }
    console.log(numberOutput)
}
console.log(numberOutput);

function example() {

    var example = document.getElementsByClassName("example");
    example[0].innerHTML = "changed the text";
};

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);