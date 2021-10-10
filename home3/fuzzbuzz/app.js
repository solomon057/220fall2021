
function setup() {
    createCanvas(500,500);
    ellipseMode(CENTER);
    }
    
    function draw() {
      background(255,0,255);
      var y = 100;
      // 25 black squares
      for (let x = 0; x < 1250; x += 50) {
        fill(0);
        ellipse(x, y, 50, 50);
        // sets the purple circle
        if (x % 3 === 0) {
          fill(153, 31, 240);
          ellipse(x, y, 50, 50);
        }
        // sets the green squares should be on top
        if (x % 5 === 0) {
          fill(0, 255, 0);
          square(x + 25, y - 25, 50);
        }
        // sets the last blue square
        // issue is the is supposed to be only one at the 15 mark
        if (x % 3 == 0 && x % 5 == 0) {
          fill(0, 0, 255);
          square(x + 25, y - 25, 50);
        }
      }
    }