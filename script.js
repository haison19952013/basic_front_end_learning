var groceryList = ["apples", "bananas", "carrots"];
var number = 100;
var string = "Hello, World!";
var isRad = true;
if (number > 50) {
    console.log("The number is large.");
} else {
    console.log("The number is small.");
}   

for (var i = 0; i < groceryList.length; i++) {
    console.log(groceryList[i]);
}

console.log("Hello, World!");

function listGroceries() {
    for (var i = 0; i < groceryList.length; i++) {
    console.log(groceryList[i]);
    }
}

listGroceries();

document.getElementById("box").addEventListener("click", function() {
    alert("Box clicked!");
});