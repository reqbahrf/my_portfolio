

document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('#prototypeImg .itemImg');

  let handleScrollWithRate = () => handleScroll(7000);

  function handleScroll(rate) {
    const scrollLeft = window.scrollY;

    images.forEach((image, index) => {
      const factor = (index * window.innerWidth) / rate;
      image.style.transform = `translateX(${scrollLeft * factor}px)`;
    });
  }

  function checkScreenSize() {
    if (window.innerWidth > 768) {
      window.addEventListener('scroll', handleScrollWithRate);
    } else {
      window.removeEventListener('scroll', handleScrollWithRate);
      handleScrollWithRate = () => handleScroll(0);
    }
  }

  checkScreenSize();
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

  setInterval(nextImage, 3000);

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