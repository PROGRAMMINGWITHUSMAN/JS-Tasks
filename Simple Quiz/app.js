// Task 5: Simple Quiz 

var totalscore = 0
var UserInput5 = prompt("1) How many days are there in a week?")// 7

if (UserInput5 == "7" || UserInput5 == "seven") { 
    alert("Congratulations! Correct Answer")
    totalscore++
}
else{
    alert("Sorry! Wrong Answer")
}

var UserInput6 = prompt("2) Which planet do we live on?")// Earth
if (UserInput6 == "earth" || UserInput6 == "Earth") {
    alert("Congratulations! Correct Answer")
    totalscore++
}
else{
    alert("Sorry! Wrong Answer")
}

var UserInput7 = prompt("3) What is the color of the sky on a clear day?")// Blue
if (UserInput7 == "blue" || UserInput7 == "Blue") {
    alert("Congratulations! Correct Answer")
    totalscore++
}
else{
    alert("Sorry! Wrong Answer")
}

var UserInput8 = prompt("4) What is 10 + 5?") // 15
if (UserInput8 == "15" || UserInput8 == "fifteen") {
    alert("Congratulations! Correct Answer")
    totalscore++
}
else{
    alert("Sorry! Wrong Answer")
}

var UserInput9 = prompt("5) What is half of 20?") // 10
if (UserInput9 == "10" || UserInput9 == "ten") {
    alert("Congratulations! Correct Answer")
    totalscore++
}
else{
    alert("Sorry! Wrong Answer")
}
var UserInput10 = prompt("6) How many sides does a triangle have?") // 3
if (UserInput10 == "3" || UserInput10 == "three") {
    alert("Congratulations! Correct Answer")
    totalscore++
}
else{
    alert("Sorry! Wrong Answer")
}
var UserInput11 = prompt("7) Which part of the plant is mainly responsible for photosynthesis?") // leaves
if (UserInput11 == "leaves" || UserInput11 == "Leaves"){
    alert("Congratulations! Correct Answer")
    totalscore++
}
else{
    alert("Sorry! Wrong Answer")
}
var UserInput12 = prompt("8) What is the natural satellite of Earth called?") // moon
if (UserInput12 == "moon" || UserInput12 == "Moon") {
    alert("Congratulations! Correct Answer")
    totalscore++
}
else{
    alert("Sorry! Wrong Answer")
}
var UserInput13 = prompt("9)Which is the largest continent in the world?") // asia
if (UserInput13 == "asia" || UserInput13 == "Asia") {
    alert("Congratulations! Correct Answer")
    totalscore++
}
else{
    alert("Sorry! Wrong Answer")
}
var UserInput13 = prompt("10) Which ocean is the largest?") // pacific
if (UserInput13 == "pacific" || UserInput13 == "Pacific") {
    alert("Congratulations! Correct Answer")
    totalscore++
}
else{
    alert("Sorry! Wrong Answer")
}

if (totalscore >= 5) {
    var score1 = "Excellent";
}
else if (totalscore >= 3 && totalscore < 5) {
    var score1 = "Good";
}
else if (totalscore >= 1 && totalscore < 3) {
    var score1 = "Fair";
}
else {
    var score1 = "Better Luck Next Time";
}
var score = document.write("Your Total Score is " + totalscore + ". " + score1)
