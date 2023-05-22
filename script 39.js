function displayValue() {
  var fname = loader.engine.document.getElementById(107443515).getProperty('value.value');
  var outputElement = loader.engine.document.getElementById(107448806);
  while (outputElement.firstChild) {
    outputElement.removeChild(outputElement.firstChild);
  }
  outputElement.appendChild(document.createTextNode("My First Name is: " + fname));
};

window.onclick = displayValue;
