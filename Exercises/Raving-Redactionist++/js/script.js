/**
Raving Redactionist
Daniel Little

A game where secret files are getting leaked the user must
redact these files once again, for once all 10 are exposed the
game is lost
*/

"use strict";

//declaring variables for text elements that are added
let $p1;
let $p2;
//declaring variable to store counter
let n;

function preload() {
  spySongSFX = loadSound(`assets/sounds/spySong.mp3`);
}

//when user clicks on text from top secret class, call redact function
$(`.top-secret`).on(`click`, redact)
//call the revelation function every half second
setInterval(revelation, 500);

//when text is revealed and it is clicked on, redact it
function redact(event) {
  $(this).removeClass(`revealed`);
  $(this).addClass(`redacted`);
}

//calls the attemptReveal function on the text with the redacted class
function revelation() {
  $(`.redacted`).each(attemptReveal);

  //
  $p1 = $(`<span></span>`);
  n = $('.revealed').length;

  //empty the counter of previous number and display current amount of leaked secrets
  $(`#counter`).empty();
  $p1.text(n);
  console.log(n);
  $(`#counter`).append($p1);

  //if all 10 secrects are leaked, display the alert and play sound effect
  if (n === 10) {
    $p2 = $(`<p></p>`);
    $(`#alert`).empty();
    $p2.text(`ALERT! ALL TOP SECRET INTEL HAS BEEN LEAKED!`);
    $(`#alert`).append($p2);
    $(`#counter`).remove();

    setInterval(function() {
      $(`#alert`).fadeOut(500);
      $(`#alert`).fadeIn(500);
    }, 1000);

  }
}

//load a random number, if it is below 0.1 then reveal a secret
function attemptReveal() {
  let r = Math.random();
  if (r < 0.1) {
    $(this).removeClass(`redacted`);
    $(this).addClass(`revealed`);
  }
}
