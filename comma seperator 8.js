function addSeparators() {
	
var number1 = loader.engine.document.getElementById(107468140);
var numbertoupdate = loader.engine.document.getElementById(107448806);

var number1value = number1.getProperty('value.value'); // - formula field or number field
var formattednumber = number1.toLocaleString('en-US');

numbertoupdate.setValue(({"value": formattednumber})); //- short text field

number1.setValue(({"value": formattednumber})); //- short text field

};


window.onclick = addSeparators;