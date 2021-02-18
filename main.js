menu_array_list = ["Chicken Tandoori Pizza", "Deluxe Veggie Pizza", "Paneer Tikka Pizza", "Veg Extravaganza Pizza", "Veg Supreme Pizza"];


function getmenu() {

    var htmldata;

    htmldata = "<ol class='menulist'>"
    menu_array_list.sort();
    for (var i=0; i<menu_array_list.length; i++) {
htmldata = htmldata+'<li>'+menu_array_list[i]+"</li>"
 }
 htmldata = htmldata+"</ol>"
document.getElementById("menu_div").innerHTML = htmldata;
}

function add_item() {
var htmldata;

var item = docuemnt.getElementById("add_item").value;
menu_array_list.push(item)
menu_array_list.sort();
htmldata ="<section class='cards'>"

for(var i=0; i<menu_array_list; i++){
htmldata = htmldata+"<div class='cards'>" + "<img src='images/pizzaImg.png'>" + menu_array_list[i] + "</div>"

}
htmldata = htmldata + "</section>"
document.getElementById("display_addedmenu").innerHTML = htmldata;

}