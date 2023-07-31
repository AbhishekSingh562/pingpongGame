//this script file has created the base of the game that black place where our game will take place!!

let can = document.getElementById("table");
let draw_ = can.getContext("2d");

draw_.fillStyle = "black";
draw_.fillRect(0, 0, can.width, can.height);
