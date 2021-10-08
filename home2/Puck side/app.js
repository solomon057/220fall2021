function setup() {
    createCanvas(400, 300);
    }
    
    var diameter = 20;
    
    function draw() {
    background("yellow");
      
    if(mouseX>200)
    {
    fill("red");
    circle(mouseX,mouseY,diameter);
    }
    else
    {
    fill("blue");
    circle(mouseX,mouseY,diameter);
    }
    }