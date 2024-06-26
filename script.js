
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
  // Function to open modal
  function openModal(buttonId, modalId) {
    const button = document.getElementById(buttonId);
    const modal = document.getElementById(modalId);

    // Calculate button's position and set transform-origin
    const buttonRect = button.getBoundingClientRect();
    const buttonCenterX = buttonRect.left + buttonRect.width / 2;
    const buttonCenterY = buttonRect.top + buttonRect.height / 2;
    modal.style.transformOrigin = `${buttonCenterX}px ${buttonCenterY}px`;

    // Toggle modal visibility and body scroll
    modal.classList.toggle('show-modal');
    document.body.classList.toggle('no-scroll');
  }

  // Function to close modal
  function closeModal(modal) {
    modal.classList.remove('show-modal');
    document.body.classList.remove('no-scroll');
  }

  // Attach event listeners to buttons
  const modalButtons = document.querySelectorAll('[data-modal-target]');
  modalButtons.forEach(button => {
    button.addEventListener('click', function(event) {
      const modalId = button.getAttribute('data-modal-target');
      openModal(button.id, modalId);
    });
  });

  // Attach event listener for closing modals
  document.querySelectorAll('.close-button').forEach(button => {
    button.addEventListener('click', function(event) {
      const modal = button.closest('.modal');
      closeModal(modal);
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const javaProjectModal = document.getElementById('JavaProjectModal');
  const toggle = 'is-sticky';

  javaProjectModal.addEventListener('scroll', function() {
    const currentScroll = javaProjectModal.scrollTop;
    console.log('Current scroll position:', currentScroll);

    if (currentScroll > 0) {
      javaProjectModal.classList.add(toggle);
    } else {
      javaProjectModal.classList.remove(toggle);
    }
  });
});


