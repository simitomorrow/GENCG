let canvas, polySynth;
const gridXAmount = 16
const gridYAmount = 16
let tileWidth
let tileHeight
let pixels = []
let heldNotes = []
const vol = 0.5;
const dur = 3600;

class SoundPixel {
  constructor(x, y, pitch, active) {
    this.x = x
    this.y = y
    this.pitch = pitch
    this.active = active
  }
}

function setup() {
  createCanvas(800, 800)
  tileWidth = height / gridYAmount
  tileHeight = width / gridXAmount
  polySynth = new p5.PolySynth()
  background(240)
  stroke(50)
  strokeWeight(5)
  initPixels()
}

function draw() {
  drawPixels()
}

function initPixels() {
  for (let i = 0; i < gridXAmount; i++) {
    for (let j = 0; j < gridYAmount; j++) {
      pixels.push(new SoundPixel(i, j, j * gridXAmount + i + 90, false))
    }
  }
}

function drawPixels() {
  pixels.forEach(pixel => {
    fill(pixel.active ? 0 : 255)
    rect(pixel.x * tileWidth, pixel.y * tileHeight, tileWidth, tileHeight)
  })
}

function mousePressed() {
  userStartAudio();
  x = int(mouseX / tileWidth)
  y = int(mouseY / tileHeight)
  pixels.forEach(pixel => {
    if (pixel.x === x && pixel.y === y) {
      if (!pixel.active) {
        heldNotes.push(pixel.pitch)
        polySynth.noteAttack(pixel.pitch, vol, 0, dur)
      } else {
        polySynth.noteRelease(pixel.pitch)
      }
      pixel.active = !pixel.active
    }
  })
  console.log(x, y)
}