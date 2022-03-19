/**
Code Taker
Daniel Little

the user must act as batman to solve the riddlers riddle
they must do this by mousing over word to find letters
these letters are then dragged into a box where they are submitted

Uses:

jQuery
https://jquery.com

jQuery UI:
https://jqueryui.com
*/

"use strict";

let audioElement = new Audio(`assets/sounds/bell_ding.mp3`);

//turns dialod div into dialod
$(`#solved-dialog`).dialog({
  //dont open immediately
  autoOpen: false,
  //sets button
  buttons: {
    "It's Over Riddler.": function() {
      $(this).dialog(`close`);
    }
  }
});

// When the user mouses over secret letters, underline them
$(`.secret`).one(`mouseover`, function(event) {
  $(this).addClass(`found`, 500);
  // Let the user drag secret letters via a clone helper
  $(this).draggable({
    helper: `clone`
  });
});

//when user drops letter on answer box
$(`#answer`).droppable({
  drop: function(event, ui) {
    // Get the letter in the dragged element
    let letter1 = ui.draggable.text();
    // Add it to the answer box
    $(this).append(letter1);
    // Disable dragging for this letter
    ui.draggable.draggable(`disable`);
    // Remove the highlighting of this letter
    ui.draggable.remove(`found`);
    //checks if answer is correct
    if ($(this).text() === `tomORrow` || $(this).text() === `tOmoRrow` || $(this).text() === `tomoRrOw` || $(this).text() === `tomOrRow` || $(this).text() === `tOmorRow` || $(this).text() === `tomorROw`) {
      //if its correct display dialog box and play bell dinging sfx
      $(`#solved-dialog`).dialog(`open`);
      audioElement.play();
    }
  }
});
