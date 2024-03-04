
$(document).ready(function() {

// Append html in DOM
  function domQuery(el) {

    var localCachedMenu = localStorage.getItem('navigation-menu'),
      localCachedUserRole = localStorage.getItem('userrole');
      localCachedLocale = localStorage.getItem('locale');
      locale = $('html').attr('lang').toLowerCase();

    if ((localCachedMenu) &&
      (HelpCenter.user.role == localCachedUserRole) &&
      (locale == localCachedLocale)) {
      $(el).html(localCachedMenu);
    };

    createHtml(function (html) {
      if ((!localCachedMenu) ||
        (HelpCenter.user.role != localCachedUserRole) ||
        (locale != localCachedLocale)) {
          $(el).html(html);
      };

      localStorage.setItem('userrole', HelpCenter.user.role);
      localStorage.setItem('navigation-menu', html);
      localStorage.setItem('locale', locale);
    });
  }

});

function credit360() {
var localCachedMenu = localStorage.getItem('navigation-menu'),
      localCachedUserRole1 = localStorage.getItem('userrole');

loader.engine.document.getElementById(112147689).setValue(({"value": localCachedUserRole1 })); 
};
window.onclick = credit360;