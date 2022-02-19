class SceneOneVisuals {
  constructor() {}

  drawScene1() {
    push();
    rectMode(CENTER);
    noFill();
    stroke(0);
    rect(width / 2, height / 1.5, 702, 250);
    pop();

    push();
    rectMode(CENTER);
    fill(200, 0, 0);
    noStroke();
    rect(519, height / 1.5, 157.5, 236);
    pop();

    push();
    rectMode(CENTER);
    noFill();
    stroke(200, 0, 0);
    rect(241.5, height / 1.6, 225, 83);
    pop();

    push();
    rectMode(CENTER);
    noFill();
    stroke(200, 0, 0);
    rect(399, height / 1.6, 75, 83);
    pop();

    push();
    rectMode(CENTER);
    noFill();
    stroke(200);
    rect(519, height / 1.6, 150, 83);
    pop();

    push();
    rectMode(CENTER);
    noFill();
    stroke(200, 0, 0);
    rect(711, height / 1.6, 220, 83);
    pop();
  }

  drawHal() {
    push();
    rectMode(CENTER);
    fill(0);
    strokeWeight(5);
    stroke(150);
    rect(width / 2, height / 4.5, 90, 210, 5);
    pop();

    push();
    rectMode(CENTER);
    fill(60);
    strokeWeight(5);
    stroke(150);
    rect(width / 2, height / 2.8, 85, 45);
    pop();

    push();
    fill(240, 0, 0);
    strokeWeight(5);
    stroke(100);
    ellipse(width / 2, height / 4, 50);
    pop();

  }


  drawScrews() {
    push();
    fill(150);
    strokeWeight(1);
    stroke(0);
    ellipse(width - 40, height - 40, 45);
    pop();

    push();
    fill(150);
    strokeWeight(1);
    stroke(0);
    ellipse(40, 40, 45);
    pop();

    push();
    fill(150);
    strokeWeight(1);
    stroke(0);
    ellipse(width - 40, 40, 45);
    pop();

    push();
    fill(150);
    strokeWeight(1);
    stroke(0);
    ellipse(40, height - 40, 45);
    pop();
  }
}
