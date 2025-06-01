/**
 * Booking JavaScript for Jepo Service Website
 */

document.addEventListener('DOMContentLoaded', function() {
  initBookingForm();
});

/**
 * Booking form functionality
 */
function initBookingForm() {
  const bookingForm = document.getElementById('booking-form');
  const confirmationModal = document.getElementById('booking-confirmation');
  const closeConfirmationBtn = document.querySelector('.close-confirmation');
  
  if (!bookingForm) return;
  
  // Handle form submission
  bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(bookingForm);
    const bookingData = {};
    
    for (const [key, value] of formData.entries()) {
      bookingData[key] = value;
    }
    
    // Validate form data
    if (!validateBookingForm(bookingData)) {
      return false;
    }
    
    // In a real implementation, we would send the data to a server
    // For this demo, we'll just simulate a successful submission
    simulateFormSubmission(bookingData);
  });
  
  // Close confirmation modal
  if (closeConfirmationBtn) {
    closeConfirmationBtn.addEventListener('click', function() {
      confirmationModal.classList.remove('show');
    });
  }
  
  /**
   * Validate booking form data
   */
  function validateBookingForm(data) {
    // Simple validation
    if (!data.name || data.name.trim() === '') {
      showError('Vă rugăm să introduceți numele și prenumele.');
      return false;
    }
    
    if (!data.phone || data.phone.trim() === '') {
      showError('Vă rugăm să introduceți numărul de telefon.');
      return false;
    }
    
    if (!data.email || !isValidEmail(data.email)) {
      showError('Vă rugăm să introduceți o adresă de email validă.');
      return false;
    }
    
    if (!data.car || data.car.trim() === '') {
      showError('Vă rugăm să introduceți marca și modelul mașinii.');
      return false;
    }
    
    if (!data.service || data.service === '') {
      showError('Vă rugăm să selectați tipul de service.');
      return false;
    }
    
    if (!data.date) {
      showError('Vă rugăm să selectați data dorită.');
      return false;
    }
    
    if (!data.time || data.time === '') {
      showError('Vă rugăm să selectați ora aproximativă.');
      return false;
    }
    
    return true;
  }
  
  /**
   * Check if email is valid
   */
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  /**
   * Show error message
   */
  function showError(message) {
    alert(message);
  }
  
  /**
   * Simulate form submission
   */
  function simulateFormSubmission(data) {
    // Simulate server request with a timeout
    const loadingBtn = bookingForm.querySelector('button[type="submit"]');
    const originalBtnText = loadingBtn.textContent;
    
    // Show loading state
    loadingBtn.textContent = 'Se trimite...';
    loadingBtn.disabled = true;
    
    // Simulate server request
    setTimeout(function() {
      // Reset form
      bookingForm.reset();
      
      // Reset button
      loadingBtn.textContent = originalBtnText;
      loadingBtn.disabled = false;
      
      // Show confirmation
      confirmationModal.classList.add('show');
      
      // Log the data (would be sent to server in real implementation)
      console.log('Booking data:', data);
    }, 1500);
  }
}