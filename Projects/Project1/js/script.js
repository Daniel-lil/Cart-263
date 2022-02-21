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

let sceneOneVisuals;

let sceneTwoVisuals;

let state = undefined;

let screwColours = {
  screwColour1: 150,
  screwColour2: 150,
  screwColour3: 150,
  screwColour4: 150
}

let hand;
let index;
let tip;
let base;
let tipX;
let tipY;
let baseX;
let baseY;

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

  state = `sceneOne`;

  sceneOneVisuals = new SceneOneVisuals();

  sceneTwoVisuals = new SceneTwoVisuals();

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
  handpose.on(`predict`, function(results) {

    predictions = results;
  });
}

/**
Description of draw()
*/
function draw() {
  console.log(state);

  if (state === `sceneOne`) {
    background(220);

    sceneOneVisuals.drawScene1();

    sceneOneVisuals.drawScrews();

    sceneOneVisuals.drawHal();

    drawScrewdriver();

    screwCheck1();

    stateTransition();

  } else if (state === `sceneTwo`) {
    background(0);

    sceneTwoVisuals.drawScene2();

    sceneTwoVisuals.drawHal();

    drawScrewdriver();
  }
}

function drawScrewdriver() {
  if (predictions.length > 0) {
    hand = predictions[0];
    index = hand.annotations.indexFinger;
    tip = index[3];
    base = index[0];
    tipX = tip[0];
    tipY = tip[1];
    baseX = base[0];
    baseY = base[1];

    push();
    //screwdriver shaft
    noFill();
    stroke(200);
    strokeWeight(10);
    line(baseX * 2, baseY * 2, tipX * 2, tipY * 2);
    pop();

    push();
    //screwdriver tip
    rectMode(CENTER);
    noStroke();
    fill(200);
    rect(tipX * 2, tipY * 2, 8, 8, );
    pop();

    push();
    //screwdriver base
    rectMode(CENTER);
    noStroke();
    fill(140, 0, 0);
    rect(baseX * 2, baseY * 2, 20, 90, 50);
    pop();
  }
}

function screwCheck1() {
  let d1 = dist(tipX, tipY, 40, 40);
  let d2 = dist(tipX, tipY, 460, 297.5);
  let d3 = dist(tipX, tipY, 40, 297.5);
  let d4 = dist(tipX, tipY, 460, 40);

  console.log(d4);

  if (d1 < 45 / 2) {
    setTimeout(function() {
      if (d1 < 45 / 2) {
        screwColours.screwColour2 = 0;




      }
    }, 3000);
  }
  else if (d2 < 45 / 2) {
    setTimeout(function() {
      if (d2 < 45 / 2) {
        screwColours.screwColour1 = 0;
      }
    }, 3000);
  }

  else if (d3 < 45 / 2) {
    setTimeout(function() {
      if (d3 < 45 / 2) {
screwColours.screwColour4 = 0;
      }
    }, 3000);
  }

  else if (d4 < 45 / 2) {
    setTimeout(function() {
      if (d4 < 45 / 2) {
screwColours.screwColour3 = 0;
      }
    }, 3000);
  }
}

function stateTransition(){
if (screwColours.screwColour1 === 0 && screwColours.screwColour2 === 0 && screwColours.screwColour3 === 0 && screwColours.screwColour4 === 0
) {
  state = `sceneTwo`;
}
}
