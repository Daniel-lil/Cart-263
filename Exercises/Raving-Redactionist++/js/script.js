/**
Raving Redactionist
Daniel Little

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

// Code goes here

$(`.top-secret`).on(`click`, redact)
setInterval(revelation, 500);

function redact(event) {
  $(this).removeClass(`revealed`);
  $(this).addClass(`redacted`)
}

function revelation() {
  $(`.redacted`).each(attemptReveal);
}

function attemptReveal() {
  let r = Math.random();
  if (r < 0.1) {
    $(this).removeClass(`redacted`);
    $(this).addClass(`revealed`);
  }
}
