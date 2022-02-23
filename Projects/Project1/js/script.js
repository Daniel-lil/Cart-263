/**
Cart 263 Project1: The Deactivation of HAL 9000
Daniel Little

With this program the user becomes the Protagonist of Stanley Kubrick's movie, 2001: A Space Odyssey.
The user has to disable the evil artificial intelligence system HAL 9000 by using their index finger which is turned into a screwdriver
Holding the tip of your finger/screwdriver over a screw for 5 seconds will loosen it.

breathingSFX audio came from the following youtube video (reverb and speed changes done in logic):
https://www.youtube.com/watch?v=cb_DM4PEpPA
*/

"use strict";

//stores the user's name
let userName;
//stores the user's webcam
let video = undefined;
//variable for sound effect
let breathingSFX;
//variable for sound effect volume
let breathingSFXVolume = 0.28;
//stores the ml5 handpose model
let handpose = undefined;
//stores the current set of predictions from ml5
let predictions = [];
//declaring variable for class Title
let titleClass;
//declaring variable for class sceneOneVisuals
let sceneOneVisuals;
//declaring variable for class sceneOneAudio
let sceneOneAudio;
//declaring variable for class sceneOneScrewCheck
let sceneOneScrewCheck;
//declaring variable for class sceneTwoVisuals
let sceneTwoVisuals;
//declaring variable for class sceneTwoAudio
let sceneTwoAudio;
//declaring variable for class sceneTwoScrewCheck
let sceneTwoScrewCheck;
//variable to stores states
let state = undefined;

//declaring variable to hold a count of screws that have been unscrewed in scene 1
let screwCounter1 = 0;
//declaring variable to hold a count of screws that have been unscrewed in scene 2
let screwCounter2 = 0;

let fadeAmount = 0;

//stores colours of each of the screws in sceneOne so they can be changed
let screwColours = {
  screwColour1: 150,
  screwColour2: 150,
  screwColour3: 150,
  screwColour4: 150
}
//stores colours of each of the memory units in sceneTwo so they can be changed
let memoryUnitColours = {
  memoryUnit1Colour: 255,
  memoryUnit2Colour: 255,
  memoryUnit3Colour: 255,
  memoryUnit4Colour: 255,
  memoryUnit5Colour: 255,
  memoryUnit6Colour: 255,
  memoryUnit7Colour: 255,
  memoryUnit8Colour: 255,
  memoryUnit9Colour: 255,
  memoryUnit10Colour: 255,
  memoryUnit11Colour: 255,
  memoryUnit12Colour: 255,
  memoryUnit13Colour: 255,
  memoryUnit14Colour: 255,
  memoryUnit15Colour: 255,
  memoryUnit16Colour: 255
}

//stores rotation amount for each screw in scene 1
let sceneOneScrewRotation = {
  screwOneRotation: 0,
  screwTwoRotation: 0,
  screwThreeRotation: 0,
  screwFourRotation: 0
}

//stores rotation amount for each screw in scene 2
let sceneTwoScrewRotation = {
  screwOneRotation: 0,
  screwTwoRotation: 0,
  screwThreeRotation: 0,
  screwFourRotation: 0,
  screwFiveRotation: 0,
  screwSixRotation: 0,
  screwSevenRotation: 0,
  screwEightRotation: 0,
  screwNineRotation: 0,
  screwTenRotation: 0,
  screwElevenRotation: 0,
  screwTwelveRotation: 0,
  screwThirteenRotation: 0,
  screwFourteenRotation: 0,
  screwFifteenRotation: 0,
  screwSixteenRotation: 0,
  screwSeventeenRotation: 0,
  screwEighteenRotation: 0
}

//stores locations of various parts of the hand picked up by the camera using ml5
let hand;
let index;
let tip;
let base;
let tipX;
let tipY;
let baseX;
let baseY;

//stores distances from fingers to each of the screws in scene 1
let d1 = undefined;
let d2 = undefined;
let d3 = undefined;
let d4 = undefined;

//stores distances from fingers to each of the screws in scene 2
let d5 = undefined;
let d6 = undefined;
let d7 = undefined;
let d8 = undefined;
let d9 = undefined;
let d10 = undefined;
let d11 = undefined;
let d12 = undefined;
let d13 = undefined;
let d14 = undefined;
let d15 = undefined;
let d16 = undefined;
let d17 = undefined;
let d18 = undefined;
let d19 = undefined;
let d20 = undefined;

//stores data about if responsive voice is playing (responsive voice check)
let rvCheck = responsiveVoice.isPlaying();

//stores canvas size
let cnv;

/**
loads the breathing sound effects
*/
function preload() {
  breathingSFX = loadSound(`assets/sounds/breathingSFX.mp3`);
}

/**
*/
function setup() {
  cnv = createCanvas(950, 600);

  //displays prompt to ask user for their name to be used later in the program
  userName = prompt(`Hello, what is your name?`);

  //declares what state the program starts with
  state = `title`;

//sets default rate for hal's voice
  responsiveVoice.setDefaultRate(0.75);

//stores data from each class in a variable with a matching name
  titleClass = new Title();
  sceneOneVisuals = new SceneOneVisuals();
  sceneOneAudio = new SceneOneAudio();
  sceneOneScrewCheck = new SceneOneScrewCheck();
  sceneTwoVisuals = new SceneTwoVisuals();
  sceneTwoAudio = new SceneTwoAudio();
  sceneTwoScrewCheck = new SceneTwoScrewCheck();

  //access user's webcam
  video = createCapture(VIDEO);
  video.hide();

  //load the handpose model
  handpose = ml5.handpose(video, {
    flipHorizontal: true
  }, function() {
    console.log(`Model loaded.`);
  });

  //listen for predictions from ml5 handpose
  handpose.on(`predict`, function(results) {
    predictions = results;
  });
}
/**
tells program what to do depending on which state the program is in
*/
function draw() {

//tells program what functions to run if the program is in the title state
  if (state === `title`) {

    titleClass.titleVisuals();
    cnv.mouseClicked(titleClass.startUnpluggingHal);

//tells program what functions to run if the program is in the scene 1 state
  } else if (state === `sceneOne`) {

    background(220);
    sceneOneVisuals.drawBackground();
    sceneOneVisuals.drawScrews();
    sceneOneVisuals.drawHal();
    drawScrewdriver();
    sceneOneScrewCheck.screwCheck1();

//tells program what functions to run if the program is in the scene 2 state
  } else if (state === `sceneTwo`) {

    background(0);
    sceneTwoVisuals.drawBackground();
    sceneTwoVisuals.drawHal();
    sceneTwoVisuals.drawScrews();
    drawScrewdriver();
    sceneTwoScrewCheck.screwCheck2();
    sceneTwoVisuals.drawFadeShape();
    breathingSFXFade();
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

//function to fade out the breathing sound effects at the end of the program
function breathingSFXFade() {
  if (breathingSFXVolume <= 0) {
    breathingSFX.stop();
  }
}
