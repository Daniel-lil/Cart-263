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
let scl = 35;
let w = 2800;
let h = 1000;

let waveSpeed = 0;

let terrain = [];

let backgroundColour;

let terrainSpike;

//creating an array to store the stars
let stars = [];
//creating a letiable to store the star's speed
let starSpeed;
//creating variables for various parts of the song
let bass, guitar, drums, vox;

//creating variables to use for the song's amplitude analysis
let guitarAmp, guitarLevel;
let bassAmp, bassLevel;
let voxAmp, voxLevel;
let drumsAmp, drumsLevel;

/**
Loads music from assets and stores it in song variable
*/
function preload() {
  bass = loadSound(`assets/sounds/Bass.mp3`);
  guitar = loadSound(`assets/sounds/Guitar.mp3`);
  drums = loadSound(`assets/sounds/Drums.mp3`);
  vox = loadSound(`assets/sounds/Vox.mp3`);
}

function setup() {

  //creates a canvas and toggles song if canvas is clicked
  let cnv = createCanvas(windowWidth, windowHeight, WEBGL);
  cnv.mouseClicked(playOrPauseSong);

  guitarAmp = new p5.Amplitude();
  bassAmp = new p5.Amplitude();
  voxAmp = new p5.Amplitude();
  drumsAmp = new p5.Amplitude();

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
  //creates 500 stars and stores them in array
  for (let i = 0; i < 1000; i++) {
    stars[i] = new Star();
  }
}

//calls functions to display the stars and the tree
function draw() {
  displayBackground();

  displayStars();

  displayTerrain();

  branch(100);

}

//pauses + plays song + sets fft input to the song
function playOrPauseSong() {
  if (bass.isPlaying() && guitar.isPlaying() && drums.isPlaying() && vox.isPlaying()) {
    bass.pause();
    guitar.pause();
    drums.pause();
    vox.pause();
  } else {
    bass.loop();
    guitar.loop();
    drums.loop();
    vox.loop();
    voxAmp = new p5.Amplitude;
    voxAmp.setInput(vox);
    drumsAmp = new p5.Amplitude;
    drumsAmp.setInput(drums);
    bassAmp = new p5.Amplitude;
    bassAmp.setInput(bass);
    guitarAmp = new p5.Amplitude;
    guitarAmp.setInput(guitar);
  }
}

function displayBackground(){
voxLevel = voxAmp.getLevel();
backgroundColour = map(voxLevel, 0, 1, 0, 255);
background(backgroundColour, backgroundColour/150, backgroundColour);
}

function displayTerrain() {
  push();
  drumsLevel = drumsAmp.getLevel();
  terrainSpike = map(drumsLevel, 0, 1, 0, 8);

  waveSpeed -= 0.06;
let yoff = waveSpeed;
for (let y = 0; y < rows; y++) {
  let xoff = 0;
  for (let x = 0; x < cols; x++) {
    terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100 * terrainSpike, 100 * terrainSpike);
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
pop();
}

function displayStars() {
  push();
  //stores amplitude data from different frequencies of song in variables
  guitarLevel = guitarAmp.getLevel();
  //maps amplitude of low frequencies to different scale and stores it in speed variable
  starSpeed = map(guitarLevel, 0, 1, .2, 40);
  //translate(width / 2, height / 2);
  for (let i = 0; i < stars.length; i++) {
    stars[i].updateStar();
    stars[i].showStar();
  }
  pop();
}

function branch(len) {
  push();
translate(0,0,-5);
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
