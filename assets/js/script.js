// Reveal animation on scroll (CSP-safe version)
function reveal() {
  var reveals = document.querySelectorAll('.reveal');
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 150;
    
    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    }
  }
}

// Run on scroll
window.addEventListener('scroll', reveal);
// Run on load
window.addEventListener('load', reveal);