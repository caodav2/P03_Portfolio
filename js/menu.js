var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("main_menu").style.top = "0";
  } else {
    document.getElementById("main_menu").style.top = "-5rem";

  }

  prevScrollpos = currentScrollPos;
}
//referenced code from https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
