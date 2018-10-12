var shoppingList = [];

var output = document.getElementById("output");
var item = document.getElementById("item");

function clearItem() {
    output.innerHTML = "";
    item.value = "";
    shoppingList = [];
}

function addItem() {
    shoppingList.push(item.value);
    loopItems();
    item.value = "";
}

function loopItems() {
    for (var i = 0; i < shoppingList.length; i++) {
        var y = i;
    }
    output.innerHTML +=(y +1) + ". " + shoppingList[y] + "<br/>";
}