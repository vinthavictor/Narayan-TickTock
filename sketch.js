var hr, mn, sc;
var scAngle, mnAngle, hrAngle;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background(0);  
  
  hr = hour();
  mn = minute();
  sc = second();

  translate(200, 200);
  rotate(-90)

  stroke("blue");
  strokeWeight(8);
  noFill();

  var scAngle = map(sc, 0, 60, 0, 360)
  arc(0, 0, 300, 300, 0, scAngle)

  stroke("green");
  var mnAngle = map(mn, 0, 60, 0, 360)
  arc(0, 0, 280, 280, 0, mnAngle)

  stroke("red");
  var hrAngle = map(hr % 12, 0, 12, 0, 360)
  arc(0, 0, 260, 260, 0, hrAngle)

  push();
  rotate(scAngle);
  stroke("blue");
  line(0, 0, 115, 0);
  pop();

  push();
  rotate(mnAngle);
  stroke("green");
  line(0, 0, 95, 0);
  pop();

  push();
  rotate(hrAngle);
  stroke("red");
  line(0, 0, 70, 0);
  pop();

  stroke(225);
  point(0, 0);

}