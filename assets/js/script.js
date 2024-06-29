"use strict";

// Progress bar
window.onscroll = function() {showProgress()};

function showProgress() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
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
              behavior: 'smooth'
          });
      });
  });

//Doesn't work
  const links = document.querySelectorAll('.navbar-item');
  const currentPage = window.location.pathname.split('/').pop();

  links.forEach(link => {
    console.log(link.getAttribute('href'));
      if (link.getAttribute('href') === '/'+currentPage) {
          link.classList.add('active');
      }
     
  });

});


// Hold back for HTML to be fully rendered
w3.includeHTML();

