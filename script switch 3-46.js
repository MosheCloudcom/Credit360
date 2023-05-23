function changeButton() {
  var buttons = document.getElementsByTagName("button");
  var button1, button2;

  // Loop through the buttons and find the desired ones
  for (var i = 0; i < buttons.length; i++) {

    var dataRole = buttons[i].getAttribute("data-role");
    var datatext = buttons[i].getAttribute("data-i18n-text");
    var targetpage = buttons[i].getAttribute("data-page-target");
    var buttonType = buttons[i].getAttribute("type");
		
    var buttonText = buttons[i].text;
	
	if (datatext === "textdef_69") { // Previous button - check if Following button is Submit so it is the last page
		if (i < buttons.length && buttons[i+1].getAttribute("data-role") === "submit" ) {
			buttons[i].textContent = "Submit 1";
			buttons[i].setAttribute("data-role", "submit");
			buttons[i+1].textContent = "Last Previous";
			buttons[i+1].setAttribute("data-role", "previous-page");
		}
		else {
			buttons[i].textContent = "Next Page 1";
			buttons[i].setAttribute("data-role", "next-page");
		}
    } 
	else if (datatext === "textdef_68") { // Next - change to Previous BUT do not change first page
		if (dataRole === "next-page" && targetpage === "1") {
		}
		else {
			buttons[i].textContent = "Previous 1";
			buttons[i].setAttribute("data-role", "previous-page");
			}			
	}
	
  }
}

// Call the changeButton function on page load
//window.onloadstart = function() {
//  changeButton();
//};

window.onclick = changeButton;
//window.onchange  = changeButton;




