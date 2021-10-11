var Ball_X = Math.floor(Math.random() * 300) + 50;
var Ball_Y = 50;
var diameter = 50;
var Ball_XMove = 5;
var Ball_YMove = 5;

var xPaddle ;
var yPaddle ;
var paddleWidth = 100;
var paddleHeight = 25;

var started = false;
var score = 0;

function setup() {
createCanvas(windowWidth, windowHeight);
}
function draw() {
background(0,150,255);
   Ball_X += Ball_XMove;
   Ball_Y += Ball_YMove;
   if (Ball_X < diameter/2 ||
Ball_X > windowWidth - 0.5*diameter) {
       Ball_XMove *= -1;
}
   if (Ball_Y < diameter/2 ||
Ball_Y > windowHeight - diameter) {
Ball_YMove *= -1;
   }
  
if ((Ball_X > xPaddle &&
Ball_X < xPaddle + paddleWidth) &&
(Ball_Y + (diameter/2) >= yPaddle)) {
Ball_XMove *= -1;
Ball_YMove *= -1;
score++;
}
   fill(255, 255, 0);
   noStroke();
   ellipse(Ball_X, Ball_Y, diameter, diameter);
  
if (!started) {
xPaddle = windowWidth / 2;
yPaddle = windowHeight - 100;
started = true;
}
  
fill(0, 255, 255);
noStroke();
rect(xPaddle, yPaddle, paddleWidth, paddleHeight);

  
fill(0, 255, 255);
textSize(24);
   text("Score Board: " + score, 10, 25);
}
function keyPressed() {
if (keyCode === LEFT_ARROW) {
xPaddle -= 50;
} else if (keyCode === RIGHT_ARROW) {
xPaddle += 50;
}
}