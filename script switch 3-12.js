
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
   
  button1.setAttribute("data-role", "next-page");
  button2.setAttribute("data-role", "previous-page");
  
}

// Call the swapButtons function on page load
window.onload = swapButtons();

//window.onclick = swapButtons;