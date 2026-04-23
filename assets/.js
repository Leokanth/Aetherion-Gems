// Aetherion Gems - Safe JavaScript (no eval)
(function() {
  // Reveal animation on scroll
  function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    var windowHeight = window.innerHeight;
    var revealPoint = 150;
    
    for (var i = 0; i < reveals.length; i++) {
      var revealTop = reveals[i].getBoundingClientRect().top;
      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add('active');
      }
    }
  }
  
  // Run reveal on scroll and load
  if (window.addEventListener) {
    window.addEventListener('scroll', reveal);
    window.addEventListener('load', reveal);
    window.addEventListener('resize', reveal);
  }
  
  // Run immediately
  reveal();
  
  // Smooth scroll for navigation links
  var navLinks = document.querySelectorAll('.nav a');
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function(e) {
      var href = this.getAttribute('href');
      if (href.indexOf('#') === 0) {
        e.preventDefault();
        var targetId = href.substring(1);
        var targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    });
  }
})();