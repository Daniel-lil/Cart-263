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
    rect(width / 2.75, height / 2, 400, height / 2.75 - 5, );
    pop();

    //memory unit 1
    push();
    rectMode(CENTER);
    noStroke();
    fill(255, 255, 255);
    rect(170, 235, 15, 60, 2);
    pop();

    //memory unit 2
    push();
    rectMode(CENTER);
    noStroke();
    fill(255, 255, 255);
    rect(220, 235, 15, 60, 2);
    pop();

    //memory unit 3
    push();
    rectMode(CENTER);
    noStroke();
    fill(255, 255, 255);
    rect(270, 235, 15, 60, 2);
    pop();

    //memory unit 4
    push();
    rectMode(CENTER);
    noStroke();
    fill(255, 255, 255);
    rect(320, 235, 15, 60, 2);
    pop();

    //memory unit 5
    push();
    rectMode(CENTER);
    noStroke();
    fill(255, 255, 255);
    rect(370, 235, 15, 60, 2);
    pop();

    //memory unit 6
    push();
    rectMode(CENTER);
    noStroke();
    fill(255, 255, 255);
    rect(420, 235, 15, 60, 2);
    pop();

    //memory unit 7
    push();
    rectMode(CENTER);
    noStroke();
    fill(255, 255, 255);
    rect(470, 235, 15, 60, 2);
    pop();

    //memory unit 8
    push();
    rectMode(CENTER);
    noStroke();
    fill(255, 255, 255);
    rect(520, 235, 15, 60, 2);
    pop();

    //memory unit 9
    push();
    rectMode(CENTER);
    noStroke();
    fill(255, 255, 255);
    rect(170, 337.5, 15, 60, 2);
    pop();

    //memory unit 10
    push();
    rectMode(CENTER);
    noStroke();
    fill(255, 255, 255);
    rect(220, 337.5, 15, 60, 2);
    pop();

    //memory unit 11
    push();
    rectMode(CENTER);
    noStroke();
    fill(255, 255, 255);
    rect(270, 337.5, 15, 60, 2);
    pop();

    //memory unit 12
    push();
    rectMode(CENTER);
    noStroke();
    fill(255, 255, 255);
    rect(320, 337.5, 15, 60, 2);
    pop();

    //memory unit 13
    push();
    rectMode(CENTER);
    noStroke();
    fill(255, 255, 255);
    rect(370, 337.5, 15, 60, 2);
    pop();

    //memory unit 14
    push();
    rectMode(CENTER);
    noStroke();
    fill(255, 255, 255);
    rect(420, 337.5, 15, 60, 2);
    pop();

    //memory unit 15
    push();
    rectMode(CENTER);
    noStroke();
    fill(255, 255, 255);
    rect(470, 337.5, 15, 60, 2);
    pop();

    //memory unit 16
    push();
    rectMode(CENTER);
    noStroke();
    fill(255, 255, 255);
    rect(520, 337.5, 15, 60, 2);
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

  }

drawScrews(){
  //memory unit 1 screw
  push();
  noStroke();
  fill(150, 150, 150);
  ellipse(170, 286.25, 15,);
  pop();

  //memory unit 2 screw
  push();
  noStroke();
  fill(150, 150, 150);
  ellipse(220, 286.25, 15,);
  pop();

  //memory unit 3 screw
  push();
  noStroke();
  fill(150, 150, 150);
  ellipse(270, 286.25, 15,);
  pop();

  //memory unit 4 screw
  push();
  noStroke();
  fill(150, 150, 150);
  ellipse(320, 286.25, 15,);
  pop();

  //memory unit 5 screw
  push();
  noStroke();
  fill(150, 150, 150);
  ellipse(370, 286.25, 15,);
  pop();

  //memory unit 6 screw
  push();
  noStroke();
  fill(150, 150, 150);
  ellipse(420, 286.25, 15,);
  pop();

  //memory unit 7 screw
  push();
  noStroke();
  fill(150, 150, 150);
  ellipse(470, 286.25, 15,);
  pop();

  //memory unit 8 screw
  push();
  noStroke();
  fill(150, 150, 150);
  ellipse(520, 286.25, 15,);
  pop();

  //memory unit 9
  push();
  noStroke();
  fill(150, 150, 150);
  ellipse(170, 388.75, 15);
  pop();

  //memory unit 10
  push();
  noStroke();
  fill(150, 150, 150);
  ellipse(220, 388.75, 15);
  pop();

  //memory unit 11
  push();
  noStroke();
  fill(150, 150, 150);
  ellipse(270, 388.75, 15);
  pop();

  //memory unit 12
  push();
  noStroke();
  fill(150, 150, 150);
  ellipse(320, 388.75, 15);
  pop();

  //memory unit 13
  push();
  noStroke();
  fill(150, 150, 150);
  ellipse(370, 388.75, 15);
  pop();

  //memory unit 14
  push();
  noStroke();
  fill(150, 150, 150);
  ellipse(420, 388.75, 15);
  pop();

  //memory unit 15
  push();
  noStroke();
  fill(150, 150, 150);
  ellipse(470, 388.75, 15);
  pop();

  //memory unit 16
  push();
  noStroke();
  fill(150, 150, 150);
  ellipse(520, 388.75, 15);
  pop();

}

}
