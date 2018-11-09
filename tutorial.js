//JS Borrowed from W3schools
// When the user scrolls the page, execute myFunction
//window.onscroll = function() {myFunction()};

// Get the header
var numberNav = document.getElementById("numberNav");

// Get the offset position of the navbar
var sticky = numberNav.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    numberNav.classList.add("sticky");
  } else {
    numberNav.classList.remove("sticky");
  }
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("#myBar").style.width = scrolled + "%";
};
