var fruits = require("./lib/fruits.json");
var uniqueArray = require("unique-random-array");

module.exports = {
    list: fruits,
    random: returnRandomFruit()
}

function returnRandomFruit(){
    var pickedFruit = uniqueArray(fruits);
    return pickedFruit;
}