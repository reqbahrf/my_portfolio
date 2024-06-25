
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