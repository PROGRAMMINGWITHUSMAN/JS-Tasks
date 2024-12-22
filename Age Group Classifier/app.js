// Task 4: Age Group Classifier 

var UserInput4 = +prompt("Type your age")

if(UserInput4 >= 0 && UserInput4 <= 12){
    document.write("You are child")
}
else if(UserInput4 >= 13 && UserInput4 <= 19){
    document.write("You are Teenager")
}
else if(UserInput4 >= 20 && UserInput4 <= 64){
    document.write("You are Adult")
}
else if(UserInput4 >= 65){
    document.write("You are Senior Citizen")
}