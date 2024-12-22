function RollDice() {
    var random = Math.floor(Math.random() * 6) + 1;
console.log(random);
if (random == 1) {
    document.getElementById('Dice').src = 'img/Number_1-removebg-preview (1).png'
}
else if (random == 2) {
    document.getElementById('Dice').src = 'img/Number_2-removebg-preview (2).png'
}
else if (random == 3) {
    document.getElementById('Dice').src = 'img/Number_3-removebg-preview (1).png'
}
else if (random == 4) {
    document.getElementById('Dice').src = 'img/Number_4-removebg-preview (2).png'
}
else if (random == 5) {
    document.getElementById('Dice').src = 'img/Number_5-removebg-preview (1).png'
}
else if (random == 6) {
    document.getElementById('Dice').src = 'img/Number_6-removebg-preview (1).png'
}
}