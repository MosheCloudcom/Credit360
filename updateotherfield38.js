function roundResult() {
var result1 = loader.engine.document.getElementById(107353245).getProperty('value.value'); 
var roundedValue1 = Math.round(result1 * 1) / 1;
loader.engine.document.getElementById(107363803).setValue(({"value": roundedValue1})); 

var result2 = loader.engine.document.getElementById(107360180).getProperty('value.value'); 
var roundedValue2 = Math.round(result2 * 1) / 1;
loader.engine.document.getElementById(107363830).setValue(({"value": roundedValue2})); 

var result3 = loader.engine.document.getElementById(107375878).getProperty('value.value'); 

loader.engine.document.getElementById(107428904).value= "FFFF"; 

};

function changlelabel () {
var firstname = loader.engine.document.getElementById(107376151).getProperty('value.value'); 
var familyname = loader.engine.document.getElementById(107376152).getProperty('value.value'); 

loader.engine.document.getElementById(107456700).setValue(({"value": firstname + " " + familyname})); 
};

window.onclick = changlelabel;
window.onclick = roundResult;