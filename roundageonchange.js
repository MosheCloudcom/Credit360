function roundResult() {
var result1 = loader.engine.document.getElementById(107353245).getProperty('value.value'); 
var roundedValue1 = Math.round(result1 * 1) / 1;
loader.engine.document.getElementById(107353245).setValue(({"value": roundedValue1})); 
};

window.onchange = roundResult;