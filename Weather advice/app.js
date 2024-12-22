// Task 2 Weather Advice

var WeatherInput = prompt("Type Weather according to this. \n 1)Sunny\n 2)Rainy \n 3)Snowy")

if (WeatherInput == "sunny" || WeatherInput == "Sunny") {
    document.write("Wear sunglasses!")
}
else if (WeatherInput == "rainy" || WeatherInput == "Rainy") {
    document.write("Take an umbrella.")
}
else if (WeatherInput == "snowy" || WeatherInput == "Snowy") {
    document.write("Wear warm clothes.")
}
else{
    document.write("Enjoy your day!")
}