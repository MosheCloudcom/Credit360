

function roundResult() {
var nextButton = loader.engine.document.getElementById(textdef_68);
  var prevButton = loader.engine.document.getElementById(textdef_69);
  var buttonContainer = prevButton.parent;

  buttonContainer.insertBefore(prevButton, nextButton);
};

window.onclick = roundResult;