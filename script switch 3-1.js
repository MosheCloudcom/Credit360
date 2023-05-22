
function swapButtons() {
  var buttons = document.getElementsByClassName("button");

  // Filter buttons based on the data-role attribute
  var button1, button2;
  for (var i = 0; i < buttons.length; i++) {
    var dataRole = buttons[i].getAttribute("data-role");
    if (dataRole === "Previous") {
      button1 = buttons[i];
    } else if (dataRole === "NextPage") {
      button2 = buttons[i];
    }
  }

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