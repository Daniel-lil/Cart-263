class Title {
  constructor() {}

titleVisuals(){}

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
