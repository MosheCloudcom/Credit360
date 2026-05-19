// 1. Read the raw data structure directly from the form engine on load
var savedMetafelValue = "";
setTimeout(function() {
  try {
    // Accessing the engine data store directly bypasses hidden/visible state checks
    var fieldState = loader.engine.getComponentById(108685524);
    if (fieldState) {
      savedMetafelValue = fieldState.getProperty('value.value') || "";
    }
  } catch(e) {
    console.error("Could not read initial prefill value from engine state:", e);
  }
}, 500);

function credit360() {
  var result1 = loader.engine.document.getElementById(107353245).getProperty('value.value'); 
  var roundedValue1 = Math.round(result1 * 1) / 1;
  loader.engine.document.getElementById(107363803).setValue(({"value": roundedValue1})); 

  var result2 = loader.engine.document.getElementById(107360180).getProperty('value.value'); 
  var roundedValue2 = Math.round(result2 * 1) / 1;
  loader.engine.document.getElementById(107363830).setValue(({"value": roundedValue2})); 

  var firstname = loader.engine.document.getElementById(107375878).getProperty('value.value'); 
  var familyname = loader.engine.document.getElementById(107375862).getProperty('value.value'); 
  var fullname = firstname + " " + familyname;

  var firstname2 = loader.engine.document.getElementById(107376151).getProperty('value.value'); 
  var familyname2 = loader.engine.document.getElementById(107376152).getProperty('value.value'); 
  var fullname2 = firstname2 + " " + familyname2;

  loader.engine.document.getElementById(107474091).setValue(({"value": fullname})); 
  loader.engine.document.getElementById(107474274).setValue(({"value": fullname2})); 
}

function getReferrer() {
  // 2. Force injection back into the field elements when visible on click
  if (savedMetafelValue) {
    try {
      loader.engine.document.getElementById(108685524).setValue(({"value": savedMetafelValue}));
    } catch (e) {
      // Suppress errors if the checkbox is turned off and the element doesn't exist
    }
  }
}

window.onclick = function() {
  credit360();
  getReferrer();
};