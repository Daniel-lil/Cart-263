class SceneTwoVisuals {
  constructor() {}

  drawScene2() {

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
}
