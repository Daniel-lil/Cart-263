class SceneOneVisuals {
  constructor() {}

  drawBackground() {
    //big black rectangle outline
    push();
    rectMode(CENTER);
    noFill();
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

//red rectanglle outinle - farthest to the left
    push();
    rectMode(CENTER);
    noFill();
    stroke(200, 0, 0);
    rect(241.5, height / 1.6, 225, 83);
    pop();

//red rectanngle outline - with hal logo inside
    push();
    rectMode(CENTER);
    noFill();
    stroke(200, 0, 0);
    rect(399, height / 1.6, 75, 83);
    pop();

    //white rectangle outline - inside filled in red rectangle
    push();
    rectMode(CENTER);
    noFill();
    stroke(200);
    rect(519, height / 1.6, 150, 83);
    pop();

//red rectangle outline - farthest to the right
    push();
    rectMode(CENTER);
    noFill();
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
    ellipse(width / 2, height / 4, 50);
    pop();

    //darker red circle
    push();
    fill(150, 0, 0);
    noStroke();
    ellipse(width / 2, height / 4, 18);
    pop();

    //red circle
    push();
    fill(240, 0, 0);
    noStroke();
    ellipse(width / 2, height / 4, 12.5);
    pop();
  }
  drawScrews() {

    //bottom right screw
    push();
    fill(screwColours.screwColour1);
    strokeWeight(1);
    stroke(0);
    ellipse(width - 40, height - 40, 45);
    pop();

    //top left screw
    push();
    fill(screwColours.screwColour2);
    strokeWeight(1);
    stroke(0);
    ellipse(40, 40, 45);
    pop();

    //top right screw
    push();
    fill(screwColours.screwColour3);
    strokeWeight(1);
    stroke(0);
    ellipse(width - 40, 40, 45);
    pop();

    //bottom left screw
    push();
    fill(screwColours.screwColour4);
    strokeWeight(1);
    stroke(0);
    ellipse(40, height - 40, 45);
    pop();
  }
}
