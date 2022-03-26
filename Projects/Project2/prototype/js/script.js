/**
Progress Report Cart 253 Final
Daniel Little

This is a progress report for my 2nd project for CART-263
it is the start of a program which will draw a scene and
animate that scene to go along with a song

The song is started by clicking on the canvas
*/

"use strict";
//creating an array to store the stars
let stars = [];
//creating a variable to store the star's speed
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
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mouseClicked(playOrPauseSong);
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
  displayStars();
  push();
  translate(0, height / 4.5);
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


function displayStars() {
  //stores amplitude data from different frequencies of song in variables
  levels = fft.analyze();
  ampLow = fft.getEnergy(100, 350);
  ampHigh = fft.getEnergy(700, 3000);
  //maps amplitude of low frequencies to different scale and stores it in speed variable
  speed = map(ampLow, -40, 300, -.8, 25);
  background(0);
  translate(width / 2, height / 2);
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
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
    let r = 80 + random(-20, 20);
    let g = 120 + random(-20, 20);
    let b = 40 + random(-20, 20);
    fill(r, g, b, 170);
    noStroke();

    //creates leaf shape
    beginShape();
    for (var i = 45; i < 135; i++) {
      let x = 13 * cos(i);
      let y = 13 * sin(i);
      vertex(x, y);
    }

    for (var i = 135; i > 45; i--) {
      let x = 13 * cos(i);
      let y = 13 * sin(-i) + 20;
      vertex(x, y);
    }
    endShape(CLOSE);
  }
  pop();
}
