// Task 3 Grade Determination

var InputMarks = +prompt("Enter your Marks")

if (InputMarks >= 90) {
    document.write("You got Grade A")
}
else if (InputMarks >= 80 && InputMarks <= 89) {
    document.write("You got Grade B")
}
else if (InputMarks >= 70 && InputMarks <= 79) {
    document.write("You got Grade C")
}
else if (InputMarks >= 60 && InputMarks <= 69) {
    document.write("You got Grade D")
}
else{
    document.write("You got Grade F Better luck next time")
}
