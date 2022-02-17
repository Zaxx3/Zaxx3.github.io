
    
let lastKnowScrollPosition = 0;
const button = document.getElementById("scrollToTop");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
   button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}



function toTop(){
    document.documentElement.scrollTop = 0;
};


$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});