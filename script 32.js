
function swapButtons() {
      var button1 = document.getElementById("Previous");
      var button2 = document.getElementById("NextPage");
      var parent = button1.parentNode;

      var nextSibling1 = button1.nextSibling;
      var nextSibling2 = button2.nextSibling;

      parent.insertBefore(button2, nextSibling1);
      parent.insertBefore(button1, nextSibling2);
    }

    // Call the swapButtons function on page load
    window.onload = function() {
      swapButtons();
};