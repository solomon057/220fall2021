// variables to store rgb value
let red = 0, green = 0, blue = 0;
// wrting initial rgb value inside a span tag with id rgb_value
document.getElementById("rgb_value").innerHTML = `${red},${green},${blue}`;

// defining function red_1 for red +1 button
function Red_1(){
    // incrementing value of red by 1
    red += 1;
    // setting style backgroundColor to new rgb value
    document.getElementById("color_Mix").style.backgroundColor = "rgb("+red+","+green+","+blue+")";
    // writing new rgb value
    document.getElementById("rgb_value").innerHTML = `${red},${green},${blue}`;
}

// similarly defining function for remaining 2 buttons of red
function Red_5(){
    red += 5;
    document.getElementById("color_Mix").style.backgroundColor = "rgb("+red+","+green+","+blue+")";
    document.getElementById("rgb_value").innerHTML = `${red},${green},${blue}`;
}
function Red_10(){
    red += 10;
    document.getElementById("color_Mix").style.backgroundColor = "rgb("+red+","+green+","+blue+")";
    document.getElementById("rgb_value").innerHTML = `${red},${green},${blue}`;
}
// defining functions for green buttons similar to red
function Green_1(){
    green +=1;
    document.getElementById("color_Mix").style.backgroundColor = "rgb("+red+","+green+","+blue+")";
    document.getElementById("rgb_value").innerHTML = `${red},${green},${blue}`;
}
function Green_5(){
    green +=5;
    document.getElementById("color_Mix").style.backgroundColor = "rgb("+red+","+green+","+blue+")";
    document.getElementById("rgb_value").innerHTML = `${red},${green},${blue}`;
}
function Green_10(){
    green +=10;
    document.getElementById("color_Mix").style.backgroundColor = "rgb("+red+","+green+","+blue+")";
    document.getElementById("rgb_value").innerHTML = `${red},${green},${blue}`;
}
// defining functions for blue buttons similarly
function Blue_1(){
    blue +=1;
    document.getElementById("color_Mix").style.backgroundColor = "rgb("+red+","+green+","+blue+")";
    document.getElementById("rgb_value").innerHTML = `${red},${green},${blue}`;
}
function Blue_5(){
    blue +=5;
    document.getElementById("color_Mix").style.backgroundColor = "rgb("+red+","+green+","+blue+")";
    document.getElementById("rgb_value").innerHTML = `${red},${green},${blue}`;
}
function Blue_10(){
    blue +=10;
    document.getElementById("color_Mix").style.backgroundColor = "rgb("+red+","+green+","+blue+")";
    document.getElementById("rgb_value").innerHTML = `${red},${green},${blue}`;
}