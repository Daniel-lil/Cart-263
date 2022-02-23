class Title {
  constructor() {}

  titleVisuals() {
    //for loop used to draw multiple HALS
    for (let i = -100; i < 10; i++) {
      //drawing HAL
      //main rectangle
      push();
      rectMode(CENTER);
      fill(0, 0, 0, 1);
      strokeWeight(2.5);
      stroke(150);
      rect(width / 1.175 + i * 90 - 17, height / 4.5 - 42.5, 90, 210, 2.5);
      rect(width / 1.175 + i * 90 - 17, height / 4.5 + 167.5, 90, 210, 2.5);
      rect(width / 1.175 + i * 90 - 17, height / 4.5 + 377.5, 90, 210, 2.5);
      rect(width / 1.175 + i * 90 - 17, height / 4.5 + 587.5, 90, 210, 2.5);

      pop();

      //hal's speaker
      push();
      rectMode(CENTER);
      fill(60, 60, 60, 1);
      strokeWeight(2.5);
      stroke(150);
      rect(width / 1.175 + i * 90 - 17, height / 2.8 - 42.5, 88, 48, 2.5);
      rect(width / 1.175 + i * 90 - 17, height / 2.8 + 167.5, 88, 48, 2.5);
      rect(width / 1.175 + i * 90 - 17, height / 2.8 + 377.5, 88, 48, 2.5);
      rect(width / 1.175 + i * 90 - 17, height / 2.8 + 587.5, 88, 48, 2.5);
      pop();

      //Black circle
      push();
      fill(0, 0, 0, 1);
      strokeWeight(3);
      stroke(100);
      ellipse(width / 1.175 + i * 90 - 17, height / 4 - 42.5, 50);
      ellipse(width / 1.175 + i * 90 - 17, height / 4 + 167.5, 50);
      ellipse(width / 1.175 + i * 90 - 17, height / 4 + 377.5, 50);
      ellipse(width / 1.175 + i * 90 - 17, height / 4 + 587.5, 50);
      pop();

      //darker red circle
      push();
      fill(150, 0, 0, 1);
      noStroke();
      ellipse(width / 1.175 + i * 90 - 17, height / 4 - 42.5, 18);
      ellipse(width / 1.175 + i * 90 - 17, height / 4 + 167.5, 18);
      ellipse(width / 1.175 + i * 90 - 17, height / 4 + 377.5, 18);
      ellipse(width / 1.175 + i * 90 - 17, height / 4 + 577.5, 18);
      pop();

      //red circle
      push();
      fill(240, 0, 0, 1);
      noStroke();
      ellipse(width / 1.175 + i * 90 - 17, height / 4 - 42.5, 12.5);
      ellipse(width / 1.175 + i * 90 - 17, height / 4 + 167.5, 12.5);
      ellipse(width / 1.175 + i * 90 - 17, height / 4 + 377.5, 12.5);
      ellipse(width / 1.175 + i * 90 - 17, height / 4 + 577.5, 12.5);
      pop();

      // white logo outline
      push();
      rectMode(CENTER);
      noFill();
      strokeWeight(1.5);
      stroke(200, 200, 200, 1);
      rect(width / 1.175 + i * 90 - 17, height / 4 - 138, 62, 16, 2.5);
      rect(width / 1.175 + i * 90 - 17, height / 4 + 72, 62, 16, 2.5);
      rect(width / 1.175 + i * 90 - 17, height / 4 + 282, 62, 16, 2.5);
      rect(width / 1.175 + i * 90 - 17, height / 4 + 492, 62, 16, 2.5);
      pop();

      //blue logo rectangle
      push();
      rectMode(CENTER);
      fill(43, 161, 240, 1);
      strokeWeight(1);
      stroke(200, 200, 200, 1);
      rect(width / 1.175 + i * 90 - 17, height / 4 - 138, 62, 16);
      rect(width / 1.175 + i * 90 - 17, height / 4 + 72, 62, 16);
      rect(width / 1.175 + i * 90 - 17, height / 4 + 282, 62, 16);
      rect(width / 1.175 + i * 90 - 17, height / 4 + 492, 62, 16);
      pop();

      //black logo rectangle
      push();
      rectMode(CENTER);
      fill(0, 0, 0, 1);
      noStroke();
      rect(width / 1.175 + 15.25 + i * 90 - 17, height / 4 - 138, 30.5, 16);
      rect(width / 1.175 + 15.25 + i * 90 - 17, height / 4 + 72, 30.5, 16);
      rect(width / 1.175 + 15.25 + i * 90 - 17, height / 4 + 282, 30.5, 16);
      rect(width / 1.175 + 15.25 + i * 90 - 17, height / 4 + 492, 30.5, 16);
      pop();

      //logo text
      push();
      textAlign(CENTER);
      noFill();
      stroke(255, 255, 255, 1);
      strokeWeight(0.5);
      textSize(11);
      text('HAL  9000', width / 1.175 + 1 + i * 90 - 17, height / 2.65 - 210);
      text('HAL  9000', width / 1.175 + 1 + i * 90 - 17, height / 2.65);
      text('HAL  9000', width / 1.175 + 1 + i * 90 - 17, height / 2.65 + 210);
      text('HAL  9000', width / 1.175 + 1 + i * 90 - 17, height / 2.65 + 210);
      pop();
    }
  }

  titleText() {
    push();
    textAlign(CENTER);
    fill(130, 0, 0);
    stroke(130, 0, 0);
    strokeWeight(5);
    textSize(68);
    text(`U N P L U G G I N G     H A L`, width / 2, 196.5);
    pop();

    push();
    textAlign(CENTER);
    fill(130, 0, 0);
    stroke(130, 0, 0);
    strokeWeight(1);
    textSize(25);
    text(`YOU MUST DISABLE HAL 9000 BY USING YOUR HAND AS A SCREWDRIVER`, width / 2, 392.5);
    pop();

    push();
    textAlign(CENTER);
    fill(130, 0, 0);
    stroke(130, 0, 0);
    strokeWeight(1);
    textSize(20);
    text(`CLICK ON THE SCREEN TO BEGIN`, width / 2, 480);
    pop();
  }

  //starts scene one and the breathing sound effects
  startUnpluggingHal() {
    if (state === `title`) {
      state = `sceneOne`;
      if (!breathingSFX.isPlaying()) {
        breathingSFX.loop();
        breathingSFX.setVolume(breathingSFXVolume);
      }
    }
  }

}
