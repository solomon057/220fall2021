var click = []; // start with empty list
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(50);
  noStroke();
  rectMode(CENTER);
  fill(255);
  for (var i = 0; i < click.length; i++) {
    fill(click[i][2]);
    rect(click[i][0], click[i][1], 50, 25);
    click[i][1] += 1;
  }
}
function mousePressed() {
    click.push([mouseX, mouseY, random(255)]);
}