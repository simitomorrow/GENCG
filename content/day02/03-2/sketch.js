let canvas
let gridXAmount = 20
let gridYAmount = 20
let tileWidth
let tileHeight
let color1
let color2

function setup() {
  createCanvas(800, 800);
  tileWidth = height / gridXAmount
  tileHeight = width / gridYAmount
  colorMode(HSB, 360, 100, 100, 100);
  color1 = color(0, 0, 0, 100);
  color2 = color(323, 100, 77, 100);
  color3 = color(32, 100, 77, 100);
  color4 = color(223, 100, 77, 100);
  frameRate(10)
  noLoop()
}

function draw() {
  background(0, 0, 95, 100)
  strokeWeight(5)
  for (let i = 0; i < gridXAmount; i++) {
    for (let j = 0; j < gridYAmount; j++) {
      form2(tileWidth * (i), tileHeight * (j))
    }
  }
}

function form1(x, y) {
  let amount = random(1, 5)
  if (amount < 2) {
    stroke(color2)
  } else if (amount > 4) {
    stroke(color3)
  } else {
    stroke(color1)
  }
  for (let i = 0; i < amount; i++) {
    line(x + tileWidth / (amount + 1) * i, y, x + tileWidth / (amount + 1) * (i + 1), y + tileHeight)
  }
}

function form2(x, y) {
  let size = random(0.8, 2)
  if (size < 1) {
    stroke(color2)
    fill(color2)
  } else if (size > 1.5) {
    stroke(color3)
    fill(color3)
  } else {
    stroke(color1)
    fill(color1)
  }
  ellipse(x + tileWidth / 2, y + tileHeight / 2, tileWidth / size, tileHeight / size)
}