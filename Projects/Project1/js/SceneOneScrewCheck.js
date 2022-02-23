class SceneOneScrewCheck {
  constructor() {}

  screwCheck1() {
    d1 = dist(tipX, tipY, 30, 40);
    d2 = dist(tipX, tipY, 460, 297.5);
    d3 = dist(tipX, tipY, 30, 297.5);
    d4 = dist(tipX, tipY, 460, 40);


    if (d1 < 45 / 2) {
      setTimeout(function() {
        if (d1 < 45 / 2 && screwColours.screwColour2 === 150) {
          screwColours.screwColour2 = 0;
          screwCounter1 = screwCounter1 + 1;
          sceneOneAudio.screwCount1();
        }
      }, 3000);
    } else if (d2 < 45 / 2) {
      setTimeout(function() {
        if (d2 < 45 / 2 && screwColours.screwColour1 === 150) {
          screwColours.screwColour1 = 0;
          screwCounter1 = screwCounter1 + 1;
          sceneOneAudio.screwCount1();
        }
      }, 3000);
    } else if (d3 < 45 / 2) {
      setTimeout(function() {
        if (d3 < 45 / 2 && screwColours.screwColour4 === 150) {
          screwColours.screwColour4 = 0;
          screwCounter1 = screwCounter1 + 1;
          sceneOneAudio.screwCount1();
        }
      }, 3000);
    } else if (d4 < 45 / 2) {
      setTimeout(function() {
        if (d4 < 45 / 2 && screwColours.screwColour3 === 150) {
          screwColours.screwColour3 = 0;
          screwCounter1 = screwCounter1 + 1;
          sceneOneAudio.screwCount1();
        }
      }, 3000);
    }
  }
}
