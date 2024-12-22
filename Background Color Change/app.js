
function Change() {
    var Red = Math.floor(Math.random() * 255)
    var Green = Math.floor(Math.random() * 255)
    var Blue = Math.floor(Math.random() * 255) 

    var rgb = ("rgb(" + Red + "," + Green + "," + Blue + ")");
    document.getElementById("body").style.backgroundColor = rgb
}