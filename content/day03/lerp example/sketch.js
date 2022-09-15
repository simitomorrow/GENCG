let canvas
let timer = 0
let timerSpeed = 0.01
let timerWait = 2

function setup() {
  rectMode(CORNERS)
  createCanvas(400, 400)
  frameRate(60)
  a = 100
  b = 200
  trans1 = a / 2
  trans2 = b - a / 2
}

function draw() {
  background(222, 222, 222)
  strokeWeight(0)
  fill(0)

  let topLeftX = width/5
  let topLeftY = height/5
  let bottomRightX = topLeftX + a
  let bottomRightY = topLeftY + b

  rect(
    easing(timer, topLeftX, trans1, 1),
    easing(timer, topLeftY, trans2, 1),
    easing(timer, bottomRightX, trans2, 1),
    easing(timer, bottomRightY, trans1, 1)
  )
  
  timer += timerSpeed
  timer = (timer > timerWait) ? 0 : timer
}


function timerCheck() {
}

// https://spicyyoghurt.com/tools/easing-functions
function easing(t, b, c, d) {
  if (t > d) {
    return b+c
  }
  if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
  return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
}