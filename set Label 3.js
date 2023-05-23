function roundResult() {
var firstname = loader.engine.document.getElementById(107376151).getProperty('value.value'); 
var familyname = loader.engine.document.getElementById(107376152).getProperty('value.value'); 

loader.engine.document.getElementById(107456700).setValue(({"value": firstname + " " + familyname})); 
};









window.onclick = roundResult;