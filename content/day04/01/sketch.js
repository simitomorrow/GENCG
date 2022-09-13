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
  let t = 1 * (frameCount - 1) / 100;
  let m = 1000;
  let delay = 1.5;
  circle(x1(t), y1(t), 30)
  circle(x2(t), y2(t), 30)
  strokeWeight(1)
  for (let i = 0; i <= m; i++) {
    let tt = 1 * i / m;
    let x = lerp(x1(t - delay * tt), x2(t - delay * (1 - tt)), tt);
    let y = lerp(y1(t - delay * tt), y2(t - delay * (1 - tt)), tt);
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



