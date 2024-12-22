// Task 2: Weather Advisory

var UserInput2 = +prompt("Write The Temperature (In Numbers)")

if (UserInput2 >= 100) {
    document.write("Extreme Heat Advisory")
}
else if(UserInput2 >= 80 && UserInput2 <= 99){
    document.write("Warm Weather Advisory")
}
else if(UserInput2 >= 60 && UserInput2 <= 79){
    document.write("Pleasant Weather")
}
else if(UserInput2 >= 32 && UserInput2 <= 59){
    document.write("Cool Weather")
}
else if(UserInput2 <= 32){
    document.write("Freezing Temperature Advisory")
}