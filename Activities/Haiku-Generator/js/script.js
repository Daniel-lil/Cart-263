/**
Haiku Generator
Daniel Little

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

//creating an array of Haiku Titles
let titles = [
  `One Long Night`,
  `What Does The Future Hold`,
  `Infinite Dreams`,
  `Cold Embrace`,
  `Flow`,
  `Mirage`
];

//creating an array of 5 syllable phrases for haiku
let fiveSyllableLines = [
  `The sky is falling`,
  `Flowing like water`,
  `Living cluelessly`,
  `Sleeping in the snow`,
  `They have come to live`,
  `What is in the egg`
];

//creating an array of 7 syllable phrases for haiku
let sevenSyllableLines = [
  `Lightning, flashing bright and quick`,
  `Don't stray too far from the path`,
  `The cold rain drips from above`,
  `There was once something inside`,
  `You must do all that you can`,
  `Knowledge comes with a great price`
];

//storing the randomly picked haiku lines in variables
let title = random(titles);
let line1 = random(fiveSyllableLines);
let line2 = random(sevenSyllableLines);
let line3 = random(fiveSyllableLines);

//declaring variables for different parts of the text to be interacted with
let titleP = document.getElementById(`title`)
let line1P = document.getElementById(`line-1`)
let line2P = document.getElementById(`line-2`)
let line3P = document.getElementById(`line-3`)
let button = document.getElementById(`readTextButton`);

//
titleP.innerText = title;
line1P.innerText = line1;
line2P.innerText = line2;
line3P.innerText = line3;

titleP.addEventListener(`click`, lineClicked);
line1P.addEventListener(`click`, lineClicked);
line2P.addEventListener(`click`, lineClicked);
line3P.addEventListener(`click`, lineClicked);

button.addEventListener(`click`, readText);


  let textColourPicker = document.getElementById(`textColourPicker`);
  textColourPicker.addEventListener(`change`, function(){
    let textColour = textColourPicker.value;
    document.body.style['color'] = textColour;
    console.log(textColour);
  });

  let backgroundColourPicker = document.getElementById(`backgroundColourPicker`);
  backgroundColourPicker.addEventListener(`change`, function(){
    let backgroundColour = backgroundColourPicker.value;
    document.body.style['background-color'] = backgroundColour;
    console.log(backgroundColour);
  });

function lineClicked(event) {
  fadeOut(event.target, 1);
}

function fadeOut(element, opacity) {
  opacity -= 0.015
  element.style[`opacity`] = opacity;
  if (opacity > 0) {
    requestAnimationFrame(function() {
      fadeOut(element, opacity);
    });
  }
  else {
    setNewLine(element);
    fadeIn(element, opacity);
  }
}

function fadeIn(element, opacity) {
  opacity += 0.015
  element.style[`opacity`] = opacity;
  if(opacity < 1) {
    requestAnimationFrame(function() {
      fadeIn(element, opacity);
    });
  }
}


function setNewLine(element) {
  if (element === line1P) {
    element.innerText = random(fiveSyllableLines);
  } else if (element === line3P) {
    element.innerText = random(fiveSyllableLines);
  } else if (element === line2P) {
    element.innerText = random(sevenSyllableLines);
  }
}

function readText(element){
  responsiveVoice.speak(`${line1P.innerText}, ${line2P.innerText}, ${line3P.innerText}`, `US English Male`, {
    pitch:.7,
    rate:.6
  });
};

function random(array){
  let index = Math.floor(Math.random() * array.length);
  return array[index];
}
