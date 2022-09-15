let canvas, polySynth;
const gridXAmount = 16
const gridYAmount = 16
let tileWidth
let tileHeight
let pixels = []
const vol = 0.5;

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
      if(i == 5 && j == 9){
        pixels.push(new SoundPixel(i, j, j * gridXAmount + i, true))
      } else {
        pixels.push(new SoundPixel(i, j, j * gridXAmount + i, false))
      }
    }
  }
}

let play = false
function drawPixels() {
  pixels.forEach(pixel => {
    fill(pixel.active ? 0 : 255)
    rect(pixel.x*tileWidth, pixel.y*tileHeight, tileWidth, tileHeight)
    if(pixel.active && play) {
      polySynth.noteAttack(pixel.pitch, vol)
    } else {
      polySynth.noteRelease(pixel.pitch)
    }
  })
  
}

function mousePressed() {
  userStartAudio();
  play = !play
}