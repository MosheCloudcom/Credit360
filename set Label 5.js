function changlelabel () {
var firstname = loader.engine.document.getElementById(107473861).getProperty('value.value'); 
var familyname = loader.engine.document.getElementById(107473862).getProperty('value.value'); 
var fullname = firstname + "Anisman111";

loader.engine.document.getElementById(107473897).setValue(({"value": fullname})); 
};

window.onclick = changlelabel;