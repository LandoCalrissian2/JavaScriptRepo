var me = {
    house:"whiteley",
    car:"jeep",
    sex:"male",
};

function dictionary() {
        document.getElementById("dictionaryOp").innerHTML=me.house;
        delete me.car;
        document.getElementById("dictionaryOp").innerHTML=me.car;
};