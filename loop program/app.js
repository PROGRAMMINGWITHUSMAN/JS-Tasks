var user = prompt("Enter any text");
var user1 = parseInt(prompt("How many times"));

for (var i = 1; i <= user1; i++) {
    document.write(`${i}. ${user}<br>`);
}
