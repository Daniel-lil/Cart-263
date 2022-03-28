class Play extends Phaser.Scene {
  constructor() {
    super({
      key: `play`
    });
  }

  create() {

    //create the avatar
    this.avatar = this.physics.add.sprite(400, 300, `avatar`);
    this.avatar.setCollideWorldBounds(true);

    let x = Math.random() * this.sys.canvas.width;
    let y = Math.random() * this.sys.canvas.height;
    this.happiness = this.physics.add.sprite(x, y, `thumbs-up`);
    this.happiness.setCollideWorldBounds(true);

    this.sadness = this.physics.add.group({
      key: `thumbs-down`,
      quantity: 120,
      bounceX:0.5,
      bounceY:0.5,
      collideWorldBounds: true,
      dragX: 50,
      dragY: 50
    });

    Phaser.Actions.RandomRectangle(this.sadness.getChildren(), this.physics.world.bounds);

    this.physics.add.overlap(this.avatar, this.happiness, this.getHappy, null, this);
        this.physics.add.collider(this.avatar, this.sadness, this.triggerCollideSound, null, this);
              this.physics.add.collider(this.sadness, this.sadness);
  this.physics.add.collider(this.happiness, this.sadness);

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  triggerCollideSound() {
    let collide_sfx = this.sound.add(`collide-sfx`, {volume: 0.005});
    collide_sfx.stop();
      collide_sfx.play();
  }

  getHappy(avatar, happiness) {
    let x = Math.random() * this.sys.canvas.width;
    let y = Math.random() * this.sys.canvas.height;
    this.happiness.setPosition(x, y);

    let collect_sfx = this.sound.add(`collect-sfx`, {volume: 0.1});
collect_sfx.play();

  }

  update() {

    if (this.cursors.left.isDown) {
      this.avatar.setAngularVelocity(-150);
    } else if (this.cursors.right.isDown) {
      this.avatar.setAngularVelocity(150);
    } else {
      this.avatar.setAngularVelocity(0);
    }

    if (this.cursors.up.isDown) {
      this.physics.velocityFromRotation(this.avatar.rotation, 150, this.avatar.body.acceleration);
    } else if (this.cursors.down.isDown) {
      this.physics.velocityFromRotation(this.avatar.rotation, -150, this.avatar.body.acceleration);
    } else {
      this.avatar.setAcceleration(0);
    }

  }
}
