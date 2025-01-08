"use strict";

// Progress bar
window.onscroll = function() {showProgress()};

function showProgress() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";

}

window.addEventListener('click',function() {
  currentPage();
});

window.addEventListener('load',function() {
  currentPage();
});


function currentPage(){


  var navlinks = document.querySelectorAll(".navbar-item");
  
  if(window.location.href.endsWith('/')){
    window.location.replace(window.location.href+"index.html");
  };

  if(window.location.href.includes('index.html')){
    navlinks[0].classList.add('active');
  };

  if(window.location.pathname.includes('project')){
    console.log("hi");
    console.log(navlinks[0].classList);
    navlinks[0].classList.add('active');
    console.log(navlinks[0].classList);

  };

  if(window.location.href.includes('about.html')){
    navlinks[1].classList.add('active');
  };
 
}


document.addEventListener('DOMContentLoaded', function() {
  const sidebarLinks = document.querySelectorAll('.sidebar-item');
  const sections = document.querySelectorAll('section');
  
  function setActiveLink() {
      let index = sections.length;

      while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
      
      sidebarLinks.forEach((link) => link.classList.remove('active'));
      sidebarLinks[index].classList.add('active');
  }

  setActiveLink();
  
  window.addEventListener('scroll', setActiveLink);

  sidebarLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            block: 'start',
            behavior: 'smooth'
          });
      });
  });



});



// Hold back for HTML to be fully rendered
w3.includeHTML();

