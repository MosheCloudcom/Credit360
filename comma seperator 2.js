function addSeparators() {
var number1 = loader.engine.document.getElementById(107468180).getProperty('value.value'); // - formula field or number field
loader.engine.document.getElementById(107448806).setValue(({"value": number1.toLocaleString('en-US')})); //- short text field
};
window.onclick = addSeparators;