function roundResult() {
var objtoclick = loader.engine.document.getElementById(107356600);
var result1 = loader.engine.document.getElementById(107353245).getProperty('value.value'); 
var roundedValue1 = Math.round(result1 * 1) / 1;
loader.engine.document.getElementById(107353245).setValue(({"value": roundedValue1})); 
};
objtoclick.click()
objtoclick.onclick = roundResult;
//window.onclick = roundResult;
