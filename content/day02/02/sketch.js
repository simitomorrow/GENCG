let canvas
let gridXAmount = 20
let gridYAmount = 20
let tileWidth
let tileHeight

function setup() {
  createCanvas(800, 800);
  tileWidth = height/gridYAmount
  tileHeight = width/gridXAmount
  frameRate(10)
  // noLoop()
}

function draw() {
  background(100, 100, 100, 250)
  strokeWeight(5)
  radius = 150/(mouseX+350)*width
  console.log(mouseX)
  for (let i = 0; i < gridYAmount; i++) {
    for (let j = 0; j < gridXAmount; j++) {
      circle(tileHeight*(j+0.5), tileWidth*(i+0.5), random(radius))
    }
  }
}
