let canvas

function setup() {
  createCanvas(800, 800)
  colorMode(HSB, 360, 100, 100, 100)
  color0 = color(0, 0, 100, 100)
  color1 = color(0, 0, 0, 100)
  color2 = color(323, 100, 77, 70)
  color3 = color(32, 100, 77, 70)
  color4 = color(123, 100, 77, 30)
  frameRate(60)
  // noLoop()
}

function draw() {
  background(0, 0, 0, 100)
  strokeWeight(3)
  fill(color1)
  stroke(color0)
  circle(x1(timer), y1(timer), 30)
  circle(x2(timer), y2(timer), 30)
  strokeWeight(1)
  let timer = 1 * (frameCount - 1) / 100;
  let detail = 1000;
  let delay = 0;
  for (let i = 0; i <= detail; i++) {
    let deltaT = 1 * i / detail;
    let x = lerp(x1(timer - delay * deltaT), x2(timer - delay * (1 - deltaT)), deltaT);
    let y = lerp(y1(timer - delay * deltaT), y2(timer - delay * (1 - deltaT)), deltaT);
    point(x, y);
  }
}


function x1(t) {
  return 0.25 * width + 50 * cos(TWO_PI * t);
}
function y1(t) {
  return 0.5 * height + 50 * sin(TWO_PI * t);
}

function x2(t) {
  return 0.75 * width + 50 * cos(2 * TWO_PI * t);
}
function y2(t) {
  return 0.5 * height + 50 * sin(2 * TWO_PI * t);
}



