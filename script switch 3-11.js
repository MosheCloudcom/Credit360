
function swapButtons() {
var buttons = document.getElementsByTagName("button");

  // Filter buttons based on the data-role attribute
  var button1, button2;
  for (var i = 0; i < buttons.length; i++) {
    var dataRole = buttons[i].getAttribute("data-role");
    if (dataRole === "previous-page") {
      button1 = buttons[i];
    } else if (dataRole === "next-page") {
      button2 = buttons[i];
    }
  }

  // Check if both buttons exist
  if (button1 && button2) {
    var nextSibling1 = button2.nextElementSibling;
    var nextSibling2 = button1.nextElementSibling;

    // Check if the next siblings exist
    if (nextSibling1 && nextSibling2) {
      nextSibling1.parentNode.insertBefore(button2, nextSibling1);
      nextSibling2.parentNode.insertBefore(button1, nextSibling2);
    }
  }
}

// Call the swapButtons function on page load
//window.onload = function() {
  //swapButtons();
//};

window.onclick = swapButtons;