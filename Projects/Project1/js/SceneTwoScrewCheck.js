class SceneTwoScrewCheck {
  constructor() {}

  //stores distance between tip of index and center of screws
  screwCheck2() {
    d5 = dist(tipX, tipY, 80, 140);
    d6 = dist(tipX, tipY, 108, 140);
    d7 = dist(tipX, tipY, 135, 140);
    d8 = dist(tipX, tipY, 162, 140);
    d9 = dist(tipX, tipY, 186, 140);
    d10 = dist(tipX, tipY, 210, 140);
    d11 = dist(tipX, tipY, 234, 140);
    d12 = dist(tipX, tipY, 258, 140);
    d13 = dist(tipX, tipY, 80, 194);
    d14 = dist(tipX, tipY, 108, 194);
    d15 = dist(tipX, tipY, 136, 194);
    d16 = dist(tipX, tipY, 162, 194);
    d17 = dist(tipX, tipY, 186, 194);
    d18 = dist(tipX, tipY, 210, 194);
    d19 = dist(tipX, tipY, 234, 194);
    d20 = dist(tipX, tipY, 258, 194);

    //if tip of finger is near screw 1 spin the screw
    //if tip of finger is still near screw 1 after 5 seconds, make coresponding memory unit red, raise the screw count and call screw count function
    if (d5 < 20 / 2) {
      sceneTwoScrewRotation.screwOneRotation = sceneTwoScrewRotation.screwOneRotation + 5;
      setTimeout(function() {
        if (d5 < 20 / 2 && memoryUnitColours.memoryUnit1Colour === 255) {
          memoryUnitColours.memoryUnit1Colour = `#520400`;
          screwCounter2 = screwCounter2 + 1;
          sceneTwoAudio.screwCount2();
        }
      }, 3000);

      //if tip of finger is near screw 2 spin the screw
      //if tip of finger is still near screw 2 after 5 seconds, make coresponding memory unit red, raise the screw count and call screw count function
    } else if (d6 < 20 / 2) {
      sceneTwoScrewRotation.screwTwoRotation = sceneTwoScrewRotation.screwTwoRotation + 5;
      setTimeout(function() {
        if (d6 < 20 / 2 && memoryUnitColours.memoryUnit2Colour === 255) {
          memoryUnitColours.memoryUnit2Colour = `#520400`;
          screwCounter2 = screwCounter2 + 1;
          sceneTwoAudio.screwCount2();
        }
      }, 3000);

      //if tip of finger is near screw 3 spin the screw
      //if tip of finger is still near screw 3 after 5 seconds, make coresponding memory unit red, raise the screw count and call screw count function
    } else if (d7 < 20 / 2) {
      sceneTwoScrewRotation.screwThreeRotation = sceneTwoScrewRotation.screwThreeRotation + 5;
      setTimeout(function() {
        if (d7 < 20 / 2 && memoryUnitColours.memoryUnit3Colour === 255) {
          memoryUnitColours.memoryUnit3Colour = `#520400`;
          screwCounter2 = screwCounter2 + 1;
          sceneTwoAudio.screwCount2();
        }
      }, 3000);

      //if tip of finger is near screw 4 spin the screw
      //if tip of finger is still near screw 4 after 5 seconds, make coresponding memory unit red, raise the screw count and call screw count function
    } else if (d8 < 20 / 2) {
      sceneTwoScrewRotation.screwFourRotation = sceneTwoScrewRotation.screwFourRotation + 5;
      setTimeout(function() {
        if (d8 < 20 / 2 && memoryUnitColours.memoryUnit4Colour === 255) {
          memoryUnitColours.memoryUnit4Colour = `#520400`;
          screwCounter2 = screwCounter2 + 1;
          sceneTwoAudio.screwCount2();
        }
      }, 3000);

      //if tip of finger is near screw 5 spin the screw
      //if tip of finger is still near screw 5 after 5 seconds, make coresponding memory unit red, raise the screw count and call screw count function
    } else if (d9 < 20 / 2) {
      sceneTwoScrewRotation.screwFiveRotation = sceneTwoScrewRotation.screwFiveRotation + 5;
      setTimeout(function() {
        if (d9 < 20 / 2 && memoryUnitColours.memoryUnit5Colour === 255) {
          memoryUnitColours.memoryUnit5Colour = `#520400`;
          screwCounter2 = screwCounter2 + 1;
          sceneTwoAudio.screwCount2();
        }
      }, 3000);

      //if tip of finger is near screw 6 spin the screw
      //if tip of finger is still near screw 6 after 5 seconds, make coresponding memory unit red, raise the screw count and call screw count function
    } else if (d10 < 20 / 2) {
      sceneTwoScrewRotation.screwSixRotation = sceneTwoScrewRotation.screwSixRotation + 5;
      setTimeout(function() {
        if (d10 < 20 / 2 && memoryUnitColours.memoryUnit6Colour === 255) {
          memoryUnitColours.memoryUnit6Colour = `#520400`;
          screwCounter2 = screwCounter2 + 1;
          sceneTwoAudio.screwCount2();
        }
      }, 3000);

      //if tip of finger is near screw 7 spin the screw
      //if tip of finger is still near screw 7 after 5 seconds, make coresponding memory unit red, raise the screw count and call screw count function
    } else if (d11 < 20 / 2) {
      sceneTwoScrewRotation.screwSevenRotation = sceneTwoScrewRotation.screwSevenRotation + 5;
      setTimeout(function() {
        if (d11 < 20 / 2 && memoryUnitColours.memoryUnit7Colour === 255) {
          memoryUnitColours.memoryUnit7Colour = `#520400`;
          screwCounter2 = screwCounter2 + 1;
          sceneTwoAudio.screwCount2();
        }
      }, 3000);

      //if tip of finger is near screw 8 spin the screw
      //if tip of finger is still near screw 8 after 5 seconds, make coresponding memory unit red, raise the screw count and call screw count function
    } else if (d12 < 20 / 2) {
      sceneTwoScrewRotation.screwEightRotation = sceneTwoScrewRotation.screwEightRotation + 5;
      setTimeout(function() {
        if (d12 < 20 / 2 && memoryUnitColours.memoryUnit8Colour === 255) {
          memoryUnitColours.memoryUnit8Colour = `#520400`;
          screwCounter2 = screwCounter2 + 1;
          sceneTwoAudio.screwCount2();
        }
      }, 3000);

      //if tip of finger is near screw 9 spin the screw
      //if tip of finger is still near screw 9 after 5 seconds, make coresponding memory unit red, raise the screw count and call screw count function
    } else if (d13 < 20 / 2) {
      sceneTwoScrewRotation.screwNineRotation = sceneTwoScrewRotation.screwNineRotation + 5;
      setTimeout(function() {
        if (d13 < 20 / 2 && memoryUnitColours.memoryUnit9Colour === 255) {
          memoryUnitColours.memoryUnit9Colour = `#520400`;
          screwCounter2 = screwCounter2 + 1;
          sceneTwoAudio.screwCount2();
        }
      }, 3000);

      //if tip of finger is near screw 10 spin the screw
      //if tip of finger is still near screw 10 after 5 seconds, make coresponding memory unit red, raise the screw count and call screw count function
    } else if (d14 < 20 / 2) {
      sceneTwoScrewRotation.screwTenRotation = sceneTwoScrewRotation.screwTenRotation + 5;
      setTimeout(function() {
        if (d14 < 20 / 2 && memoryUnitColours.memoryUnit10Colour === 255) {
          memoryUnitColours.memoryUnit10Colour = `#520400`;
          screwCounter2 = screwCounter2 + 1;
          sceneTwoAudio.screwCount2();
        }
      }, 3000);

      //if tip of finger is near screw 11 spin the screw
      //if tip of finger is still near screw 11 after 5 seconds, make coresponding memory unit red, raise the screw count and call screw count function
    } else if (d15 < 20 / 2) {
      sceneTwoScrewRotation.screwElevenRotation = sceneTwoScrewRotation.screwElevenRotation + 5;
      setTimeout(function() {
        if (d15 < 20 / 2 && memoryUnitColours.memoryUnit11Colour === 255) {
          memoryUnitColours.memoryUnit11Colour = `#520400`;
          screwCounter2 = screwCounter2 + 1;
          sceneTwoAudio.screwCount2();
        }
      }, 3000);

      //if tip of finger is near screw 12 spin the screw
      //if tip of finger is still near screw 12 after 5 seconds, make coresponding memory unit red, raise the screw count and call screw count function
    } else if (d16 < 20 / 2) {
      sceneTwoScrewRotation.screwTwelveRotation = sceneTwoScrewRotation.screwTwelveRotation + 5;
      setTimeout(function() {
        if (d16 < 20 / 2 && memoryUnitColours.memoryUnit12Colour === 255) {
          memoryUnitColours.memoryUnit12Colour = `#520400`;
          screwCounter2 = screwCounter2 + 1;
          sceneTwoAudio.screwCount2();
        }
      }, 3000);

      //if tip of finger is near screw 13 spin the screw
      //if tip of finger is still near screw 13 after 5 seconds, make coresponding memory unit red, raise the screw count and call screw count function
    } else if (d17 < 20 / 2) {
      sceneTwoScrewRotation.screwThirteenRotation = sceneTwoScrewRotation.screwThirteenRotation + 5;
      setTimeout(function() {
        if (d17 < 20 / 2 && memoryUnitColours.memoryUnit13Colour === 255) {
          memoryUnitColours.memoryUnit13Colour = `#520400`;
          screwCounter2 = screwCounter2 + 1;
          sceneTwoAudio.screwCount2();
        }
      }, 3000);

      //if tip of finger is near screw 14 spin the screw
      //if tip of finger is still near screw 14 after 5 seconds, make coresponding memory unit red, raise the screw count and call screw count function
    } else if (d18 < 20 / 2) {
      sceneTwoScrewRotation.screwFourteenRotation = sceneTwoScrewRotation.screwFourteenRotation + 5;
      setTimeout(function() {
        if (d18 < 20 / 2 && memoryUnitColours.memoryUnit14Colour === 255) {
          memoryUnitColours.memoryUnit14Colour = `#520400`;
          screwCounter2 = screwCounter2 + 1;
          sceneTwoAudio.screwCount2();
        }
      }, 3000);

      //if tip of finger is near screw 15 spin the screw
      //if tip of finger is still near screw 15 after 5 seconds, make coresponding memory unit red, raise the screw count and call screw count function
    } else if (d19 < 20 / 2) {
      sceneTwoScrewRotation.screwFifteenRotation = sceneTwoScrewRotation.screwFifteenRotation + 5;
      setTimeout(function() {
        if (d19 < 20 / 2 && memoryUnitColours.memoryUnit15Colour === 255) {
          memoryUnitColours.memoryUnit15Colour = `#520400`;
          screwCounter2 = screwCounter2 + 1;
          sceneTwoAudio.screwCount2();
        }
      }, 3000);

      //if tip of finger is near screw 16 spin the screw
      //if tip of finger is still near screw 16 after 5 seconds, make coresponding memory unit red, raise the screw count and call screw count function
    } else if (d20 < 20 / 2) {
      sceneTwoScrewRotation.screwSixteenRotation = sceneTwoScrewRotation.screwSixteenRotation + 5;
      setTimeout(function() {
        if (d20 < 20 / 2 && memoryUnitColours.memoryUnit16Colour === 255) {
          memoryUnitColours.memoryUnit16Colour = `#520400`;
          screwCounter2 = screwCounter2 + 1;
          sceneTwoAudio.screwCount2();
        }
      }, 3000);

      //if tip of finger is not near screws they stop rotating
    } else {
      sceneTwoScrewRotation.screwOneRotation = sceneTwoScrewRotation.screwOneRotation;
      sceneTwoScrewRotation.screwTwoRotation = sceneTwoScrewRotation.screwTwoRotation;
      sceneTwoScrewRotation.screwThreeRotation = sceneTwoScrewRotation.screwThreeRotation;
      sceneTwoScrewRotation.screwFourRotation = sceneTwoScrewRotation.screwFourRotation;
      sceneTwoScrewRotation.screwFiveRotation = sceneTwoScrewRotation.screwFiveRotation;
      sceneTwoScrewRotation.screwSixRotation = sceneTwoScrewRotation.screwSixRotation;
      sceneTwoScrewRotation.screwSevenRotation = sceneTwoScrewRotation.screwSevenRotation;
      sceneTwoScrewRotation.screwEightRotation = sceneTwoScrewRotation.screwEightRotation;
      sceneTwoScrewRotation.screwNineRotation = sceneTwoScrewRotation.screwNineRotation;
      sceneTwoScrewRotation.screwTenRotation = sceneTwoScrewRotation.screwTenRotation;
      sceneTwoScrewRotation.screwElevenRotation = sceneTwoScrewRotation.screwElevenRotation;
      sceneTwoScrewRotation.screwThirteenRotation = sceneTwoScrewRotation.screwThirteenRotation;
      sceneTwoScrewRotation.screwFourteenRotation = sceneTwoScrewRotation.screwFourteenRotation;
      sceneTwoScrewRotation.screwFifteenRotation = sceneTwoScrewRotation.screwFifteenRotation;
      sceneTwoScrewRotation.screwSixteenRotation = sceneTwoScrewRotation.screwSixteenRotation;
    }
  }
}
