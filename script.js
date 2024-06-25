
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('burger-menu').addEventListener('click', function() {
    let navLinks = document.getElementById('nav-links');
    if (navLinks.style.display === 'flex') {
      navLinks.style.display = 'none';
    } else {
      navLinks.style.display = 'flex';
    }
  });

});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('viewJavaProject').addEventListener('click', function(event) {
    const modal = document.getElementById('javaProjectModal');
    const button = event.currentTarget;

    // Calculate button's position
    const buttonRect = button.getBoundingClientRect();
    const buttonCenterX = buttonRect.left + buttonRect.width / 2;
    const buttonCenterY = buttonRect.top + buttonRect.height / 2;

    // Set transform-origin to button's center
    modal.style.transformOrigin = `${buttonCenterX}px ${buttonCenterY}px`;

    // Toggle modal visibility and body scroll
    modal.classList.toggle('show-modal');
    document.body.classList.toggle('no-scroll');
    
    // Close modal when the close button is clicked
    document.querySelector('.close-button').addEventListener('click', function() {
      modal.classList.remove('show-modal');
      document.body.classList.remove('no-scroll');
    });
  });
});




