/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

//stores the user's webcam
let video = undefined;
//stores the handpose model
let handpose = undefined;
//stores the current set of predictions
let predictions = [];

/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
  createCanvas(950, 600);

  //access user's webcam
  video = createCapture(VIDEO);
  video.hide();

  //load the handpose model
  handpose = ml5.handpose(video, {
    flipHorizontal: true
  }, function() {
    console.log(`Model loaded.`);
  });

  //listen for predictions
  handpose.on(`predict`, function (results) {
    console.log(results);
    predictions = results;
  });
}

/**
Description of draw()
*/
function draw() {
  background(235);

    drawScene1();

    drawScrewdriver();

    drawHal();
}

function drawScene1(){
push();
rectMode(CENTER);
noFill();
stroke(0);
rect(width/2,height/1.5,702, 250);
pop();

push();
rectMode(CENTER);
fill(200,0,0);
noStroke();
rect(519, height/1.5,157.5, 236);
pop();

push();
rectMode(CENTER);
noFill();
stroke(200,0,0);
rect(241.5,height/1.6,225, 83);
pop();

push();
rectMode(CENTER);
noFill();
stroke(200,0,0);
rect(399,height/1.6,75, 83);
pop();

push();
rectMode(CENTER);
noFill();
stroke(200);
rect(519,height/1.6,150, 83);
pop();

push();
rectMode(CENTER);
noFill();
stroke(200,0,0);
rect(711,height/1.6,220, 83);
pop();
}

function drawHal(){}

function drawScrewdriver() {
if (predictions.length > 0) {
  let hand = predictions[0];
  let index = hand.annotations.indexFinger;
  let tip = index[3];
  let base = index[0];
  let tipX = tip[0];
  let tipY = tip[1];
  let baseX = base[0];
  let baseY = base[1];

  push();
  //screwdriver shaft
  noFill();
  stroke(200);
  strokeWeight(10);
  line(baseX*2, baseY*2, tipX*2, tipY*2);
  pop();

  push();
  //screwdriver tip
  rectMode(CENTER);
  noStroke();
  fill(200);
  rect(tipX*2, tipY*2,6,6,);
  pop();

  push();
  //screwdriver base
  rectMode(CENTER);
  noStroke();
  fill(140,0,0);
  rect(baseX*2, baseY*2,20,90,50);
  pop();
}
}
