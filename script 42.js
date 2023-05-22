
function displayValue() {
  var fname = loader.engine.document.getElementById(107443515).getProperty('value.value');
  var outputElements = loader.engine.document.getElementsByClassName("output");
  
  for (var i = 0; i < outputElements.length; i++) {
    var outputElement = outputElements[i];
    while (outputElement.firstChild) {
      outputElement.removeChild(outputElement.firstChild);
    }
    var textNode = document.createTextNode("My First Name is: " + fname);
    outputElement.appendChild(textNode);
  }
}
window.onclick = displayValue;
