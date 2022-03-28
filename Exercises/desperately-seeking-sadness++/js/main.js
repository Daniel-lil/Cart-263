/**
Desperately Seeking happiness
Daniel Little

user the arrow keys to swim through the heavily resisting negativity to find the source of happiness
I've changed the original activity by
    - changing the thumbs up with thumbs down to make it about finding happiness in a harsh world rather than vice versa
    - the ability to move the avatar in reverse,
    - sound effects for the avatar's interactions with the other objects
*/

"use strict";

let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics:{
    default: `arcade`
  },
  scene: [Boot, Play]
};

let game = new Phaser.Game(config);
