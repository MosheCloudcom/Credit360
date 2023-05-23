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
	var FollowingbuttondataRole;
	
	if (i+1 === buttons.length) {
		FollowingbuttondataRole = "gibrish"
	}
	else {
		FollowingbuttondataRole = buttons[i+1].getAttribute("data-role");;
	}

	if (datatext === "textdef_69") { // Previous button - check if Following button is Submit 
		if (FollowingbuttondataRole === "submit" ) {
			buttons[i].textContent = "Submit 1";
			buttons[i].setAttribute("data-role", "submit");
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
	else if ( dataRole === "submit" && buttonType === "submit") { // Submit button - change to Previous BUT do not change first page
			buttons[i].textContent = "Previous 1";
			buttons[i].setAttribute("data-role", "previous-page");
	}
	
  }
}

// Call the changeButton function on page load
//window.onloadstart = function() {
//  changeButton();
//};

window.onclick = changeButton;
//window.onchange  = changeButton;




