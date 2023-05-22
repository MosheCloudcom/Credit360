

function swapButtons() {
  var button1 = loader.engine.document.getElementById("Previous");
  var button2 = loader.engine.document.getElementById("NextPage");

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