

function roundResult() {
var nextButton = document.querySelector('.textdef_68');
  var prevButton = document.querySelector('.textdef_69');
  var buttonContainer = prevButton.parent;

  buttonContainer.insertBefore(prevButton, nextButton);
};

window.onclick = roundResult;