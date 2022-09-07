let canvas
let gridXAmount = 20
let gridYAmount = 20
let tileWidth, tileHeight
let color1, color2, color3, color4
let a, b, trans1, trans2
let ta1 = 0
let ta2 = 1
let taWait = 1

function setup() {
  angleMode(DEGREES)
  rectMode(CORNERS)
  createCanvas(800, 800)
  tileWidth = height / gridXAmount
  tileHeight = width / gridYAmount
  colorMode(HSB, 360, 100, 100, 100)
  color1 = color(0, 0, 0, 100)
  color2 = color(323, 100, 77, 70)
  color3 = color(32, 100, 77, 70)
  color4 = color(123, 100, 77, 30)
  frameRate(60)
  a = tileWidth/4
  b = tileHeight/2
  trans1 = a / 2
  trans2 = b - a / 2
  noLoop()
}

function draw() {
  background(0, 0, 95, 100)
  strokeWeight(10)
  a1x = 50
  a1y = 50
  b1x = a1x + a
  b1y = a1y + b
  let start = 100
  let end = 300
  point(easymoney(ta1, start, end, ta2), start)
  for (let i = 0; i < gridXAmount; i++) {
    for (let j = 0; j < gridYAmount; j++) {
      mazeTile(tileWidth * (i+0.5), tileHeight * (j+0.5))
    }
  }

  ta1 += 0.01
  ta1 = ta1 > 1 ? 0 : ta1;
}

mazeTile(x, y) {
  let randomtimer = 
  for (let i = 0; i < 4; i++) {
    if (random(1) > 0.5) {
      rect(
        easymoney(ta1, a1x, A12X, ta2),
        easymoney(ta1, a1y, A12Y, ta2),
        easymoney(ta1, b1x, B12X, ta2),
        easymoney(ta1, b1y, B12Y, ta2),
      )
    }
  }
}

// https://spicyyoghurt.com/tools/easing-functions
function easymoney(t, b, c, d) {
  var s = 1.70158;
  var p = 0;
  var a = c;
  if (t == 0) return b;
  if ((t /= d / 2) == 2) return b + c;
  if (!p) p = d * (.3 * 1.5);
  if (a < Math.abs(c)) {
    a = c;
    var s = p / 4;
  }
  else var s = p / (2 * Math.PI) * Math.asin(c / a);
  if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
  return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;

  // if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
  // return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
}