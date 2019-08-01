function subtract() {
    var subtraction = 5-2;
    document.getElementById("math").innerHTML = "5-2 =" + subtraction;
};

function divide() {
    var subtraction = 6/2;
    document.getElementById("divide").innerHTML = "6/2 =" + subtraction;
};

function multiple() {
    var subtraction = (6/2) + 1 * 5;
    document.getElementById("multipleOp").innerHTML = "(6/2) + 1 * 5 =" + subtraction;
};

function modulus() {
    var modulus = 500 % 7;
    document.getElementById("modulusOp").innerHTML ="500 % 7" + modulus;
}

function negative() {
    var negative = 500;
    document.getElementById("negativeOp").innerHTML =-negative;
}

function add() {
    var negative = 500;
    document.getElementById("addOp").innerHTML ="negative" + --negative;
}

function subb() {
    var negative = 500;
    document.getElementById("subtractOp").innerHTML ="500" + ++negative;
}

function random() {
    var negative = 5;
    document.getElementById("randomOp").innerHTML ="5" + Math.random() * negative;
}

function mathObj() {
    var negative = Math.random();
    document.getElementById("mathObj").innerHTML =Math.sqrt(negative) +"this is the square root of" + negative;
    console.log(negative);
}