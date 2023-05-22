function displayValue() {
  var fname = loader.engine.document.getElementById(107443515).value;
  loader.engine.document.getElementById(107443516).textContent = "My First Name is: " + fname;
}


window.onclick = displayValue;
