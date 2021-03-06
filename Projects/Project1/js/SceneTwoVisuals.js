class SceneTwoVisuals {
  constructor() {}

  drawBackground() {

    //left white rectangle
    push();
    rectMode(CENTER);
    noFill();
    stroke(255);
    rect(width / 3, height / 2, 710, 475, );
    pop();

    //red rectangle outline around solid red rectangle
    push();
    rectMode(CENTER);
    noFill();
    stroke(60, 0, 0);
    strokeWeight(5);
    rect(width / 2.745, height / 2, 525, 375, 2);
    pop();

    //solid red rectangle
    push();
    rectMode(CENTER);
    noStroke();
    fill(150, 0, 0);
    rect(width / 3, height / 2, 707.5, height / 2.75, );
    pop();

    //rectangle around hal
    push();
    rectMode(CENTER);
    noFill();
    stroke(255);
    rect(width / 1.175, height / 2, 265, 475, );
    pop();

    //black rectangle around memory units
    push();
    rectMode(CENTER);
    noStroke();
    fill(0);
    rect(width / 2.75, height / 2, 400, height / 2.75 - 5, 2);
    pop();

    //for loop used to draw dark red skinny ovals
    for (let i = 0; i < 950; i++) {
      push();
      rectMode(CENTER);
      fill(80, 0, 0);
      noStroke();
      rect(i * 15, 30, 6, 40, 5);
      pop();

      push();
      rectMode(CENTER);
      fill(80, 0, 0);
      noStroke();
      rect(i * 15, height - 30, 6, 40, 1.5);
      pop();
    }

    //memory unit 1
    push();
    rectMode(CENTER);
    noStroke();
    fill(memoryUnitColours.memoryUnit1Colour);
    rect(170, 235, 15, 60, 2);
    pop();

    //memory unit 2
    push();
    rectMode(CENTER);
    noStroke();
    fill(memoryUnitColours.memoryUnit2Colour);
    rect(220, 235, 15, 60, 2);
    pop();

    //memory unit 3
    push();
    rectMode(CENTER);
    noStroke();
    fill(memoryUnitColours.memoryUnit3Colour);
    rect(270, 235, 15, 60, 2);
    pop();

    //memory unit 4
    push();
    rectMode(CENTER);
    noStroke();
    fill(memoryUnitColours.memoryUnit4Colour);
    rect(320, 235, 15, 60, 2);
    pop();

    //memory unit 5
    push();
    rectMode(CENTER);
    noStroke();
    fill(memoryUnitColours.memoryUnit5Colour);
    rect(370, 235, 15, 60, 2);
    pop();

    //memory unit 6
    push();
    rectMode(CENTER);
    noStroke();
    fill(memoryUnitColours.memoryUnit6Colour);
    rect(420, 235, 15, 60, 2);
    pop();

    //memory unit 7
    push();
    rectMode(CENTER);
    noStroke();
    fill(memoryUnitColours.memoryUnit7Colour);
    rect(470, 235, 15, 60, 2);
    pop();

    //memory unit 8
    push();
    rectMode(CENTER);
    noStroke();
    fill(memoryUnitColours.memoryUnit8Colour);
    rect(520, 235, 15, 60, 2);
    pop();

    //memory unit 9
    push();
    rectMode(CENTER);
    noStroke();
    fill(memoryUnitColours.memoryUnit9Colour);
    rect(170, 337.5, 15, 60, 2);
    pop();

    //memory unit 10
    push();
    rectMode(CENTER);
    noStroke();
    fill(memoryUnitColours.memoryUnit10Colour);
    rect(220, 337.5, 15, 60, 2);
    pop();

    //memory unit 11
    push();
    rectMode(CENTER);
    noStroke();
    fill(memoryUnitColours.memoryUnit11Colour);
    rect(270, 337.5, 15, 60, 2);
    pop();

    //memory unit 12
    push();
    rectMode(CENTER);
    noStroke();
    fill(memoryUnitColours.memoryUnit12Colour);
    rect(320, 337.5, 15, 60, 2);
    pop();

    //memory unit 13
    push();
    rectMode(CENTER);
    noStroke();
    fill(memoryUnitColours.memoryUnit13Colour);
    rect(370, 337.5, 15, 60, 2);
    pop();

    //memory unit 14
    push();
    rectMode(CENTER);
    noStroke();
    fill(memoryUnitColours.memoryUnit14Colour);
    rect(420, 337.5, 15, 60, 2);
    pop();

    //memory unit 15
    push();
    rectMode(CENTER);
    noStroke();
    fill(memoryUnitColours.memoryUnit15Colour);
    rect(470, 337.5, 15, 60, 2);
    pop();

    //memory unit 16
    push();
    rectMode(CENTER);
    noStroke();
    fill(memoryUnitColours.memoryUnit16Colour);
    rect(520, 337.5, 15, 60, 2);
    pop();
  }

  drawHal() {
    //main rectangle
    push();
    rectMode(CENTER);
    fill(0);
    strokeWeight(2.5);
    stroke(150);
    rect(width / 1.175, height / 4.5 + 167.5, 90, 210, 2.5);
    pop();

    //hal's speaker
    push();
    rectMode(CENTER);
    fill(60);
    strokeWeight(2.5);
    stroke(150);
    rect(width / 1.175, height / 2.8 + 167.5, 88, 48, 2.5);
    pop();

    //Black circle
    push();
    fill(0);
    strokeWeight(3);
    stroke(100);
    ellipse(width / 1.175, height / 4 + 167.5, 50);
    pop();

    //darker red circle
    push();
    fill(150, 0, 0);
    noStroke();
    ellipse(width / 1.175, height / 4 + 167.5, 18);
    pop();

    //red circle
    push();
    fill(240, 0, 0);
    noStroke();
    ellipse(width / 1.175, height / 4 + 167.5, 12.5);
    pop();

    // white logo outline
    push();
    rectMode(CENTER);
    noFill();
    strokeWeight(1.5);
    stroke(200);
    rect(width / 1.175, height / 4 + 72, 62, 16, 2.5);
    pop();

    //blue logo rectangle
    push();
    rectMode(CENTER);
    fill(43, 161, 240);
    strokeWeight(1);
    stroke(200);
    rect(width / 1.175, height / 4 + 72, 62, 16);
    pop();

    //black logo rectangle
    push();
    rectMode(CENTER);
    fill(0);
    noStroke();
    rect(width / 1.175 + 15.25, height / 4 + 72, 30.5, 16);
    pop();

    //logo text
    push();
    textAlign(CENTER);
    noFill();
    stroke(255);
    strokeWeight(0.5);
    textSize(11);
    text('HAL  9000', width / 1.175 + 1, height / 2.65);
    pop();
  }

  drawScrews() {
    //memory unit 1 screw
    push();
    noStroke();
    fill(150, 150, 150);
    ellipse(170, 286.25, 15, );
    pop();

    //memory unit 1 screw lines
    push();
    strokeWeight(1.5);
    translate(170, 286.25);
    rotate(sceneTwoScrewRotation.screwOneRotation);
    line(0, 10, 0, -10);
    line(10, 0, -10, 0);
    pop();

    //memory unit 2 screw
    push();
    noStroke();
    fill(150, 150, 150);
    ellipse(220, 286.25, 15, );
    pop();

    //memory unit 2 screw lines
    push();
    strokeWeight(1.5);
    translate(220, 286.25);
    rotate(sceneTwoScrewRotation.screwTwoRotation);
    line(0, 10, 0, -10);
    line(10, 0, -10, 0);
    pop();

    //memory unit 3 screw
    push();
    noStroke();
    fill(150, 150, 150);
    ellipse(270, 286.25, 15, );
    pop();

    //memory unit 3 screw lines
    push();
    strokeWeight(1.5);
    translate(270, 286.25);
    rotate(sceneTwoScrewRotation.screwThreeRotation);
    line(0, 10, 0, -10);
    line(10, 0, -10, 0);
    pop();

    //memory unit 4 screw
    push();
    noStroke();
    fill(150, 150, 150);
    ellipse(320, 286.25, 15, );
    pop();

    //memory unit 4 screw lines
    push();
    strokeWeight(1.5);
    translate(320, 286.25);
    rotate(sceneTwoScrewRotation.screwFourRotation);
    line(0, 10, 0, -10);
    line(10, 0, -10, 0);
    pop();

    //memory unit 5 screw
    push();
    noStroke();
    fill(150, 150, 150);
    ellipse(370, 286.25, 15, );
    pop();

    //memory unit 5 screw lines
    push();
    strokeWeight(1.5);
    translate(370, 286.25);
    rotate(sceneTwoScrewRotation.screwFiveRotation);
    line(0, 10, 0, -10);
    line(10, 0, -10, 0);
    pop();

    //memory unit 6 screw
    push();
    noStroke();
    fill(150, 150, 150);
    ellipse(420, 286.25, 15, );
    pop();

    //memory unit 6 screw lines
    push();
    strokeWeight(1.5);
    translate(420, 286.25);
    rotate(sceneTwoScrewRotation.screwSixRotation);
    line(0, 10, 0, -10);
    line(10, 0, -10, 0);
    pop();

    //memory unit 7 screw
    push();
    noStroke();
    fill(150, 150, 150);
    ellipse(470, 286.25, 15, );
    pop();

    //memory unit 8 screw lines
    push();
    strokeWeight(1.5);
    translate(470, 286.25);
    rotate(sceneTwoScrewRotation.screwSevenRotation);
    line(0, 10, 0, -10);
    line(10, 0, -10, 0);
    pop();

    //memory unit 8 screw
    push();
    noStroke();
    fill(150, 150, 150);
    ellipse(520, 286.25, 15, );
    pop();

    //memory unit 2 screw lines
    push();
    strokeWeight(1.5);
    translate(520, 286.25);
    rotate(sceneTwoScrewRotation.screwEightRotation);
    line(0, 10, 0, -10);
    line(10, 0, -10, 0);
    pop();

    //memory unit 9 screw
    push();
    noStroke();
    fill(150, 150, 150);
    ellipse(170, 388.75, 15);
    pop();

    //memory unit 9 screw lines
    push();
    strokeWeight(1.5);
    translate(170, 388.75);
    rotate(sceneTwoScrewRotation.screwNineRotation);
    line(0, 10, 0, -10);
    line(10, 0, -10, 0);
    pop();

    //memory unit 10 screw
    push();
    noStroke();
    fill(150, 150, 150);
    ellipse(220, 388.75, 15);
    pop();

    //memory unit 10 screw lines
    push();
    strokeWeight(1.5);
    translate(220, 388.75);
    rotate(sceneTwoScrewRotation.screwTenRotation);
    line(0, 10, 0, -10);
    line(10, 0, -10, 0);
    pop();

    //memory unit 11 screw
    push();
    noStroke();
    fill(150, 150, 150);
    ellipse(270, 388.75, 15);
    pop();

    //memory unit 11 screw lines
    push();
    strokeWeight(1.5);
    translate(270, 388.75);
    rotate(sceneTwoScrewRotation.screwElevenRotation);
    line(0, 10, 0, -10);
    line(10, 0, -10, 0);
    pop();

    //memory unit 12 screw
    push();
    noStroke();
    fill(150, 150, 150);
    ellipse(320, 388.75, 15);
    pop();

    //memory unit 12 screw lines
    push();
    strokeWeight(1.5);
    translate(320, 388.75);
    rotate(sceneTwoScrewRotation.screwTwelveRotation);
    line(0, 10, 0, -10);
    line(10, 0, -10, 0);
    pop();

    //memory unit 13 screw
    push();
    noStroke();
    fill(150, 150, 150);
    ellipse(370, 388.75, 15);
    pop();

    //memory unit 13 screw lines
    push();
    strokeWeight(1.5);
    translate(370, 388.75);
    rotate(sceneTwoScrewRotation.screwThirteenRotation);
    line(0, 10, 0, -10);
    line(10, 0, -10, 0);
    pop();

    //memory unit 14 screw
    push();
    noStroke();
    fill(150, 150, 150);
    ellipse(420, 388.75, 15);
    pop();

    //memory unit 14 screw lines
    push();
    strokeWeight(1.5);
    translate(420, 388.75);
    rotate(sceneTwoScrewRotation.screwFourteenRotation);
    line(0, 10, 0, -10);
    line(10, 0, -10, 0);
    pop();

    //memory unit 15 screw
    push();
    noStroke();
    fill(150, 150, 150);
    ellipse(470, 388.75, 15);
    pop();

    //memory unit 15 screw lines
    push();
    strokeWeight(1.5);
    translate(470, 388.75);
    rotate(sceneTwoScrewRotation.screwFifteenRotation);
    line(0, 10, 0, -10);
    line(10, 0, -10, 0);
    pop();

    //memory unit 16 screw
    push();
    noStroke();
    fill(150, 150, 150);
    ellipse(520, 388.75, 15);
    pop();

    //memory unit 2 screw lines
    push();
    strokeWeight(1.5);
    translate(520, 388.75);
    rotate(sceneTwoScrewRotation.screwSixteenRotation);
    line(0, 10, 0, -10);
    line(10, 0, -10, 0);
    pop();
  }

  //draws black square over screen - used for fade out at the end
  drawFadeShape() {
    push();
    rectMode(CENTER);
    fill(0, 0, 0, fadeAmount);
    noStroke();
    rect(width / 2, height / 2, width, height);
    pop();
  }

  //draws text for scene 2
  sceneTwoText() {
    //farthest to the right text
    push();
    textAlign(CENTER);
    fill(0);
    stroke(20);
    strokeWeight(0.5);
    textSize(10);
    text(`1`, 170, 217);
    text(`2`, 220, 217);
    text(`3`, 270, 217);
    text(`4`, 320, 217);
    text(`5`, 370, 217);
    text(`6`, 420, 217);
    text(`7`, 470, 217);
    text(`8`, 520, 217);
    text(`9`, 170, 319.5);
    text(`10`, 220, 319.5);
    text(`11`, 270, 319.5);
    text(`12`, 320, 319.5);
    text(`13`, 370, 319.5);
    text(`14`, 420, 319.5);
    text(`15`, 470, 319.5);
    text(`16`, 520, 319.5);
    pop();

    push();
    textAlign(CENTER);
    fill(0);
    stroke(20);
    strokeWeight(0.5);
    textSize(5.5);
    text(`LT`, 170, 254);
    text(`LT`, 220, 254);
    text(`LT`, 270, 254);
    text(`LT`, 320, 254);
    text(`LT`, 370, 254);
    text(`LT`, 420, 254);
    text(`LT`, 470, 254);
    text(`LT`, 520, 254);
    text(`MT`, 170, 356.5);
    text(`MT`, 220, 356.5);
    text(`MT`, 270, 356.5);
    text(`MT`, 320, 356.5);
    text(`MT`, 370, 356.5);
    text(`MT`, 420, 356.5);
    text(`MT`, 470, 356.5);
    text(`MT`, 520, 356.5);
    pop();

    push();
    textAlign(CENTER);
    fill(80, 0, 0);
    stroke(20);
    strokeWeight(0.5);
    textSize(25);
    text(`L O G I C     T E R M I N A L`, width / 2.75, 174);
    text(`M E M O R Y     T E R M I N A L`, width / 2.75, 450);
    pop();
  }
}
