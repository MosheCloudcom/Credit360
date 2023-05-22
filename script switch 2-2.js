

function swapButtons() {
	
  var button1 = document.querySelector('[data-role="previous-page"]');
  var button2 = document.querySelector('[data-role="next-page"]');
  
  

  // Check if both buttons exist
  if (button1 && button2) {
    var parent = button1.parentNode;

    var nextSibling1 = button1.nextSibling;
    var nextSibling2 = button2.nextSibling;

    // Check if the parent and next siblings exist
    if (parent && nextSibling1 && nextSibling2) {
      parent.insertBefore(button2, nextSibling1);
      parent.insertBefore(button1, nextSibling2);
    }
  }
}

// Call the swapButtons function on page load
window.onload = function() {
  swapButtons();
};