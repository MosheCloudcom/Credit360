// external JavaScript file (js-to-fill-logged-user-email116.js)

// Retrieve uname from local storage
var uname = localStorage.getItem('uname');

// Check if uname is not null or undefined before using it
if (uname) {
  console.log('Retrieved uname from local storage:', uname);

  // Define the credit360 function using uname
  function credit360() {
    loader.engine.document.getElementById(112191884).setValue({"value": uname});
  }

  // Attach credit360 to the window's onclick event
  window.onclick = credit360;
} else {
  console.log('uname not found in local storage');
  loader.engine.document.getElementById(112191884).setValue({"value": "NOT FOUND"});
  // Attach credit360 to the window's onclick event
  window.onclick = credit360;

}
