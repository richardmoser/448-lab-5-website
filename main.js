let red = document.getElementById("red").value;
let green = document.getElementById("green").value;
let blue = document.getElementById("blue").value;

function colorizer() {
    var red = document.getElementById("red").value;
    var green = document.getElementById("green").value;
    var blue = document.getElementById("blue").value;
    // {background-color:rgb("red", "green", "blue");}
    var color = color:rgb((red), (green), (blue));
    // var color = 'rgb(123,255,123)';
    document.backgroundColor = color;

    // body.style.background = color
    alert("Color is " + color);