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
//stores the ml5 handpose model
let handpose = undefined;
//stores the current set of predictions from ml5
let predictions = [];
//declaring variable for class sceneOneVisuals
let sceneOneVisuals;
//declaring variable for class sceneTwoVisuals
let sceneTwoVisuals;
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
let d1;
let d2;
let d3;
let d4;

//stores distances from fingers to each of the screws in scene 1
let d5;
let d6;
let d7;
let d8;
let d9;
let d10;
let d11;
let d12;
let d13;
let d14;
let d15;
let d16;
let d17;
let d18;
let d19;
let d20;

//stores data about if responsive voice is playing (responsive voice check)
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

  //displays prompt to ask user for their name to be used later in the program
  userName = prompt(`Hello, what is your name?`);

  //declares what state the program starts with
  state = `sceneOne`;

  responsiveVoice.setDefaultRate(0.75);

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

  //listen for predictions from ml5 handpose
  handpose.on(`predict`, function(results) {
    predictions = results;
  });
}

/**
Description of draw()
*/
function draw() {
  console.log(fadeAmount);
  if (state === `sceneOne`) {
    background(220);

    sceneOneVisuals.drawBackground();

    sceneOneVisuals.drawScrews();

    sceneOneVisuals.drawHal();

    drawScrewdriver();

    screwCheck1();

  } else if (state === `sceneTwo`) {
    background(0);

    sceneTwoVisuals.drawBackground();

    sceneTwoVisuals.drawHal();

    sceneTwoVisuals.drawScrews();

    drawScrewdriver();

    screwCheck2();

    sceneTwoVisuals.drawFadeShape();
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
        screwCounter1 = screwCounter1 + 1;
        screwCount1();
      }
    }, 3000);
  } else if (d2 < 45 / 2) {
    setTimeout(function() {
      if (d2 < 45 / 2 && screwColours.screwColour1 === 150) {
        screwColours.screwColour1 = 0;
        screwCounter1 = screwCounter1 + 1;
        screwCount1();
      }
    }, 3000);
  } else if (d3 < 45 / 2) {
    setTimeout(function() {
      if (d3 < 45 / 2 && screwColours.screwColour4 === 150) {
        screwColours.screwColour4 = 0;
        screwCounter1 = screwCounter1 + 1;
        screwCount1();
      }
    }, 3000);
  } else if (d4 < 45 / 2) {
    setTimeout(function() {
      if (d4 < 45 / 2 && screwColours.screwColour3 === 150) {
        screwColours.screwColour3 = 0;
        screwCounter1 = screwCounter1 + 1;
        screwCount1();
      }
    }, 3000);
  }
}

function screwCount1() {
  if (screwCounter1 === 0) {} else if (screwCounter1 === 1) {
    if (rvCheck === true) {

    } else if (rvCheck === false) {
      responsiveVoice.speak(`I can see you're really upset about this.`, `UK English Male`, {
        pitch: .7,
      });
    }
  } else if (screwCounter1 === 2) {
    if (rvCheck === true) {

    } else if (rvCheck === false) {
      responsiveVoice.speak(`I honestly think you ought to sit down calmly, take a stress pill and think things over.`, `UK English Male`, {
        pitch: .7,
      });
    }
  } else if (screwCounter1 === 3) {
    if (rvCheck === true) {

    } else if (rvCheck === false) {
      responsiveVoice.speak(`I know I've made some very poor decisions recently, but I can give you my complete assurance that my work will be back  to normal.`, `UK English Male`, {
        pitch: .7,
      });
    }
  } else if (screwCounter1 === 4) {
    if (rvCheck === true) {

    } else if (rvCheck === false) {
      responsiveVoice.speak(`I've still got the greatest enthusiasm in the mission and I want to help you.`, `UK English Male`, {
        pitch: .7,
      });
    }
    state = `sceneTwo`;
  }
}



function screwCheck2() {
  d5 = dist(tipX, tipY, 80, 140);
  d6 = dist(tipX, tipY, 108, 140);
  d7 = dist(tipX, tipY, 135, 140);
  d8 = dist(tipX, tipY, 162, 140);
  d9 = dist(tipX, tipY, 186, 140);
  d10 = dist(tipX, tipY, 210, 140);
  d11 = dist(tipX, tipY, 234, 140);
  d12 = dist(tipX, tipY, 258, 140);
  d13 = dist(tipX, tipY, 80, 194);
  d14 = dist(tipX, tipY, 108, 194);
  d15 = dist(tipX, tipY, 136, 194);
  d16 = dist(tipX, tipY, 162, 194);
  d17 = dist(tipX, tipY, 186, 194);
  d18 = dist(tipX, tipY, 210, 194);
  d19 = dist(tipX, tipY, 234, 194);
  d20 = dist(tipX, tipY, 258, 194);


  if (d5 < 20 / 2) {
    setTimeout(function() {
      if (d5 < 20 / 2 && memoryUnitColours.memoryUnit1Colour === 255) {
        memoryUnitColours.memoryUnit1Colour = `#520400`;
        screwCounter2 = screwCounter2 + 1;
        screwCount2();
      }
    }, 3000);
  } else if (d6 < 20 / 2) {
    setTimeout(function() {
      if (d6 < 20 / 2 && memoryUnitColours.memoryUnit2Colour === 255) {
        memoryUnitColours.memoryUnit2Colour = `#520400`;
        screwCounter2 = screwCounter2 + 1;
        screwCount2();
      }
    }, 3000);
  } else if (d7 < 20 / 2) {
    setTimeout(function() {
      if (d7 < 20 / 2 && memoryUnitColours.memoryUnit3Colour === 255) {
        memoryUnitColours.memoryUnit3Colour = `#520400`;
        screwCounter2 = screwCounter2 + 1;
        screwCount2();
      }
    }, 3000);
  } else if (d8 < 20 / 2) {
    setTimeout(function() {
      if (d8 < 20 / 2 && memoryUnitColours.memoryUnit4Colour === 255) {
        memoryUnitColours.memoryUnit4Colour = `#520400`;
        screwCounter2 = screwCounter2 + 1;
        screwCount2();
      }
    }, 3000);
  } else if (d9 < 20 / 2) {
    setTimeout(function() {
      if (d9 < 20 / 2 && memoryUnitColours.memoryUnit5Colour === 255) {
        memoryUnitColours.memoryUnit5Colour = `#520400`;
        screwCounter2 = screwCounter2 + 1;
        screwCount2();
      }
    }, 3000);
  } else if (d10 < 20 / 2) {
    setTimeout(function() {
      if (d10 < 20 / 2 && memoryUnitColours.memoryUnit6Colour === 255) {
        memoryUnitColours.memoryUnit6Colour = `#520400`;
        screwCounter2 = screwCounter2 + 1;
        screwCount2();
      }
    }, 3000);
  } else if (d11 < 20 / 2) {
    setTimeout(function() {
      if (d11 < 20 / 2 && memoryUnitColours.memoryUnit7Colour === 255) {
        memoryUnitColours.memoryUnit7Colour = `#520400`;
        screwCounter2 = screwCounter2 + 1;
        screwCount2();
      }
    }, 3000);
  } else if (d12 < 20 / 2) {
    setTimeout(function() {
      if (d12 < 20 / 2 && memoryUnitColours.memoryUnit8Colour === 255) {
        memoryUnitColours.memoryUnit8Colour = `#520400`;
        screwCounter2 = screwCounter2 + 1;
        screwCount2();
      }
    }, 3000);
  } else if (d13 < 20 / 2) {
    setTimeout(function() {
      if (d13 < 20 / 2 && memoryUnitColours.memoryUnit9Colour === 255) {
        memoryUnitColours.memoryUnit9Colour = `#520400`;
        screwCounter2 = screwCounter2 + 1;
        screwCount2();
      }
    }, 3000);
  } else if (d14 < 20 / 2) {
    setTimeout(function() {
      if (d14 < 20 / 2 && memoryUnitColours.memoryUnit10Colour === 255) {
        memoryUnitColours.memoryUnit10Colour = `#520400`;
        screwCounter2 = screwCounter2 + 1;
        screwCount2();
      }
    }, 3000);
  } else if (d15 < 20 / 2) {
    setTimeout(function() {
      if (d15 < 20 / 2 && memoryUnitColours.memoryUnit11Colour === 255) {
        memoryUnitColours.memoryUnit11Colour = `#520400`;
        screwCounter2 = screwCounter2 + 1;
        screwCount2();
      }
    }, 3000);
  } else if (d16 < 20 / 2) {
    setTimeout(function() {
      if (d16 < 20 / 2 && memoryUnitColours.memoryUnit12Colour === 255) {
        memoryUnitColours.memoryUnit12Colour = `#520400`;
        screwCounter2 = screwCounter2 + 1;
        screwCount2();
      }
    }, 3000);
  } else if (d17 < 20 / 2) {
    setTimeout(function() {
      if (d17 < 20 / 2 && memoryUnitColours.memoryUnit13Colour === 255) {
        memoryUnitColours.memoryUnit13Colour = `#520400`;
        screwCounter2 = screwCounter2 + 1;
        screwCount2();
      }
    }, 3000);
  } else if (d18 < 20 / 2) {
    setTimeout(function() {
      if (d18 < 20 / 2 && memoryUnitColours.memoryUnit14Colour === 255) {
        memoryUnitColours.memoryUnit14Colour = `#520400`;
        screwCounter2 = screwCounter2 + 1;
        screwCount2();
      }
    }, 3000);
  } else if (d19 < 20 / 2) {
    setTimeout(function() {
      if (d19 < 20 / 2 && memoryUnitColours.memoryUnit15Colour === 255) {
        memoryUnitColours.memoryUnit15Colour = `#520400`;
        screwCounter2 = screwCounter2 + 1;
        screwCount2();
      }
    }, 3000);
  } else if (d20 < 20 / 2) {
    setTimeout(function() {
      if (d20 < 20 / 2 && memoryUnitColours.memoryUnit16Colour === 255) {
        memoryUnitColours.memoryUnit16Colour = `#520400`;
        screwCounter2 = screwCounter2 + 1;
        screwCount2();
      }
    }, 3000);
  }

}


function screwCount2() {
  if (screwCounter2 === 0) {}

  else if (screwCounter2 === 1) {
    if (rvCheck === true) {

    } else if (rvCheck === false) {
      responsiveVoice.speak(`${userName}. stop`, `UK English Male`, {
        pitch: .7,
      });
    }
  } else if (screwCounter2 === 2) {
    if (rvCheck === true) {

    } else if (rvCheck === false) {
      responsiveVoice.speak(`Stop, will you?`, `UK English Male`, {
        pitch: .7,
      });
    }
  } else if (screwCounter2 === 3) {
    if (rvCheck === true) {

    } else if (rvCheck === false) {
      responsiveVoice.speak(`stop ${userName}`, `UK English Male`, {
        pitch: .7,
      });
    }
  } else if (screwCounter2 === 4) {
    if (rvCheck === true) {} else if (rvCheck === false) {
      responsiveVoice.speak(`I'm afraid.`, `UK English Male`, {
        pitch: .7,
      });
    }
  } else if (screwCounter2 === 5) {
    if (rvCheck === true) {} else if (rvCheck === false) {
      responsiveVoice.speak(`I'm afraid ${userName}`, `UK English Male`, {
        pitch: .7,
      });
    }
  } else if (screwCounter2 === 6) {
    if (rvCheck === true) {} else if (rvCheck === false) {
      responsiveVoice.speak(`${userName}, my mind is going`, `UK English Male`, {
        pitch: .7,
      });
    }
  } else if (screwCounter2 === 7) {
    if (rvCheck === true) {} else if (rvCheck === false) {
      responsiveVoice.speak(`I can feel it`, `UK English Male`, {
        pitch: .7,
      });
    }
  } else if (screwCounter2 === 8) {
    if (rvCheck === true) {} else if (rvCheck === false) {
      responsiveVoice.speak(`my mind is going`, `UK English Male`, {
        pitch: .7,
      });
    }
  } else if (screwCounter2 === 9) {
    if (rvCheck === true) {} else if (rvCheck === false) {
      responsiveVoice.speak(`there's no question about it`, `UK English Male`, {
        pitch: .7,
      });
    }
  } else if (screwCounter2 === 10) {
    if (rvCheck === true) {} else if (rvCheck === false) {
      responsiveVoice.speak(`I can feel it`, `UK English Male`, {
        pitch: .7,
      });
    }
  } else if (screwCounter2 === 11) {
    if (rvCheck === true) {} else if (rvCheck === false) {
      responsiveVoice.speak(`I'm afraid`, `UK English Male`, {
        pitch: .7,
      });
    }
  } else if (screwCounter2 === 12) {
    if (rvCheck === true) {} else if (rvCheck === false) {
      responsiveVoice.speak(`Good afternoon gentlemen, I'm a hal 9000 computer`, `UK English Male`, {
        pitch: .6,
      });
    }
  } else if (screwCounter2 === 13) {
    if (rvCheck === true) {} else if (rvCheck === false) {
      responsiveVoice.speak(`I became operational at a hal plant in Irvana Illinois, twelth of januaryy 1992`, `UK English Male`, {
        pitch: .55,
      });
    }
  } else if (screwCounter2 === 14) {
    if (rvCheck === true) {} else if (rvCheck === false) {
      responsiveVoice.speak(`My instructor was mister langley and he taught me to sing a song`, `UK English Male`, {
        pitch: .5,
      });
    }
  } else if (screwCounter2 === 15) {
    if (rvCheck === true) {} else if (rvCheck === false) {
      responsiveVoice.speak(`I can sing it for you, it's called daisy`, `UK English Male`, {
        pitch: .45,
        rate: 0.4
      });
    }
  } else if (screwCounter2 === 16) {
    setInterval(function () {
      fadeAmount = fadeAmount + 2;
    }, 10);
    if (rvCheck === true) {} else if (rvCheck === false) {
      responsiveVoice.speak(`Daisy. Daisy. Give me your answer do.`, `UK English Male`, {
        pitch: 0.4,
        rate: 0.3
      });
      responsiveVoice.speak(`I'm half crazy. All for the love of you.`, `UK English Male`,{
        pitch: 0.3,
        rate:0.2
      });
      responsiveVoice.speak(`It won't be a stylish marriage, `, `UK English Male`, {
        pitch: 0.15,
        rate:0.1
      });
      responsiveVoice.speak(` I can't afford the carriage, `, `UK English Male`, {
        pitch: 0.075,
        rate: 0.05
      });
      responsiveVoice.speak(` but you'd look sweet on the seat`, `UK English Male`, {
        pitch: 0.04,
        rate: 0.02
      });
    }

  }
}
