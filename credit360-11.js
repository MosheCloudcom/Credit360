// 1. Read the native prefilled value from the field immediately on load before any clicks occur
var savedMetafelValue = "";
setTimeout(function() {
  try {
    savedMetafelValue = loader.engine.document.getElementById(108685524).getProperty('value.value') || "";
  } catch(e) {
    console.error("Could not read initial prefill value:", e);
  }
}, 500); // 500ms delay gives the engine time to process the URL prefill

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
  // 2. Continually force the saved value back into the field on every click
  if (savedMetafelValue) {
    try {
      loader.engine.document.getElementById(108685524).setValue(({"value": savedMetafelValue}));
    } catch (e) {
      // Suppress errors if the field is currently hidden/unrendered
    }
  }
}

window.onclick = function() {
  credit360();
  getReferrer();
};