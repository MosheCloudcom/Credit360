
function roundResult() {
 var firstNameInput = loader.engine.document.getElementById(107443515);
  // var firstNameLabel = document.querySelector('label[for=107443516] + span');

  firstNameInput.addEventListener('input', function() {
    firstNameInput.textContent = 'My First Name is: ' + firstNameInput.value;
  });

};

window.onclick = roundResult;



//document.addEventListener('DOMContentLoaded', function() {
//  var nextButton = document.querySelector('.button-next');
//  var prevButton = document.querySelector('.button-previous');
//  var buttonContainer = nextButton.parentElement;

//  buttonContainer.insertBefore(nextButton, prevButton);
//});