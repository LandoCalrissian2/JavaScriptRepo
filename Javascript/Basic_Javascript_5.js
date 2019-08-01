function typeOf() {
    document.getElementById("typeOfOp").innerHTML=typeof 3;
}

function notNum() {
    var input = document.getElementById("notNumOp").value
    document.getElementById("notNumOp").value = isNaN(input);
}

function infinite() {
    document.getElementById("infiniteOp").innerHTML=9E500;
}

function boolean() {
   var input2 = document.getElementById("booleanOp").value;
   if (input2 > 5) {
       document.getElementById("booleanOp").value = "true";
   }
   else {
       document.getElementById("booleanOp").value = "fasle";
   }
}

console.log("5" + 5)

console.log(55-2);

console.log(11==10);

console.log(11==11);

function dataType() {
    var input1 = document.getElementById("dataTypeOp").value;
    var input2 = document.getElementById("dataTypeOp1").value;

    document.getElementById("dataTypeOp").value = input1 === input2;
}

function orOperand() {
    var input1 = document.getElementById("orOperand1").value;
    var input2 = document.getElementById("orOperand2").value;
    var input3 = document.getElementById("orOperand3").value;
    var input4 = document.getElementById("orOperand4").value;

    document.getElementById("orOperand1").value = input1 === input2 || input3 === input4;
}

function notOperand() {
    var input1 = document.getElementById("notOperand").value;
    var input2 = document.getElementById("notOperand1").value;

    document.getElementById("notOperand").value = !(input1 > input2);
}
