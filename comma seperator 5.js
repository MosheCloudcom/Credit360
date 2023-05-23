function addSeparators() {
	
var number1 = loader.engine.document.getElementById(107468140).getProperty('value.value'); // - formula field or number field
var formattednumber = number1.toLocaleString('en-US');

loader.engine.document.getElementById(107448806).setValue(({"value": formattednumber})); //- short text field
};

window.onclick = addSeparators;