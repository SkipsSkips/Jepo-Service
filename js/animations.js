/**
 * Animations JavaScript for Jepo Service Website
 */

document.addEventListener('DOMContentLoaded', function() {
  initElementAnimations();
});

/**
 * Initialize element animations
 */
function initElementAnimations() {
  // Add animation classes to elements with data-aos attributes
  const animatedElements = document.querySelectorAll('[data-aos]');
  
  // Configure the observer
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const animationName = element.getAttribute('data-aos');
        const delay = element.getAttribute('data-aos-delay') || 0;
        
        // Add animation class with delay
        setTimeout(() => {
          element.classList.add(animationName);
        }, delay);
        
        // Stop observing the element
        observer.unobserve(element);
      }
    });
  }, observerOptions);
  
  // Start observing elements
  animatedElements.forEach(element => {
    observer.observe(element);
  });
  
  // Add animation classes to specific elements
  addServiceCardAnimations();
  addGalleryItemAnimations();
}

/**
 * Add animations to service cards
 */
function addServiceCardAnimations() {
  const serviceCards = document.querySelectorAll('.service-card');
  
  serviceCards.forEach((card, index) => {
    // Add animation attributes if not already present
    if (!card.hasAttribute('data-aos')) {
      card.setAttribute('data-aos', 'fade-up');
      card.setAttribute('data-aos-delay', (index * 100).toString());
    }
  });
}

/**
 * Add animations to gallery items
 */
function addGalleryItemAnimations() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  galleryItems.forEach((item, index) => {
    // Add animation attributes if not already present
    if (!item.hasAttribute('data-aos')) {
      item.setAttribute('data-aos', 'zoom-in');
      item.setAttribute('data-aos-delay', (index * 100).toString());
    }
  });
}