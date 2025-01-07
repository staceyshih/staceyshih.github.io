"use strict";

// Progress bar
window.onscroll = function() {showProgress()};

function showProgress() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";

}

window.onload = function(){currentPage()};
//can't show correctly, mightbe the trigger problem

// document.getElementById("navbar-list").addEventListener('click',function() {});

window.addEventListener('click',function() {
  currentPage();
  console.log("");
});

function currentPage(){
  const navlinks = document.querySelectorAll(".navbar-item");
  const windowPathname = window.location.pathname;
  
  navlinks.forEach(navlink=>{
    if(navlink.href.includes(windowPathname)){
      navlink.classList.add('active');
    }
  });

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

