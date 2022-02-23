class SceneOneScrewCheck {
  constructor() {}

  //stores distance between tip of index and center of screws
  screwCheck1() {
    //top left screw
    d1 = dist(tipX, tipY, 30, 40);
    //bottom right screw
    d2 = dist(tipX, tipY, 460, 297.5);
    // bottom left screw
    d3 = dist(tipX, tipY, 30, 297.5);
    //top right screw
    d4 = dist(tipX, tipY, 460, 40);

    //if tip of finger is near top left screw spin the screw
    //if tip of finger is still near top left screw after 5 seconds make the screw colour black, raise the screw count and call screw count function
    if (d1 < 45 / 2) {
      sceneOneScrewRotation.screwOneRotation = sceneOneScrewRotation.screwOneRotation + 5;
      setTimeout(function() {
        if (d1 < 45 / 2 && screwColours.screwColour2 === 150) {
          screwColours.screwColour2 = 0;
          screwCounter1 = screwCounter1 + 1;
          sceneOneAudio.screwCount1();
        }
      }, 3000);
      //if tip of finger is near bottom right screw spin the screw
      //if tip of finger is still near bottom right screw after 5 seconds make the screw colour black, raise the screw count and call screw count function
    } else if (d2 < 45 / 2) {
      sceneOneScrewRotation.screwTwoRotation = sceneOneScrewRotation.screwTwoRotation + 5;
      setTimeout(function() {
        if (d2 < 45 / 2 && screwColours.screwColour1 === 150) {
          screwColours.screwColour1 = 0;
          screwCounter1 = screwCounter1 + 1;
          sceneOneAudio.screwCount1();
        }
      }, 3000);
      //if tip of finger is near bottom left screw spin the screw
      //if tip of finger is still near bottom left screw after 5 seconds make the screw colour black, raise the screw count and call screw count function
    } else if (d3 < 45 / 2) {
      sceneOneScrewRotation.screwThreeRotation = sceneOneScrewRotation.screwThreeRotation + 5;
      setTimeout(function() {
        if (d3 < 45 / 2 && screwColours.screwColour4 === 150) {
          screwColours.screwColour4 = 0;
          screwCounter1 = screwCounter1 + 1;
          sceneOneAudio.screwCount1();
        }
      }, 3000);
      //if tip of finger is near top right screw spin the screw
      //if tip of finger is still nearright left screw after 5 seconds make the screw colour black, raise the screw count and call screw count function
    } else if (d4 < 45 / 2) {
      sceneOneScrewRotation.screwFourRotation = sceneOneScrewRotation.screwFourRotation + 5;
      setTimeout(function() {
        if (d4 < 45 / 2 && screwColours.screwColour3 === 150) {
          screwColours.screwColour3 = 0;
          screwCounter1 = screwCounter1 + 1;
          sceneOneAudio.screwCount1();
        }
      }, 3000);
    }

    //if tip of finger is not near screws they stop rotating
    else {
      sceneOneScrewRotation.screwOneRotation = sceneOneScrewRotation.screwOneRotation;
      sceneOneScrewRotation.screwTwoRotation = sceneOneScrewRotation.screwTwoRotation;
      sceneOneScrewRotation.screwThreeRotation = sceneOneScrewRotation.screwThreeRotation;
      sceneOneScrewRotation.screwFourRotation = sceneOneScrewRotation.screwFourRotation;
    }
  }
}
