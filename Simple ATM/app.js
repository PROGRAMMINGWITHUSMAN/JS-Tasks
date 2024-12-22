// Task 3: Simple ATM 

var UserInput3 = +prompt("Welcome to the XYZ ATM select any number \n 1) Check Current Balance \n 2) Do you want to Withdrawal Money \n 3) Do you want to Deposit \n 4) Exit")
var balance = 15000

if (UserInput3 == 1) {
    document.write("Your current balance is Rs " + balance);
}
else if (UserInput3 == 2) {
    var withdraw = +prompt("How much money do you want to withdraw");
    if(withdraw > balance){
        document.write("You have insufficient balance to withdraw")
    }
    else{
        var withdrawbalance = (balance - withdraw);
    document.write("Now your current balance is " + withdrawbalance);
    }
}
else if (UserInput3 == 3) {
    var deposit = +prompt("How Much money do you want to deposit?");
    var totalmoney = (balance + deposit);
    document.write("Your Total balance is " + totalmoney);
}
else if (UserInput3 == 4) {
    document.write("Thank you for using XYZ ATM");
}
else{
    document.write("Please type a valid number")
}