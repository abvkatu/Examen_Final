var points = [];
var mult = 0.005;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(30);
  stroke(0, 10);
  strokeWeight(1);
  angleMode(DEGREES);
  noiseDetail(2);

  ////////Varias la cantidad de rayas en la pantalla/////////
  var density = 100;
  var space = width / density;

  for (var x = 0; x < width; x += space) {
    for (var y = 0; y < height; y += space) {
      var p = createVector(x + random(-3, 3), y + random(-5, 5));
      points.push(p);
    }
  }
}

function draw() {
  // noStroke();

  for (var i = 0; i < points.length; i++) {
    /////////////Cambias el color del array//////////////////

    var r = map(points[i].x, 0, width, 50, 255);
    var g = map(points[i].y, 0, height, 100, 200);
    var b = map(points[i].x, 0, width, 250, 200);

    fill(r, g, b);

    //////////////////////////////////////////////////////////

    ////////Aqui modificas la direccion de las lineas //////////////
    var angle = map(
      noise(points[i].x * mult, points[i].y * mult),
      0,
      1,
      100,
      200
    );
    points[i].add(createVector(cos(angle), sin(angle)));

    ellipse(points[i].x, points[i].y, 1);
  }
}
