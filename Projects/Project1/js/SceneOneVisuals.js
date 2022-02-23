class SceneOneVisuals {
  constructor() {}

  drawBackground() {
    //big black rectangle outline
    push();
    rectMode(CENTER);
    noFill();
    strokeWeight(2);
    stroke(0);
    rect(width / 2, height / 1.5, 702, 250);
    pop();

    // red rectangle that is filled in
    push();
    rectMode(CENTER);
    fill(200, 0, 0);
    noStroke();
    rect(519, height / 1.5, 157.5, 236);
    pop();

    //red rectangle outinle - farthest to the left
    push();
    rectMode(CENTER);
    noFill();
    strokeWeight(2);
    stroke(200, 0, 0);
    rect(241.5, height / 1.6, 225, 83);
    pop();

    //red rectanngle outline - with hal logo inside
    push();
    rectMode(CENTER);
    noFill();
    strokeWeight(2);
    stroke(200, 0, 0);
    rect(399, height / 1.6, 75, 83);
    pop();

    //white rectangle outline - inside filled in red rectangle
    push();
    rectMode(CENTER);
    noFill();
    strokeWeight(2);
    stroke(200);
    rect(519, height / 1.6, 150, 83);
    pop();

    //red rectangle outline - farthest to the right
    push();
    rectMode(CENTER);
    noFill();
    strokeWeight(2);
    stroke(200, 0, 0);
    rect(711, height / 1.6, 220, 83);
    pop();
  }

  drawHal() {
    //main rectangle
    push();
    rectMode(CENTER);
    fill(0);
    strokeWeight(2.5);
    stroke(150);
    rect(width / 2, height / 4.5, 90, 210, 2.5);
    pop();

    //hal's speaker
    push();
    rectMode(CENTER);
    fill(60);
    strokeWeight(2.5);
    stroke(150);
    rect(width / 2, height / 2.8, 88, 48, 2.5);
    pop();

    //Black circle
    push();
    fill(0);
    strokeWeight(3);
    stroke(100);
    ellipse(width / 2, height / 4, 60);
    pop();

    //darker red circle
    push();
    fill(150, 0, 0);
    noStroke();
    ellipse(width / 2, height / 4, 22);
    pop();

    //red circle
    push();
    fill(240, 0, 0);
    noStroke();
    ellipse(width / 2, height / 4, 15);
    pop();

    // white logo outline
    push();
    rectMode(CENTER);
    noFill();
    strokeWeight(1.5);
    stroke(200);
    rect(width / 2, height / 11, 62, 16, 2.5);
    pop();

    //blue logo rectangle
    push();
    rectMode(CENTER);
    fill(43, 161, 240);
    strokeWeight(1);
    stroke(200);
    rect(width / 2, height / 11, 62, 16);
    pop();

    //black logo rectangle
    push();
    rectMode(CENTER);
    fill(0);
    noStroke();
    rect(width / 2 + 15.25, height / 11, 30.5, 16);
    pop();

    //logo text
    push();
    textAlign(CENTER);
    noFill();
    stroke(255);
    strokeWeight(0.5);
    textSize(11);
    text('HAL  9000', width / 2 + 1.5, height / 10 - 2, );
    pop();
  }

  drawScrews() {
    //bottom right screw circle
    push();
    fill(screwColours.screwColour1);
    strokeWeight(1);
    stroke(0);
    ellipse(width - 40, height - 40, 45);
    pop();

    //bottom right screw lines
    push();
    translate(width - 40, height - 40);
    strokeWeight(1.5);
    rotate(sceneOneScrewRotation.screwTwoRotation);
    line(0, -15, 0, +15);
    line(+15, 0, -15, 0);
    pop();

    //top left screw circle
    push();
    fill(screwColours.screwColour2);
    strokeWeight(1);
    stroke(0);
    ellipse(40, 40, 45);
    pop();

    //top left screw lines
    push();
    strokeWeight(1.5);
    translate(40, 40);
    rotate(sceneOneScrewRotation.screwOneRotation);
    line(0, 15, 0, -15);
    line(-15, 0, 15, 0);
    pop();

    //top right screw circle
    push();
    fill(screwColours.screwColour3);
    strokeWeight(1);
    stroke(0);
    ellipse(width - 40, 40, 45);
    pop();

    //top right screw lines
    push();
    strokeWeight(1.5);
    translate(width - 40, 40);
    rotate(sceneOneScrewRotation.screwFourRotation);
    line(0, 15, 0, -15);
    line(15, 0, -15, 0);
    pop();

    //bottom left screw circle
    push();
    fill(screwColours.screwColour4);
    strokeWeight(1);
    stroke(0);
    ellipse(40, height - 40, 45);
    pop();

    //bottom left screw lines
    push();
    strokeWeight(1.5);
    translate(40, height - 40);
    rotate(sceneOneScrewRotation.screwThreeRotation);
    line(0, -15, 0, 15);
    line(-15, 0, 15, 0);
    pop();
  }

  //draws hal logo inside red rectangle outline
  drawHalLogo() {
    // white logo outline
    push();
    rectMode(CENTER);
    noFill();
    strokeWeight(1.5);
    stroke(200);
    rect(399, height / 1.6, 62, 16, 2.5);
    pop();

    //blue logo rectangle
    push();
    rectMode(CENTER);
    fill(43, 161, 240);
    strokeWeight(1);
    stroke(200);
    rect(399, height / 1.6, 62, 16);
    pop();

    //black logo rectangle
    push();
    rectMode(CENTER);
    fill(0);
    noStroke();
    rect(414.25, height / 1.6, 30.5, 16);
    pop();

    //logo text
    push();
    textAlign(CENTER);
    noFill();
    stroke(255);
    strokeWeight(0.5);
    textSize(11);
    text('HAL  9000', 400, height / 1.58, );
    pop();
  }

  //draws text for scene 1
  sceneOneText() {
    //`maximum restricted entry` text
    push();
    textAlign(CENTER);
    fill(60);
    stroke(20);
    strokeWeight(0.5);
    textSize(11);
    text(`MAXIMUM    RESTRICTED    ENTRY`, 241.5, height / 1.58, );
    pop();

    //`logic memory center` text
    push();
    textAlign(CENTER);
    fill(255);
    stroke(20);
    strokeWeight(0.5);
    textSize(14);
    text(`L O G I C`, 519, height / 1.67, );
    text(`M E M O R Y`, 519, height / 1.58, );
    text(`C E N T E R`, 519, height / 1.5, );
    pop();

    //text underneath logic memory center text
    push();
    textAlign(CENTER);
    fill(255);
    stroke(20);
    strokeWeight(0.5);
    textSize(6.4);
    text(`ACCESS TO THE LM CENTER ONLY UNDER EMERGENCY CONDITIONS IN ACCORDANCE WITH REGULATIONS LM 014`, 474, height / 1.375, 90, 35);
    text(`MULTI APERTURE CORE STORAGE - FOR MAGNETIC LOGIC APPLICATIONS ONLY`, 474, height / 1.25, 90, 35);
    pop();

    //farthest to the right text
    push();
    textAlign(CENTER);
    fill(60);
    stroke(20);
    strokeWeight(0.5);
    textSize(6.4);
    text(`DRO ELEMENTS WITHIN LOGIC STATE OF LMC REQUIRE EXTERNAL FL-CX CONTROLS TO RESTORE INFORMATION INTO CORE ARRAY`, 637.5, height / 1.55, 150, 20);
    pop();
  }
}
