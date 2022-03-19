/**
Code Taker
Daniel Little

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

$(`#solved-dialog`).dialog({
  autoOpen: false,
  buttons: {
    "I Know.": function() {
      $(this).dialog(`close`);
    }
  }
});

$(`.secret`).one(`mouseover`, function(event){
  $(this).addClass(`found`, 500);
  $(this).draggable({
    helper: `clone`
  });
});

$(`#answer`).droppable({
  drop: function(event, ui) {
    let letter = ui.draggable.text();
    $(this).append(letter);
    ui.draggable.draggable(`disable`);
    ui.draggable.remove(`found`);
    //checks if answer is corrects
    if ($(this).text() === `tomORrow` || $(this).text() === `tOmoRrow` || $(this).text() === `tomoRrOw` || $(this).text() === `tomOrRow` || $(this).text() === `tOmorRow` || $(this).text() === `tomorROw`) {
      $(`solved-dialog`).dialog(`open`);
    }
  }
});
