var firstNameInput = document.querySelector('#text-00000012');

var firstNameLabel = document.querySelector('#text-0000001e');

firstNameInput.addEventListener('input', function() {
  // Update the label text with the entered value
  firstNameLabel.value =  firstNameInput.value;
});