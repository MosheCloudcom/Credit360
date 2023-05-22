

function roundResult() {
var nextButton = loader.engine.document.getElementById(107443515); //document.querySelector('.button-next');
  var prevButton = loader.engine.document.getElementById(107443516); //document.querySelector('.button-previous');
  var buttonContainer = nextButton.parentElement;

  buttonContainer.insertBefore(nextButton, prevButton);
};

window.onclick = roundResult;