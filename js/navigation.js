/**
 * Navigation JavaScript for Jepo Service Website
 */

document.addEventListener('DOMContentLoaded', function() {
  initMobileNavigation();
  initSmoothScrolling();
  highlightActiveNavItem();
});

/**
 * Mobile navigation toggle
 */
function initMobileNavigation() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu a');
  
  // Toggle menu on hamburger click
  mobileMenuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });
  
  // Close menu when clicking on a link
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenuToggle.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    const isClickInsideNav = navMenu.contains(event.target);
    const isClickOnToggle = mobileMenuToggle.contains(event.target);
    
    if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
      mobileMenuToggle.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  });
}

/**
 * Smooth scrolling for navigation links
 */
function initSmoothScrolling() {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Highlight active navigation item based on scroll position
 */
function highlightActiveNavItem() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu a');
  
  function updateActiveLink() {
    const scrollPosition = window.scrollY;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  
  // Initial call
  updateActiveLink();
  
  // Add scroll event listener
  window.addEventListener('scroll', updateActiveLink);
}