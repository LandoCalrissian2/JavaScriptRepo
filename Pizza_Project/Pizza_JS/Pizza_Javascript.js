function getReceipt() {
    //this initializes our string so it can get passed from
    //function to function growing line by line into a full receipt
    var text1 = "<h3> You Ordered: </h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }

    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }

    runningTotal = sizeTotal;
    getMeat(runningTotal, text1);
};

function getMeat(runningTotal, text1) {
    var meatTotal = 0;
    var selectedMeat = [];
    var selectedVegetables = [];
    var meatArray = document.getElementsByClassName("meats");
    var vegetableArray = document.getElementsByClassName("vegetables");
    for (var j = 0; j < meatArray.length; j++) {
        if (meatArray[j].checked) {
            selectedMeat.push(meatArray[j].value);
            console.log("slected meat item: ("+meatArray[j].value+")");
            text1 = text1+meatArray[j].value+"<br>";
        }
    }
    for (var j = 0; j < vegetableArray.length; j++) {
        if (vegetableArray[j].checked) {
            selectedVegetables.push(vegetableArray[j].value);
            console.log("slected meat item: ("+vegetableArray[j].value+")");
            text1 = text1+vegetableArray[j].value+"<br>";
        }
    }

    var meatCount = selectedMeat.length;
    var vegetableCount = selectedVegetables.length;
    if (meatCount + vegetableCount > 1) {
        meatTotal = (meatCount + vegetableCount - 1);
    } else {
        meatTotal = 0;
    }

    runningTotal = (runningTotal + meatTotal);
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" +runningTotal+".00"+"</strong></h3>"
}