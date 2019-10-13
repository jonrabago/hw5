function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (var i = 10; i <= 390; i = i + 10) {
    var startX = i;
    var startY = 0;
    var endX = i;
    var endY = 400;
    line(startX, startY, endX, endY);
  }
}
