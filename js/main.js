/**
 * Main JavaScript for Jepo Service Website
 */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all components
  initScrollHeader();
  initScrollToTop();
  animateOnScroll();
});

/**
 * Header scroll effect
 */
function initScrollHeader() {
  const header = document.getElementById('header');
  const scrollThreshold = 50;

  function toggleHeaderClass() {
    if (window.scrollY > scrollThreshold) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  // Initial call
  toggleHeaderClass();
  
  // Add scroll event listener
  window.addEventListener('scroll', toggleHeaderClass);
}

/**
 * Scroll to top button
 */
function initScrollToTop() {
  const scrollToTopBtn = document.getElementById('scroll-to-top');
  const showThreshold = 300;

  function toggleScrollToTopBtn() {
    if (window.scrollY > showThreshold) {
      scrollToTopBtn.classList.add('visible');
    } else {
      scrollToTopBtn.classList.remove('visible');
    }
  }

  // Initial call
  toggleScrollToTopBtn();
  
  // Add scroll event listener
  window.addEventListener('scroll', toggleScrollToTopBtn);
  
  // Add click event listener
  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * Animate elements on scroll
 */
function animateOnScroll() {
  const elements = document.querySelectorAll('[data-aos]');
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const animation = el.getAttribute('data-aos');
        const delay = el.getAttribute('data-aos-delay') || 0;
        
        setTimeout(() => {
          el.classList.add(animation);
          el.classList.add('animated');
        }, delay);
        
        observer.unobserve(el);
      }
    });
  }, options);

  elements.forEach(el => {
    observer.observe(el);
  });
}

/**
 * Add data-aos attributes to elements
 */
function initAnimations() {
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach((card, index) => {
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', (index * 100).toString());
  });

  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach((item, index) => {
    item.setAttribute('data-aos', 'zoom-in');
    item.setAttribute('data-aos-delay', (index * 100).toString());
  });
}