function setup() {
    //using 400x400 canvas size
    createCanvas(500, 500);
  //   //draw method will be executed only once.
    noLoop();
  }
  
  function draw() {
    //using some gray-ish background
    background(255);
    //taking width as initial diameter
    var diameter=width;
    //looping as long as diameter is 10 or above
    while(diameter>=10){
      //drawing a circle centered at center of the window, with above diameter
      circle(width/2, height/2, diameter);
      //subtracting 10 from diameter.
      diameter-=10;
    }
  }