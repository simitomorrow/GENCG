let canvas
let gridXAmount = 20
let gridYAmount = 20
let tileWidth
let tileHeight
let color1
let color2

function setup() {
  createCanvas(800, 800);
  tileWidth = height/gridYAmount
  tileHeight = width/gridXAmount
  colorMode(HSB, 360, 100, 100, 100);
  color1 = color(0, 0, 0, 100);
  color2 = color(323, 100, 77, 100);
  color3 = color(123, 100, 100, 100);
  color4 = color(223, 100, 100, 100);
  frameRate(10)
  noLoop()
}

function draw() {
  background(0, 0, 95, 100)
  strokeWeight(5)
  for (let i = 0; i < gridXAmount; i++) {
    for (let j = 0; j < gridYAmount; j++) {
      form1(tileHeight*(j), tileWidth*(i))
    }
  }
}

function form1(x, y) {
  let amount = random(1,5)
  for (let i = 0; i < amount; i++) {
    line(x+tileWidth/(amount+1)*i, y, x+tileWidth/(amount+1)*(i+1), y+tileHeight)
  }
}