/**
 * Testimonials JavaScript for Jepo Service Website
 */

document.addEventListener('DOMContentLoaded', function() {
  initTestimonialSlider();
});

/**
 * Testimonial slider functionality
 */
function initTestimonialSlider() {
  const testimonialItems = document.querySelectorAll('.testimonial-item');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.testimonial-prev');
  const nextBtn = document.querySelector('.testimonial-next');
  let currentIndex = 0;
  
  // Auto slide interval in milliseconds
  const autoSlideInterval = 5000;
  let autoSlideTimer;
  
  // Show testimonial at the given index
  function showTestimonial(index) {
    // Reset current active classes
    testimonialItems.forEach(item => item.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Set new active classes
    testimonialItems[index].classList.add('active');
    dots[index].classList.add('active');
    
    // Update current index
    currentIndex = index;
  }
  
  // Next testimonial
  function nextTestimonial() {
    let newIndex = currentIndex + 1;
    if (newIndex >= testimonialItems.length) {
      newIndex = 0;
    }
    showTestimonial(newIndex);
  }
  
  // Previous testimonial
  function prevTestimonial() {
    let newIndex = currentIndex - 1;
    if (newIndex < 0) {
      newIndex = testimonialItems.length - 1;
    }
    showTestimonial(newIndex);
  }
  
  // Start auto slide
  function startAutoSlide() {
    stopAutoSlide();
    autoSlideTimer = setInterval(nextTestimonial, autoSlideInterval);
  }
  
  // Stop auto slide
  function stopAutoSlide() {
    if (autoSlideTimer) {
      clearInterval(autoSlideTimer);
    }
  }
  
  // Event listeners for dots
  dots.forEach(dot => {
    dot.addEventListener('click', function() {
      const index = parseInt(this.getAttribute('data-index'));
      showTestimonial(index);
      stopAutoSlide();
      startAutoSlide();
    });
  });
  
  // Event listeners for prev/next buttons
  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      prevTestimonial();
      stopAutoSlide();
      startAutoSlide();
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      nextTestimonial();
      stopAutoSlide();
      startAutoSlide();
    });
  }
  
  // Pause auto slide on hover
  const testimonialSlider = document.querySelector('.testimonials-slider');
  if (testimonialSlider) {
    testimonialSlider.addEventListener('mouseenter', stopAutoSlide);
    testimonialSlider.addEventListener('mouseleave', startAutoSlide);
  }
  
  // Start the auto slide
  startAutoSlide();
}