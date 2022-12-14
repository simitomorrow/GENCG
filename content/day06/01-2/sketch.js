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
  initMouthRange()
  eyeSizeX = width/14
  eyeSizeY = height/14
  eyeRadius = height/40
  mouthRadius = height/100
  maxDistance = sqrt((width/10*4)**2 + (height/10*5)**2)
  osc = new p5.Oscillator('sine');
  osc.start();
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
    leftEye()
    rightEye()
    mouth()
  } else {
    osc.amp(0, 0.5);
    rect(width/10*4, height/10*5, eyeSizeX, eyeSizeY)
    rect(width/10*6, height/10*5, eyeSizeX, eyeSizeY)
    rect(width/2, height/10*6.5, width/40, height/40)
  }
}

function leftEye(){
  let xCenter = width/10*4 
  let yCenter = height/10*5
  rect(xCenter, yCenter, eyeSizeX, eyeSizeY)
}

function rightEye(){
  let xCenter = width/10*6 
  let yCenter = height/10*5
  rect(xCenter, yCenter, eyeSizeX, eyeSizeY)
}

function mouth(){
  //ranges - width: 10 - 170, height: 10 - 10
  let xCenter = width/2 
  let yCenter = height/10*6.5
  let mouthWidth = map(osc.f, minFreq, maxFreq, mouthRange.xMin, mouthRange.xMax)
  let mouthHeight = map(osc.getAmp(), minAmp, maxAmp, mouthRange.yMin, mouthRange.yMax)
  rect(xCenter, yCenter, mouthWidth, mouthHeight)
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

function initMouthRange() {
  mouthRange = {
    xMin: width/80,
    xMax: width/80*17,
    yMin: width/80,
    yMax: width/8
  }
}