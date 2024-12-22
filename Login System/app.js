// Task 4 Simple Login System

var LoginUsername = prompt("Type Username. admin")
var LoginPassword = prompt("Type Password. 1234")

if (LoginUsername == "admin" && LoginPassword == "1234") {
    document.write("Login successful!")
}
else{
    document.write("Login failed. Try again.")
}