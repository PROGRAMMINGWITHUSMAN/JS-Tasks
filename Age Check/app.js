// Task 1 age check

var TakingAge = +prompt("Enter Your Age")

if (TakingAge >= 18) {
    document.write("You are an adult.")
}
else if(TakingAge > 13 && TakingAge < 18){
    document.write("You are a teenager.")
}
else{
    document.write("You are a child.")
}