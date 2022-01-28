// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  let intViewportHeight = window.innerHeight - 100;
  if (document.body.scrollTop > intViewportHeight || document.documentElement.scrollTop > intViewportHeight) {
    document.getElementById("logo").style.height = "60px";
    document.getElementById("main_nav").style.margin = "10px 0 0 0";
    document.getElementById("book_button").style.margin = "10px 20px 0 0";
    document.getElementById("nav").style.background = "rgba(0, 0, 0, 1)";
  } else {
    document.getElementById("logo").style.height = "100px";
    document.getElementById("main_nav").style.margin = "28px 0 0 0";
    document.getElementById("book_button").style.margin = "28px 20px 0 0";
    document.getElementById("nav").style.background = "rgba(0, 0, 0, 0.3)";
  }
}
