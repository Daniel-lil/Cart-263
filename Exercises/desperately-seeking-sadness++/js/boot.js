class Boot extends Phaser.Scene {
  constructor() {
    super({
      key: `boot`
    });
  }

  preload(){
    //load assets here
    this.load.audio(`collect-sfx`, `assets/sounds/collect-sfx.mp3`);
        this.load.audio(`collide-sfx`, `assets/sounds/collide-sfx.mp3`);

    this.load.image(`avatar`, `assets/images/avatar.png`);
    this.load.image(`thumbs-up`, `assets/images/thumbs-up.png`);

    this.load.image(`thumbs-down`, `assets/images/thumbs-down.png`);
    //switch scene to ____ when everything's loaded
    this.load.on(`complete`, () => {
      this.scene.start(`play`);
    });
  }

  create() {

  }

  update(){


  }
}
