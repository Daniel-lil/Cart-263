/**
Progress Report Cart 253 Final
Daniel Little

This is a progress report for my 2nd project for CART-263
it is the start of a program which will draw a scene and
animate that scene to go along with a song

The song is started by clicking on the canvas
*/

"use strict";

let cols, rows;
let scl = 20;
let w = 1600;
let h = 1000;

let flying = 0;

let terrain = [];

//creating an array to store the stars
let stars = [];
//creating a letiable to store the star's speed
let speed;
//creating for the song (currently just a placeholder)
let song;
//creating variables to use for the song's fft analysis
let fft;
let levels;
let ampLow;
let ampHigh;

/**
Loads music from assets and stores it in song variable
*/
function preload() {
  song = loadSound(`assets/sounds/song.mp3`);
}

function setup() {

  //creates a canvas and toggles song if canvas is clicked
  let cnv = createCanvas(windowWidth, windowHeight, WEBGL);
  cnv.mouseClicked(playOrPauseSong);

  cols = w / scl;
rows = h / scl;

for (let x = 0; x < cols; x++) {
  terrain[x] = [];
  for (let y = 0; y < rows; y++) {
    terrain[x][y] = 0; //specify a default value for now
  }
}

  //changes anglemoode from degrees to radians
  angleMode(DEGREES);
  //storing fft in fft variable
  fft = new p5.FFT(.9);
  //creates 500 stars and stores them in array
  for (let i = 0; i < 1000; i++) {
    stars[i] = new Star();
  }
}

//calls functions to display the stars and the tree
function draw() {
    background(0);
  push();
  displayStars();
  pop();
  push();
  displayTerrain();
  pop();
  push();
  translate(0, height /15);
  branch(100);
  pop();
}

//pauses + plays song + sets fft input to the song
function playOrPauseSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.loop();
    fft = new p5.FFT(.9);
    fft.setInput(song);
  }
}

function displayTerrain() {
  flying -= 0.06;
let yoff = flying;
for (let y = 0; y < rows; y++) {
  let xoff = 0;
  for (let x = 0; x < cols; x++) {
    terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
    xoff += 0.2;
  }
  yoff += 0.2;
}

translate(0, 75);
rotateX(65);
fill(39, 89, 105);
stroke(23, 62, 75);
translate(-w / 2, -h / 2);
for (let y = 0; y < rows - 1; y++) {


  beginShape(TRIANGLE_STRIP);
  for (let x = 0; x < cols; x++) {
    vertex(x * scl, y * scl, terrain[x][y]);
    vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
  }
  endShape();
}
}

function displayStars() {
  //stores amplitude data from different frequencies of song in variables
  levels = fft.analyze();
  ampLow = fft.getEnergy(100, 350);
  ampHigh = fft.getEnergy(700, 3000);
  //maps amplitude of low frequencies to different scale and stores it in speed variable
  speed = map(ampLow, -40, 300, .2, 10);
  //translate(width / 2, height / 2);
  for (let i = 0; i < stars.length; i++) {
    stars[i].updateStar();
    stars[i].showStar();
  }
}

function branch(len) {
  push();
  //creates branches
  if (len > 10) {
    strokeWeight(map(len, 10, 100, 1, 15));
    stroke(70, 40, 20);
    line(0, 0, 0, -len);
    translate(0, -len);
    rotate(-22);
    branch(len * 0.78);
    rotate(52);
    branch(len * 0.8);
    // sets leaf colour
  } else {
    let r = 20 + random(-20, 20);
    let g = 100 + random(-20, 20);
    let b = 40 + random(-20, 20);
    fill(r, g, b, 220);
    noStroke();

    //creates leaf shape
    beginShape();
    for (let i = 45; i < 135; i++) {
      let x = 13 * cos(i);
      let y = 13 * sin(i);
      vertex(x, y);
    }

    for (let i = 135; i > 45; i--) {
      let x = 13 * cos(i);
      let y = 13 * sin(-i) + 20;
      vertex(x, y);
    }
    endShape(CLOSE);
  }
  pop();
}
