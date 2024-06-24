document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.imageCont');
  const images = document.querySelectorAll('.itemImg');

  let maxHeight = 0;

  images.forEach((image) => {
    const height = image.offsetHeight;

    if (height > maxHeight) {
      maxHeight = height;
    }
  });

  container.style.height = `${maxHeight}px`;
});

document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('#prototypeImg .itemImg');

  // Named function for handling scroll with a specific rate
  let handleScrollWithRate = () => handleScroll(7000);

  function handleScroll(rate) {
    const scrollLeft = window.scrollY;

    images.forEach((image, index) => {
      const factor = (index * window.innerWidth) / rate; // Adjust this value to change the rate of movement
      image.style.transform = `translateX(${scrollLeft * factor}px)`;
    });
  }

  function checkScreenSize() {
    if (window.innerWidth > 768) { // Adjust the width threshold as needed
      // Use the named function for adding the event listener
      window.addEventListener('scroll', handleScrollWithRate);
    } else {
      // Use the same named function reference for removing
      window.removeEventListener('scroll', handleScrollWithRate);
      // Reset handleScrollWithRate for a different condition if necessary
      handleScrollWithRate = () => handleScroll(0);
    }
  }

  // Initial check
  checkScreenSize();

  // Check screen size on resize
  window.addEventListener('resize', checkScreenSize);
});


document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('#slideshow .itemImg');
  let currentIndex = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.remove('active', 'slide-in', 'slide-out');
      if (i === index) {
        img.classList.add('active', 'slide-in');
      } else if (i === currentIndex) {
        img.classList.add('slide-out');
      }
    });
    currentIndex = index;
  }

  function nextImage() {
    const nextIndex = (currentIndex + 1) % images.length;
    showImage(nextIndex);
  }

  function prevImage() {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(prevIndex);
  }

  document.getElementById('nextBtn').addEventListener('click', nextImage);
  document.getElementById('prevBtn').addEventListener('click', prevImage);

  // Automatically switch images every 3 seconds
  setInterval(nextImage, 3000);

  // Show the first image initially
  showImage(currentIndex);
});

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