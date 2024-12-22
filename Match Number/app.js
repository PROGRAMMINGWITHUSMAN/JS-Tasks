var secret = Math.floor(Math.random() * 10 + 1)
var Prompt = +prompt(`Enter The Number Between 1 to 10`);
  
if (Prompt < 1 || Prompt > 10) {
    alert("Out of range! Please enter a Number between 1 and 10.");
} 
else if (Prompt == secret) {
    alert(`🎉 Congratulations! You matched the secret number`);
} 
else{
    alert(`Sorry! Try again`);
} 