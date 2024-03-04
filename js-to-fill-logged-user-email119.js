// external JavaScript file (js-to-fill-logged-user-email116.js)

// Retrieve uname from local storage
var uname = localStorage.getItem('uname');

// Check if uname is not null or undefined before using it
if (uname) {
} else {
  uname = "NOT FOUND"
}

  function credit360() {
    loader.engine.document.getElementById(112191884).setValue({"value": uname});
  }
  // Attach credit360 to the window's onclick event
  window.onclick = credit360;
