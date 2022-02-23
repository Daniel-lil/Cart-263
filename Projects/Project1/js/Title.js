class Title {
  constructor() {}

titleVisuals(){

  //for loop used to draw multiple HALS
  for (let i = - 100; i < 950; i++) {
for (let i2 = - 100; i2 < 950; i2++)

//drawing HAL
  //main rectangle
  push();
  rectMode(CENTER);
  fill(0);
  strokeWeight(2.5);
  stroke(150);
  rect(width / 1.175 + i*90, height / 4.5 + 167.5 +, 90, 210, 2.5);
  pop();

  //hal's speaker
  push();
  rectMode(CENTER);
  fill(60);
  strokeWeight(2.5);
  stroke(150);
  rect(width / 1.175 + i*90, height / 2.8 + 167.5 +, 88, 48, 2.5);
  pop();

  //Black circle
  push();
  fill(0);
  strokeWeight(3);
  stroke(100);
  ellipse(width / 1.175 + i*90, height / 4 + 167.5 +, 50);
  pop();

  //darker red circle
  push();
  fill(150, 0, 0);
  noStroke();
  ellipse(width / 1.175 + i*90, height / 4 + 167.5 +, 18);
  pop();

  //red circle
  push();
  fill(240, 0, 0);
  noStroke();
  ellipse(width / 1.175 + i*90, height / 4 + 167.5 +, 12.5);
  pop();

  // white logo outline
  push();
  rectMode(CENTER);
  noFill();
  strokeWeight(1.5);
  stroke(200);
  rect(width / 1.175 + i*90, height / 4 + 72 +, 62, 16, 2.5);
  pop();

  //blue logo rectangle
  push();
  rectMode(CENTER);
  fill(43, 161, 240);
  strokeWeight(1);
  stroke(200);
  rect(width / 1.175 + i*90, height / 4 + 72 +, 62, 16);
  pop();

  //black logo rectangle
  push();
  rectMode(CENTER);
  fill(0);
  noStroke();
  rect(width / 1.175 + 15.25 + i*90, height / 4 + 72 +, 30.5, 16);
  pop();

  //logo text
  push();
  textAlign(CENTER);
  noFill();
  stroke(255);
  strokeWeight(0.5);
  textSize(11);
  text('HAL  9000', width / 1.175 + 1 + i*90, height / 2.65 +);
  pop();
}
}

startUnpluggingHal(){
  if (state === `title`){
  state = `sceneOne`;
  if (!breathingSFX.isPlaying()){
  breathingSFX.loop();
  breathingSFX.setVolume(breathingSFXVolume);
}
}
}

}
