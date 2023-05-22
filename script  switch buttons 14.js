

function roundResult() {
var nextButton = loader.engine.document.getElementById(68);
  var prevButton = loader.engine.document.getElementById(69);
  var buttonContainer = prevButton.parent;

  buttonContainer.insertBefore(prevButton, nextButton);
};

window.onclick = roundResult;