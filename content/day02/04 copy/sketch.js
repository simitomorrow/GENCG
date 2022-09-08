let canvas
let gridXAmount = 15
let gridYAmount = 15
let tileWidth, tileHeight
let color1, color2, color3, color4
let a, b, trans1, trans2
let mazeTiles = []
let timers = [0, 0, 0]
const timerSpeeds = [0.03, 0.03, 0.03]
const timerWaits = [2, 4, 5]
let pattern1 = "0101"
let pattern2 = "0111"
let pattern3 = "1001"

class mazeTile {
  constructor(x, y, timer, color, doorString) {
    this.x = x;
    this.y = y;
    this.timer = timer;
    this.color = color;
    this.doorString = doorString;
  }
}

function setup() {
  angleMode(DEGREES)
  rectMode(CORNERS)
  createCanvas(1200, 1200)
  tileWidth = height / gridXAmount
  tileHeight = width / gridYAmount
  colorMode(HSB, 360, 100, 100, 100)
  color1 = color(0, 0, 0, 100)
  color2 = color(323, 100, 77, 70)
  color3 = color(32, 100, 77, 70)
  color4 = color(123, 100, 77, 30)
  frameRate(60)
  a = tileWidth / 4
  b = tileHeight / 2
  trans1 = a / 2
  trans2 = b - a / 2
  createInitialGrid()
  // noLoop()
}

function draw() {
  background(0, 0, 95, 100)
  strokeWeight(0)
  a1x = 50
  a1y = 50
  b1x = a1x + a
  b1y = a1y + b
  mazeTiles.forEach(tile => {
    drawMazeTile(tile)
  })
  timerCheck()
}

function drawMazeTile(tile) {
  for (let i = 0; i < 4; i++) {
    fill(tile.color)
    if (i == 0 && tile.doorString.charAt(i) == 1) {
      let topLeftX = tileWidth * (tile.x + 0.5) - a / 2
      let topLeftY = tileHeight * (tile.y)
      let bottomRightX = tileWidth * (tile.x + 0.5) + a / 2
      let bottomRightY = tileHeight * (tile.y + 0.5)
      rectTransform(topLeftX, topLeftY, bottomRightX, bottomRightY, 0, tile.timer)
    }
    if (i == 1 && tile.doorString.charAt(i) == 1) {
      let topLeftX = tileWidth * (tile.x + 0.5)
      let topLeftY = tileHeight * (tile.y + 0.5) - a / 2
      let bottomRightX = tileWidth * (tile.x + 1)
      let bottomRightY = tileHeight * (tile.y + 0.5) + a / 2
      rectTransform(topLeftX, topLeftY, bottomRightX, bottomRightY, 1, tile.timer)
    }
    if (i == 2 && tile.doorString.charAt(i) == 1) {
      let topLeftX = tileWidth * (tile.x + 0.5) - a / 2
      let topLeftY = tileHeight * (tile.y + 0.5)
      let bottomRightX = tileWidth * (tile.x + 0.5) + a / 2
      let bottomRightY = tileHeight * (tile.y + 1)
      rectTransform(topLeftX, topLeftY, bottomRightX, bottomRightY, 2, tile.timer)
    }
    if (i == 3 && tile.doorString.charAt(i) == 1) {
      let topLeftX = tileWidth * (tile.x)
      let topLeftY = tileHeight * (tile.y + 0.5) - a / 2
      let bottomRightX = tileWidth * (tile.x + 0.5)
      let bottomRightY = tileHeight * (tile.y + 0.5) + a / 2
      rectTransform(topLeftX, topLeftY, bottomRightX, bottomRightY, 3, tile.timer)
    }
  }
}

function rectTransform(x1, y1, x2, y2, orentation, timerNumber) {
  if (orentation === 0) {
    rect(
      easymoney(timers[timerNumber], x1, trans1, 1),
      easymoney(timers[timerNumber], y1, trans2, 1),
      easymoney(timers[timerNumber], x2, trans2, 1),
      easymoney(timers[timerNumber], y2, trans1, 1),
      5
    )
  }
  if (orentation === 1) {
    rect(
      easymoney(timers[timerNumber], x1, -trans1, 1),
      easymoney(timers[timerNumber], y1, trans1, 1),
      easymoney(timers[timerNumber], x2, -trans2, 1),
      easymoney(timers[timerNumber], y2, trans2, 1),
      5
    )
  }
  if (orentation === 2) {
    rect(
      easymoney(timers[timerNumber], x1, -trans2, 1),
      easymoney(timers[timerNumber], y1, -trans1, 1),
      easymoney(timers[timerNumber], x2, -trans1, 1),
      easymoney(timers[timerNumber], y2, -trans2, 1),
      5
    )
  }
  if (orentation === 3) {
    rect(
      easymoney(timers[timerNumber], x1, trans2, 1),
      easymoney(timers[timerNumber], y1, -trans2, 1),
      easymoney(timers[timerNumber], x2, trans1, 1),
      easymoney(timers[timerNumber], y2, -trans1, 1),
      5
    )
  }
}

function timerCheck() {
  for (let i = 0; i < timers.length; i++) {
    timers[i] += timerSpeeds[i]
    if (timers[i] > timerWaits[i]) {
      mazeTiles.forEach(tile => {
        if (tile.timer === i) {
          tile.doorString = tile.doorString.charAt(3) + tile.doorString.slice(0,3)
        }
      })
      timers[i] = 0
    }
  }
}

// https://spicyyoghurt.com/tools/easing-functions
function easymoney(t, b, c, d) {
  if (t > d) {
    return b+c
  }
  // var s = 1.70158;
  // var p = 0;
  // var a = c;
  // if (t == 0) return b;
  // if ((t /= d / 2) == 2) return b + c;
  // if (!p) p = d * (.3 * 1.5);
  // if (a < Math.abs(c)) {
  //   a = c;
  //   var s = p / 4;
  // }
  // else var s = p / (2 * Math.PI) * Math.asin(c / a);
  // if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
  // return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;

  if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
  return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;

  // //0.03 SPEEDS
  // return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
}

function createInitialGrid() {
  for (let i = 0; i < gridXAmount; i++) {
    for (let j = 0; j < gridYAmount; j++) {
      let timerChoice = int(random(0, timers.length))
      let randomString = ""
      for (let s = 0; s < 4; s++) {
        let rng = random(2)
        randomString += rng > 0.81 ? "1" : "0"
      }
      if (timerChoice === 0) {
        mazeTiles.push(new mazeTile(i, j, timerChoice, color1, pattern1))
      }
      if (timerChoice === 1) {
        mazeTiles.push(new mazeTile(i, j, timerChoice, color2, pattern2))
      }
      if (timerChoice === 2) {
        mazeTiles.push(new mazeTile(i, j, timerChoice, color3, pattern3))
      }
      if (timerChoice === 3) {
        mazeTiles.push(new mazeTile(i, j, timerChoice, color1, pattern1))
      }
    }
  }
}