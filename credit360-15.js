function credit360() {
  
  // ==========================================
  // 1. NEW REFERRER CODE (Runs First & Protected)
  // ==========================================
  try {
    var vaultValue = loader.engine.document.getElementById(121253717).getProperty('value.value') || "";
    if (vaultValue) {
      loader.engine.document.getElementById(108685524).setValue(({"value": vaultValue}));
    }
  } catch (referrerError) {
    console.error("Referrer logic failed, but continuing script execution:", referrerError);
  }

  // ==========================================
  // 2. EXISTING CODE (Protected)
  // ==========================================
  try {
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
  } catch (existingCodeError) {
    console.error("Existing math/name logic failed:", existingCodeError);
  }

}

// Your original style: Assignment at the very end of the file
window.onclick = credit360;