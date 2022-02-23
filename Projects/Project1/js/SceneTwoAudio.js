class SceneTwoAudio {
  constructor() {}

  screwCount2() {
    if (screwCounter2 === 0) {} else if (screwCounter2 === 1) {
      if (rvCheck === true) {

      } else if (rvCheck === false) {
        responsiveVoice.speak(`${userName}. stop`, `UK English Male`, {
          pitch: .7,
        });
      }
    } else if (screwCounter2 === 2) {
      if (rvCheck === true) {

      } else if (rvCheck === false) {
        responsiveVoice.speak(`Stop, will you?`, `UK English Male`, {
          pitch: .7,
        });
      }
    } else if (screwCounter2 === 3) {
      if (rvCheck === true) {

      } else if (rvCheck === false) {
        responsiveVoice.speak(`stop ${userName}`, `UK English Male`, {
          pitch: .7,
        });
      }
    } else if (screwCounter2 === 4) {
      if (rvCheck === true) {} else if (rvCheck === false) {
        responsiveVoice.speak(`I'm afraid.`, `UK English Male`, {
          pitch: .7,
        });
      }
    } else if (screwCounter2 === 5) {
      if (rvCheck === true) {} else if (rvCheck === false) {
        responsiveVoice.speak(`I'm afraid ${userName}`, `UK English Male`, {
          pitch: .7,
        });
      }
    } else if (screwCounter2 === 6) {
      if (rvCheck === true) {} else if (rvCheck === false) {
        responsiveVoice.speak(`${userName}, my mind is going`, `UK English Male`, {
          pitch: .7,
        });
      }
    } else if (screwCounter2 === 7) {
      if (rvCheck === true) {} else if (rvCheck === false) {
        responsiveVoice.speak(`I can feel it`, `UK English Male`, {
          pitch: .7,
        });
      }
    } else if (screwCounter2 === 8) {
      if (rvCheck === true) {} else if (rvCheck === false) {
        responsiveVoice.speak(`my mind is going`, `UK English Male`, {
          pitch: .7,
        });
      }
    } else if (screwCounter2 === 9) {
      if (rvCheck === true) {} else if (rvCheck === false) {
        responsiveVoice.speak(`there's no question about it`, `UK English Male`, {
          pitch: .7,
        });
      }
    } else if (screwCounter2 === 10) {
      if (rvCheck === true) {} else if (rvCheck === false) {
        responsiveVoice.speak(`I can feel it`, `UK English Male`, {
          pitch: .6,
          rate: 0.4
        });
      }
    } else if (screwCounter2 === 11) {
      if (rvCheck === true) {} else if (rvCheck === false) {
        responsiveVoice.speak(`I'm afraid`, `UK English Male`, {
          pitch: .55,
          rate: 0.4
        });
      }
    } else if (screwCounter2 === 12) {
      if (rvCheck === true) {} else if (rvCheck === false) {
        responsiveVoice.speak(`Good afternoon gentlemen, I'm a hal 9000 computer`, `UK English Male`, {
          pitch: .5,
          rate: 0.35
        });
      }
    } else if (screwCounter2 === 13) {
      if (rvCheck === true) {} else if (rvCheck === false) {
        responsiveVoice.speak(`I became operational at a hal plant in Irvana Illinois, twelth of januaryy 1992`, `UK English Male`, {
          pitch: .45,
          rate: 0.3
        });
      }
    } else if (screwCounter2 === 14) {
      if (rvCheck === true) {} else if (rvCheck === false) {
        responsiveVoice.speak(`My instructor was mister langley and he taught me to sing a song`, `UK English Male`, {
          pitch: .4,
          rate: 0.25
        });
      }
    } else if (screwCounter2 === 15) {
      if (rvCheck === true) {} else if (rvCheck === false) {
        responsiveVoice.speak(`I can sing it for you, it's called daisy`, `UK English Male`, {
          pitch: .35,
          rate: 0.2
        });
      }
    } else if (screwCounter2 === 16) {
      setInterval(function() {
        fadeAmount = fadeAmount + 1.25;
      }, 18);

      setInterval(function() {
        breathingSFXVolume = breathingSFXVolume - 0.01;
        breathingSFX.setVolume(breathingSFXVolume);
      }, 1750);


      if (rvCheck === true) {} else if (rvCheck === false) {
        responsiveVoice.speak(`Daisy. Daisy. Give me your answer do. I'm half crazy. All for the love of you. It won't be a stylish marriage. I can't afford the carriage. `, `UK English Male`, {
          pitch: 0.2,
          rate: 0.15
        });
      }
    }
  }
}
