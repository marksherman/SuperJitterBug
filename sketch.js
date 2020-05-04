function makeBug(x, y) {
  let newx = width / 2;
  let newy = height / 2;
  if (x !== undefined) {
    newx = x;
  }
  if (y !== undefined) {
    newy = y;
  }
  var bug = {
    speed: 5,
    x: newx,
    y: newy,
    color: makeColor(),
    move: function() {
      this.x += random(-this.speed, this.speed);
      this.y += random(-this.speed, this.speed);
      fill(this.color);
      ellipse(this.x, this.y, 5);
    }
  }
  
  return bug;
}

var bugs = [];

function setup() {
  createCanvas(400, 400);
  background(220);

  noStroke();
 
}

function draw() {
  for(var i = 0; i < bugs.length; i++){
    bugs[i].move();
  }
}

function mouseClicked () {
  bugs.push(makeBug(mouseX, mouseY));
}

// generates a random color
function makeColor() {
  return color(random(0, 255), random(0, 255), random(0, 255));
}