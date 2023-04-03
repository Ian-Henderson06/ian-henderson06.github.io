// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickynavbar()};

// Get the navbar
var navbar = document.getElementsByTagName("nav")[0];

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickynavbar() {
    console.log(window.pageYOffset);
  if (window.pageYOffset > 0) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}