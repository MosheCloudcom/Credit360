function changeButton() {
  var buttons = document.getElementsByTagName("button");
  var button1, button2;

  // Loop through the buttons and find the desired ones
  for (var i = 0; i < buttons.length; i++) {

//    var dataRole = buttons[i].getAttribute("data-role");

    var datatext = buttons[i].getAttribute("data-i18n-text");
    var buttonText = buttons[i].text;
	
	if (datatext === "textdef_69") {
      buttons[i].textContent = "Next Page 1";
      buttons[i].setAttribute("data-role", "next-page");
    } else if (datatext === "textdef_68") {
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




