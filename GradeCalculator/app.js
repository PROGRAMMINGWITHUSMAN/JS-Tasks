// Task 1: Grade Calculator 

var UserInput1 = +prompt("Please enter your Score:")

if (UserInput1 >= 90) {
    document.write("You got Grade A")
}
else if(UserInput1 >= 80 && UserInput1 <= 89){
    document.write("You got Grade B")
}
else if(UserInput1 >= 70 && UserInput1 <= 79){
    document.write("You got Grade C")
}
else if(UserInput1 >= 60 && UserInput1 <= 69){
    document.write("You got Grade D")
}
else{
    document.write("You got Grade F")
}