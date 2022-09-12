let canvas
let t = 0
const timerSpeed = 0.1
let delay = 0.5
let topball, topX1, topX2
let balls = []
let y1, y2, y3
const size1 = 50
const size2 = 12
const size3 = 30
const speed1 = 5
const speed2 = -7
const speed3 = 25
const leftEdge = -1000
const rightEdge = 1000
let topBallLimitLeft, topBallLimitRight
const ball1Amount = 10
const ball2Amount = 10

class ball {
  constructor(x, y, size, speed, color){ 
    this.x = x
    this.y = y
    this.size = size
    this.speed = speed
    this.color = color
  }
}

function setup() {
  createCanvas(800, 800)
  colorMode(HSB, 360, 100, 100, 100)
  color0 = color(0, 0, 100, 100)
  color1 = color(0, 0, 0, 100)
  color2 = color(323, 100, 77, 70)
  color3 = color(32, 100, 77, 70)
  color4 = color(123, 100, 77, 30)
  y1 = height/7
  y2 = height/7*5
  y3 = height/7*6
  topBallLimitLeft = width/3
  topBallLimitRight = width/3*2
  frameRate(60)
  initBalls()
  // noLoop()
}

function draw() {
  background(0, 0, 0, 100)
  strokeWeight(3)
  fill(color1)
  balls.forEach(ball => {
    stroke(ball.color)
    circle(getBallX(ball, t), ball.y, ball.size)
  })
  timer()
}

function timer(){
  t += timerSpeed
}

function initBalls() {
  topball = new ball(random(topBallLimitLeft, topBallLimitRight), y1, size1, speed1, color1)
  let w = rightEdge - leftEdge
  for (let i = 0; i < ball2Amount; i++) {
    balls.push(new ball(w/ball1Amount*i+leftEdge, y2, size2, speed2, color0))
  }
  for (let i = 0; i < ball1Amount; i++) {
    balls.push(new ball(w/ball1Amount*i+leftEdge, y3, size3, speed3, color0))
  }
}

function getBallX(ball, t) {
  let x = ball.x + (ball.speed * t);
  if (x > rightEdge && ball.speed > 0) {
    x -= (rightEdge - leftEdge)
    ball.x = x
  } else if (x < leftEdge && ball.speed < 0){
    console.log("yes")
    x += (rightEdge - leftEdge)
    ball.x = x
  }
  return x
}


// let t = 1*(frameCount - 1)/100;
// let m = 1000;
// let delay = random(1,1.5);
// for(let i=0;i<=m;i++){
//   let tt = 1*i/m;
//   let x = lerp(x1(t - delay*tt),x2(t - delay*(1-tt)),tt);
//   let y = lerp(y1(t - delay*tt),y2(t - delay*(1-tt)),tt);
//   point(x,y);
// }
// function x1(t){
//   return 0.25*width + 50*cos(TWO_PI*t);
// }
// function y1(t){
//   return 0.5*height + 50*sin(TWO_PI*t);
// }

// function x2(t){
//   return 0.75*width + 50*cos(2*TWO_PI*t);
// }
// function y2(t){
//   return 0.5*height + 50*sin(2*TWO_PI*t);
// }

