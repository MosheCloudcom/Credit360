function changeButton() {
  var buttons = document.getElementsByTagName("button");
  var button1, button2;

  // Loop through the buttons and find the desired ones
  for (var i = 0; i < buttons.length; i++) {

    var dataRole = buttons[i].getAttribute("data-role");
	
	if (dataRole === "previous-page") {
      button1 = buttons[i];
    } else if (dataRole === "next-page") {
      button2 = buttons[i];
    }
  }

  if (button1 && button2) {
      button2.textContent = "New PREVIOUS Page Button Text";
      button2.setAttribute("data-role", "previous-page");
	  
      button1.textContent = "New NEXT Button Text";
      button1.setAttribute("data-role", "next-page");

  }
  
 
}

// Call the changeButton function on page load
//window.onloadstart = function() {
//  changeButton();
//};

window.onclick = changeButton;
//window.onchange  = changeButton;




