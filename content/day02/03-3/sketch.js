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
  color2 = color(323, 100, 77, 70);
  color3 = color(32, 100, 77, 70);
  color4 = color(223, 100, 77, 100);
  frameRate(10)
  noLoop()
}

function draw() {
  background(0, 0, 95, 100)
  strokeWeight(5)
  for (let i = 0; i < gridXAmount; i++) {
    for (let j = 0; j < gridYAmount; j++) {
      formRoulette(tileWidth * (i), tileHeight * (j))
    }
  }
}

function formRoulette(x, y) {
  let chance1 = 0.5
  let chance2 = 3
  let chance3 = 8
  let totalchance = 10
  let take = random(0, totalchance)
  if (take <= chance1) {
    let offsetX = random(tileWidth/3)
    let offsetY = random(tileHeight/3)
    form1(x+offsetX, y+offsetY);
    offsetX = random(tileWidth/3)
    offsetY = random(tileHeight/3)
    form2(x+offsetX, y+offsetY);
  } else if (take > chance1 && take <= chance2) {

  } else if (take > chance2 && take <= chance3) {
    form1(x, y)
  } else if (take > chance3 && take <= totalchance) {
    form2(x, y)
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