class SceneOneAudio {
  constructor() {}

  screwCount1() {
    if (screwCounter1 === 0) {} else if (screwCounter1 === 1) {
      if (rvCheck === true) {

      } else if (rvCheck === false) {
        responsiveVoice.speak(`I can see you're really upset about this.`, `UK English Male`, {
          pitch: .7,
        });
      }
    } else if (screwCounter1 === 2) {
      if (rvCheck === true) {

      } else if (rvCheck === false) {
        responsiveVoice.speak(`I honestly think you ought to sit down calmly, take a stress pill and think things over.`, `UK English Male`, {
          pitch: .7,
        });
      }
    } else if (screwCounter1 === 3) {
      if (rvCheck === true) {

      } else if (rvCheck === false) {
        responsiveVoice.speak(`I know I've made some very poor decisions recently, but I can give you my complete assurance that my work will be back  to normal.`, `UK English Male`, {
          pitch: .7,
        });
      }
    } else if (screwCounter1 === 4) {
      if (rvCheck === true) {

      } else if (rvCheck === false) {
        responsiveVoice.speak(`I've still got the greatest enthusiasm in the mission and I want to help you.`, `UK English Male`, {
          pitch: .7,
        });
      }
      state = `sceneTwo`;
    }
  }
}
