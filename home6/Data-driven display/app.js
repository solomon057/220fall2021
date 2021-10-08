let objectXY;

function setup() {
    createCanvas (500,500);
    CreateGraphics (401,250);
    
}
function draw()
{
    fill(0,12);

    rect(0,0,width,height);

    fill(255);

    nostroke();

    ellipse(mousex,mousey,60,60);

    objectXY.nofill(mousex);

    objectXY.background(51);

    objectXY.stroke(255);

    objectXY.ellipse(mousex-150,mousey-150,60,60);
    image(object,150,75);
}