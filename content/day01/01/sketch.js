let canvas;
let points = [];
const pointAmount = 30;
const minSpeed = 1;
const maxSpeed = 2;
const dotWeight = 12;
const lineWeight = 0.11;

// Default P5 setup function
function setup() {
    colorMode(HSB, 100);
    createCanvas(800, 800);
    stroke(255);
    frameRate(60);
    for (let i = 0; i < pointAmount; i++) {
        let p = [];
        p.push(random(width));  //x
        p.push(random(height)); //y
        p.push(random(-1, 1));   //x-speed
        p.push(random(-1, 1));   //y-speed
        p.push(random(minSpeed, maxSpeed));  //speed factor   
        points.push(p);
    }
}

// Default P5 draw loop function 
let loop = 0
let loopBack = 1
function draw() {
    background(0,70+loop,60+loop);
    strokeWeight(dotWeight)
    points.forEach(p => {
        point(p[0], p[1]);
        if (!isInboundX(p[0])) {
            p[2] = -p[2];
        }
        if (!isInboundY(p[1])) {
            p[3] = -p[3];
        }
        p[0] += p[2] * p[4];
        p[1] += p[3] * p[4];
    });
    strokeWeight(lineWeight)
    for (let i = 0; i < pointAmount; i++) {
        for (let j = 0; j < pointAmount; j++) {
            stroke(0,0,100);
            line(points[i][0], points[i][1], points[j][0], points[j][1])
        }
    }
    loop += 0.3*loopBack
    if(loop > 20){
        loopBack = -loopBack;
    }
    if(loop < 0){
        loopBack = -loopBack;
    }
}

function isInboundX(x) {
    return x < width && x > 0;
}
function isInboundY(y) {
    return y < height && y > 0;
}
