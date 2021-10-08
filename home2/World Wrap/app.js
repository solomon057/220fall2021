var circleX; //current x position of the circle
var radius=30; //radius of the circle

function setup() {
  //creating a 800x600 canvas
  createCanvas(800,600);
  //assigning 0 as x coordinate of the circle
  circleX=0;
  //using red as fill color
  fill(0,255,255);
}


function draw() {
  //using a gray-ish background
  background(200);
  //drawing a circle at x=circleX, y=height/2 (middle) and with diameter=radius*2
  circle(circleX, height/2, radius*2);
  //adding 5 to the x value of circle and if it reaches width (800), wrapping
  //around from 0. so that circle will appear on far left when it reaches far right
  circleX=(circleX+5)%width;
}