



document.addEventListener('DOMContentLoaded', function() {
  var nextButton = document.querySelector('.button-next');
  var prevButton = document.querySelector('.button-previous');
  var buttonContainer = nextButton.parentElement;

  buttonContainer.insertBefore(nextButton, prevButton);
});