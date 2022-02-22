/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

//stores the user's name
let userName;
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

let d1;
let d2;
let d3;
let d4;

let rvCheck = responsiveVoice.isPlaying();

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

  userName = prompt(`Hello, what is your name?`);

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
  console.log(rvCheck);

  if (state === `sceneOne`) {
    background(220);

    sceneOneVisuals.drawBackground();

    sceneOneVisuals.drawScrews();

    sceneOneVisuals.drawHal();

    drawScrewdriver();

    screwCheck1();

    stateTransition();

  } else if (state === `sceneTwo`) {
    background(0);

    sceneTwoVisuals.drawBackground();

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
  d1 = dist(tipX, tipY, 30, 40);
  d2 = dist(tipX, tipY, 460, 297.5);
  d3 = dist(tipX, tipY, 30, 297.5);
  d4 = dist(tipX, tipY, 460, 40);


  if (d1 < 45 / 2) {
    setTimeout(function() {
      if (d1 < 45 / 2 && screwColours.screwColour2 === 150) {
        screwColours.screwColour2 = 0;
        if(rvCheck === true) {
responsiveVoice.cancel();
} else if(rvCheck === false){
          responsiveVoice.speak(`I can see you're really upset about this.`);
        }
      }
    }, 3000);
  }
  else if (d2 < 45 / 2) {
    setTimeout(function() {
      if (d2 < 45 / 2 && screwColours.screwColour1 === 150) {
        screwColours.screwColour1 = 0;
        if(rvCheck === true) {
          responsiveVoice.cancel();
        } else if(rvCheck === false){
        responsiveVoice.speak(`I honestly think you ought to sit down calmly, take a stress pill and think things over.`);
      }
      }
    }, 3000);
  }

  else if (d3 < 45 / 2) {
    setTimeout(function() {
      if (d3 < 45 / 2 && screwColours.screwColour4 === 150) {
screwColours.screwColour4 = 0;
if(rvCheck === true) {
  responsiveVoice.cancel();
} else if(rvCheck === false){
responsiveVoice.speak(`I know I've made some very poor decisions recently, but I can give you my complete assurance that my work will be back  to normal.`);
      }
    }
    }, 3000);
  }

  else if (d4 < 45 / 2) {
    setTimeout(function() {
      if (d4 < 45 / 2 && screwColours.screwColour3 === 150) {
screwColours.screwColour3 = 0;
if(rvCheck === true) {
  responsiveVoice.cancel();
} else if(rvCheck === false){
responsiveVoice.speak(`I've still got the greatest enthusiasm in the mission and I want to help you.`);
      }
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
