var strLength = "234555555";

var finalLength = strLength.length;
console.log(finalLength);

function arrayFunction() {
    var arrayOfThings = [];
    arrayOfThings[0] = "zero";
    arrayOfThings[1] = "first";
    arrayOfThings[2] = "second";
    arrayOfThings[3] = "third";
    console.log(arrayOfThings[2]);
}

function constantFunction() {
    const instrument = {type:"guitar", brand:"fender", color:"blue"}
    console.log(instrument);
}

let a=2;
console.log(a);

let example = {
    first : "hello",
    thingToDo : function() {
        return this.first;
    }
};

console.log(example.thingToDo())
