"use strict";

// Progress bar
window.onscroll = function() {showProgress()};

function showProgress() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
}

// Doesnt work!

var object = document.querySelector(".navbar");

function hideNavbar() {
  const threshold = 5;
  if (window.scrollY > threshold) {
    object.classList.add('move');
  } else {
    object.classList.remove('move');
  }
}
// window.addEventListener('scroll', debounce(earthmove, 5));


function getContent() {

  // Doesnt work!
  var current = location.pathname;
  current = current.replace("/", "");
  current = current.replace(".html", "");

  const navigationLinks = document.querySelectorAll("[data-nav-link]");


  for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function () {

      for (let i = 0; i < navigationLinks.length; i++) {
          if(navigationLinks[i].innerHTML.toLowerCase()===current){
            navigationLinks[i].classList.add("active");
          }
          else{
            navigationLinks[i].classList.remove("active");
          }
        }
  
    });
  }

}




// Hold back for HTML to be fully rendered
w3.includeHTML();

