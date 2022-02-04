/**
Spy Profile Generator
Daniel Little

Generates a randomized spy profile for the user and protects + saves it
*/

"use strict";

//declaring variable for picture of CSIS Logo
let csisImage;

//declaring variables for spy profile attributes
let spyProfile = {
  name: `**REDACTED**`,
  alias: `**REDACTED**`,
  secretWeapon: `**REDACTED**`,
  password: `**REDACTED**`
};

//declaring variables for JSON file data
let instrumentData = undefined;
let objectData = undefined;
let tarotData = undefined;

/**
loading CSIS logo image and JSON files from the internet
*/
function preload() {
  csisImage = loadImage(`assets/images/Canadian_Security_Intelligence_Service_logo.svg.png`);

  instrumentData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/music/instruments.json`);
  objectData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/objects/objects.json`);
  tarotData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json`);
}

/**
Description of setup
*/
function setup() {
//setting window size
  createCanvas(windowWidth, windowHeight);

//retrieving previous spy profile data that was stored on browser
  let data = JSON.parse(localStorage.getItem(`spy-profile-data`));

//checks if there is previous spy data, if there is it's displayed, it is generated
  if (data != null) {
    //prompt is for user to enter their password
    let password = prompt(`Agent! What is your password?!`);
    if (password === data.password) {
      spyProfile.name = data.name;
      spyProfile.alias = data.alias;
      spyProfile.secretWeapon = data.secretWeapon;
      spyProfile.password = data.password;

//responsive voice reads spy profile attributes when they are displayed
      responsiveVoice.speak(`** SPY PROFILE **
    Name: ${spyProfile.name}.
    Alias: ${spyProfile.alias}.
    Secret Weapon: ${spyProfile.secretWeapon}.
    password: ${spyProfile.password}`);
    }
  } else {
    generateSpyProfile();
  }
}

//generates spy sprofile attributes by taking random ones from various JSON files
function generateSpyProfile() {
  spyProfile.name = prompt(`Agent! What is your name?!`);
  let instrument = random(instrumentData.instruments);
  spyProfile.alias = `The ${instrument}`;
  spyProfile.secretWeapon = random(objectData.objects);
  let card = random(tarotData.tarot_interpretations);
  spyProfile.password = random(card.keywords);

//Stores spy profile data using web storage
  localStorage.setItem(`spy-profile-data`, JSON.stringify(spyProfile));
}

/**
Description of draw()
*/
function draw() {
  //setting background colours
  background(232, 200, 139);

//displays CSIS Logo
  imageMode(CENTER);
  image(csisImage, 200, 100, 380, 180);

//stores spy profile attributes as a string of text into variable
  let profile = `** SPY PROFILE **
  Name: ${spyProfile.name}
  Alias: ${spyProfile.alias}
  Secret Weapon: ${spyProfile.secretWeapon},
  password: ${spyProfile.password}`;

//displays text
  push();
  textFont(`courier, monospace`);
  textSize(24);
  textAlign(LEFT, TOP);
  text(profile, 120, 430);
  pop();
//displays text
  push();
  textFont(`courier, monospace`);
  textSize(100);
  textAlign(CENTER);
  fill(255, 0, 60);
  text(`**CONFIDENTIAL**`, width/2, 330);
  pop();
//displays rectange
  push();
  fill(255, 0, 60);
  stroke(240, 0, 60);
  strokeWeight(5);
  rectMode(CENTER);
  rect(width/2,750,300,200, 30);
  pop();
//displays text
  push();
  textFont(`courier, monospace`);
  textSize(90);
  textAlign(CENTER);
  fill(255);
  text(`Reset`, width/2, 775);
  pop();
}

//allows user to reset their spy profile attributes by clicking the big red reset button
function mousePressed(){
  if (mouseY > 650 && mouseY < 850 && mouseX > width/2 - 150 && mouseX < width/2 + 150) {
    generateSpyProfile();
  }
}
