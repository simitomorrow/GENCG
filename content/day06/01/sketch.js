let canvas, osc;
let talking = false;
let eyeSizeX, eyeSizeY;
let mouthRange, eyeRadius;
let mx, my;
const minFreq = 50
const maxFreq = 2000
const minAmp = 0.02
const maxAmp = 1

function setup() {
  rectMode(CENTER);
  createCanvas(800, 800)
  startUp()
  colorMode(HSB, 360, 100, 100, 100)
  color0 = color(0, 0, 100, 100)
  color1 = color(0, 0, 0, 100)
  color2 = color(323, 100, 77, 70)
  color3 = color(32, 100, 77, 70)
  color4 = color(123, 100, 77, 30)
  eyeSizeX = width/14
  eyeSizeY = height/14
  eyeRadius = height/40
  osc = new p5.Oscillator('sine');
  osc.start();
  // noLoop()
}

function draw() {
  mx = constrain(mouseX, 0, width)
  my = constrain(mouseY, 0, height)
  background(0, 0, 0, 100)
  freq = constrain(map(mouseX, 0, width, minFreq, maxFreq), minFreq, maxFreq);
  amp = constrain(map(mouseY, height, 0, minAmp, maxAmp), minAmp, maxAmp);
  
  if(talking){
    osc.freq(freq, 0);
    osc.amp(amp, 0);
  } else {
    osc.amp(0, 0.5);
  }
  rect(width/10*4, height/10*4, eyeSizeX, eyeSizeY)
  rect(width/10*6, height/10*4, eyeSizeX, eyeSizeY)
  rect(width/2, height/10*6, width/8, height/20)
}

function startUp() {
  userStartAudio();
}

function mousePressed() {
  talking = true
}

function mouseReleased() {
  talking = false;
}